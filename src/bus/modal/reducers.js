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