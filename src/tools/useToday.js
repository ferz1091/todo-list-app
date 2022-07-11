// Core
import { useState } from 'react';
import { useSelector } from 'react-redux/es/exports';

// Bus
import { useModal } from '../bus/modal';
import { useGeneral } from '../bus/general';

export const useToday = () => {
    const [unsortedUncompletedIsOpen, toggleUnsortedUncompletedIsOpen] = useState(true);
    const [unsortedCompletedIsOpen, toggleUnsortedCompletedIsOpen] = useState(true);
    const [completedIsOpen, toggleCompletedIsOpen] = useState(true);
    const tasks = useSelector(state => state.general.tasks);
    const lists = useSelector(state => state.general.lists);
    const modalIsActive = useSelector(state => state.modal);
    const { toggleNewTaskModalActive, toggleNewListModalActive, toggleExactTimeModalActive, resetCurrentTask } = useModal();
    const { addTask, addList, toggleUncompletedListIsOpen, toggleCompletedListIsOpen, toggleTaskImportant, toggleIsCompleted, rescheduleExactTime } = useGeneral();
    return {
        tasks,
        lists,
        modalIsActive,
        unsortedUncompletedIsOpen,
        unsortedCompletedIsOpen, 
        completedIsOpen,
        toggleUnsortedUncompletedIsOpen,
        toggleUnsortedCompletedIsOpen,
        toggleCompletedIsOpen,
        toggleNewTaskModalActive,
        toggleNewListModalActive,
        toggleExactTimeModalActive,
        addTask,
        addList,
        toggleUncompletedListIsOpen,
        toggleCompletedListIsOpen,
        toggleTaskImportant,
        toggleIsCompleted,
        resetCurrentTask,
        rescheduleExactTime,
    }
}