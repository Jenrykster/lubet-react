import styled from 'styled-components';

const NumberButton = styled.div`
  display: flex;
  justify-content: center;
  color: snow;
  background-color: #adc0c4;
  width: 10px;
  padding: 0.9rem 1.2rem;
  border-radius: 50%;
`;
const Grid = styled.div<{ columns: number }>`
  display: grid;
  grid-template-columns: ${(props) => 'repeat(' + props.columns + ', 1fr)'};
  row-gap: 0.5rem;
  column-gap: 1rem;
  width: fit-content;
  margin-bottom: 1rem;
`;

const NumberGrid = () => {
  const generateNumbers = (totalNumbers: number) => {
    let components = [];
    for (let actualNumber = 1; actualNumber <= totalNumbers; actualNumber++) {
      let newNumberButton = (
        <NumberButton>{actualNumber.toString().padStart(2, '0')}</NumberButton>
      );
      components.push(newNumberButton);
    }
    return components;
  };
  return <Grid columns={9}>{generateNumbers(36)}</Grid>;
};

export default NumberGrid;
