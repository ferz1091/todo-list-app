// Core
import { configureStore } from '@reduxjs/toolkit';

// Reducers
import general from '../../bus/general/slice';

export const store = configureStore({
    reducer: {
        general,
    }
})