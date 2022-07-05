// Core
import { createSlice } from '@reduxjs/toolkit';

// Reducers
import * as reducers from './reducers';

const initialState = [{name: 'Artem'}];
 
export const generalSlice = createSlice({
    name: 'general',
    initialState,
    reducers,
})

export const generalActions = generalSlice.actions;
export default generalSlice.reducer;