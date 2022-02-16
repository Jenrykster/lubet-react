import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {
  H1,
  P,
  Row,
  GameSelector,
  TextButton,
  TextButtonStyles,
} from '@components/SharedComponents';
import BetsList, { BetType } from './BetsList';

const ResponsiveFilter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    ${Row} {
      margin: 0;
    }
  }
`;
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
    white-space: nowrap;
  }

  @media (max-width: 700px) {
    padding: 0.5rem 1rem;

    ${P} {
      display: none;
    }
  }
  @media (max-width: 850px) {
    ${TextButtonStyles} {
      position: absolute;
      right: 0.3rem;
      bottom: 2rem;
    }
  }
`;

const Main = (props: { bets: BetType[] }) => {
  const navigate = useNavigate();
  return (
    <StyledMain>
      <ResponsiveFilter>
        <H1>
          <b>RECENT GAMES</b>
        </H1>
        <P>Filters</P>
        <Row>
          <GameSelector multiselection />
        </Row>
        <TextButton text='New Bet' onClick={() => navigate('/new-bet')} arrow />
      </ResponsiveFilter>
      <BetsList bets={props.bets} />
    </StyledMain>
  );
};

export default Main;
