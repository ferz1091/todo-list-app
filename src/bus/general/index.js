// Core
import { useDispatch } from 'react-redux';

// Actions
import { generalActions } from './slice';

export const useGeneral = () => {
    const dispatch = useDispatch();
    function addTask(task) {
        dispatch(generalActions.addTask(task))
    }
    function addList(list) {
        dispatch(generalActions.addList(list))
    }
    function toggleUncompletedListIsOpen(name) {
        dispatch(generalActions.toggleUncompletedListIsOpen(name))
    }
    function toggleCompletedListIsOpen(name) {
        dispatch(generalActions.toggleCompletedListIsOpen(name))
    }
    function toggleTaskImportant(name, list) {
        dispatch(generalActions.toggleTaskImportant({name, list}))
    }
    function toggleIsCompleted(name, list) {
        dispatch(generalActions.toggleIsCompleted({name, list}))
    }
    return {
        addTask,
        addList,
        toggleUncompletedListIsOpen,
        toggleCompletedListIsOpen,
        toggleTaskImportant,
        toggleIsCompleted,
    }
}