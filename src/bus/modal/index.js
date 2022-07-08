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
    return {
        toggleNewTaskModalActive,
        toggleNewListModalActive,
    }
}