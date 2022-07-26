// Hooks
import { useOption } from '../../../../tools';

// Styles
import { InfoWrapper } from './styles';

export const Info = () => {
    const { currentTask, toggleInfoModalActive, resetCurrentTask } = useOption();

    return (
        <InfoWrapper 
            className='info-modal'
            onClick={() => {
                toggleInfoModalActive(false);
                resetCurrentTask()
                }
            }
        >
            <div 
                className='modal'
                onClick={() => {
                    toggleInfoModalActive(false);
                    resetCurrentTask()
                    }
                }
            >
                <span>
                    Name: {currentTask.name}.
                </span>
                <span>
                    List: {currentTask.list ? currentTask.list : 'none'}.
                </span>
                <span>
                    Description: {currentTask.description ? currentTask.description : 'none'}.
                </span>
                <span>
                    Deadline: {currentTask.date ? `${currentTask.time}${currentTask.time ? ', ' : ''}${currentTask.date.slice(8, 10)}.${currentTask.date.slice(5, 7)}.${currentTask.date.slice(0, 4)}` : 'none'}.
                </span>
                <span>
                    Completed: {currentTask.isCompleted ? `${currentTask.completed.slice(12, 17)}, ${currentTask.completed.slice(0, 10)}` : 'not completed.'}
                </span>
                <span>
                    Created: {`${currentTask.created.slice(12, 17)}, ${currentTask.created.slice(0, 10)}`}
                </span>
            </div>
        </InfoWrapper>
    )
}
