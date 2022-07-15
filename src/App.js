// Core
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Pages
import { Today, Unplanned, Planned } from './view/pages';

// Components
import { Navbar, Header, Modal, AddNewTaskBtn } from './view/components';

// Hooks
import { useModalElement } from './tools';

// Styles
import { AppWrapper, ContentWrapper } from './styles';

const App = () => {
  const lists = useSelector(state => state.general.lists);
  const {modalIsOn} = useModalElement();

  return (
    <BrowserRouter>
      <AppWrapper className='AppWrapper'>
        <Header />
        <ContentWrapper className='ContentWrapper'>
          <Navbar />
          <Routes>
            <Route 
              path='/'
              element={<Today />}
            />
            <Route 
              path='/p'
              element={<Planned />}
            />
            <Route 
              path='/u'
              element={<Unplanned />}
            />
            <Route 
              path='/h'
              element={<div>History</div>}
            />
            {lists.length !== 0 ? lists.map((list, index) => <Route key = {index} path = {`/${list.name}`} element={<div>{list.name}</div>}/>) : null}
          </Routes>
          {modalIsOn ? <Modal /> : null}
          {!modalIsOn ? <AddNewTaskBtn /> : null}
        </ContentWrapper>
      </AppWrapper>
    </BrowserRouter>
  );
}

export default App;
