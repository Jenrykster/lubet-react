import Card from '../../shared/Primitives/Card';
import Input from '../../shared/Primitives/Input';
import TextButton from '../../shared/TextButton';
import BoldText from '../../shared/Primitives/BoldText';
import { useNavigate } from 'react-router-dom';
import TransitionPage from '../../shared/Utils/TransitionPage';
import { createUser } from '../../../auth/auth';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import registerSchema from '../../../auth/schemas/register';
import ErrorLabel from '../../shared/Primitives/ErrorLabel';

const RegistrationForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema) });

  const registerUser = async (data: any) => {
    const { name, email, password } = data;
    const response = await createUser(name, email, password);
    const icon = response && response.status === 200 ? 'success' : 'error';
    const errorMessage =
      (response && response.data.message) || 'There was an error !';
    const title =
      icon === 'success' ? 'Registrado com sucesso!' : errorMessage || 'Error';
    Swal.fire({ title, icon, confirmButtonColor: '#B5C401' });
    navigate('/');
  };
  console.log(errors.name);
  return (
    <TransitionPage>
      <BoldText>Registration</BoldText>
      <form onSubmit={handleSubmit(registerUser)}>
        <Card>
          {errors.name && (
            <ErrorLabel htmlFor='name'>
              {errors.name.type === 'matches'
                ? errors.name.message
                : 'min name length is 2'}
            </ErrorLabel>
          )}
          <Input type='text' placeholder='Name' {...register('name')} />
          {errors.email && (
            <ErrorLabel htmlFor='email'>{errors.email.message}</ErrorLabel>
          )}
          <Input type='email' placeholder='Email' {...register('email')} />
          {errors.password && (
            <ErrorLabel htmlFor='password'>min password length is 6</ErrorLabel>
          )}
          <Input
            type='password'
            placeholder='Password'
            {...register('password')}
          />
          <TextButton primary text='Register' arrow />
        </Card>
      </form>
      <TextButton arrowLeft text='Back' onClick={() => navigate('/')} />
    </TransitionPage>
  );
};

export default RegistrationForm;
