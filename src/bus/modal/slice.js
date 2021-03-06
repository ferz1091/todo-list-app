// Core
import { createSlice } from '@reduxjs/toolkit';

// Reducers
import * as reducers from './reducers';

const initialState = {NewList: false, NewTask: false, ExactTime: false, Hour: false, Day: false, changeDate: false, deleteTask: false, moveTask: false, editInfo: false, info: false, renameList: false, deleteList: false, currentTask: null};
 
export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers,
})

export const modalActions = modalSlice.actions;
export default modalSlice.reducer;
