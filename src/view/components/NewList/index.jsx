// Core
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';

// Styles
import { NewListWrapper } from './styles';

export const NewList = (props) => {

    const lists = useSelector(state => state.general.lists);
    const currentTask = useSelector(state => state.modal.currentTask);

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Too short!')
            .max(12, 'Too long!')
            .required('Required!')
            .test('name', 'Such a list already exists!', (name) => lists.every(list => list.name !== name))
    });

    const formik = useFormik({
        initialValues: {
            name: '',
        },
        validationSchema,
        onSubmit: (values) => {
            props.addList({...values, tasks: [], isOpen: {uncompleted: true, completed: true}});
            if (currentTask) {
                props.deleteTask(currentTask.name, currentTask.list);
                props.addTask({...currentTask, list: values.name});
                props.resetCurrentTask();
            }
            props.toggleNewListModalActive(false);
        }
    })

    return (
        <NewListWrapper className='NewList-modal' onClick={() => props.toggleNewListModalActive(false)}>
            <div className='modal' onClick={(e) => e.stopPropagation()}>
                <form onSubmit={formik.handleSubmit}>
                    <label htmlFor='name'>{formik.errors.name && formik.touched.name ? <div className='error'>{formik.errors.name}</div> : 'Name'}</label>
                    <input autoFocus className={formik.errors.name && formik.touched.name ? 'input-error' : 'input'} id='name' name='name' type='text' onChange={formik.handleChange} onBlur = {formik.handleBlur} value={formik.values.name} />
                    <label className='submit' htmlFor='submit'>
                        <input type='submit' value='Create' />
                    </label>
                </form>
            </div>
        </NewListWrapper>
    )
}