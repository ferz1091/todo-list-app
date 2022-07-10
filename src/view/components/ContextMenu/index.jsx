// Styles
import { ContextMenuWrapper } from './styles';

export const ContextMenu = (props) => {
    
    return (
        <ContextMenuWrapper className='ContextMenu' props={props.important}>
            <div className='important'>
                <span className={props.important ? 'important-icon' : 'not-important-icon'}>
                </span>
                <span className='option'>
                    {props.important ? <>Remove importance</> : <>Mark as important</>}
                </span>
            </div>
            <div className='complete'>
                <span className={props.isCompleted ? 'completed-icon' : 'not-completed-icon'}>
                </span>
                <span className='option'>
                    {props.isCompleted ? <>Mark as incomplete</> : <>Mark as complete</>}
                </span>
            </div>
            {props.deadline !== 'not planned' ?
                <>
                    {props.time ?
                        <div className='hour'>
                            <span className='hour-icon'></span>
                            <span className='option'>
                                Reschedule by an hour
                            </span>
                        </div>
                        :
                        <div className='time'>
                            <span className='clock-icon'></span>
                            <span className='option'>
                                Schedule the exact time
                            </span>
                        </div>
                    }
                    <div className='day'>
                        <span className='day-icon'></span>
                        <span className='option'>
                            Reschedule for a day
                        </span>
                    </div>
                    <div className='change-date'>
                        <span className='change-date-icon'></span>
                        <span className='option'>
                            Change date
                        </span>
                    </div>
                </>
                :
                null
            }
            <div className='change-list'>
                <span className='move-icon'></span>
                <span className='option'>
                    Move task
                </span>
            </div>
            <div className='delete'>
                <span className='delete-icon'></span>
                <span className='option'>
                    Delete task
                </span>
            </div>
        </ContextMenuWrapper>
    )
}