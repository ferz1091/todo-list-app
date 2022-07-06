// Core
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';

// Styles
import { NewTaskWrapper } from './styles';

export const NewTask = (props) => {

    const lists = useSelector(state => state.general.lists);

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
            list: '',
        },
        validationSchema,
        onSubmit: values => {
            props.addTask(values);
            props.toggleNewTaskModalActive(false)
        }
    })

    return (
        <NewTaskWrapper onClick={() => props.toggleNewTaskModalActive(false)} className='NewTask-modal'>
            <div className='modal' onClick={(e) => e.stopPropagation()}>
                <form onSubmit={formik.handleSubmit}>
                    <label htmlFor='name'>{formik.errors.name && formik.touched.name ? <div className='error'>{formik.errors.name}</div> : 'Name'}</label>
                    <input className={formik.errors.name && formik.touched.name ? 'input-error' : 'input'} id='name' name='name' type='text' onChange={formik.handleChange} onBlur ={formik.handleBlur} value={formik.values.name} />
                    <label htmlFor='description'>{formik.errors.description && formik.touched.description ? <div className='error'>{formik.errors.description}</div> : 'What should be done?'}</label>
                    <input className={formik.errors.description && formik.touched.description ? 'input-error' : 'input'} id='description' name='description' type='text' onChange={formik.handleChange} onBlur = {formik.handleBlur} value={formik.values.description} />
                    <label htmlFor='list'>What list does the task belong to?</label>
                    <select disabled = {lists.length === 0 ? true : false} id='list' name='list' type='text' onChange={formik.handleChange}>
                        <option value = {''}>-</option>
                        {lists.length !== 0 ? lists.map((list, index) => <option key = {index} value = {list.name}>{list.name}</option>) : null}
                    </select>
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