// Hooks
import { useContextMenuListener } from '../../../tools';

// Components
import { ContextMenu } from '../';

// Assets
import importantIcon from '../../../assets/icons/important.png';
import nonImportantIcon from '../../../assets/icons/not-important.png';

// Styles
import { CompletedWrapper } from './styles';

export const Completed = (props) => {
    const { contextMenuIsOpen, toggleContextMenuIsOpen, optionBtnRef, contextMenuListener } = useContextMenuListener();

    if (props.list) {
        return (
            <>
                {
                    props.index === 0 ?
                    <div
                        className='list'
                        onClick={() => props.toggleCompletedListIsOpen(props.list.name)}
                    >
                        {props.list.name}
                        <span className={props.list.isOpen.completed ? 'dropIcon' : 'upIcon'}></span>
                    </div>
                    :
                    null
                }
                {props.list.isOpen.completed ? 
                    <CompletedWrapper className='task'>
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
                                className='complete-btn' 
                                onClick={() => props.toggleIsCompleted(props.task.name, props.task.list)}>
                            </span>
                            {contextMenuIsOpen ? <ContextMenu {...props.task} /> : null}
                        </div>
                    </CompletedWrapper>
                    :
                    null
                }
            </>
        )
    } else {
        return (
            <CompletedWrapper className='task'>
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
                        className='complete-btn' 
                        onClick={() => props.toggleIsCompleted(props.task.name, props.task.list)}>
                    </span>
                    {contextMenuIsOpen ? <ContextMenu {...props.task} /> : null}
                </div>
            </CompletedWrapper>
        )
    }
}