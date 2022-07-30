// Core
import { configureStore } from '@reduxjs/toolkit';

// Reducers
import general from '../../bus/general/slice';
import modal from '../../bus/modal/slice';
import theme from '../../bus/theme/slice';

export const store = configureStore({
    reducer: {
        general,
        modal,
        theme,
    }
})
