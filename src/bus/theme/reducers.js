export const toggleBackground = (state, action) => {
    return {
        ...state,
        background: action.payload
    }
}
export const toggleColor = (state, action) => {
    return {
        ...state,
        colors: state.colors.map(page => {
            if (page.name === action.payload.page) {
                return {
                    ...page,
                    wrapper: action.payload.wrapper,
                    task: action.payload.task
                }
            } else {
                return {
                    ...page
                }
            }
        })
    }
}