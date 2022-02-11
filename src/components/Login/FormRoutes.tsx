import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import PageNotFound from '../shared/Utils/PageNotFound';
import LoginForm from './FormTypes/LoginForm';
import RegistrationForm from './FormTypes/RegistrationForm';
import ResetPasswordForm from './FormTypes/ResetPasswordForm';

const FormRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <Routes location={location}>
      <Route path='/' element={<LoginForm />} />
      <Route path='/reset' element={<ResetPasswordForm />} />
      <Route path='/register' element={<RegistrationForm />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  );
};
export default FormRoutes;
