import styled from 'styled-components';

export default styled.button`
  background-color: transparent;
  color: #27c383;
  border: 1px solid #27c383;
  padding: 1rem 2rem;
  border-radius: 10px;

  &:hover {
    background-color: #27c383;
    color: snow;
    cursor: pointer;
  }

  @media (max-width: 700px) {
    margin: 0;
  }
`;
