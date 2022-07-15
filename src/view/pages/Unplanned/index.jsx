// Core
import React from 'react';

// Hooks
import { useTasks } from '../../../tools';

// Components
import { List, Unsorted, Completed } from '../../components';

// Styles
import { UnplannedWrapper } from './styles';

export const Unplanned = () => {
    const { lists,
            tasks, 
            toggleTaskImportant, 
            toggleIsCompleted, 
            toggleUncompletedListIsOpen, 
            sortUnplanned,
            unsortedUncompletedIsOpen,
            toggleUnsortedUncompletedIsOpen,
            toggleCompletedIsOpen,
            completedIsOpen,
            toggleCompletedListIsOpen,
            toggleUnsortedCompletedIsOpen,
            unsortedCompletedIsOpen } = useTasks();

    return (
        <UnplannedWrapper className='Unplanned'>
            {lists.length === 0 ? null : lists.map((list) =>
                [...list.tasks.filter(task => !task.isCompleted && task.deadline === 'not planned')]
                    .sort((a, b) => {
                        return sortUnplanned(a, b);
                    })
                    .map((task, index, tasks) =>
                        <List
                            key={index}
                            index={index}
                            list={list}
                            task={task}
                            tasks={tasks}
                            toggleTaskImportant={toggleTaskImportant}
                            toggleIsCompleted={toggleIsCompleted}
                            toggleUncompletedListIsOpen={toggleUncompletedListIsOpen}
                        />
                    )
            )
            }
            {!tasks.some(task => task.deadline === 'not planned')
                && lists.every(list => !list.tasks.some(task => task.deadline === 'not planned')) ?
                <div className='Empty-tasks-div'>
                    You don't have any unplanned tasks
                </div>
                :
                tasks.filter(task => task.deadline === 'not planned' && !task.isCompleted).sort((a, b) => {
                    return sortUnplanned(a, b);
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
            {tasks.some(task => task.isCompleted && task.deadline === 'not planned')
                || lists.some(list => list.tasks.some(task => task.isCompleted && task.deadline === 'not planned'))
                ?
                <React.Fragment>
                    <div onClick={() => toggleCompletedIsOpen(!completedIsOpen)} className='completed'>
                        Completed
                        <span className={completedIsOpen ? 'dropIcon' : 'upIcon'}></span>
                    </div>
                    {completedIsOpen ?
                        lists.map(list => list.tasks.filter(task => task.isCompleted && task.deadline === 'not planned')
                            .sort((a, b) => {
                                return sortUnplanned(a, b)
                            })
                            .map((task, index) =>
                                <Completed
                                    index={index}
                                    key={index}
                                    task={task}
                                    list={list}
                                    toggleTaskImportant={toggleTaskImportant}
                                    toggleIsCompleted={toggleIsCompleted}
                                    toggleCompletedListIsOpen={toggleCompletedListIsOpen}
                                />
                            )
                        )
                        : 
                        null
                    }
                    {tasks.some(task => task.isCompleted && task.deadline === 'not planned') && completedIsOpen ?
                        <div onClick={() => toggleUnsortedCompletedIsOpen(!unsortedCompletedIsOpen)} className='unsorted'>
                            Unsorted
                            <span className={unsortedCompletedIsOpen ? 'dropIcon' : 'upIcon'}></span>
                        </div>
                        :
                        null
                    }
                    {completedIsOpen && unsortedCompletedIsOpen ?
                        tasks.filter(task => task.isCompleted && task.deadline === 'not planned')
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
        </UnplannedWrapper>
    )
}