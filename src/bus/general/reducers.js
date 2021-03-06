export const addTask = (state, action) => {
    if (action.payload.list) {
        return {
            ...state,
            lists: state.lists.map((list) => {
                if (list.name === action.payload.list) {
                    if (list.tasks.some(task => task.name === action.payload.name)) {
                        let tempName = action.payload.name;
                        // eslint-disable-next-line no-loop-func
                        while (list.tasks.some(task => task.name === tempName)) {
                            if (tempName === action.payload.name) {
                                console.log(tempName);
                                if (isNaN(Number(tempName.slice(-1)))) {
                                    tempName = tempName + '1'
                                } else {
                                    tempName = tempName + '.1'
                                }
                            } else {
                                tempName = tempName.slice(0, -1) + (Number(tempName.slice(-1)) + 1);
                            }
                        }
                        return {
                            ...list,
                            tasks: [...list.tasks, { ...action.payload, name: tempName }]
                        }
                    } else {
                        return {
                            ...list,
                            tasks: [...list.tasks, action.payload]
                        }
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

export const toggleUncompletedListIsOpen = (state, action) => {
    return {
        ...state,
        lists: state.lists.map((list) => {
            if (list.name === action.payload) {
                return {
                    ...list,
                    isOpen: {
                        ...list.isOpen,
                        uncompleted: !list.isOpen.uncompleted
                    },
                }
            } else {
                return {
                    ...list
                }
            }
        })
    }
}
export const toggleCompletedListIsOpen = (state, action) => {
    return {
        ...state,
        lists: state.lists.map((list) => {
            if (list.name === action.payload) {
                return {
                    ...list,
                    isOpen: {
                        ...list.isOpen,
                        completed: !list.isOpen.completed
                    },
                }
            } else {
                return {
                    ...list
                }
            }
        })
    }
}

export const toggleTaskImportant = (state, action) => {
    if (action.payload.list) {
        return {
            ...state,
            lists: state.lists.map((list) => {
                if (list.name === action.payload.list) {
                    return {
                        ...list,
                        tasks: list.tasks.map((task) => {
                            if (task.name === action.payload.name) {
                                return {
                                    ...task,
                                    important: !task.important
                                }
                            } else {
                                return {
                                    ...task
                                }
                            }
                        })
                    }
                } else {
                    return {
                        ...list
                    }
                }
            })
        }
    } else {
        return {
            ...state,
            tasks: state.tasks.map((task) => {
                if (task.name === action.payload.name) {
                    return {
                        ...task,
                        important: !task.important
                    }
                } else {
                    return {
                        ...task
                    }
                }
            })
        }
    }
}
export const toggleIsCompleted = (state, action) => {
    if (action.payload.list) {
        return {
            ...state,
            lists: state.lists.map((list) => {
                if (list.name === action.payload.list) {
                    return {
                        ...list,
                        tasks: list.tasks.map((task) => {
                            if (task.name === action.payload.name) {
                                return {
                                    ...task,
                                    isCompleted: !task.isCompleted,
                                    completed: !task.isCompleted ? action.payload.date : null
                                }
                            } else {
                                return {
                                    ...task
                                }
                            }
                        })
                    }
                } else {
                    return {
                        ...list
                    }
                }
            })
        }
    } else {
        return {
            ...state,
            tasks: state.tasks.map((task) => {
                if (task.name === action.payload.name) {
                    return {
                        ...task,
                        isCompleted: !task.isCompleted,
                        completed: !task.isCompleted ? action.payload.date : null
                    }
                } else {
                    return {
                        ...task
                    }
                }
            })
        }
    }
}
export const rescheduleExactTime = (state, action) => {
    if (action.payload.list) {
        return {
            ...state,
            lists: state.lists.map((list) => {
                if (list.name === action.payload.list) {
                    return {
                        ...list,
                        tasks: list.tasks.map((task) => {
                            if (task.name === action.payload.name) {
                                return {
                                    ...action.payload
                                }
                            } else {
                                return {
                                    ...task
                                }
                            }
                        })
                    }
                } else {
                    return {
                        ...list
                    }
                }
            })
        }
    } else {
        return {
            ...state,
            tasks: state.tasks.map((task) => {
                if (task.name === action.payload.name) {
                    return {
                        ...action.payload
                    }
                } else {
                    return {
                        ...task
                    }
                }
            })
        }
    }
}
export const changeTaskInfo = (state, action) => {
    if (action.payload.task.list) {
        return {
            ...state,
            lists: state.lists.map((list) => {
                if (list.name === action.payload.task.list) {
                    return {
                        ...list,
                        tasks: list.tasks.map((task) => {
                            if (task.name === action.payload.prevName) {
                                return {
                                    ...action.payload.task
                                }
                            } else {
                                return {
                                    ...task
                                }
                            }
                        })
                    }
                } else {
                    return {
                        ...list
                    }
                }
            })
        }
    } else {
        return {
            ...state,
            tasks: state.tasks.map((task) => {
                if (task.name === action.payload.prevName) {
                    return {
                        ...action.payload.task
                    }
                } else {
                    return {
                        ...task
                    }
                }
            })
        }
    }
}
export const deleteTask = (state, action) => {
    if (action.payload.list) {
        return {
            ...state,
            lists: state.lists.map((list) => {
                if (list.name === action.payload.list) {
                    return {
                        ...list,
                        tasks: list.tasks.filter((task) => task.name !== action.payload.name)
                    }
                } else {
                    return {
                        ...list
                    }
                }
            })
        }
    } else {
        return {
            ...state,
            tasks: state.tasks.filter((task) => task.name !== action.payload.name)
        }
    }
}
export const renameList = (state, action) => {
    return {
        ...state,
        lists: state.lists.map(list => {
            if (list.name === action.payload.prevName) {
                return {
                    ...list,
                    name: action.payload.name
                }
            } else {
                return {
                    ...list
                }
            }
        })
    }
}
export const deleteList = (state, action) => {
    return {
        ...state,
        lists: state.lists.filter(list => list.name !== action.payload)
    }
}
export const toggleColor = (state, action) => {
    return {
        ...state,
        lists: state.lists.map(list => {
            if (list.name === action.payload.list) {
                return {
                    ...list,
                    colors: {
                        wrapper: action.payload.wrapper,
                        task: action.payload.task
                    }
                }
            } else {
                return {
                    ...list
                }
            }
        })
    }
}
