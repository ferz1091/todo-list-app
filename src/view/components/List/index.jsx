// Core
import { useState } from 'react';

// Assets
import importantIcon from '../../../assets/icons/important.png';
import nonImportantIcon from '../../../assets/icons/not-important.png';

// Styles
import { ListWrapper } from './styles';

export const List = (props) => {

    return (
        <ListWrapper>
            {props.index === 0 ?
                <div
                    className='list'
                    onClick={() => props.toggleUncompletedListIsOpen(props.list.name)}
                >
                    {props.list.name}
                    <span className={props.list.isOpen.uncompleted ? 'dropIcon' : 'upIcon'}></span>
                </div>
                :
                null
            }
            {props.list.isOpen.uncompleted ? 
            <div className='list-body'>
                {props.index === 0 && props.task.deadline === 'deadline' ? <div className='title'>With deadline</div> : null}
                {props.index === 0 && props.task.deadline === 'exact time' ? <div className='title'>Planned</div> : null}
                {props.index !== 0 && props.task.deadline === 'exact time' && props.tasks[props.index - 1].deadline === 'deadline' ? <div className='title'>Planned</div> : null}
                <div className='task'>
                    <img className='important-btn' onClick={() => props.toggleTaskImportant(props.task.name, props.task.list)} src={props.task.important ? importantIcon : nonImportantIcon} alt='important' />
                    <span className='prop-name'>{props.task.name}</span>
                    <span className='prop-time'>{props.task.time}</span>
                    <span className='options-btn'></span>
                    <span className='complete-btn' onClick={() => props.toggleIsCompleted(props.task.name, props.task.list)}></span>
                </div>
            </div>
: null}
        </ListWrapper>
    )
}