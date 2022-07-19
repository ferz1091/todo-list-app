// Hooks
import { useContextMenuListener } from '../../../../tools';

// Components
import { ContextMenu } from '../../';

// Assets
import importantIcon from '../../../../assets/icons/important.png';
import nonImportantIcon from '../../../../assets/icons/not-important.png';

// Styles
import { GeneralWrapper } from './styles';

export const General = (props) => {
    const { optionBtnRef, toggleContextMenuIsOpen, contextMenuListener, contextMenuIsOpen } = useContextMenuListener();

    return (
        <GeneralWrapper className='Task' length={props.task.name.length + props.task.list.length}>
            {props.index === 0 ? 
                <div 
                    onClick={() => {
                        if (props.arrayDateIsOpen.some(date => date === props.task.date)) {
                            props.setArrayDateIsOpen(props.arrayDateIsOpen.filter(date => date !== props.task.date))
                        } else {
                            props.setArrayDateIsOpen([...props.arrayDateIsOpen, props.task.date])
                        }
                    }} 
                    className='title'
                >
                    {props.page && !props.task.date ? `Not planned` : `${props.task.date.slice(8, 10)}.${props.task.date.slice(5, 7)}.${props.task.date.slice(2, 4)}`}
                    <span className={props.arrayDateIsOpen.some(date => date === props.task.date) ? 'dropIcon' : 'upIcon'}></span>
                </div> 
                : 
                null
            }
            {props.index !== 0 && props.task.date !== props.tasks[props.index - 1].date ? 
                <div 
                    onClick={() => {
                        if (props.arrayDateIsOpen.some(date => date === props.task.date)) {
                            props.setArrayDateIsOpen(props.arrayDateIsOpen.filter(date => date !== props.task.date))
                        } else {
                            props.setArrayDateIsOpen([...props.arrayDateIsOpen, props.task.date])
                        }
                    }}  
                    className='title'
                >
                    {props.page && !props.task.date ? `Not planned` : `${props.task.date.slice(8, 10)}.${props.task.date.slice(5, 7)}.${props.task.date.slice(2, 4)}`}
                    <span className={props.arrayDateIsOpen.some(date => date === props.task.date) ? 'dropIcon' : 'upIcon'}></span>
                </div> 
                : 
                null
            }
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