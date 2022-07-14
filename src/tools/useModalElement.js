// Core
import { useSelector } from 'react-redux';

// Bus
import { useGeneral } from '../bus/general';
import { useModal } from '../bus/modal';

export const useModalElement = () => {
    const modalIsActive = useSelector(state => state.modal);
    const modalIsOn = Object.values(modalIsActive).some(modal => modal);
    const { addTask, addList, deleteTask } = useGeneral();
    const { toggleNewTaskModalActive, resetCurrentTask, toggleNewListModalActive } = useModal();
    return {
        modalIsOn,
        modalIsActive,
        addTask,
        addList,
        toggleNewTaskModalActive,
        deleteTask,
        resetCurrentTask,
        toggleNewListModalActive,
    }
}