import React from 'react';

import styled from 'styled-components';
import BoldText from '../shared/BoldText';
import Card from '../shared/Card';
import TextButton from '../shared/TextButton';

const Input = styled.input`
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

const Link = styled.a`
  font-size: 0.8rem;
  font-style: italic;
  margin-left: auto;
  margin-right: 1rem;
  margin-top: 0.1rem;
  color: #c1c1c1;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;

const Form: React.FC = () => {
  return (
    <div>
      <BoldText>Authentication</BoldText>
      <Card>
        <Input type='email' placeholder='Email' />
        <Input type='password' placeholder='Password' />
        <Link href='#'>I forgot my password</Link>
        <TextButton primary text='Log in' arrow />
      </Card>
      <TextButton text='Sign Up' arrow />
    </div>
  );
};
export default Form;
