// Core
import React from 'react';

// Hooks
import { useContextMenuListener } from '../../../../tools';

// Components
import { ContextMenu } from '../../';

// Assets
import importantIcon from '../../../../assets/icons/important.png';
import nonImportantIcon from '../../../../assets/icons/not-important-white.png';

// Styles
import { GeneralWrapper } from './styles';

export const General = (props) => {
    const { optionBtnRef, 
            toggleContextMenuIsOpen, 
            contextMenuListener, 
            contextMenuIsOpen } = useContextMenuListener();

    return (
        <GeneralWrapper 
            className='Task' 
            length={props.task.name.length + props.task.list.length}
        >
            {!props.arrayDateIsOpen.some(date => date === props.task.date) ? 
                <div className='task-body'>
                    <img
                        className='important-btn'
                        onClick={() => props.toggleTaskImportant(props.task.name, props.task.list)}
                        src={props.task.important ? importantIcon : nonImportantIcon}
                        alt='important'
                    />
                    <span className='prop-name'>
                        {props.task.name}
                    </span>
                    <span className='prop-time'>
                        {props.task.time}
                    </span>
                    {props.task.list && !props.page ?
                        <span className='prop-list'>
                            {props.task.list}
                        </span>
                        :
                        null
                    }
                    <span
                        className='options-btn'
                        ref={optionBtnRef}
                        onClick={() => {
                            toggleContextMenuIsOpen(true);
                            document.addEventListener('click', contextMenuListener)
                            }
                        }
                    >
                    </span>
                    <span
                        className={props.task.isCompleted ? 'incomplete-btn' : 'complete-btn'}
                        onClick={() => props.toggleIsCompleted(props.task.name, props.task.list, new Date().toLocaleString())}>
                    </span>
                    {contextMenuIsOpen ? 
                        <ContextMenu 
                            toggleContextMenuIsOpen={toggleContextMenuIsOpen} 
                            task={props.task} 
                        /> 
                        : 
                        null
                    }
                </div>
                :
                null
            }
        </GeneralWrapper>
    )
}
