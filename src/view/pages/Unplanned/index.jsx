// Core
import React from 'react';

// Hooks
import { useTasks, usePagesThemeMenu } from '../../../tools';

// Components
import { List, Unsorted, Completed, ThemePagesPanel } from '../../components';

// Styles
import { UnplannedWrapper, TaskSectionWrapper } from './styles';

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
    const { colors } = usePagesThemeMenu();

    return (
        <UnplannedWrapper 
            className='Unplanned page'
            colorWrapper={colors.find(page => page.name === 'Unplanned').wrapper}
        >
            <div className='control-panel'>
                <h1>Unplanned</h1>
                <ThemePagesPanel page='Unplanned' />
            </div>
            {!tasks.some(task => task.deadline === 'not planned')
                && lists.every(list => !list.tasks.some(task => task.deadline === 'not planned')) ?
                <div className='Empty-tasks-div'>
                    You don't have any unplanned tasks
                </div>
                :
                null
            }
            {lists.some(list => list.tasks.some(task => task.deadline === 'not planned' && !task.isCompleted)) ? 
                lists.filter(list => list.tasks.some(task => task.deadline === 'not planned' && !task.isCompleted)).map((list, index) =>
                    <TaskSectionWrapper 
                        className='List wrapper' 
                        isOpen={list.isOpen.uncompleted}
                        key={index}
                        colorWrapper={colors.find(page => page.name === 'Unplanned').wrapper}
                        colorTask={colors.find(page => page.name === 'Unplanned').task}
                    >
                        {list.tasks.filter(task => !task.isCompleted && task.deadline === 'not planned')
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
                        }
                    </TaskSectionWrapper>
                )
                :
                null
            }
            {tasks.some(task => task.deadline === 'not planned' && !task.isCompleted) ?
                <TaskSectionWrapper 
                    className='Unsorted wrapper' 
                    isOpen={unsortedUncompletedIsOpen}
                    colorWrapper={colors.find(page => page.name === 'Unplanned').wrapper}
                    colorTask={colors.find(page => page.name === 'Unplanned').task}
                >
                    <div
                        className='Unsorted header'
                        onClick={() => toggleUnsortedUncompletedIsOpen(!unsortedUncompletedIsOpen)}
                    >
                        Unsorted
                        <span className={unsortedUncompletedIsOpen ? 'dropIcon' : 'upIcon'}></span>
                    </div>
                    {tasks.filter(task => task.deadline === 'not planned' && !task.isCompleted).sort((a, b) => {
                        return sortUnplanned(a, b);
                        }
                    )
                    .map((task, index, tasks) =>
                        <Unsorted
                            key={index}
                            index={index}
                            task={task}
                            tasks={tasks}
                            toggleTaskImportant={toggleTaskImportant}
                            toggleIsCompleted={toggleIsCompleted}
                            unsortedUncompletedIsOpen={unsortedUncompletedIsOpen}
                        />
                        )
                    }
                </TaskSectionWrapper> 
                : 
                null
            }
            {tasks.some(task => task.isCompleted && task.deadline === 'not planned')
                || lists.some(list => list.tasks.some(task => task.isCompleted && task.deadline === 'not planned'))
                ?
                <div className='Completed wrapper'>
                    <div 
                        onClick={() => toggleCompletedIsOpen(!completedIsOpen)} 
                        className='Completed header'
                    >
                        Completed
                        <span className={completedIsOpen ? 'dropIcon' : 'upIcon'}></span>
                    </div>
                    {completedIsOpen ?
                        lists.filter(list => list.tasks.some(task => task.deadline === 'not planned' && task.isCompleted))
                            .map((list, index) => 
                                <TaskSectionWrapper 
                                    key={index} 
                                    className='List wrapper'
                                    isOpen={list.isOpen.completed}
                                    colorWrapper={colors.find(page => page.name === 'Unplanned').wrapper}
                                    colorTask={colors.find(page => page.name === 'Unplanned').task}
                                >
                                    {[...list.tasks.filter(task => task.deadline === 'not planned' && task.isCompleted)].sort((a, b) => {
                                        return sortUnplanned(a, b)
                                        }
                                    )
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
                                    }
                                </TaskSectionWrapper>
                            )
                        : 
                        null
                    }
                    {tasks.some(task => task.isCompleted && task.deadline === 'not planned') && completedIsOpen ?
                        <TaskSectionWrapper 
                            className='Unsorted wrapper'
                            isOpen={unsortedCompletedIsOpen}
                            colorWrapper={colors.find(page => page.name === 'Unplanned').wrapper}
                            colorTask={colors.find(page => page.name === 'Unplanned').task}
                        >
                            <div 
                                onClick={() => toggleUnsortedCompletedIsOpen(!unsortedCompletedIsOpen)} 
                                className='Unsorted header'
                            >
                                Unsorted
                                <span className={unsortedCompletedIsOpen ? 'dropIcon' : 'upIcon'}></span>
                            </div>
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
                                : 
                                null
                            }
                        </TaskSectionWrapper>
                        :
                        null
                    }
                </div>
                :
                null
            }
        </UnplannedWrapper>
    )
}
