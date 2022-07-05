// Core
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import { Main } from './view/pages';

// Components
import { Navbar, Header } from './view/components';

// Styles
import { AppWrapper, ContentWrapper } from './styles';

const App = () => {
  return (
    <BrowserRouter>
      <AppWrapper>
        <Header />
        <ContentWrapper>
          <Navbar />
          <Routes>
            <Route 
              path='*'
              element={<Main />}/>
          </Routes>
        </ContentWrapper>
      </AppWrapper>
    </BrowserRouter>
  );
}

export default App;
