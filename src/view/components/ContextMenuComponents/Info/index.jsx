// Hooks
import { useOption } from '../../../../tools';

// Styles
import { InfoWrapper } from './styles';

export const Info = () => {
    const { task, toggleInfoModalActive, resetCurrentTask } = useOption();
    console.log(task);

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
                    Name: {task.name}.
                </span>
                <span>
                    List: {task.list ? task.list : 'none'}.
                </span>
                <span>
                    Description: {task.description ? task.description : 'none'}.
                </span>
                <span>
                    Deadline: {task.date ? `${task.time}${task.time ? ', ' : ''}${task.date.slice(8, 10)}.${task.date.slice(5, 7)}.${task.date.slice(0, 4)}` : 'none'}.
                </span>
                <span>
                    Completed: {task.isCompleted ? `${task.completed.slice(12, 17)}, ${task.completed.slice(0, 10)}` : 'not completed.'}
                </span>
                <span>
                    Created: {`${task.created.slice(12, 17)}, ${task.created.slice(0, 10)}`}
                </span>
            </div>
        </InfoWrapper>
    )
}