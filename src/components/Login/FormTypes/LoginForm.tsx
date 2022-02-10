import Card from '../../shared/Primitives/Card';
import TextButton from '../../shared/TextButton';
import BoldText from '../../shared/Primitives/BoldText';
import { useNavigate } from 'react-router-dom';
import TransitionPage from '../../shared/Utils/TransitionPage';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import loginSchema from '../../../auth/schemas/login';
import { login } from '../../../auth/auth';
import { loginUser } from '../../../store/slices/userSlice';
import FormInput from '../LoginComponents/FormInput';
import { InputTypes } from '../../../shared/interfaces';
import ResetPasswordLink from '../LoginComponents/ResetPasswordLink';

const LoginForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/games');
    }
  }, [navigate, isLoggedIn]);

  const authenticate = async (data: any) => {
    const { email, password } = data;
    if (isLoggedIn) {
      Swal.fire("You're already logged in!", '', 'info');
      navigate('/games');
      return;
    }
    const response = await login(email, password);
    if (
      response &&
      response.status === 200 &&
      response.data.user &&
      response.data.token
    ) {
      const userData = {
        email: response.data.user.email,
        name: response.data.user.name,
        isAdmin: response.data.user.isAdmin,
        token: response.data.token.token,
      };
      dispatch(loginUser(userData));
      localStorage.setItem('userData', JSON.stringify(userData));
    }
    const icon = response && response.status === 200 ? 'success' : 'error';
    const errorMessage =
      (response && response.data.message) || 'There was an error !';
    const title = icon === 'success' ? 'Logado com sucesso!' : errorMessage;
    Swal.fire({ title, icon, confirmButtonColor: '#B5C401' });
    navigate('/games');
  };
  return (
    <TransitionPage>
      <BoldText>Authentication</BoldText>
      <form onSubmit={handleSubmit(authenticate)}>
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
    </TransitionPage>
  );
};

export default LoginForm;
