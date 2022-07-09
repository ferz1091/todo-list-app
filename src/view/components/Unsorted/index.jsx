// Core
import { useState } from 'react';

// Assets
import importantIcon from '../../../assets/icons/important.png';
import nonImportantIcon from '../../../assets/icons/not-important.png';

// Styles
import { UnsortedWrapper } from './styles';

export const Unsorted = (props) => {

    return (
        <UnsortedWrapper>
            {props.index === 0 ?
                <div
                    className='unsorted'
                    onClick={() => props.toggleUnsortedUncompletedIsOpen(!props.unsortedUncompletedIsOpen)}
                >
                    Unsorted
                    <span className={props.unsortedUncompletedIsOpen ? 'dropIcon' : 'upIcon'}></span>
                </div>
                :
                null
            }
            {props.unsortedUncompletedIsOpen ? 
            <div className='task'>
                {props.index === 0 && props.task.deadline === 'deadline' ? <div className='title'>With deadline</div> : null}
                {props.index === 0 && props.task.deadline === 'exact time' ? <div className='title'>Planned</div> : null}
                {props.index !== 0 && props.task.deadline === 'exact time' && props.tasks[props.index - 1].deadline === 'deadline' ? <div className='title'>Planned</div> : null}
                <div className='task-body'>
                    <img className='important-btn' onClick={() => props.toggleTaskImportant(props.task.name, props.task.list)} src={props.task.important ? importantIcon : nonImportantIcon} alt='important' />
                    <span className='prop-name'>{props.task.name}</span>
                    <span className='prop-time'>{props.task.time}</span>
                    <span className='options-btn'></span>
                    <span className='complete-btn' onClick={() => props.toggleIsCompleted(props.task.name, props.task.list)}></span>
                </div>
            </div>
: null}
        </UnsortedWrapper>
    )
}