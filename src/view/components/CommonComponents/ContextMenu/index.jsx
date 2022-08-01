// Core
import React from 'react';

// Hooks
import { useContextMenu } from '../../../../tools';

// Styles
import { ContextMenuWrapper } from './styles';

export const ContextMenu = (props) => {
    const { lists,
            toggleTaskImportant, 
            toggleIsCompleted, 
            toggleExactTimeModalActive, 
            toggleHourModalActive, 
            toggleDayModalActive, 
            setCurrentTask, 
            toggleChangeDateModalActive, 
            toggleDeleteTaskModalActive,
            toggleMoveTaskModalActive,
            moveTaskIsOpen,
            toggleMoveTaskIsOpen,
            toggleNewListModalActive,
            toggleInfoModalActive,
            toggleEditInfoModalActive,
            addTask,
            deleteTask } = useContextMenu();

    return (
        <ContextMenuWrapper 
            className='ContextMenu' 
            props={props.task.important}
        >
            <div 
                className='important btn' 
                onClick={() => toggleTaskImportant(props.task.name, props.task.list)}
            >
                <span className={props.task.important ? 'important-icon' : 'not-important-icon'}>
                </span>
                <span className='option'>
                    {props.task.important ? <>Remove importance</> : <>Mark as important</>}
                </span>
            </div>
            <div 
                className='complete btn' 
                onClick={() => toggleIsCompleted(props.task.name, props.task.list, new Date().toLocaleString())}
            >
                <span className={props.task.isCompleted ? 'completed-icon' : 'not-completed-icon'}>
                </span>
                <span className='option'>
                    {props.task.isCompleted ? <>Mark as incomplete</> : <>Mark as complete</>}
                </span>
            </div>
            {props.task.deadline !== 'not planned' ?
                <>
                    {!props.task.isCompleted ?
                        <>
                            {
                                props.task.time ?
                                    <div 
                                        className='hour btn' 
                                        onClick={() => { 
                                            toggleHourModalActive(true); 
                                            setCurrentTask(props.task) 
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
                                        className='time btn' 
                                        onClick={() => { 
                                            toggleExactTimeModalActive(true); 
                                            setCurrentTask(props.task) 
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
                                className='day btn' 
                                onClick={() => { 
                                    toggleDayModalActive(true); 
                                    setCurrentTask(props.task) 
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
                </>
                :
                null
            }
            <div
                className='change-date btn'
                onClick={() => {
                    toggleChangeDateModalActive(true);
                    setCurrentTask(props.task)
                }
                }
            >
                <span className='change-date-icon'></span>
                <span className='option'>
                    {props.task.deadline === 'not planned' ? 'Set date' : 'Change date'}
                </span>
            </div>
            <div 
                className='change-list btn' 
                onClick={(e) => {
                    e.stopPropagation();
                    toggleMoveTaskIsOpen(true);
                    }
                } 
                onMouseOver={() => toggleMoveTaskIsOpen(true)} 
                onMouseOut={() => toggleMoveTaskIsOpen(false)} 
            >
                <span className='move-icon'></span>
                <span className='option'>
                    Move task
                </span>
                <span className='drop-right-icon'></span>
                {moveTaskIsOpen ? 
                    <div className='change-list-subpanel'
                        onClick={() => props.toggleContextMenuIsOpen(false)}>
                        <div
                            className='option-subpanel btn' 
                            onClick={() => {
                                toggleNewListModalActive(true); 
                                setCurrentTask(props.task);
                                }
                            }
                        >
                            <span className='add-icon'></span>
                            <span>
                                Move to new list
                            </span>
                        </div>
                        <div 
                            onClick={() => {
                            if (props.task.list) {
                            addTask({...props.task, list: ''});
                            deleteTask(props.task.name, props.task.list);
                                    }
                                }
                            }
                            className={props.task.list ? 'option-subpanel btn' : 'option-subpanel-disabled'}>
                            <span className='cross-icon'></span>
                            <span>
                                Delete from {`"${props.task.list}"`}
                            </span>
                        </div>
                        <div 
                            onClick={() => {if (lists.filter((list) => list.name !== props.task.list).length > 0) {
                                toggleMoveTaskModalActive(true);
                                setCurrentTask(props.task);
                                }
                                }
                            }
                            className={lists.filter((list) => list.name !== props.task.list).length > 0 ? 'option-subpanel btn' : 'option-subpanel-disabled'}
                        >
                            <span className='moveTo-icon'></span>
                            <span>
                                Move to
                            </span>
                        </div>
                    </div> 
                    : 
                    null
                }
            </div>
            <div 
                className='info btn'
                onClick={() => {
                    toggleInfoModalActive(true);
                    setCurrentTask(props.task);
                    }
                }
            >
                <span className='info-icon'></span>
                <span className='option'>
                    Show info
                </span>
            </div>
            <div 
                className='editInfo btn'
                onClick={() => {
                    toggleEditInfoModalActive(true);
                    setCurrentTask(props.task);
                    }
                }
            >
                <span className='editInfo-icon'></span>
                <span className='option'>
                    Edit info
                </span>
            </div>
            <div 
                className='delete btn' 
                onClick={() => { 
                    toggleDeleteTaskModalActive(true); 
                    setCurrentTask(props.task);
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
