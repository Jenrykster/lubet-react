import { Card, TextButton } from '../../SharedComponents';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import loginSchema from '@schemas/login';
import { login } from '../../../shared/services/auth/auth';
import { loginUser } from '../../../store/slices/userSlice';
import FormInput from '../FormInput';
import { IData, InputTypes } from '../../../shared/interfaces';
import ResetPasswordLink from '../ResetPasswordLink';
import FormWrapper from '../FormWrapper';
import useUserRequest from '../../../hooks/useUserRequest';

const LoginForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });
  const requestUserLogin = useUserRequest(login, {
    route: '/games',
    message: 'Logged in successfully',
  });

  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/games');
    }
  }, [navigate, isLoggedIn]);

  const onLoginSuccess = (response: IData) => {
    if (
      response.user &&
      response.token &&
      typeof response.token !== 'string' &&
      'token' in response.token
    ) {
      const userData = {
        email: response.user.email,
        name: response.user.name,
        isAdmin: response.user.isAdmin,
        token: response.token.token,
      };
      dispatch(loginUser(userData));
      localStorage.setItem('userData', JSON.stringify(userData));
    }
  };
  requestUserLogin.appendOnSuccess(onLoginSuccess);

  return (
    <FormWrapper title='Authenticate'>
      <form onSubmit={handleSubmit(requestUserLogin.fire)}>
        <Card>
          <FormInput
            inputName={InputTypes.email}
            errors={errors}
            register={register}
          />
          <FormInput
            inputName={InputTypes.password}
            errors={errors}
            register={register}
            defaultError='min password length is 6'
            password
          />
          <ResetPasswordLink />
          <TextButton data-cy='login-btn' primary text='Log in' arrow />
        </Card>
        <TextButton
          data-cy='sign-up-btn'
          text='Sign Up'
          arrow
          onClick={() => navigate('/register')}
        />
      </form>
    </FormWrapper>
  );
};

export default LoginForm;
