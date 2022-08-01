// Core
import React from 'react';

// Hooks
import { useSortTasks, useTasks } from '../../../tools';

// Components
import { General, ThemePagesPanel } from '../../components';

// Styles
import { ListWrapper, TaskSectionWrapper } from './styles';

export const List = (props) => {
    const { 
            toggleIsCompleted, 
            toggleTaskImportant, 
            toggleDeleteListModalActive, 
            toggleRenameListModalActive, 
            ListArrayDateIsOpen, 
            setListArrayDateIsOpen } = useTasks();
    const { sortList } = useSortTasks();

    return (
        <ListWrapper 
            className='List page'
            colorWrapper={props.colors.wrapper}
        >
                <div className='control-panel'>
                    <h1>
                        {props.name}
                    </h1>
                    <span 
                        onClick={() => toggleRenameListModalActive(true)} 
                        className='renameList-icon'></span>
                    <span 
                        onClick={() => toggleDeleteListModalActive(true)} 
                        className='deleteList-icon'></span>
                <ThemePagesPanel 
                    page='List' 
                    list={props.name} 
                />
                </div> 
                {props.tasks.length === 0 ?
                    <div className='Empty-tasks-div'>
                        You don't have any tasks in the {`"${props.name}".`}
                    </div>
                    :
                    null
                }
                {[...props.tasks].sort((a, b) => {
                    return sortList(a, b)
                })
                    .map((taskF, indexF, tasksF) => {
                        if (indexF === 0) {
                            return (
                                <TaskSectionWrapper 
                                    className='Date wrapper'
                                    isOpen={!ListArrayDateIsOpen.some(date => date === taskF.date)}
                                    key={indexF}
                                    colorWrapper={props.colors.wrapper}
                                    colorTask={props.colors.task}
                                >
                                    <div
                                        onClick={() => {
                                            if (ListArrayDateIsOpen.some(date => date === taskF.date)) {
                                                setListArrayDateIsOpen(ListArrayDateIsOpen.filter(date => date !== taskF.date))
                                            } else {
                                                setListArrayDateIsOpen([...ListArrayDateIsOpen, taskF.date])
                                            }
                                        }}
                                        className='Date header'
                                    >
                                        {!taskF.date ? `Not planned` : `${taskF.date.slice(8, 10)}.${taskF.date.slice(5, 7)}.${taskF.date.slice(2, 4)}`}
                                        <span className={ListArrayDateIsOpen.some(date => date === taskF.date) ? 'dropIcon' : 'upIcon'}></span>
                                    </div>
                                    {tasksF.filter(task => tasksF[0].date ? taskF.date === task.date : task.deadline === 'not planned')
                                        .map((task, index, tasks) => 
                                            <General
                                                key={index}
                                                task={task}
                                                tasks={tasks}
                                                index={index}
                                                toggleIsCompleted={toggleIsCompleted}
                                                toggleTaskImportant={toggleTaskImportant}
                                                page='List'
                                                arrayDateIsOpen={ListArrayDateIsOpen}
                                            />
                                        )
                                    }
                                </TaskSectionWrapper>
                        )
                    } else if (indexF !== 0 && taskF.date !== tasksF[indexF - 1].date) {
                        return (
                            <TaskSectionWrapper 
                                className='Date wrapper' 
                                isOpen={!ListArrayDateIsOpen.some(date => date === taskF.date)}
                                key={indexF}
                                colorWrapper={props.colors.wrapper}
                                colorTask={props.colors.task}
                            >
                                <div
                                    onClick={() => {
                                        if (ListArrayDateIsOpen.some(date => date === taskF.date)) {
                                            setListArrayDateIsOpen(ListArrayDateIsOpen.filter(date => date !== taskF.date))
                                        } else {
                                            setListArrayDateIsOpen([...ListArrayDateIsOpen, taskF.date])
                                        }
                                    }}
                                    className='Date header'
                                >
                                    {!taskF.date ? `Not planned` : `${taskF.date.slice(8, 10)}.${taskF.date.slice(5, 7)}.${taskF.date.slice(2, 4)}`}
                                    <span className={ListArrayDateIsOpen.some(date => date === taskF.date) ? 'dropIcon' : 'upIcon'}></span>
                                </div>
                                {tasksF.filter(task => tasksF[indexF].date ? taskF.date === task.date : task.deadline === 'not planned')
                                    .map((task, index, tasks) => 
                                        <General
                                            key={index}
                                            task={task}
                                            tasks={tasks}
                                            index={index}
                                            toggleIsCompleted={toggleIsCompleted}
                                            toggleTaskImportant={toggleTaskImportant}
                                            page='List'
                                            arrayDateIsOpen={ListArrayDateIsOpen}
                                        />
                                    )
                                } 
                            </TaskSectionWrapper>
                        )
                    } else {
                        return (
                            null
                        )
                    }
                })
            }
        </ListWrapper>
    )
}
