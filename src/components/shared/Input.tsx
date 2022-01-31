import styled from 'styled-components';

export default styled.input`
  font-style: italic;
  font-weight: 800;
  color: #9d9d9d;

  border: none;
  outline: none;

  margin-top: 15px;
  margin-bottom: 20px;
  margin-left: -16px;
  margin-right: -16px;

  padding: 0.7rem 5rem 1rem 1rem;

  border-bottom: #dddddd80 2px solid;
  :first-child {
    margin-top: 0;
    margin-bottom: 0;
  }
  ::placeholder {
    color: #9d9d9d;
  }
`;
