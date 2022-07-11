// Core
import { useFormik } from 'formik';
import * as Yup from 'yup';

// Styles
import { ExactTimeWrapper } from './styles';

export const ExactTime = (props) => {
    const validationSchema = Yup.object().shape({
        time: Yup.string()
            .when('date', {
                is: (date) => String(date).slice(0, 15) === String(new Date()).slice(0, 15),
                then: Yup.string()
                    .test('time', 'Past time!', (time) => Number(time.replace(':', '') > Number(new Date().toLocaleTimeString().slice(0, 5).replace(':', ''))))
            })
            .required('Required'),
        date: Yup.date()
            .min(new Date(new Date() - 86400000), 'Past time!')
            .when('changeDate', {
                is: (changeDate) => changeDate,
                then: Yup.date()
                    .required('Required!')
            })
    })

    const formik = useFormik({
        initialValues: {
            time: '',
            changeDate: false,
            date: '',
        },
        validationSchema,
        onSubmit: (values) => {
            props.rescheduleExactTime({ ...props.task, deadline: 'exact time', isCompleted: false, time: values.time, date: values.date ? values.date : props.task.date });
            props.toggleExactTimeModalActive(false);
            props.resetCurrentTask();
        },
    })

    return (
        <ExactTimeWrapper 
            className='ExactTime-modal' 
            onClick={() => { 
                props.toggleExactTimeModalActive(false); 
                props.resetCurrentTask() 
                }
            }
        >
            <div 
                className='modal' 
                onClick={(e) => e.stopPropagation()}
            >
                <form onSubmit={formik.handleSubmit}>
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
                        id='time' 
                        name='time' 
                        type='time' 
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur} 
                        value={formik.values.time} 
                    />
                    <label htmlFor='date'>
                        {formik.errors.date && formik.touched.date ? 
                            <div className='error'>
                                {formik.errors.date}
                            </div> 
                            : 
                            'Date'
                        }
                    </label>
                    <div className='date-input'>
                        <input 
                            disabled={formik.values.time ? false : true} 
                            id='changeDate' 
                            name='changeDate' 
                            type='checkbox' 
                            onChange={formik.handleChange} 
                            onClick={() => formik.values.changeDate ? formik.setFieldValue('date', '') : null} 
                            value={formik.values.changeDate} 
                        />
                        <input 
                            className={formik.errors.date && formik.touched.date ? 'input-error' : 'input'} 
                            disabled={formik.values.changeDate ? false : true} 
                            id='date' 
                            name='date' 
                            type='date' 
                            onChange={formik.handleChange} 
                            onBlur={formik.handleBlur} 
                            value={formik.values.date} 
                        />
                    </div>
                    <label 
                        className='submit' 
                        htmlFor='submit'
                    >
                        <input 
                            type='submit' 
                            value='Reschedule' 
                        />
                    </label>
                </form>
            </div>
        </ExactTimeWrapper>
    )
}