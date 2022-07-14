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
    },
    {
        name: "cleannnUPU",
        description: "",
        time: "15:00",
        date: "2022-07-14",
        deadline: "deadline",
        list: "",
        created: "11.07.2022, 16:47:02",
        important: false,
        isCompleted: false,
    }], lists: [{ name: "Products", tasks: [], isOpen: { uncompleted: true, completed: true } }]
};

export const generalSlice = createSlice({
    name: 'general',
    initialState,
    reducers,
})

export const generalActions = generalSlice.actions;
export default generalSlice.reducer;