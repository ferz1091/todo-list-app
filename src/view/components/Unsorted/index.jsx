// Core
import { useState } from 'react';

// Assets
import importantIcon from '../../../assets/icons/important.png';
import nonImportantIcon from '../../../assets/icons/not-important.png';

// Styles
import { UnsortedWrapper } from './styles';

export const Unsorted = (props) => {
    const [descShow, toggleDescShow] = useState(false);

    return (
        <UnsortedWrapper>
            {props.index === 0 && props.task.deadline === 'deadline' ? <div className='title'>With deadline</div> : null}
            {props.index === 0 && props.task.deadline === 'exact time' ? <div className='title'>Planned</div> : null}
            {props.index !== 0 && props.task.deadline === 'exact time' && props.tasks[props.index - 1].deadline === 'deadline' ? <div className='title'>Planned</div> : null}
            <div className='task' onMouseOver={() => toggleDescShow(true)} onMouseOut={() => toggleDescShow(false)}>
                <img onClick={() => props.toggleTaskImportant(props.task.name, props.task.list)} src = {props.task.important ? importantIcon : nonImportantIcon} alt = 'important'/>
                <span className='prop'>{props.task.name}</span>
                <span className='prop'>{props.task.time}</span>
                <span className={descShow ? 'desc-prop' : 'desc-prop-hidden'}>{props.task.description}</span>
            </div>
        </UnsortedWrapper>
    )
}