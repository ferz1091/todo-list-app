// Core
import React from 'react';

// Components
import { NewTask, NewList, List, Unsorted } from '../../components';

// Hooks
import { useToday, useSortToday } from '../../../tools';

// Styles
import { TodayWrapper } from './styles';

export const Today = () => {
    const { tasks,
            lists,
            modalIsActive,
            unsortedIsOpen,
            toggleUnsortedIsOpen,
            toggleNewTaskModalActive,
            toggleNewListModalActive,
            addTask,
            addList,
            toggleListIsOpen,
            toggleTaskImportant } = useToday();
    const { sortByDeadline } = useSortToday();

    return (
        <TodayWrapper className='Today'>
            {lists.length === 0 ? null : lists.map((list) =>
                [...list.tasks].sort((a, b) => {
                    return sortByDeadline(a, b);
                })
                    .map((task, index, tasks) =>
                        <React.Fragment key={index}>
                            {index === 0 ?
                                <div
                                    className='list'
                                    onClick={() => toggleListIsOpen(list.name)}
                                >
                                    {list.name}
                                </div>
                                :
                                null
                            }
                            {list.isOpen ?
                                <List
                                    index={index}
                                    task={task}
                                    tasks={tasks}
                                    toggleTaskImportant={toggleTaskImportant}
                                />
                                :
                                null
                            }
                        </React.Fragment>
                    ))
            }
            {tasks.filter(task => task.date === new Date().toISOString().slice(0, 10)).length === 0
                && lists.every(list => list.tasks.filter(task => task.date === new Date().toISOString().slice(0, 10)).length === 0) ?
                <div className='Empty-tasks-div'>
                    You don't have any tasks for today
                </div>
                :
                tasks.filter(task => task.date === new Date().toISOString().slice(0, 10)).sort((a, b) => {
                    return sortByDeadline(a, b);
                })
                    .map((task, index, tasks) =>
                        <React.Fragment key={index}>
                            {index === 0 ?
                                <div
                                    className='unsorted'
                                    onClick={() => toggleUnsortedIsOpen(!unsortedIsOpen)}
                                >
                                    Unsorted
                                </div>
                                :
                                null
                            }
                            {unsortedIsOpen ?
                                <Unsorted
                                    index={index}
                                    task={task}
                                    tasks={tasks}
                                    toggleTaskImportant={toggleTaskImportant}
                                />
                                :
                                null
                            }
                        </React.Fragment>)
            }
            {modalIsActive.NewTask ?
                <NewTask
                    addTask={addTask}
                    toggleNewTaskModalActive={toggleNewTaskModalActive}
                />
                :
                null
            }
            {modalIsActive.NewList ?
                <NewList
                    addList={addList}
                    toggleNewListModalActive={toggleNewListModalActive}
                />
                :
                null
            }
            {!modalIsActive.NewTask ?
                <button onClick={() => toggleNewTaskModalActive(true)}>
                    +
                </button>
                :
                null
            }
        </TodayWrapper>
    )
}