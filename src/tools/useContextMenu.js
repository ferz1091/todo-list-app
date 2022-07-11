// Bus
import { useGeneral } from '../bus/general';
import { useModal } from '../bus/modal';

export const useContextMenu = () => {
    const {toggleTaskImportant, toggleIsCompleted} = useGeneral();
    const {toggleExactTimeModalActive, setCurrentTask} = useModal();

    return {
        toggleTaskImportant,
        toggleIsCompleted,
        toggleExactTimeModalActive,
        setCurrentTask,
    }
}