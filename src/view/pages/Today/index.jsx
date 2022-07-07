// Core
import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';

// Bus
import { useModal } from '../../../bus/modal';
import { useGeneral } from '../../../bus/general';

// Components
import { NewTask, NewList } from '../../components';

// Hooks
import { useSortToday } from '../../../tools/useSortToday';

// Styles
import { TodayWrapper } from './styles';

export const Today = () => {

    const tasks = useSelector(state => state.general.tasks);
    const lists = useSelector(state => state.general.lists);
    const modalIsActive = useSelector(state => state.modal);
    const { toggleNewTaskModalActive, toggleNewListModalActive } = useModal();
    const { addTask, addList } = useGeneral();
    const { sortByDeadline } = useSortToday();

    return (
        <TodayWrapper className='Today'>
            {tasks.filter(task => task.date === new Date().toISOString().slice(0, 10)).length === 0
                && lists.every(list => list.tasks.filter(task => task.date === new Date().toISOString().slice(0, 10)).length === 0) ?
                <div className='Empty-tasks-div'>
                    You don't have any tasks for today
                </div>
                :
                tasks.filter(task => task.date === new Date().toISOString().slice(0, 10)).sort((a, b) => {
                    return sortByDeadline(a, b);
                }).map((task, index, tasks) =>
                    <React.Fragment key={index}>
                        {index === 0 ? <div className='unsorted'>Unsorted</div> : null}
                        {index === 0 && task.deadline === 'deadline' ? <div className='title'>With deadline</div> : null}
                        {index === 0 && task.deadline === 'exact time' ? <div className='title'>Planned</div> : null}
                        {index !== 0 && task.deadline === 'exact time' && tasks[index - 1].deadline === 'deadline' ? <div className='title'>Planned</div> : null}
                        <div className='task'>
                            <span className='prop'>{task.name}</span>
                            <span className='prop'>{task.time}</span>
                        </div>
                    </React.Fragment>)
            }
            {lists.length === 0 ? null : lists.map((list, indexL) =>
                [...list.tasks].sort((a, b) => {
                    return sortByDeadline(a, b);
                }).map((task, index, tasks) =>
                    <React.Fragment key={index}>
                        {index === 0 && indexL === 0 ? <div className='sorted'>Sorted</div> : null}
                        {index === 0 ? <div className='list'>{list.name}</div> : null}
                        {index === 0 && task.deadline === 'deadline' ? <div className='title'>With deadline</div> : null}
                        {index === 0 && task.deadline === 'exact time' ? <div className='title'>Planned</div> : null}
                        {index !== 0 && task.deadline === 'exact time' && tasks[index - 1].deadline === 'deadline' ? <div className='title'>Planned</div> : null}
                        <div className='task'>
                            <span className='prop'>{task.name}</span>
                            <span className='prop'>{task.time}</span>
                        </div>
                    </React.Fragment>
                
                ))}
            {modalIsActive.NewTask ? <NewTask addTask={addTask} toggleNewTaskModalActive={toggleNewTaskModalActive} /> : null}
            {modalIsActive.NewList ? <NewList addList={addList} toggleNewListModalActive={toggleNewListModalActive} /> : null}
            {!modalIsActive.NewTask ? <button onClick={() => toggleNewTaskModalActive(true)}>+</button> : null}
        </TodayWrapper>
    )
}