import { AiOutlineArrowRight as ArrowRight } from 'react-icons/ai';
import styled from 'styled-components';

interface IButtonStyleProps {
  primary: boolean;
  arrow: boolean;
}

const Button = styled.button<IButtonStyleProps>`
  display: flex;
  align-items: center;

  font-weight: 600;
  font-size: 2rem;
  font-style: italic;

  margin: 1.8rem auto;
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
}) => {
  const buttonProps = {
    primary: props.primary ? props.primary : false,
    arrow: props.arrow ? props.arrow : false,
  };
  return (
    <Button {...buttonProps}>
      {props.text}
      {props.arrow && <ArrowRight />}
    </Button>
  );
};

export default TextButton;
