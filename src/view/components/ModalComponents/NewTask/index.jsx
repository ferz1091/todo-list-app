// Core
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';

// Styles
import { NewTaskWrapper } from './styles';

export const NewTask = (props) => {

    const lists = useSelector(state => state.general.lists);
    const tasks = useSelector(state => state.general.tasks);

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Too short!')
            .max(10, 'Too long!')
            .required('Required!')
            .when('list', {
                is: (list) => !list,
                then: Yup.string()
                    .test('name', 'This name already exists!', (name) => tasks.every(task => task.name !== name))
        })
        .when('list', {
            is: (list) => list,
            then: Yup.string()
                .test('name', 'This name already exists!', (name, context) => lists.filter(list => list.name === context.parent.list)[0].tasks.every(task => task.name !== name))
        })
        ,
        description: Yup.string()
            .min(2, 'Too short!')
            .max(50, 'Too long!'),
        deadline: Yup.string()
            .required('Choose one!'),
        date: Yup.date()
            .when('deadline', {
                is: 'deadline',
                then: Yup.date()
                    .min(new Date(new Date() - 86400000), 'Past time')
                    .required('Required')
        })
        .when('deadline', {
            is: 'exact time',
            then: Yup.date()
                .min(new Date(new Date() - 86400000), 'Past time')
                .required('Required')
        }),
        time: Yup.string()
            .when('deadline', {
                is: 'exact time',
                then: Yup.string()
                    .required('Required')
                }
            )
            .when('date', {
                is: (date) => date && String(date).slice(0, 15) === String(new Date()).slice(0, 15),
                then: Yup.string()
                    .test('time', 'Past time!', (time) => time ? Number(time.replace(':', '') > Number(new Date().toLocaleTimeString().slice(0, 5).replace(':', ''))) : true)
            })
    })

    const formik = useFormik({
        initialValues: {
            name: '',
            description: '',
            time: '',
            date: '',
            deadline: '',
            list: '',
        },
        validationSchema,
        onSubmit: values => {
            props.addTask({ ...values, created: new Date().toLocaleString(), important: false, isCompleted: false, completed: null});
            props.toggleNewTaskModalActive(false)
        }
    })

    return (
        <NewTaskWrapper 
            onClick={() => props.toggleNewTaskModalActive(false)} 
            className='NewTask-modal'
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
                    <input 
                        className={formik.errors.name && formik.touched.name ? 'input-error' : 'input'} 
                        id='name' 
                        name='name' 
                        type='text' 
                        onChange={formik.handleChange} 
                        onBlur ={formik.handleBlur} 
                        value={formik.values.name} 
                    />
                    <label htmlFor='description'>
                        {formik.errors.description && formik.touched.description ? 
                            <div className='error'>
                                {formik.errors.description}
                            </div> 
                            : 
                            'What should be done?'
                        }
                    </label>
                    <input 
                        className={formik.errors.description && formik.touched.description ? 'input-error' : 'input'} 
                        id='description' 
                        name='description' 
                        type='text' 
                        onChange={formik.handleChange} 
                        onBlur = {formik.handleBlur} 
                        value={formik.values.description} 
                    />
                    <label htmlFor='list'>
                        What list does the task belong to?
                    </label>
                    <select 
                        disabled = {lists.length === 0 ? true : false} 
                        id='list' 
                        name='list' 
                        type='text' 
                        onChange={formik.handleChange}
                    >
                        <option value = {''}>
                            -
                        </option>
                        {lists.length !== 0 ? lists.map((list, index) => 
                            <option 
                                key = {index} 
                                value = {list.name}
                            >
                                {list.name}
                            </option>) 
                            : 
                            null
                        }
                    </select>
                    <label htmlFor='time'>
                        {formik.errors.time && formik.touched.time ? 
                            <div className='error'>
                                {formik.errors.time}
                            </div> 
                            : 
                            'Time'
                        }
                    </label>
                    <input 
                        className={formik.errors.time && formik.touched.time ? 'input-error' : 'input'} 
                        disabled = {formik.values.deadline === 'not planned'} 
                        id='time' 
                        name='time' 
                        type='time' 
                        onChange={formik.handleChange} 
                        value={formik.values.time} 
                    />
                    <label 
                        className={formik.errors.deadline && formik.touched.deadline ? 'deadline-error' : 'deadline'} 
                        htmlFor='deadline'
                    >
                        <label htmlFor='deadline-true'>
                            Deadline
                        </label>
                        <input 
                            id='deadline' 
                            name='deadline' 
                            type='radio' 
                            onChange={formik.handleChange} 
                            value={'deadline'} 
                        />
                        <label htmlFor='deadline-false'>
                            Exact time
                        </label>
                        <input 
                            id='deadline' 
                            name='deadline' 
                            type='radio' 
                            onChange={formik.handleChange} 
                            value={'exact time'} 
                        />
                        <label htmlFor='deadline-false'>
                            Not planned
                        </label>
                        <input 
                            id='deadline' 
                            name='deadline' 
                            type='radio' 
                            onChange={formik.handleChange} 
                            value={'not planned'} 
                        />
                    </label>
                    <label htmlFor='date'>
                        {formik.errors.date && formik.touched.date ? 
                            <div className='error'>
                                {formik.errors.date}
                            </div> 
                            : 
                            'Date'
                        }
                    </label>
                    <input 
                        disabled={formik.values.deadline === 'not planned'} 
                        className={formik.errors.date && formik.touched.date ? 'input-error' : 'input'} 
                        id='date' 
                        name='date' 
                        type='date' 
                        onChange={formik.handleChange} 
                        value={formik.values.date} 
                    />
                    <label 
                        className = 'submit' 
                        htmlFor='submit'
                    >
                        <input 
                            type='submit' 
                            value='Create' 
                        />
                    </label>
                </form>
            </div>
        </NewTaskWrapper>
    )
}