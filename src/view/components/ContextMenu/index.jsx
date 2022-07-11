// Hooks
import { useContextMenu } from '../../../tools';

// Styles
import { ContextMenuWrapper } from './styles';

export const ContextMenu = (props) => {
    const { toggleTaskImportant, 
            toggleIsCompleted, 
            toggleExactTimeModalActive, 
            toggleHourModalActive, 
            toggleDayModalActive, 
            setCurrentTask, 
            toggleChangeDateModalActive, 
            toggleDeleteTaskModalActive } = useContextMenu();

    return (
        <ContextMenuWrapper className='ContextMenu' props={props.important}>
            <div className='important' onClick={() => toggleTaskImportant(props.name, props.list)}>
                <span className={props.important ? 'important-icon' : 'not-important-icon'}>
                </span>
                <span className='option'>
                    {props.important ? <>Remove importance</> : <>Mark as important</>}
                </span>
            </div>
            <div 
                className='complete' 
                onClick={() => toggleIsCompleted(props.name, props.list)}
            >
                <span className={props.isCompleted ? 'completed-icon' : 'not-completed-icon'}>
                </span>
                <span className='option'>
                    {props.isCompleted ? <>Mark as incomplete</> : <>Mark as complete</>}
                </span>
            </div>
            {props.deadline !== 'not planned' ?
                <>
                    {!props.isCompleted ?
                        <>
                            {
                                props.time ?
                                    <div 
                                        className='hour' 
                                        onClick={() => { 
                                            toggleHourModalActive(true); 
                                            setCurrentTask(props) 
                                            }
                                        }
                                    >
                                        <span className='hour-icon'></span>
                                        <span className='option'>
                                            Reschedule by an hour
                                        </span>
                                    </div>
                                    :
                                    <div 
                                        className='time' 
                                        onClick={() => { 
                                            toggleExactTimeModalActive(true); 
                                            setCurrentTask(props) 
                                            }
                                        }
                                    >
                                        <span className='clock-icon'></span>
                                        <span className='option'>
                                            Schedule the exact time
                                        </span>
                                    </div>
                            }
                            <div 
                                className='day' 
                                onClick={() => { 
                                    toggleDayModalActive(true); 
                                    setCurrentTask(props) 
                                    }
                                }
                            >
                                <span className='day-icon'></span>
                                <span className='option'>
                                    Reschedule for a day
                                </span>
                            </div>
                        </>
                        : 
                        null
                    }
                    <div 
                        className='change-date' 
                        onClick={() => { 
                            toggleChangeDateModalActive(true); 
                            setCurrentTask(props) 
                            }
                        }
                    >
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
            <div 
                className='delete' 
                onClick={() => { 
                    toggleDeleteTaskModalActive(true); 
                    setCurrentTask(props) 
                    }
                }
            >
                <span className='delete-icon'></span>
                <span className='option'>
                    Delete task
                </span>
            </div>
        </ContextMenuWrapper >
    )
}