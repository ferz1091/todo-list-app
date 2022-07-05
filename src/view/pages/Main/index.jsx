// Core
import { useState } from 'react';
import { useSelector } from 'react-redux/es/exports';

// Components
import { NewTask } from '../../components';

// Styles
import { MainWrapper } from './styles';

export const Main = () => {
    const [modalActive, setModalActive] = useState(false);
    const data = useSelector(state => state.general);

    return (
        <MainWrapper className='Main'>
            {data.length !== 0 ? data.map((task, index) => <div key = {index}>Task {`${index}`}</div>) 
            : <div className='Empty-tasks-div' onClick={() => setModalActive(true)}>You don't have tasks, add one by clicking here!</div>}
            {modalActive ? <NewTask setModalActive = {setModalActive}/> : null}
            {data.length !== 0 && !modalActive ? <button onClick={() => setModalActive(true)}>+</button> : null}
        </MainWrapper>
    )
}