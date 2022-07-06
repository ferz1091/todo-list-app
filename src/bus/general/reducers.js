export const addTask = (state, action) => {
    if (action.payload.list) {
        return {
            ...state,
            lists: state.lists.map((list) => {
                if (list.name === action.payload.list) {
                    return {
                        ...list,
                        tasks: [...list.tasks, action.payload]
                    }
                } else {
                    return {
                        ...list,
                    }
                }
            })
        }
    } else {
        return {
            ...state,
            tasks: [...state.tasks, action.payload],
        }
    }
}

export const addList = (state, action) => {
    return {
        ...state,
        lists: [...state.lists, action.payload],
    }
}

export const toggleListIsOpen = (state, action) => {
    return {
        ...state,
        lists: state.lists.map((list) => {
            if(list.name === action.payload) {
                return {
                    ...list,
                    isOpen: !list.isOpen,
                }
            } else {
                return {
                    ...list
                }
            }
        })
    }
}