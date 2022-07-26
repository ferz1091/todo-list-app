// Hooks
import { useContextMenuListener } from '../../../../tools';

// Components
import { ContextMenu } from '../../';

// Assets
import importantIcon from '../../../../assets/icons/important.png';
import nonImportantIcon from '../../../../assets/icons/not-important-white.png';

// Styles
import { UnsortedWrapper } from './styles';

export const Unsorted = (props) => {
    const { contextMenuIsOpen, 
            toggleContextMenuIsOpen, 
            optionBtnRef, 
            contextMenuListener } = useContextMenuListener();

    if (props.unsortedUncompletedIsOpen) {
        return (
            <UnsortedWrapper className='Task'>
                    <div className={!props.task.time ? 'task-body' : Number(props.task.time.replace(':', '')) < Number(new Date().toLocaleTimeString().slice(0, 5).replace(':', '')) ? 'task-body-overdue' : 'task-body'}>
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
                            onClick={() => props.toggleIsCompleted(props.task.name, props.task.list, new Date().toLocaleString())}>
                        </span>
                        {contextMenuIsOpen ? <ContextMenu toggleContextMenuIsOpen={toggleContextMenuIsOpen} task={props.task} /> : null}
                    </div>
            </UnsortedWrapper>
        )
    } else {
        return null;
    }
}