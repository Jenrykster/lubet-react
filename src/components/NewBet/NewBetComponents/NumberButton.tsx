import { useState } from 'react';
import styled from 'styled-components';

const NumberButtonStyles = styled.div<{ active?: boolean; color: string }>`
  display: flex;
  justify-content: center;
  color: snow;
  background-color: ${(props) => (props.active ? props.color : '#adc0c4')};
  width: 10px;
  padding: 0.9rem 1.2rem;
  border-radius: 50%;

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
  const [isActive, setIsActive] = useState(props.active);

  const toggleActive = () => {
    setIsActive((prevState) => !prevState);
    props.onButtonToggle();
  };
  return (
    <NumberButtonStyles
      color={props.color}
      active={isActive}
      onClick={toggleActive}
    >
      {props.children}
    </NumberButtonStyles>
  );
};

export default NumberButton;
