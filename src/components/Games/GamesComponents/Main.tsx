import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import GameSelector from '../../shared/GameSelector';
import H1 from '../../shared/Primitives/H1';
import P from '../../shared/Primitives/P';
import Row from '../../shared/Primitives/Row';
import TextButton, { TextButtonStyles } from '../../shared/TextButton';
import BetsList, { BetType } from './BetsList';

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

const Main = (props: { bets: BetType[] }) => {
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
      <BetsList bets={props.bets} />
    </StyledMain>
  );
};

export default Main;
