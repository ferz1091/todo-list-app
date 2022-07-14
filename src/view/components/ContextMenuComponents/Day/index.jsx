// Hooks
import { useOption, useDay } from '../../../../tools';

// Styles
import { DayWrapper } from './styles';

export const Day = () => {
    const { task, rescheduleExactTime, toggleDayModalActive, resetCurrentTask } = useOption();
    const { date } = useDay();

    return (
        <DayWrapper 
            className='day-modal' 
            onClick={() => {
                toggleDayModalActive(false); 
                resetCurrentTask()
                }
            }
        >
            <div className='modal'>
                <span>
                    {`Task "${task.name}" the task will be reschedule to`}
                </span>
                <span>
                    {task.time} {new Date(new Date(task.date).getTime() + 86400000).toDateString()}
                </span>
                <span>
                    <button 
                        onClick={() => { 
                            toggleDayModalActive(false); 
                            resetCurrentTask() 
                            }
                        }
                    >
                        Decline
                    </button>
                    <button 
                        onClick={() => { 
                            rescheduleExactTime({ ...task, date: date }); 
                            resetCurrentTask() 
                            }
                        }
                    >
                        Accept
                    </button>
                </span>
            </div>
        </DayWrapper>
    )
}