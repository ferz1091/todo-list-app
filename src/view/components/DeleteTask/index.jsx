// Hooks
import { useOption } from '../../../tools';

// Styles
import { DeleteTaskWrapper } from './styles';

export const DeleteTask = () => {
    const { task, toggleDeleteTaskModalActive, resetCurrentTask, deleteTask } = useOption();

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
                    Are you sure you want to delete task {`"${task.name}"`}?
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
                            deleteTask(task.name, task.list); 
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