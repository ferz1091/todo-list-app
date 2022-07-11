// Bus
import { useGeneral } from '../bus/general';
import { useModal } from '../bus/modal';

export const useContextMenu = () => {
    const {toggleTaskImportant, toggleIsCompleted} = useGeneral();
    const { toggleExactTimeModalActive, toggleHourModalActive, toggleDayModalActive, setCurrentTask, toggleChangeDateModalActive, toggleDeleteTaskModalActive } = useModal();

    return {
        toggleTaskImportant,
        toggleIsCompleted,
        toggleExactTimeModalActive,
        toggleHourModalActive,
        toggleDayModalActive,
        setCurrentTask,
        toggleChangeDateModalActive,
        toggleDeleteTaskModalActive,
    }
}