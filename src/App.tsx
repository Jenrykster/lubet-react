import styled from 'styled-components';
import Login from './components/Login/Login';

const AppContainer = styled.div`
  color: #707070;
  font-family: Arial, Helvetica, sans-serif;
`;
function App() {
  return (
    <AppContainer>
      <Login />
    </AppContainer>
  );
}

export default App;
