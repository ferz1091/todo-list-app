// Core
import { useState } from 'react';
import { useSelector } from 'react-redux/es/exports';

// Bus
import { useGeneral } from '../bus/general';
import { useModal } from '../bus/modal';

// Hooks
import { useSortTasks } from './useSortTasks';

export const useTasks = () => {
    const [PlannedArrayDateIsOpen, setPlannedArrayDateIsOpen] = useState([]);
    const [ListArrayDateIsOpen, setListArrayDateIsOpen] = useState([]);
    const [HistoryArrayDateIsOpen, setHistoryArrayDateIsOpen] = useState([]);
    const [unsortedUncompletedIsOpen, toggleUnsortedUncompletedIsOpen] = useState(true);
    const [unsortedCompletedIsOpen, toggleUnsortedCompletedIsOpen] = useState(true);
    const [completedIsOpen, toggleCompletedIsOpen] = useState(true);
    const tasks = useSelector(state => state.general.tasks);
    const lists = useSelector(state => state.general.lists);
    const { toggleUncompletedListIsOpen, toggleCompletedListIsOpen, toggleTaskImportant, toggleIsCompleted } = useGeneral();
    const { toggleDeleteListModalActive, toggleRenameListModalActive, toggleNewListModalActive } = useModal();
    const { sortByDeadline, sortCompletedFromLists, sortUnplanned, sortPlanned } = useSortTasks();

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
        sortByDeadline,
        sortCompletedFromLists,
        sortUnplanned,
        sortPlanned,
        toggleDeleteListModalActive,
        toggleRenameListModalActive,
        PlannedArrayDateIsOpen,
        setPlannedArrayDateIsOpen,
        ListArrayDateIsOpen,
        setListArrayDateIsOpen,
        HistoryArrayDateIsOpen,
        setHistoryArrayDateIsOpen,
        toggleNewListModalActive,
    }
}
