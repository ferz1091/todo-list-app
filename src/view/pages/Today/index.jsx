// Components
import { List, Unsorted, Completed } from '../../components';

// Hooks
import { useTasks } from '../../../tools';

// Styles
import { TodayWrapper, TaskSectionWrapper } from './styles';

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
        <TodayWrapper className='Today page'>
            <div className='control-panel'>
                <h1>Today</h1>
            </div>
            {tasks.filter(task => task.date === new Date().toISOString().slice(0, 10)).length === 0
                && lists.every(list => list.tasks.filter(task => task.date === new Date().toISOString().slice(0, 10)).length === 0) ?
                <div className='Empty-tasks-div'>
                    You don't have any tasks for today
                </div>
                :
                null
            } 
            {tasks.filter(task => !task.isCompleted && task.date === new Date().toISOString().slice(0, 10)).length !== 0 ? 
                <TaskSectionWrapper 
                    className='Unsorted wrapper' 
                    isOpen={unsortedUncompletedIsOpen}
                >
                    <div
                        className='Unsorted header'
                        onClick={() => toggleUnsortedUncompletedIsOpen(!unsortedUncompletedIsOpen)}
                    >
                        Unsorted
                        <span className={unsortedUncompletedIsOpen ? 'dropIcon' : 'upIcon'}></span>
                    </div>
                    {tasks.filter(task => task.date === new Date().toISOString().slice(0, 10) && !task.isCompleted).sort((a, b) => {
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
                            />
                        )
                    }
                </TaskSectionWrapper> 
                : 
                null
            }
            {lists.filter(list => list.tasks.length !== 0 && list.tasks.some(task => !task.isCompleted && task.date === new Date().toISOString().slice(0, 10))).map((list, index) => 
                <TaskSectionWrapper 
                    key={index} 
                    className='List wrapper' 
                    isOpen={list.isOpen.uncompleted}
                >
                    {list.tasks.filter(task => !task.isCompleted && task.date === new Date().toISOString().slice(0, 10)).sort((a, b) => {
                        return sortByDeadline(a, b);
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
            }
            {tasks.filter(task => task.isCompleted && task.date === new Date().toISOString().slice(0, 10)).length !== 0
                || lists.filter(list => list.tasks.some(task => task.isCompleted && task.date === new Date().toISOString().slice(0, 10))).length !== 0
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
                        lists.filter(list => list.tasks.some(task => task.isCompleted && task.date === new Date().toISOString().slice(0, 10))).map((list, index) => 
                            <TaskSectionWrapper 
                                key={index} 
                                className='List wrapper' 
                                isOpen={list.isOpen.completed}
                            >
                                {list.tasks.filter(task => task.isCompleted && task.date === new Date().toISOString().slice(0, 10))
                                    .sort((a, b) => {
                                        return sortCompletedFromLists(a, b)
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
                    {tasks.filter(task => task.isCompleted && task.date === new Date().toISOString().slice(0, 10)).length !== 0 && completedIsOpen ?
                        <TaskSectionWrapper 
                            className='Unsorted wrapper' 
                            isOpen={unsortedCompletedIsOpen}
                        >
                            <div 
                                onClick={() => toggleUnsortedCompletedIsOpen(!unsortedCompletedIsOpen)} 
                                className='Unsorted header'
                            >
                                Unsorted
                                <span className={unsortedCompletedIsOpen ? 'dropIcon' : 'upIcon'}></span>
                            </div>
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
        </TodayWrapper>
    )
}
