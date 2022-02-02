import styled from 'styled-components';

interface StyledButtonProps {
  color: string;
  active?: boolean;
}

export default styled.button<StyledButtonProps>`
  font-style: italic;
  font-weight: 600;
  background-color: ${(props) => (props.active ? props.color : 'snow')};
  color: ${(props) => (props.active ? 'snow' : props.color)};
  border: solid 2px ${(props) => props.color};
  border-radius: 1rem;
  padding: 0.5rem 2rem;
  margin: auto 0.7rem;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.color};
    color: snow;
  }
`;
