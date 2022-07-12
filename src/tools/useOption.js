// Core
import { useSelector } from 'react-redux/es/hooks/useSelector';

// Bus
import { useGeneral } from '../bus/general';
import { useModal } from '../bus/modal';

export const useOption = () => {
    const task = useSelector(state => state.modal.currentTask);
    const { rescheduleExactTime, deleteTask, addTask } = useGeneral();
    const { toggleDayModalActive, 
            resetCurrentTask, 
            toggleHourModalActive, 
            toggleChangeDateModalActive, 
            toggleExactTimeModalActive, 
            toggleDeleteTaskModalActive,
            toggleMoveTaskModalActive } = useModal();

    return {
        task,
        rescheduleExactTime,
        deleteTask,
        addTask,
        toggleDayModalActive,
        resetCurrentTask,
        toggleHourModalActive,
        toggleChangeDateModalActive,
        toggleExactTimeModalActive,
        toggleDeleteTaskModalActive,
        toggleMoveTaskModalActive,
    }
}