import styled from 'styled-components';

interface IButtonStyleProps {
  primary: boolean;
  arrow: boolean;
  arrowLeft: boolean;
}

export const TextButtonStyles = styled.button<IButtonStyleProps>`
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
    transform: scaleX(1.3);
    width: 1.5rem;
    height: 1.5rem;
    margin-left: 0.7rem;
  }
`;
