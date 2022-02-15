import React from 'react';
import {
  AiOutlineArrowRight as ArrowRight,
  AiOutlineArrowLeft as ArrowLeft,
} from 'react-icons/ai';
import { TextButtonStyles } from './styles';
const TextButton = (props: {
  text: string;
  primary?: boolean;
  arrow?: boolean;
  arrowLeft?: boolean;
  style?: React.CSSProperties;
  'data-cy'?: string;
  onClick?: () => void;
}) => {
  const buttonProps = {
    primary: props.primary ? props.primary : false,
    arrow: props.arrow ? props.arrow : false,
    arrowLeft: props.arrowLeft ? props.arrowLeft : false,
  };
  return (
    <TextButtonStyles
      {...buttonProps}
      style={props.style || {}}
      onClick={props.onClick}
      data-cy={props['data-cy']}
    >
      {props.arrowLeft && <ArrowLeft />}
      {props.text}
      {props.arrow && <ArrowRight />}
    </TextButtonStyles>
  );
};

export default TextButton;
