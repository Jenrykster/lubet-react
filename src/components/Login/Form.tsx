import React from 'react';
import { Route, Routes } from 'react-router-dom';

import LoginForm from './FormTypes/LoginForm';
import ResetPassword from './FormTypes/ResetPassword';

const Form: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<LoginForm />} />
      <Route path='/reset' element={<ResetPassword />} />
    </Routes>
  );
};
export default Form;
