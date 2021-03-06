import styled from 'styled-components';

interface StyledButtonProps {
  color: string;
  active?: boolean;
}

export default styled.button<StyledButtonProps>`
  font-style: italic;
  font-size: 0.7rem;
  font-weight: 600;
  background-color: ${(props) => (props.active ? props.color : 'snow')};
  color: ${(props) => (props.active ? 'snow' : props.color)};
  border: solid 2px ${(props) => props.color};
  border-radius: 1rem;
  padding: 0.5rem 1.5rem;
  margin: auto 0.7rem;
  white-space: nowrap;
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.color};
    color: snow;
  }

  @media (max-width: 700px) {
    margin: auto;
    width: fit-content;
  }
  @media (max-width: 500px) {
    margin: auto 0.2rem;
  }
`;
