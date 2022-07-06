// Core
import { createSlice } from '@reduxjs/toolkit';

// Reducers
import * as reducers from './reducers';

const initialState = {NewList: false, NewTask: false};
 
export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers,
})

export const modalActions = modalSlice.actions;
export default modalSlice.reducer;