import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Games from './pages/Games';
import Login from './pages/Login';
import NewBet from './pages/NewBet';
import Footer from '@components/SharedComponents/Footer';
import LoginCheck from '@components/SharedComponents/Utils/LoginCheck';
import { loginUser, UserState } from './store/slices/userSlice';
import Account from './pages/Account';

const AppContainer = styled.div`
  color: #707070;
  font-family: Arial, Helvetica, sans-serif;
`;
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const usrData: UserState = JSON.parse(
      localStorage.getItem('userData') || '{}'
    );
    if (Object.keys(usrData).length > 0) {
      dispatch(loginUser(usrData));
    }
  }, [dispatch]);

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
        <Route
          path='/account'
          element={
            <LoginCheck>
              <Account />
            </LoginCheck>
          }
        />
        <Route
          path='/new-bet'
          element={
            <LoginCheck>
              <NewBet />
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
