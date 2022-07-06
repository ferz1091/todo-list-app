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
    function toggleListIsOpen(name) {
        dispatch(generalActions.toggleListIsOpen(name))
    }
    return {
        addTask,
        addList,
        toggleListIsOpen,
    }
}