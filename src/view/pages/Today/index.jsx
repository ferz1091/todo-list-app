// Core
import React from 'react';

// Components
import { NewTask, NewList, List, Unsorted, Completed } from '../../components';

// Hooks
import { useToday, useSortToday } from '../../../tools';

// Styles
import { TodayWrapper } from './styles';

export const Today = () => {
    const { tasks,
            lists,
            modalIsActive,
            unsortedIsOpen,
            completedIsOpen,
            toggleUnsortedIsOpen,
            toggleCompletedIsOpen,
            toggleNewTaskModalActive,
            toggleNewListModalActive,
            addTask,
            addList,
            toggleUncompletedListIsOpen,
            toggleCompletedListIsOpen,
            toggleTaskImportant,
            toggleIsCompleted } = useToday();
    const { sortByDeadline, sortCompletedFromLists } = useSortToday();
    console.log(completedIsOpen);

    return (
        <TodayWrapper className='Today'>
            {lists.length === 0 ? null : lists.map((list) =>
                [...list.tasks.filter(task => !task.isCompleted && task.date === new Date().toISOString().slice(0, 10))].sort((a, b) => {
                    return sortByDeadline(a, b);
                })
                    .map((task, index, tasks) =>
                        <React.Fragment key={index}>
                            {index === 0 ?
                                <div
                                    className='list'
                                    onClick={() => toggleUncompletedListIsOpen(list.name)}
                                >
                                    {list.name}
                                </div>
                                :
                                null
                            }
                            {list.isOpen.uncompleted ?
                                <List
                                    index={index}
                                    task={task}
                                    tasks={tasks}
                                    toggleTaskImportant={toggleTaskImportant}
                                    toggleIsCompleted={toggleIsCompleted}
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
                tasks.filter(task => task.date === new Date().toISOString().slice(0, 10) && !task.isCompleted).sort((a, b) => {
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
                                    toggleIsCompleted={toggleIsCompleted}
                                />
                                :
                                null
                            }
                        </React.Fragment>)
            }
            {tasks.filter(task => task.isCompleted && task.date === new Date().toISOString().slice(0, 10)).length !== 0
                || lists.filter(list => list.tasks.some(task => task.isCompleted && task.date === new Date().toISOString().slice(0, 10))).length !== 0
                ?
                <React.Fragment>
                    <div onClick={() => toggleCompletedIsOpen(!completedIsOpen)} className='completed'>
                        Completed
                    </div>
                    {completedIsOpen ? 
                    lists.map(list => list.tasks.filter(task => task.isCompleted && task.date === new Date().toISOString().slice(0, 10))
                        .sort((a, b) => {
                            return sortCompletedFromLists(a, b)
                        })
                        .map((task, index) =>
                            <React.Fragment key = {index}>
                                {
                                    index === 0 ?
                                        <div
                                            className='list'
                                            onClick={() => toggleCompletedListIsOpen(list.name)}
                                        >
                                            {list.name}
                                        </div>
                                        :
                                        null
                                }
                                { list.isOpen.completed ?
                                    <Completed
                                        key={index}
                                        task={task}
                                        toggleTaskImportant={toggleTaskImportant}
                                        toggleIsCompleted={toggleIsCompleted}
                                    />
                                    :
                                    null
                                }
                            </React.Fragment>
                        )
                    )
                     : null}
                    {tasks.filter(task => task.isCompleted && task.date === new Date().toISOString().slice(0, 10)).length !== 0 ?
                        <div className='unsorted'>
                            Unsorted
                        </div> 
                        : 
                        null
                    }
                    {completedIsOpen ?
                    tasks.filter(task => task.isCompleted && task.date === new Date().toISOString().slice(0, 10))
                        .map((task, index) =>
                            <Completed
                                key={index}
                                task={task}
                                toggleTaskImportant={toggleTaskImportant}
                                toggleIsCompleted={toggleIsCompleted}
                            />
                        )
                    : null}
                </React.Fragment>
                :
                null}
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