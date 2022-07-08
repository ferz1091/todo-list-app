// Core
import { useFormik } from 'formik';
import * as Yup from 'yup';

// Styles
import { NewListWrapper } from './styles';

export const NewList = (props) => {

    const validationSchema = Yup.object().shape({
        name: Yup.string()
        .min(2, 'Too short!')
        .max(12, 'Too long!')
        .required('Required!')
    });

    const formik = useFormik({
        initialValues: {
            name: '',
        },
        validationSchema,
        onSubmit: (values) => {
            props.addList({...values, tasks: [], isOpen: true});
            props.toggleNewListModalActive(false);
        }
    })

    return (
        <NewListWrapper className='NewList-modal' onClick={() => props.toggleNewListModalActive(false)}>
            <div className='modal' onClick={(e) => e.stopPropagation()}>
                <form onSubmit={formik.handleSubmit}>
                    <label htmlFor='name'>{formik.errors.name && formik.touched.name ? <div className='error'>{formik.errors.name}</div> : 'Name'}</label>
                    <input className={formik.errors.name && formik.touched.name ? 'input-error' : 'input'} id='name' name='name' type='text' onChange={formik.handleChange} onBlur = {formik.handleBlur} value={formik.values.name} />
                    <label className='submit' htmlFor='submit'>
                        <input type='submit' value='Create' />
                    </label>
                </form>
            </div>
        </NewListWrapper>
    )
}