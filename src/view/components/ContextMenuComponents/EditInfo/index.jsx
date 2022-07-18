// Core
import { useFormik } from 'formik';
import * as Yup from 'yup';

// Hooks
import { useOption } from '../../../../tools';

// Styles
import { EditInfoWrapper } from './styles';

export const EditInfo = () => {
    const { task, toggleEditInfoModalActive, resetCurrentTask, changeTaskInfo } = useOption();

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .when('changeName', {
                is: (changeName) => changeName,
                then: Yup.string()
                    .min(2, 'Too short!')
                    .max(10, 'Too long!')
                    .required('Required!')
            })
            .when('changeDesc', {
                is: (changeDesc) => !changeDesc,
                then: Yup.string()
                    .test('name', 'Nothing changed!', (name) => formik.values.changeDesc || formik.values.changeName)
            }),
        description: Yup.string()
            .when('changeDesc', {
                is: (changeDesc) => changeDesc,
                then: Yup.string()
                    .min(2, 'Too short!')
                    .max(50, 'Too long!')
                    .required('Required!')
            })
            .when('changeName', {
                is: (changeName) => !changeName,
                then: Yup.string()
                    .test('desc', 'Nothing changed!', (desc) => formik.values.changeDesc || formik.values.changeName)
            })
    })

    const formik = useFormik({
        initialValues: {
            name: '',
            changeName: false,
            description: '',
            changeDesc: false,
        },
        validationSchema,
        onSubmit: (values) => {
            changeTaskInfo({...task, name: values.name ? values.name : task.name , description: values.description ? values.description : task.description}, task.name);
            toggleEditInfoModalActive(false);
            resetCurrentTask();
        }
    })

    return (
        <EditInfoWrapper
            className='EditInfo-modal'
            onClick={() => {
                toggleEditInfoModalActive(false);
                resetCurrentTask()
                }
            }
        >
            <div
                className='modal'
                onClick={(e) => e.stopPropagation()}
            >
                <form onSubmit={formik.handleSubmit}>
                    <label htmlFor='name'>
                        {formik.errors.name && formik.touched.name ?
                            <div className='error'>
                                {formik.errors.name}
                            </div>
                            :
                            'Name'
                        }
                    </label>
                    <div className='name-input'>
                        <input 
                            name='changeName' 
                            id='changeName' 
                            type='checkbox' 
                            onChange={formik.handleChange} 
                            value={formik.values.changeName} 
                            onClick={() => formik.values.changeName ? formik.setFieldValue('name', '') : null} 
                        />
                        <input 
                            className={formik.errors.name && formik.touched.name ? 'input-error' : 'input'}
                            disabled={formik.values.changeName ? false : true} 
                            name='name' 
                            id='name' 
                            type='text' 
                            placeholder={task.name} 
                            onChange={formik.handleChange} 
                            onBlur={formik.handleBlur} 
                            value={formik.values.name} 
                        />
                    </div>
                    <label htmlFor='desc'>
                        {formik.errors.description && formik.touched.description ?
                            <div className='error'>
                                {formik.errors.description}
                            </div>
                            :
                            'Description'
                        }
                    </label>
                    <div className='desc-input'>
                        <input 
                            name='changeDesc' 
                            id='changeDesc' 
                            type='checkbox' 
                            onChange={formik.handleChange} 
                            value={formik.values.changeDesc} 
                            onClick={() => formik.values.changeDesc ? formik.setFieldValue('description', '') : null} 
                        />
                        <input 
                            className={formik.errors.description && formik.touched.description ? 'input-error' : 'input'}
                            disabled={formik.values.changeDesc ? false : true} 
                            name='description' 
                            id='description' 
                            type='text' 
                            placeholder={task.description ? task.description : 'description...'} 
                            onChange={formik.handleChange} 
                            onBlur={formik.handleBlur} 
                            value={formik.values.description} 
                        />
                    </div>
                    <label
                        className='submit'
                        htmlFor='submit'
                    >
                        <input
                            type='submit'
                            value='Edit'
                        />
                    </label>
                </form>
            </div>
        </EditInfoWrapper>
    )
}