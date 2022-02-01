import Card from '../../shared/Card';
import Input from '../../shared/Input';
import TextButton from '../../shared/TextButton';
import BoldText from '../../shared/BoldText';
import { useNavigate } from 'react-router-dom';
import TransitionPage from '../../shared/TransitionPage';
import { FormEvent, useState } from 'react';
import { createUser } from '../../../auth/auth';
import Swal from 'sweetalert2';

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const register = async (event: FormEvent) => {
    event.preventDefault();
    const response = await createUser(name, email, password);
    const icon = response.status === 200 ? 'success' : 'error';
    const title =
      icon === 'success'
        ? 'Registrado com sucesso!'
        : response.data.error?.message || 'Error';
    Swal.fire({ title, icon, confirmButtonColor: '#B5C401' });
    navigate('/');
  };
  return (
    <TransitionPage>
      <BoldText>Registration</BoldText>
      <form onSubmit={register}>
        <Card>
          <Input
            type='text'
            placeholder='Name'
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />
          <Input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <Input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
          <TextButton primary text='Register' arrow />
        </Card>
      </form>
      <TextButton arrowLeft text='Back' onClick={() => navigate('/')} />
    </TransitionPage>
  );
};

export default RegistrationForm;
