export const toggleNewTaskModalActive = (state, action) => {
    return {
        ...state,
        NewTask: action.payload,
    }
}
export const toggleNewListModalActive = (state, action) => {
    return {
        ...state,
        NewList: action.payload,
    }
}
export const toggleExactTimeModalActive = (state, action) => {
    return {
        ...state,
        ExactTime: action.payload,
    }
}
export const toggleHourModalActive = (state, action) => {
    return {
        ...state,
        Hour: action.payload,
    }
}
export const toggleDayModalActive = (state, action) => {
    return {
        ...state,
        Day: action.payload,
    }
}
export const toggleChangeDateModalActive = (state, action) => {
    return {
        ...state,
        changeDate: action.payload,
    }
}
export const toggleDeleteTaskModalActive = (state, action) => {
    return {
        ...state,
        deleteTask: action.payload,
    }
}
export const toggleMoveTaskModalActive = (state, action) => {
    return {
        ...state,
        moveTask: action.payload,
    }
}
export const toggleInfoModalActive = (state, action) => {
    return {
        ...state,
        info: action.payload,
    }
}
export const toggleEditInfoModalActive = (state, action) => {
    return {
        ...state,
        editInfo: action.payload,
    }
}
export const setCurrentTask = (state, action) => {
    return {
        ...state,
        currentTask: action.payload,
    }
}
export const resetCurrentTask = (state, action) => {
    return {
        ...state,
        currentTask: null,
    }
}