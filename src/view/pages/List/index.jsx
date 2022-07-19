// Core
import { useState } from 'react';

// Hooks
import { useSortTasks, useTasks } from '../../../tools';

// Components
import { General } from '../../components';

// Styles
import { ListWrapper } from './styles';

export const List = (props) => {
    const [arrayDateIsOpen, setArrayDateIsOpen] = useState([]);
    const { toggleIsCompleted, toggleTaskImportant, toggleDeleteListModalActive, toggleRenameListModalActive } = useTasks();
    const { sortList } = useSortTasks();

    return (
        <ListWrapper className='List-page'>
                <div className='control-panel'>
                    <h1>{props.name}</h1>
                    <span onClick={() => toggleRenameListModalActive(true)} className='renameList-icon'></span>
                    <span onClick={() => toggleDeleteListModalActive(true)} className='deleteList-icon'></span>
                </div> 
            {props.tasks.length === 0 ?
                <div className='Empty-tasks-div'>
                    You don't have any tasks in the {`"${props.name}".`}
                </div>
                :
                [...props.tasks].sort((a, b) => {
                    return sortList(a, b)
                }).map((task, index, tasks) => 
                    <General 
                        key={index} 
                        task={task} 
                        tasks={tasks} 
                        index={index} 
                        toggleIsCompleted={toggleIsCompleted} 
                        toggleTaskImportant={toggleTaskImportant} 
                        page='List'
                        arrayDateIsOpen = {arrayDateIsOpen}
                        setArrayDateIsOpen = {setArrayDateIsOpen}
                    />)
            }
        </ListWrapper>
    )
}