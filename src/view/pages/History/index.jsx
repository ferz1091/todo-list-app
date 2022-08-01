// Core
import React from 'react';

// Hooks
import { useTasks, useSortTasks, usePagesThemeMenu } from '../../../tools';

// Components
import { General, ThemePagesPanel } from '../../components';

// Styles
import { HistoryWrapper, TaskSectionWrapper } from './styles';

export const History = () => {
    const { 
            tasks, 
            lists, 
            toggleIsCompleted, 
            toggleTaskImportant, 
            HistoryArrayDateIsOpen, 
            setHistoryArrayDateIsOpen } = useTasks();
    const { sortPlanned } = useSortTasks();
    const { colors } = usePagesThemeMenu();

    return (
        <HistoryWrapper 
            className='History page'
            colorWrapper={colors.find(page => page.name === 'History').wrapper}
        >
            <div className='control-panel'>
                <h1>History</h1>
                <ThemePagesPanel page='History'/>
            </div>
            {tasks.some(task => task.date && new Date(task.date) < new Date() && new Date(task.date).toLocaleDateString() !== new Date().toLocaleDateString()) ||
                lists.some(list => list.tasks.some(task => task.date && new Date(task.date) < new Date() && new Date(task.date).toLocaleDateString() !== new Date().toLocaleDateString())) ?
                null
                :
                <div className='Empty-tasks-div'>You don't have any planned tasks</div>
            }
            {tasks.filter(task => task.date && new Date(task.date) < new Date() && new Date(task.date).toLocaleDateString() !== new Date().toLocaleDateString())
                .concat(lists.map(list => list.tasks.filter(task => task.date && task.date && new Date(task.date) < new Date() && new Date(task.date).toLocaleDateString() !== new Date().toLocaleDateString())).flat(Infinity))
                .sort((a, b) => {
                    return sortPlanned(a, b);
                }
                )
                .reverse()
                .map((taskF, indexF, tasksF) => {
                    if (indexF === 0) {
                        return (
                            <TaskSectionWrapper 
                                className='Date wrapper' 
                                isOpen={!HistoryArrayDateIsOpen.some(date => date === taskF.date)} 
                                colorWrapper={colors.find(page => page.name === 'History').wrapper}
                                colorTask={colors.find(page => page.name === 'History').task}
                                key={indexF}
                            >
                                <div
                                    onClick={() => {
                                        if (HistoryArrayDateIsOpen.some(date => date === taskF.date)) {
                                            setHistoryArrayDateIsOpen(HistoryArrayDateIsOpen.filter(date => date !== taskF.date))
                                        } else {
                                            setHistoryArrayDateIsOpen([...HistoryArrayDateIsOpen, taskF.date])
                                        }
                                    }}
                                    className='Date header'
                                >
                                    {`${taskF.date.slice(8, 10)}.${taskF.date.slice(5, 7)}.${taskF.date.slice(2, 4)}`}
                                    <span className={HistoryArrayDateIsOpen.some(date => date === taskF.date) ? 'dropIcon' : 'upIcon'}></span>
                                </div>
                                {tasksF.filter(task => task.date === tasksF[0].date).map((task, index, tasks) => 
                                    <General
                                        key={index}
                                        task={task}
                                        tasks={tasks}
                                        index={index}
                                        toggleIsCompleted={toggleIsCompleted}
                                        toggleTaskImportant={toggleTaskImportant}
                                        arrayDateIsOpen={HistoryArrayDateIsOpen}
                                    />)}
                            </TaskSectionWrapper>
                        )
                    } else if (indexF !== 0 && taskF.date !== tasksF[indexF - 1].date) {
                        return (
                            <TaskSectionWrapper 
                                className='Date wrapper' 
                                isOpen={!HistoryArrayDateIsOpen.some(date => date === taskF.date)}
                                colorWrapper={colors.find(page => page.name === 'History').wrapper}
                                colorTask={colors.find(page => page.name === 'History').task}
                                key={indexF}
                            >
                                {taskF.date !== tasksF[indexF - 1].date ?
                                    <div
                                        onClick={() => {
                                            if (HistoryArrayDateIsOpen.some(date => date === taskF.date)) {
                                                setHistoryArrayDateIsOpen(HistoryArrayDateIsOpen.filter(date => date !== taskF.date))
                                            } else {
                                                setHistoryArrayDateIsOpen([...HistoryArrayDateIsOpen, taskF.date])
                                            }
                                        }}
                                        className='Date header'
                                    >
                                        {`${taskF.date.slice(8, 10)}.${taskF.date.slice(5, 7)}.${taskF.date.slice(2, 4)}`}
                                        <span className={HistoryArrayDateIsOpen.some(date => date === taskF.date) ? 'dropIcon' : 'upIcon'}></span>
                                    </div>
                                    :
                                    null}
                                {tasksF.filter(task => task.date === tasksF[indexF].date).map((task, index, tasks) => 
                                    <General
                                        key={index}
                                        task={task}
                                        tasks={tasks}
                                        index={index}
                                        toggleIsCompleted={toggleIsCompleted}
                                        toggleTaskImportant={toggleTaskImportant}
                                        arrayDateIsOpen={HistoryArrayDateIsOpen}
                                    />)}
                            </TaskSectionWrapper>
                        )
                    } else {
                        return (
                            null
                        )
                    }
                })
            }
        </HistoryWrapper>
    )
}
