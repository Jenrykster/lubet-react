import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import GameSelector from '../../shared/GameSelector';
import Column from '../../shared/Primitives/Column';
import H1 from '../../shared/Primitives/H1';
import P from '../../shared/Primitives/P';
import Row from '../../shared/Primitives/Row';
import TextButton, { TextButtonStyles } from '../../shared/TextButton';
import GameContainer from './GameContainer';

const StyledMain = styled.main`
  padding: 3rem 6rem;

  ${Row} {
    align-items: center;
  }
  ${P} {
    margin-left: 1.5rem;
    margin-right: 1rem;
  }
  ${TextButtonStyles} {
    color: #b5c401;
    font-size: 1.7rem;
    margin-right: 2rem;
  }
`;

const DUMMY_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const Main = () => {
  const navigate = useNavigate();
  return (
    <StyledMain>
      <Row>
        <Row>
          <H1>
            <b>RECENT GAMES</b>
          </H1>
          <P>Filters</P>
          <GameSelector />
        </Row>
        <TextButton text='New Bet' onClick={() => navigate('/new-bet')} arrow />
      </Row>
      <Column>
        <GameContainer
          color='#7F3992'
          numbers={DUMMY_NUMBERS}
          gameName='Lotofácil'
          price='2,50'
          date='30/11/2020'
        />
      </Column>
    </StyledMain>
  );
};

export default Main;
