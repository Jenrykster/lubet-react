import styled from 'styled-components';
import Row from './Primitives/Row';
import SelectorButton from './SelectorButton';

const SelectorButtonContainer = styled(Row)`
  margin: auto 0rem;

  ${SelectorButton}:first-child {
    margin-left: 0;
  }
`;
const GameSelector = () => {
  return (
    <Row>
      <SelectorButtonContainer>
        <SelectorButton color='#7F3992' active>
          LotoFácil
        </SelectorButton>
        <SelectorButton color='#01AC66'>Mega-Sena</SelectorButton>
        <SelectorButton color='#F79C31'>Lotomania</SelectorButton>
      </SelectorButtonContainer>
    </Row>
  );
};

export default GameSelector;
