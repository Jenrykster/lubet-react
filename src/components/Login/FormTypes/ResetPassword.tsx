import Card from '../../shared/Primitives/Card';
import Input from '../../shared/Primitives/Input';
import ErrorLabel from '../../shared/Primitives/ErrorLabel';
import TextButton from '../../shared/TextButton';
import BoldText from '../../shared/Primitives/BoldText';
import { useNavigate } from 'react-router-dom';
import TransitionPage from '../../shared/Utils/TransitionPage';
import { resetPassword } from '../../../auth/auth';
import resetPasswordSchema from '../../../auth/schemas/resetPassword';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Swal from 'sweetalert2';

const ResetPassword = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(resetPasswordSchema) });

  const resetPasswordHandler = async (data: any) => {
    const { email } = data;
    const response = await resetPassword(email);
    const icon = response.status === 200 ? 'success' : 'error';
    const title =
      icon === 'success'
        ? 'Email de recuperação enviado'
        : 'Email não encontrado';
    Swal.fire({ title, icon, confirmButtonColor: '#B5C401' });
  };
  return (
    <TransitionPage>
      <BoldText>Reset Password</BoldText>
      <form onSubmit={handleSubmit(resetPasswordHandler)}>
        <Card>
          {errors.email && (
            <ErrorLabel htmlFor='email'>{errors.email.message}</ErrorLabel>
          )}
          <Input
            data-cy='email'
            type='email'
            placeholder='Email'
            {...register('email')}
          />
          <TextButton primary text='Send link' arrow />
        </Card>
      </form>
      <TextButton arrowLeft text='Back' onClick={() => navigate('/')} />
    </TransitionPage>
  );
};

export default ResetPassword;
