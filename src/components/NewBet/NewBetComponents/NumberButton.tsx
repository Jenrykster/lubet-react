import styled from 'styled-components';

const NumberButtonStyles = styled.div<{ active?: boolean; color: string }>`
  display: flex;
  justify-content: center;
  color: snow;
  background-color: ${(props) => (props.active ? props.color : '#adc0c4')};
  width: 10px;
  padding: 0.9rem 1.2rem;
  border-radius: 50%;
  user-select: none;
  &:hover {
    cursor: pointer;
    background-color: ${(props) => (props.active ? props.color : '#a2b4b8')};
  }
`;
const NumberButton = (props: {
  active?: boolean;
  color: string;
  children: React.ReactNode;
  onButtonToggle: () => void;
}) => {
  return (
    <NumberButtonStyles
      color={props.color}
      active={props.active}
      onClick={props.onButtonToggle}
    >
      {props.children}
    </NumberButtonStyles>
  );
};

export default NumberButton;
