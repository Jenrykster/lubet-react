import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import LoginForm from './FormTypes/LoginForm';
import ResetPassword from './FormTypes/ResetPassword';

const Form: React.FC = () => {
  const location = useLocation();
  return (
    <Routes location={location}>
      <Route path='/' element={<LoginForm />} />
      <Route path='/reset' element={<ResetPassword />} />
    </Routes>
  );
};
export default Form;
