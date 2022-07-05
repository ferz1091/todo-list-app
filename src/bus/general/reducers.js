export const saveTask = (state, action) => {
    return [
        ...state, action.payload,
    ]
}