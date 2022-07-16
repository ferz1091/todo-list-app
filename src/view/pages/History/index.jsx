// Hooks
import { useTasks, useSortTasks } from '../../../tools';

// Components
import { General } from '../../components';

// Styles
import { HistoryWrapper } from './styles';

export const History = () => {
    const { tasks, lists, toggleIsCompleted, toggleTaskImportant } = useTasks();
    const { sortPlanned } = useSortTasks();

    return (
        <HistoryWrapper className='History'>
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
                .map((task, index, tasks) => <General key={index} task={task} tasks={tasks} index={index} toggleIsCompleted={toggleIsCompleted} toggleTaskImportant={toggleTaskImportant} />)
            }
        </HistoryWrapper>
    )
}