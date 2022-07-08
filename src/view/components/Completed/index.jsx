// Assets
import importantIcon from '../../../assets/icons/important.png';
import nonImportantIcon from '../../../assets/icons/not-important.png';

// Styles
import { CompletedWrapper } from './styles';

export const Completed = (props) => {
    console.log(props);
    return (
        <CompletedWrapper className='task'>
                <img className='important-btn' onClick={() => props.toggleTaskImportant(props.task.name, props.task.list)} src={props.task.important ? importantIcon : nonImportantIcon} alt='important' />
                <span className='prop-name'>{props.task.name}</span>
                <span className='prop-time'>{props.task.time}</span>
                <span className='options-btn'></span>
                <span className='complete-btn' onClick={() => props.toggleIsCompleted(props.task.name, props.task.list)}></span>
        </CompletedWrapper>
    )
}