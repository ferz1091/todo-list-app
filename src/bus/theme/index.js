// Core
import { useDispatch } from 'react-redux';

// Actions
import { themeActions } from './slice';

export const useTheme = () => {
    const dispatch = useDispatch();
    function toggleBackground(bg) {
        dispatch(themeActions.toggleBackground(bg))
    }
    function toggleColor(wrapper, task, page) {
        dispatch(themeActions.toggleColor({wrapper, task, page}))
    }

    return {
        toggleBackground,
        toggleColor,
    }
}