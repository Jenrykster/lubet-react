import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Games from './components/Games/Games';
import Login from './components/Login/Login';
import Footer from './components/shared/Footer';
import LoginCheck from './components/shared/LoginCheck';

const AppContainer = styled.div`
  color: #707070;
  font-family: Arial, Helvetica, sans-serif;
`;
function App() {
  return (
    <AppContainer>
      <Routes>
        <Route path='*' element={<Login />} />
        <Route
          path='/games'
          element={
            <LoginCheck>
              <Games />
            </LoginCheck>
          }
        />
      </Routes>

      {/* <Route path='*' element={<Navigate to='/' />} /> */}
      <Footer />
    </AppContainer>
  );
}

export default App;
