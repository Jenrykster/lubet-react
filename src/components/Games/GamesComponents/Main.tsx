import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Column from '../../shared/Column';
import H1 from '../../shared/H1';
import P from '../../shared/P';
import Row from '../../shared/Row';
import SelectorButton from '../../shared/SelectorButton';
import TextButton, { TextButtonStyles } from '../../shared/TextButton';
import GameContainer from './GameContainer';

const SelectorButtonContainer = styled(Row)`
  margin: auto 3.5rem;
`;
const StyledMain = styled.main`
  padding: 3rem 6rem;

  ${Row} {
    align-items: center;
  }

  ${TextButtonStyles} {
    color: #b5c401;
    font-size: 1.7rem;
    margin-right: 5rem;
  }
`;

const DUMMY_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const Main = () => {
  const navigate = useNavigate();
  return (
    <StyledMain>
      <Row>
        <Row>
          <H1>RECENT GAMES</H1>
          <Row>
            <SelectorButtonContainer>
              <P>Filters</P>
              <SelectorButton color='#7F3992' active>
                LotoFácil
              </SelectorButton>
              <SelectorButton color='#01AC66'>Mega-Sena</SelectorButton>
              <SelectorButton color='#F79C31'>Lotomania</SelectorButton>
            </SelectorButtonContainer>
          </Row>
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
