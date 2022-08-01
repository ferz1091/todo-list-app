// Core
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Pages
import { Today, Unplanned, Planned, History, List } from './view/pages';

// Components
import { Navbar, Header, Modal, AddNewTaskBtn } from './view/components';

// Hooks
import { useModalElement } from './tools';

// Styles
import { AppWrapper, ContentWrapper } from './styles';

const App = () => {
  const lists = useSelector(state => state.general.lists);
  const background = useSelector(state => state.theme.background);
  const {modalIsOn} = useModalElement();

  return (
    <BrowserRouter>
      <AppWrapper 
        className='AppWrapper'
        background={background}
      >
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
              element={<History />}
            />
            <Route
              path='*'
              element={<Navigate to='/' replace />} 
            />
            {lists.length !== 0 ? lists.map((list, index) => <Route key={index} path={`/${list.name.replace(/ /g, '_')}`} element={<List {...list} />}/>) : null}
          </Routes>
          {modalIsOn ? <Modal /> : null}
          {!modalIsOn ? <AddNewTaskBtn /> : null}
        </ContentWrapper>
      </AppWrapper>
    </BrowserRouter>
  );
}

export default App;
