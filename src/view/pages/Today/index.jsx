// Hooks
import { useTasks, usePagesThemeMenu } from '../../../tools';

// Components
import { List, Unsorted, Completed, ThemePagesPanel } from '../../components';

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
    const { colors } = usePagesThemeMenu();

    return (
        <TodayWrapper
            className='Today page'
            colorWrapper={colors.find(page => page.name === 'Today').wrapper}
        >
            <div className='control-panel'>
                <h1>Today</h1>
                <ThemePagesPanel page='Today' />
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
                    colorWrapper={colors.find(page => page.name === 'Today').wrapper}
                    colorTask={colors.find(page => page.name === 'Today').task}
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
                            colorWrapper={colors.find(page => page.name === 'Today').wrapper}
                            colorTask={colors.find(page => page.name === 'Today').task}
                        >
                            <div
                                className='List header'
                                onClick={() => toggleUncompletedListIsOpen(list.name)}
                            >
                                {list.name}
                                <span className={list.isOpen.uncompleted ? 'dropIcon' : 'upIcon'}></span>
                            </div>
                                {list.tasks.filter(task => !task.isCompleted && task.date === new Date().toISOString().slice(0, 10)).sort((a, b) => {
                                    return sortByDeadline(a, b);
                                })
                                    .map((task, index, tasks) =>
                                            <List
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
                                colorWrapper={colors.find(page => page.name === 'Today').wrapper}
                                colorTask={colors.find(page => page.name === 'Today').task}
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
                            colorWrapper={colors.find(page => page.name === 'Today').wrapper}
                            colorTask={colors.find(page => page.name === 'Today').task}
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
