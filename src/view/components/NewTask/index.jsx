// Core
import { useFormik } from 'formik';
import * as Yup from 'yup';

// Bus
import { useGeneral } from '../../../bus/general';

// Styles
import { NewTaskWrapper } from './styles';

export const NewTask = (props) => {

    const {saveTask} = useGeneral();

    const validationSchema = Yup.object().shape({
        name: Yup.string()
        .min(1, 'Too short!')
        .max(15, 'Too long!')
        .required('Required!'),
        description: Yup.string()
        .min(2, 'Too short!')
        .max(50, 'Too long!')
        .required('Required!'),
        date: Yup.date()
        .min(new Date(new Date() - 86400000), 'Wrong!')
        .required('Required'),
        deadline: Yup.boolean()
        .required('Choose one!')
    })

    const formik = useFormik({
        initialValues: {
            name: '',
            description: '',
            time: '',
            date: '',
            deadline: '',
        },
        validationSchema,
        onSubmit: values => {
            saveTask(values);
        }
    })

    return (
        <NewTaskWrapper onClick={() => props.setModalActive(false)} className='NewTask-modal'>
            <div className='modal' onClick={(e) => e.stopPropagation()}>
                <form onSubmit={formik.handleSubmit}>
                    <label htmlFor='name'>{formik.errors.name && formik.touched.name ? <div className='error'>{formik.errors.name}</div> : 'Name'}</label>
                    <input className={formik.errors.name && formik.touched.name ? 'input-error' : 'input'} id='name' name='name' type='text' onChange={formik.handleChange} onBlur ={formik.handleBlur} value={formik.values.name} />
                    <label htmlFor='description'>{formik.errors.description && formik.touched.description ? <div className='error'>{formik.errors.description}</div> : 'What should be done?'}</label>
                    <input className={formik.errors.description && formik.touched.description ? 'input-error' : 'input'} id='description' name='description' type='text' onChange={formik.handleChange} onBlur = {formik.handleBlur} value={formik.values.description} />
                    <label htmlFor='time'>Time</label>
                    <input id='time' name='time' type='time' onChange={formik.handleChange} value={formik.values.time} />
                    <label className={formik.errors.deadline && formik.touched.deadline ? 'deadline-error' : 'deadline'} htmlFor='deadline'>
                        <label htmlFor='deadline-true'>Deadline</label>
                        <input id='deadline' name='deadline' type='radio' onChange={formik.handleChange} value={true} />
                        <label htmlFor='deadline-false'>Exact time</label>
                        <input id='deadline' name='deadline' type='radio' onChange={formik.handleChange} value={false} />
                    </label>
                    <label htmlFor='description'>{formik.errors.date && formik.touched.date ? <div className='error'>{formik.errors.date}</div> : 'Date'}</label>
                    <input className={formik.errors.date && formik.touched.date ? 'input-error' : 'input'} id='date' name='date' type='date' onChange={formik.handleChange} value={formik.values.date} />
                    <label className = 'submit' htmlFor='submit'>
                    <input type='submit' value='Create' />
                    </label>
                </form>
            </div>
        </NewTaskWrapper>
    )
}