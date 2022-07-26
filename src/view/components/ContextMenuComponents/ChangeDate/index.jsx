// Core
import { useFormik } from 'formik';
import * as Yup from 'yup';

// Hooks
import { useOption } from '../../../../tools';

// Styles
import { ChangeDateWrapper } from './styles';

export const ChangeDate = () => {
    const { currentTask, 
            toggleChangeDateModalActive, 
            resetCurrentTask, 
            rescheduleExactTime } = useOption();

    const validationSchema = Yup.object().shape({
        deadline: Yup.string()
            .required('Required!'),
        time: Yup.string()
            .when('deadline', {
                is: (deadline) => deadline && deadline !== 'not planned',
                then: Yup.string()
                    .when('deadline', {
                        is: (deadline) => deadline === 'exact time' && !currentTask.time,
                        then: Yup.string()
                            .required('Required!')
                    })
                    .when('date', {
                        is: (date) => !date,
                        then: Yup.string()
                            .required('Set time or date!')
                    })
                    .when('date', {
                        is: (date) => !date && currentTask.date === new Date().toISOString().slice(0, 10),
                        then: Yup.string()
                            .test('time', 'Past time!', (time) => time && Number(time.replace(':', '') > Number(new Date().toLocaleTimeString().slice(0, 5).replace(':', ''))))
                    })
                    .when('date', {
                        is: (date) => date && String(date).slice(0, 15) === String(new Date(currentTask.date)).slice(0, 15),
                        then: Yup.string()
                            .test('time', 'Nothing changed!', (time) => time)
                            .test('time', 'Past time!', (time) => time && Number(time.replace(':', '') > Number(new Date().toLocaleTimeString().slice(0, 5).replace(':', ''))))
                    })
            }),
        date: Yup.date()
            .when('deadline', {
                is: (deadline) => deadline && deadline !== 'not planned',
                then: Yup.date()
                    .when('time', {
                        is: (time) => !time,
                        then: Yup.date()
                            .required('Set time or date!')
                            .test('date', 'Nothing changed!', (date) => date && String(date).slice(0, 15) !== String(new Date(currentTask.date)).slice(0, 15))
                    })
            })
            .when('deadline', {
                is: (deadline) => deadline === 'not planned',
                then: Yup.date()
                    .test('date', 'Nothing changed!', (date) => currentTask.deadline === 'not planned' && date)
            })
            .min(new Date(new Date() - 86400000), 'Past time!')
    })

    const formik = useFormik({
        initialValues: {
            deadline: '',
            time: '',
            date: '',
        },
        validationSchema,
        onSubmit: (values) => {
            rescheduleExactTime({ ...currentTask, time: values.time ? values.time : values.deadline === 'not planned' ? 
                '' 
                : 
                currentTask.time, date: values.date ? 
                    values.date 
                    : 
                    values.deadline === 'not planned' ? 
                        '' 
                        : 
                        currentTask.date, deadline: values.deadline, isCompleted: false, completed: null
                }
            );
            toggleChangeDateModalActive(false);
            resetCurrentTask();
        }
    })

    return (
        <ChangeDateWrapper 
            className='changeDate-modal' 
            onClick={() => { 
                toggleChangeDateModalActive(false); 
                resetCurrentTask() 
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
                        disabled={formik.values.deadline !== 'not planned' ? false : true} 
                        className={formik.errors.time && formik.touched.time ? 'input-error' : 'input'} 
                        id='time' 
                        name='time' 
                        type='time' 
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur} 
                        value={formik.values.time} 
                    />
                    <label 
                        className={formik.errors.deadline && formik.touched.deadline ? 'deadline-error' : 'deadline'} 
                        htmlFor='deadline'
                    >
                        <label htmlFor='deadline-true'>
                            <span>
                                Deadline time
                            </span>
                        <input 
                            id='deadline' 
                            name='deadline' 
                            type='radio' 
                            onChange={formik.handleChange} 
                            value={'deadline'} 
                        />
                        </label>
                        <label htmlFor='deadline-false'>
                            <span>
                                Exact time
                            </span>
                            <input
                                id='deadline'
                                name='deadline'
                                type='radio'
                                onChange={formik.handleChange}
                                value={'exact time'}
                            />
                        </label>
                        <label htmlFor='deadline-false'>
                            <span>
                                Not planned
                            </span>
                        <input 
                            id='deadline' 
                            name='deadline' 
                            type='radio' 
                            onClick={() => { 
                                formik.setFieldValue('time', ''); 
                                formik.setFieldValue('date', '') 
                                }
                            } 
                            onChange={formik.handleChange} 
                            value={'not planned'} 
                        />
                        </label>
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
                        disabled={formik.values.deadline !== 'not planned' ? false : true} 
                        className={formik.errors.date && formik.touched.date ? 'input-error' : 'input'} 
                        id='date' 
                        name='date' 
                        type='date' 
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur} 
                        value={formik.values.date} 
                    />
                    <label 
                        className='submit' 
                        htmlFor='submit'
                    >
                        <input 
                            type='submit' 
                            value='Change' 
                        />
                    </label>
                </form>
            </div>
        </ChangeDateWrapper>
    )
}
