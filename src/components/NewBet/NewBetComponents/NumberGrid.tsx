import styled from 'styled-components';
import NumberButton from './NumberButton';

const Grid = styled.div<{ columns: number }>`
  display: grid;
  grid-template-columns: ${(props) => 'repeat(' + props.columns + ', 1fr)'};
  row-gap: 0.2rem;
  column-gap: 0.2rem;
  width: fit-content;
  margin-bottom: 1rem;
`;
const ScrollableGridContainer = styled.div<{ color: string }>`
  height: 35vh;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background: #b5c40122;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.color}aa;
    border-radius: 10px;
  }
  margin-bottom: 0.5rem;
`;
const NumberGrid = (props: {
  color: string;
  range: number;
  selectedNumbers: number[];
  onNumberSelect: (n: number) => void;
}) => {
  const generateNumbers = (totalNumbers: number) => {
    let components = [];
    for (let actualNumber = 1; actualNumber <= totalNumbers; actualNumber++) {
      let newNumberButton = (
        <NumberButton
          active={props.selectedNumbers.includes(actualNumber)}
          color={props.color}
          key={Math.random() * Date.now()}
          onButtonToggle={() => {
            props.onNumberSelect(actualNumber);
          }}
        >
          {actualNumber.toString().padStart(2, '0')}
        </NumberButton>
      );
      components.push(newNumberButton);
    }
    return components;
  };
  return (
    <ScrollableGridContainer color={props.color}>
      <Grid columns={13}>{generateNumbers(props.range)}</Grid>
    </ScrollableGridContainer>
  );
};

export default NumberGrid;
