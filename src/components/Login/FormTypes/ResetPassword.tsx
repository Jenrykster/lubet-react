import Card from '../../shared/Card';
import Input from '../../shared/Input';
import TextButton from '../../shared/TextButton';
import BoldText from '../../shared/BoldText';
import { useNavigate } from 'react-router-dom';
import TransitionPage from '../../shared/TransitionPage';
import { FormEvent, useState } from 'react';
import { resetPassword } from '../../../auth/auth';
import Swal from 'sweetalert2';

const ResetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const resetPasswordHandler = async (event: FormEvent) => {
    event.preventDefault();
    const response = await resetPassword(email);
    const icon = response.status === 200 ? 'success' : 'error';
    const title =
      icon === 'success' ? 'Logado com sucesso!' : 'Email não encontrado';
    Swal.fire({ title, icon, confirmButtonColor: '#B5C401' });
  };
  return (
    <TransitionPage>
      <BoldText>Reset Password</BoldText>
      <form onSubmit={resetPasswordHandler}>
        <Card>
          <Input
            type='email'
            placeholder='Email'
            required
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <TextButton primary text='Send link' arrow />
        </Card>
      </form>
      <TextButton arrowLeft text='Back' onClick={() => navigate('/')} />
    </TransitionPage>
  );
};

export default ResetPassword;
