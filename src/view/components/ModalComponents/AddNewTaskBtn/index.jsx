// Hooks
import { useModalElement } from '../../../../tools';

// Styles
import { AddNewTaskBtnWrapper } from './styles';

export const AddNewTaskBtn = () => {
    const {toggleNewTaskModalActive} = useModalElement();
    return (
        <AddNewTaskBtnWrapper 
            className='add-task-btn' 
            onClick={() => toggleNewTaskModalActive(true)}
        >
            +
        </AddNewTaskBtnWrapper>
    )
}