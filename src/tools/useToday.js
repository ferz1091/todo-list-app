// Core
import { useState } from 'react';
import { useSelector } from 'react-redux/es/exports';

// Bus
import { useGeneral } from '../bus/general';

export const useToday = () => {
    const [unsortedUncompletedIsOpen, toggleUnsortedUncompletedIsOpen] = useState(true);
    const [unsortedCompletedIsOpen, toggleUnsortedCompletedIsOpen] = useState(true);
    const [completedIsOpen, toggleCompletedIsOpen] = useState(true);
    const tasks = useSelector(state => state.general.tasks);
    const lists = useSelector(state => state.general.lists);
    const { toggleUncompletedListIsOpen, toggleCompletedListIsOpen, toggleTaskImportant, toggleIsCompleted } = useGeneral();
    return {
        tasks,
        lists,
        unsortedUncompletedIsOpen,
        unsortedCompletedIsOpen, 
        completedIsOpen,
        toggleUnsortedUncompletedIsOpen,
        toggleUnsortedCompletedIsOpen,
        toggleCompletedIsOpen,
        toggleUncompletedListIsOpen,
        toggleCompletedListIsOpen,
        toggleTaskImportant,
        toggleIsCompleted,
    }
}