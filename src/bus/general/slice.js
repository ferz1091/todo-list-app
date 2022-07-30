// Core
import { createSlice } from '@reduxjs/toolkit';

// Reducers
import * as reducers from './reducers';

const initialState = {
    tasks: [{
        name: "asdasd",
        description: "",
        time: "",
        date: "2022-07-13",
        deadline: "deadline",
        list: "",
        created: "11.07.2022, 16:47:02",
        important: false,
        isCompleted: false,
    }
    ], lists: [{
        name: "Products", tasks: [{
            name: "cleannnUPU",
            description: "",
            time: "15:00",
            date: "2022-07-14",
            deadline: "deadline",
            list: "Products",
            created: "11.07.2022, 16:47:02",
            important: false,
            isCompleted: false,
        }], isOpen: { uncompleted: true, completed: true }, colors: {wrapper: '70, 70, 70', task: '70, 70, 70'}}],
        background: 'crystal'
};

export const generalSlice = createSlice({
    name: 'general',
    initialState,
    reducers,
})

export const generalActions = generalSlice.actions;
export default generalSlice.reducer;
