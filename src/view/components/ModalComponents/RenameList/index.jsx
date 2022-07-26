// Core
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useLocation, useNavigate } from 'react-router-dom';

// Hooks
import { useOption } from '../../../../tools';

// Styles
import { RenameListWrapper } from './styles';

export const RenameList = () => {
    const { toggleRenameListModalActive, renameList, lists } = useOption();
    const location = useLocation();
    const navigate = useNavigate();

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Too short!')
            .max(10, 'Too long!')
            .required('Required!')
            .test('name', 'Such a list already exists!', (name) => lists.every(list => list.name !== name))
            .matches(/^[aA-zZ\d\s]+$/, 'Only latin letters and numbers!')
            .test('name', 'Wrong!', (name) => name && Array.from(name).some(letter => letter !== ' '))
    });
    const formik = useFormik({
        initialValues: {
            name: ''
        },
        validationSchema,
        onSubmit: (values) => {
            renameList(values.name.trim(), location.pathname.replace(/_/g, ' ').replace('/', ''));
            toggleRenameListModalActive(false);
            navigate(`/${values.name.trim() }`);
        }
    })

    return (
        <RenameListWrapper 
            className='renameList-icon' 
            onClick={() => toggleRenameListModalActive(false)}
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
                        autoFocus 
                        className={formik.errors.name && formik.touched.name ? 'input-error' : 'input'} 
                        id='name' 
                        name='name' 
                        type='text' 
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur} 
                        value={formik.values.name} 
                    />
                    <label 
                        className='submit' 
                        htmlFor='submit'
                    >
                        <input 
                            type='submit' 
                            value='Create' 
                        />
                    </label>
                </form>
            </div>
        </RenameListWrapper>
    )
}
