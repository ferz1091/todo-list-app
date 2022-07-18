// Core
import { useSelector } from 'react-redux/es/hooks/useSelector';

// Bus
import { useGeneral } from '../bus/general';
import { useModal } from '../bus/modal';

export const useOption = () => {
    const task = useSelector(state => state.modal.currentTask);
    const { rescheduleExactTime, deleteTask, addTask, changeTaskInfo } = useGeneral();
    const { toggleDayModalActive, 
            resetCurrentTask, 
            toggleHourModalActive, 
            toggleChangeDateModalActive, 
            toggleExactTimeModalActive, 
            toggleDeleteTaskModalActive,
            toggleMoveTaskModalActive,
            toggleInfoModalActive,
            toggleEditInfoModalActive } = useModal();

    return {
        task,
        rescheduleExactTime,
        deleteTask,
        addTask,
        changeTaskInfo,
        toggleDayModalActive,
        resetCurrentTask,
        toggleHourModalActive,
        toggleChangeDateModalActive,
        toggleExactTimeModalActive,
        toggleDeleteTaskModalActive,
        toggleMoveTaskModalActive,
        toggleInfoModalActive,
        toggleEditInfoModalActive
    }
}