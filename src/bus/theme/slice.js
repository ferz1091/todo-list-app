// Core
import { createSlice } from '@reduxjs/toolkit';

// Reducers
import * as reducers from './reducers';

const initialState = {
    background: 'crystal',
    colors: [{ name: 'History', wrapper: '70, 70, 70', task: '70, 70, 70' }, 
            { name: 'Unplanned', wrapper: '70, 70, 70', task: '70, 70, 70'},
            { name: 'Planned', wrapper: '70, 70, 70', task: '70, 70, 70' },
            { name: 'Today', wrapper: '70, 70, 70', task: '70, 70, 70' }]
}; 

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers,
})

export const themeActions = themeSlice.actions;
export default themeSlice.reducer;
