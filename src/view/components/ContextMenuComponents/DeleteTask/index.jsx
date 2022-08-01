// Core
import React from 'react';

// Hooks
import { useOption } from '../../../../tools';

// Styles
import { DeleteTaskWrapper } from './styles';

export const DeleteTask = () => {
    const { currentTask, 
            toggleDeleteTaskModalActive, 
            resetCurrentTask, 
            deleteTask } = useOption();

    return (
        <DeleteTaskWrapper 
            className='delete-modal' 
            onClick={() => { 
                toggleDeleteTaskModalActive(false); 
                resetCurrentTask() 
                }
            }
        >
            <div 
                className='modal' 
                onClick={(e) => e.stopPropagation()}
            >
                <span>
                    Are you sure you want to delete task {`"${currentTask.name}"`}?
                </span>
                <span>
                    <button 
                        onClick={() => { 
                            toggleDeleteTaskModalActive(false); 
                            resetCurrentTask() 
                            }
                        }
                    >
                        No
                    </button>
                    <button 
                        onClick={() => { 
                            deleteTask(currentTask.name, currentTask.list); 
                            toggleDeleteTaskModalActive(false); 
                            resetCurrentTask()
                            }
                        }
                    >
                        Yes
                    </button>
                </span>
            </div>
        </DeleteTaskWrapper>
    )
}
