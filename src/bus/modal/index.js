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
    function toggleHourModalActive(isActive) {
        dispatch(modalActions.toggleHourModalActive(isActive))
    }
    function toggleDayModalActive(isActive) {
        dispatch(modalActions.toggleDayModalActive(isActive))
    }
    function toggleChangeDateModalActive(isActive) {
        dispatch(modalActions.toggleChangeDateModalActive(isActive))
    }
    function toggleDeleteTaskModalActive(isActive) {
        dispatch(modalActions.toggleDeleteTaskModalActive(isActive))
    }
    function toggleMoveTaskModalActive(isActive) {
        dispatch(modalActions.toggleMoveTaskModalActive(isActive))
    }
    function toggleInfoModalActive(isActive) {
        dispatch(modalActions.toggleInfoModalActive(isActive))
    }
    function toggleEditInfoModalActive(isActive) {
        dispatch(modalActions.toggleEditInfoModalActive(isActive))
    }
    function toggleRenameListModalActive(isActive) {
        dispatch(modalActions.toggleRenameListModalActive(isActive))
    }
    function toggleDeleteListModalActive(isActive) {
        dispatch(modalActions.toggleDeleteListModalActive(isActive))
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
        toggleHourModalActive,
        setCurrentTask,
        resetCurrentTask,
        toggleDayModalActive,
        toggleChangeDateModalActive,
        toggleDeleteTaskModalActive,
        toggleMoveTaskModalActive,
        toggleInfoModalActive,
        toggleEditInfoModalActive,
        toggleRenameListModalActive,
        toggleDeleteListModalActive,
    }
}
