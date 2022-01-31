import {
  AiOutlineArrowRight as ArrowRight,
  AiOutlineArrowLeft as ArrowLeft,
} from 'react-icons/ai';
import styled from 'styled-components';

interface IButtonStyleProps {
  primary: boolean;
  arrow: boolean;
  arrowLeft: boolean;
}

const Button = styled.button<IButtonStyleProps>`
  display: flex;
  align-items: center;

  font-weight: 600;
  font-size: 2rem;
  font-style: italic;

  margin: 1.8rem auto;
  ${(props) => (props.arrowLeft ? 'margin-left: 3rem;' : '')}

  background-color: transparent;
  border: none;
  color: ${(props) => (props.primary ? '#B5C401' : '#707070')};

  :hover {
    cursor: pointer;
  }

  svg {
    width: 30px;
    height: 30px;
    margin-left: 0.7rem;
  }
`;

const TextButton = (props: {
  text: string;
  primary?: boolean;
  arrow?: boolean;
  arrowLeft?: boolean;
  onClick?: () => void;
}) => {
  const buttonProps = {
    primary: props.primary ? props.primary : false,
    arrow: props.arrow ? props.arrow : false,
    arrowLeft: props.arrowLeft ? props.arrowLeft : false,
  };
  return (
    <Button {...buttonProps} onClick={props.onClick}>
      {props.arrowLeft && <ArrowLeft />}
      {props.text}
      {props.arrow && <ArrowRight />}
    </Button>
  );
};

export default TextButton;
