// Core
import { useDispatch } from 'react-redux';

// Actions
import { modalActions } from './slice';

export const useModal = () => {
    const dispatch = useDispatch();
    function toggleNewTaskModalActive(isActive) {
        dispatch(modalActions.toggleNewTaskModalActive(isActive))
    }
    function toggleNewListModalActive(isActive) {
        dispatch(modalActions.toggleNewListModalActive(isActive))
    }
    function toggleExactTimeModalActive(isActive) {
        dispatch(modalActions.toggleExactTimeModalActive(isActive))
    }
    function setCurrentTask(task) {
        dispatch(modalActions.setCurrentTask(task))
    }
    function resetCurrentTask() {
        dispatch(modalActions.resetCurrentTask())
    }
    return {
        toggleNewTaskModalActive,
        toggleNewListModalActive,
        toggleExactTimeModalActive,
        setCurrentTask,
        resetCurrentTask,
    }
}