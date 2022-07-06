// Core
import { useSelector } from 'react-redux/es/exports';

// Bus
import { useModal } from '../../../bus/modal';
import { useGeneral } from '../../../bus/general';

// Components
import { NewTask, NewList } from '../../components';

// Styles
import { MainWrapper } from './styles';

export const Main = () => {
    const {toggleNewTaskModalActive, toggleNewListModalActive} = useModal();
    const {addTask, addList} = useGeneral();
    const data = useSelector(state => state.general.tasks);
    const modalIsActive = useSelector(state => state.modal);
    
    return (
        <MainWrapper className='Main'>
            {data.length !== 0 ? data.map((task, index) => <div key = {index}>Task {`${index}`}</div>) 
            : <div className='Empty-tasks-div' onClick={() => toggleNewTaskModalActive(true)}>You don't have tasks, add one by clicking here!</div>}
            {modalIsActive.NewTask ? <NewTask addTask = {addTask} toggleNewTaskModalActive={toggleNewTaskModalActive}/> : null}
            {modalIsActive.NewList ? <NewList addList = {addList} toggleNewListModalActive={toggleNewListModalActive}/> : null}
            {data.length !== 0 && !modalIsActive.NewTask ? <button onClick={() => toggleNewTaskModalActive(true)}>+</button> : null}
        </MainWrapper>
    )
}