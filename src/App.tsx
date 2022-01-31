import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Form from './components/Login/Form';
import Login from './components/Login/Login';
import Footer from './components/shared/Footer';

const AppContainer = styled.div`
  color: #707070;
  font-family: Arial, Helvetica, sans-serif;
`;
function App() {
  return (
    <AppContainer>
      <Login />
      {/* <Route path='*' element={<Navigate to='/' />} /> */}
      <Footer />
    </AppContainer>
  );
}

export default App;
