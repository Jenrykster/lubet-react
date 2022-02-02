import styled from 'styled-components';
import GameSelector from '../../shared/GameSelector';
import H1 from '../../shared/Primitives/H1';

const StyledMain = styled.main`
  padding: 3rem 6rem;

  p {
    font-style: italic;
    font-weight: 600;
    color: #868686;
    margin: 2rem auto;
  }
`;
const Main = () => {
  return (
    <StyledMain>
      <H1>
        <b>NEW BET </b>
        FOR MEGA-SENA
      </H1>
      <p>Choose a game</p>
      <GameSelector />
    </StyledMain>
  );
};

export default Main;
