// Core
import { useState } from 'react';
import { useSelector } from 'react-redux/es/exports';

// Bus
import { useModal } from '../bus/modal';
import { useGeneral } from '../bus/general';

export const useToday = () => {
    const [unsortedIsOpen, toggleUnsortedIsOpen] = useState(true);
    const [completedIsOpen, toggleCompletedIsOpen] = useState(true);
    const tasks = useSelector(state => state.general.tasks);
    const lists = useSelector(state => state.general.lists);
    const modalIsActive = useSelector(state => state.modal);
    const { toggleNewTaskModalActive, toggleNewListModalActive } = useModal();
    const { addTask, addList, toggleUncompletedListIsOpen, toggleCompletedListIsOpen, toggleTaskImportant, toggleIsCompleted } = useGeneral();
    return {
        tasks,
        lists,
        modalIsActive,
        unsortedIsOpen, 
        completedIsOpen,
        toggleUnsortedIsOpen,
        toggleCompletedIsOpen,
        toggleNewTaskModalActive,
        toggleNewListModalActive,
        addTask,
        addList,
        toggleUncompletedListIsOpen,
        toggleCompletedListIsOpen,
        toggleTaskImportant,
        toggleIsCompleted,
    }
}