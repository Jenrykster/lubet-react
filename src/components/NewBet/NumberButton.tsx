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

  @media (max-width: 700px) {
    font-size: 1.3rem;
    padding: 1rem 1.5rem;
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
      data-cy={props.active ? 'active-number' : 'inactive-number'}
      onClick={props.onButtonToggle}
    >
      {props.children}
    </NumberButtonStyles>
  );
};

export default NumberButton;
