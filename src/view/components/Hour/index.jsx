// Hooks
import { useHour } from '../../../tools/useHour';

// Styles
import { HourWrapper } from './styles';

export const Hour = (props) => {
    const {date, time} = useHour();

    return (
        <HourWrapper 
            className='hour-modal' 
            onClick={() => { 
                props.toggleHourModalActive(false); 
                props.resetCurrentTask()
                }
            }
        >
            <div className='modal'>
                <span>
                    {`Task "${props.task.name}" the task will be reschedule to`}
                </span>
                <span>{
                `${time} ${date}`}
                </span>
                <span>
                    <button onClick={() => { 
                        props.toggleHourModalActive(false); 
                        props.resetCurrentTask() 
                        }
                    }>
                        Decline
                    </button>
                    <button onClick={() => { 
                        props.rescheduleExactTime({ ...props.task, date: date, time: time }); 
                        props.resetCurrentTask() 
                        }
                    }>
                        Accept
                    </button>
                </span>
            </div>
        </HourWrapper>
    )
}