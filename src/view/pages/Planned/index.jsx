// Hooks
import { useTasks } from '../../../tools';

// Components
import { General } from '../../components';

// Styles
import { PlannedWrapper, TaskSectionWrapper } from './styles';

export const Planned = () => {

    const { tasks,
            lists,
            sortPlanned,
            toggleIsCompleted,
            toggleTaskImportant,
            PlannedArrayDateIsOpen,
            setPlannedArrayDateIsOpen } = useTasks();
    
    return (
        <PlannedWrapper className='Planned page'>
            <div className='control-panel'>
                <h1>Planned</h1>
            </div>
            {tasks.some(task => task.date && new Date(task.date) > new Date()) ||
                lists.some(list => list.tasks.some(task => task.date && new Date(task.date) > new Date())) ?
                    null
                    :
                    <div className='Empty-tasks-div'>
                        You don't have any planned tasks
                    </div>
            }
                {tasks.filter(task => task.date && new Date(task.date) > new Date())
                    .concat(lists.map(list => list.tasks.filter(task => task.date && new Date(task.date) > new Date())).flat(Infinity))
                    .sort((a, b) => {
                        return sortPlanned(a, b);
                    }
                    )
                    .map((taskF, indexF, tasksF) => {
                        if (indexF === 0) {
                            return (
                                <TaskSectionWrapper 
                                    className='Date wrapper' 
                                    isOpen={!PlannedArrayDateIsOpen.some(date => date === taskF.date)}
                                    key={indexF}
                                >
                                    <div
                                        onClick={() => {
                                            if (PlannedArrayDateIsOpen.some(date => date === taskF.date)) {
                                                setPlannedArrayDateIsOpen(PlannedArrayDateIsOpen.filter(date => date !== taskF.date))
                                            } else {
                                                setPlannedArrayDateIsOpen([...PlannedArrayDateIsOpen, taskF.date])
                                            }
                                        }}
                                        className='Date header'
                                    >
                                        {`${taskF.date.slice(8, 10)}.${taskF.date.slice(5, 7)}.${taskF.date.slice(2, 4)}`}
                                        <span className={PlannedArrayDateIsOpen.some(date => date === taskF.date) ? 'dropIcon' : 'upIcon'}></span>
                                    </div>
                                    {tasksF.filter(task => task.date === tasksF[0].date).map((task, index, tasks) =>
                                        <General 
                                            key={index}
                                            task={task}
                                            tasks={tasks}
                                            index={index}
                                            toggleIsCompleted={toggleIsCompleted}
                                            toggleTaskImportant={toggleTaskImportant}
                                            arrayDateIsOpen={PlannedArrayDateIsOpen}
                                        />
                                    )
                                    }
                                </TaskSectionWrapper>
                            )
                        } else if (indexF !== 0 && taskF.date !== tasksF[indexF - 1].date) {
                            return (
                                <TaskSectionWrapper 
                                    className='Date wrapper' 
                                    isOpen={!PlannedArrayDateIsOpen.some(date => date === taskF.date)}
                                    key={indexF}
                                >
                                    {taskF.date !== tasksF[indexF - 1].date ? 
                                        <div
                                            onClick={() => {
                                                if (PlannedArrayDateIsOpen.some(date => date === taskF.date)) {
                                                    setPlannedArrayDateIsOpen(PlannedArrayDateIsOpen.filter(date => date !== taskF.date))
                                                } else {
                                                    setPlannedArrayDateIsOpen([...PlannedArrayDateIsOpen, taskF.date])
                                                }
                                            }}
                                            className='Date header'
                                        >
                                            {`${taskF.date.slice(8, 10)}.${taskF.date.slice(5, 7)}.${taskF.date.slice(2, 4)}`}
                                            <span className={PlannedArrayDateIsOpen.some(date => date === taskF.date) ? 'dropIcon' : 'upIcon'}></span>
                                        </div> 
                                        : 
                                        null
                                    }
                                    {tasksF.filter(task => task.date === tasksF[indexF].date).map((task, index, tasks) =>
                                        <General
                                            key={index}
                                            task={task}
                                            tasks={tasks}
                                            index={index}
                                            toggleIsCompleted={toggleIsCompleted}
                                            toggleTaskImportant={toggleTaskImportant}
                                            arrayDateIsOpen={PlannedArrayDateIsOpen}
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
                    }
                    )
                }
        </PlannedWrapper>
    )
}
