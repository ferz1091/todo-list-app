// Hooks
import { useOption, useHour } from '../../../../tools';

// Styles
import { HourWrapper } from './styles';

export const Hour = () => {
    const { task, rescheduleExactTime, resetCurrentTask, toggleHourModalActive } = useOption();
    const { date, time, displayDate } = useHour();

    return (
        <HourWrapper 
            className='hour-modal' 
            onClick={() => { 
                toggleHourModalActive(false); 
                resetCurrentTask()
                }
            }
        >
            <div className='modal'>
                <span>
                    {`Task "${task.name}" the task will be reschedule to`}
                </span>
                <span>{
                `${time} ${displayDate}`}
                </span>
                <span>
                    <button onClick={() => { 
                        toggleHourModalActive(false); 
                        resetCurrentTask() 
                        }
                    }>
                        Decline
                    </button>
                    <button onClick={() => { 
                        rescheduleExactTime({ ...task, date: date, time: time }); 
                        resetCurrentTask() 
                        }
                    }>
                        Accept
                    </button>
                </span>
            </div>
        </HourWrapper>
    )
}