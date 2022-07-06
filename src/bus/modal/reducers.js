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