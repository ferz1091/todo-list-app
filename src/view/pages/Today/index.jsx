// Core
import React from 'react';

// Components
import { List, Unsorted, Completed } from '../../components';

// Hooks
import { useTasks } from '../../../tools';

// Styles
import { TodayWrapper } from './styles';

export const Today = () => {
    const { tasks,
            lists,
            unsortedUncompletedIsOpen,
            unsortedCompletedIsOpen,
            completedIsOpen,
            toggleUnsortedUncompletedIsOpen,
            toggleUnsortedCompletedIsOpen,
            toggleCompletedIsOpen,
            toggleUncompletedListIsOpen,
            toggleCompletedListIsOpen,
            toggleTaskImportant,
            toggleIsCompleted,
            sortByDeadline,
            sortCompletedFromLists } = useTasks();

    return (
        <TodayWrapper className='Today'>
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
                        <Unsorted
                            key={index}
                            index={index}
                            task={task}
                            tasks={tasks}
                            toggleTaskImportant={toggleTaskImportant}
                            toggleIsCompleted={toggleIsCompleted}
                            unsortedUncompletedIsOpen={unsortedUncompletedIsOpen}
                            toggleUnsortedUncompletedIsOpen={toggleUnsortedUncompletedIsOpen}
                        />
                    )
            }
            {lists.length === 0 ? null : lists.map((list) =>
                [...list.tasks.filter(task => !task.isCompleted && task.date === new Date().toISOString().slice(0, 10))].sort((a, b) => {
                    return sortByDeadline(a, b);
                })
                    .map((task, index, tasks) =>
                        <List 
                            key = {index}
                            index = {index}
                            list = {list}
                            task = {task}
                            tasks = {tasks} 
                            toggleTaskImportant = {toggleTaskImportant}
                            toggleIsCompleted = {toggleIsCompleted}
                            toggleUncompletedListIsOpen = {toggleUncompletedListIsOpen}
                        />
                    )
                )
            }
            {tasks.filter(task => task.isCompleted && task.date === new Date().toISOString().slice(0, 10)).length !== 0
                || lists.filter(list => list.tasks.some(task => task.isCompleted && task.date === new Date().toISOString().slice(0, 10))).length !== 0
                ?
                <React.Fragment>
                    <div onClick={() => toggleCompletedIsOpen(!completedIsOpen)} className='completed'>
                        Completed
                        <span className={completedIsOpen ? 'dropIcon' : 'upIcon'}></span>
                    </div>
                    {completedIsOpen ? 
                    lists.map(list => list.tasks.filter(task => task.isCompleted && task.date === new Date().toISOString().slice(0, 10))
                        .sort((a, b) => {
                            return sortCompletedFromLists(a, b)
                        })
                        .map((task, index) =>
                                <Completed
                                    index= {index}
                                    key={index}
                                    task={task}
                                    list = {list}
                                    toggleTaskImportant={toggleTaskImportant}
                                    toggleIsCompleted={toggleIsCompleted}
                                    toggleCompletedListIsOpen={toggleCompletedListIsOpen}
                                />
                        )
                    )
                     : null}
                    {tasks.filter(task => task.isCompleted && task.date === new Date().toISOString().slice(0, 10)).length !== 0 && completedIsOpen ?
                        <div onClick={() => toggleUnsortedCompletedIsOpen(!unsortedCompletedIsOpen)} className='unsorted'>
                            Unsorted
                            <span className={unsortedCompletedIsOpen ? 'dropIcon' : 'upIcon'}></span>
                        </div> 
                        : 
                        null
                    }
                    {completedIsOpen && unsortedCompletedIsOpen ?
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
        </TodayWrapper>
    )
}