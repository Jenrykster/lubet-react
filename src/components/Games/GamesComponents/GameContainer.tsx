import styled from 'styled-components';
import Column from '../../shared/Column';

interface GameContainerProps {
  color: string;
  gameName: string;
  date: string;
  price: string;
  numbers: number[];
}
const GameContainerStyles = styled.div`
  display: flex;
  h4 {
    font-style: italic;
  }
  h3 {
    font-weight: 600;
    font-style: italic;
    color: ${(props) => props.color};
  }
  * {
    margin: 0.5rem 0;
  }
`;
const SideLine = styled.div`
  width: 2px;
  background-color: ${(props) => props.color};
  border: 3px solid ${(props) => props.color};
  border-radius: 10px;
  margin-right: 1rem;
`;
const GameContainer = (props: GameContainerProps) => {
  const formatNumbers = (numbers: number[]): string => {
    return numbers
      .map((number) => {
        return number.toString().padStart(2, '0');
      })
      .join(', ');
  };

  return (
    <GameContainerStyles color={props.color}>
      <SideLine color={props.color} />
      <Column>
        <h4>{formatNumbers(props.numbers)}</h4>
        <p>
          {props.date} - (R${props.price})
        </p>
        <h3>{props.gameName}</h3>
      </Column>
    </GameContainerStyles>
  );
};

export default GameContainer;
