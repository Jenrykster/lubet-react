import styled from 'styled-components';

const AccountContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
`;

const AccountInput = styled.input`
  background-color: transparent;
  border: none;
  text-align: center;
  font-size: 3rem;
  margin: 2rem;
  color: grey;
  width: fit-content;
  padding: 0px;
  outline: none;
`;

const UserName = styled(AccountInput)`
  margin: 3rem;
`;
const UserEmail = styled(AccountInput)`
  margin: 3rem;
`;

export { AccountContainer, UserName, UserEmail };
