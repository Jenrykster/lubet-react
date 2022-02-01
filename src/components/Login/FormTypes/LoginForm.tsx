import Card from '../../shared/Card';
import Input from '../../shared/Input';
import TextLink from '../../shared/Text';
import TextButton from '../../shared/TextButton';
import BoldText from '../../shared/BoldText';
import { Link, useNavigate } from 'react-router-dom';
import TransitionPage from '../../shared/TransitionPage';
import { FormEvent, useState } from 'react';
import { login } from '../../../auth/auth';
import Swal from 'sweetalert2';

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const authenticate = async (event: FormEvent) => {
    event.preventDefault();
    const response = await login(email, password);
    const icon = response.status === 200 ? 'success' : 'error';
    const title =
      icon === 'success'
        ? 'Logado com sucesso!'
        : response.data.message || 'Error';
    Swal.fire({ title, icon, confirmButtonColor: '#B5C401' });
  };
  return (
    <TransitionPage>
      <BoldText>Authentication</BoldText>
      <form onSubmit={authenticate}>
        <Card>
          <Input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
            required
          />
          <Input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
            required
          />
          <TextLink>
            <Link to='/reset'>I forgot my password</Link>
          </TextLink>
          <TextButton primary text='Log in' arrow />
        </Card>
        <TextButton
          text='Sign Up'
          arrow
          onClick={() => navigate('/register')}
        />
      </form>
    </TransitionPage>
  );
};

export default LoginForm;
