// Styles
import { UnsortedWrapper } from './styles';

export const Unsorted = (props) => {
    return (
        <UnsortedWrapper>
            {props.index === 0 && props.task.deadline === 'deadline' ? <div className='title'>With deadline</div> : null}
            {props.index === 0 && props.task.deadline === 'exact time' ? <div className='title'>Planned</div> : null}
            {props.index !== 0 && props.task.deadline === 'exact time' && props.tasks[props.index - 1].deadline === 'deadline' ? <div className='title'>Planned</div> : null}
            <div className='task'>
                <span className='prop'>{props.task.name}</span>
                <span className='prop'>{props.task.time}</span>
            </div>
        </UnsortedWrapper>
    )
}