// Core
import { useState } from 'react';
import { useSelector } from 'react-redux';

// Bus
import { useGeneral } from '../bus/general';
import { useModal } from '../bus/modal';

export const useContextMenu = () => {
    const [moveTaskIsOpen, toggleMoveTaskIsOpen] = useState(false);
    const lists = useSelector(state => state.general.lists);
    const {toggleTaskImportant, toggleIsCompleted, addTask, deleteTask} = useGeneral();
    const { toggleExactTimeModalActive, 
            toggleHourModalActive, 
            toggleDayModalActive, 
            setCurrentTask, 
            toggleChangeDateModalActive, 
            toggleDeleteTaskModalActive, 
            toggleMoveTaskModalActive, 
            toggleNewListModalActive,
            toggleInfoModalActive,
            toggleEditInfoModalActive } = useModal();

    return {
        lists,
        toggleTaskImportant,
        toggleIsCompleted,
        toggleExactTimeModalActive,
        toggleHourModalActive,
        toggleDayModalActive,
        setCurrentTask,
        toggleChangeDateModalActive,
        toggleDeleteTaskModalActive,
        toggleMoveTaskModalActive,
        moveTaskIsOpen,
        toggleMoveTaskIsOpen,
        toggleNewListModalActive,
        toggleInfoModalActive,
        toggleEditInfoModalActive,
        addTask,
        deleteTask,
    }
}
