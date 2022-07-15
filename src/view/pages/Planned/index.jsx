// Hooks
import { useTasks } from '../../../tools';

// Components
import { General } from '../../components';

// Styles
import { PlannedWrapper } from './styles';

export const Planned = () => {
    const { tasks, 
            lists,
            sortPlanned,
            toggleIsCompleted,
            toggleTaskImportant } = useTasks();

    return (
        <PlannedWrapper className='Planned'>
            {tasks.some(task => task.date && new Date(task.date) > new Date()) ||
                lists.some(list => list.tasks.some(task => task.date && new Date(task.date) > new Date())) ?
                null
                : 
                <div className='Empty-tasks-div'>You don't have any planned tasks</div>
            }
            {tasks.filter(task => task.date && new Date(task.date) > new Date())
                .concat(lists.map(list => list.tasks.filter(task => task.date && task.date && new Date(task.date) > new Date())).flat(Infinity))
                    .sort((a, b) => {
                        return sortPlanned(a, b);
                        }
                    )
                .map((task, index, tasks) => <General key={index} task={task} tasks={tasks} index={index} toggleIsCompleted={toggleIsCompleted} toggleTaskImportant={toggleTaskImportant} />)
            }
        </PlannedWrapper>
    )
}