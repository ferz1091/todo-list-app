// Core
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Pages
import { Today } from './view/pages';

// Components
import { Navbar, Header } from './view/components';

// Styles
import { AppWrapper, ContentWrapper } from './styles';

const App = () => {
  const lists = useSelector(state => state.general.lists);

  return (
    <BrowserRouter>
      <AppWrapper>
        <Header />
        <ContentWrapper>
          <Navbar />
          <Routes>
            <Route 
              path='/'
              element={<Today />}
            />
            <Route 
              path='/i'
              element={<div>important</div>}
            />
            <Route 
              path='/p'
              element={<div>planned</div>}
            />
            {lists.length !== 0 ? lists.map((list, index) => <Route key = {index} path = {`/${list.name}`} element={<div>{list.name}</div>}/>) : null}
          </Routes>
        </ContentWrapper>
      </AppWrapper>
    </BrowserRouter>
  );
}

export default App;
