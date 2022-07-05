// Core
import { useDispatch } from 'react-redux';

// Actions
import { generalActions } from './slice';

export const useGeneral = () => {
    const dispatch = useDispatch();
    function saveTask(task) {
        dispatch(generalActions.saveTask(task))
    }
    return {
        saveTask,
    }
}