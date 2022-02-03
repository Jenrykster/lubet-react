import Card from '../../shared/Primitives/Card';
import Input from '../../shared/Primitives/Input';
import TextLink from '../../shared/Primitives/Text';
import TextButton from '../../shared/TextButton';
import BoldText from '../../shared/Primitives/BoldText';
import { Link, useNavigate } from 'react-router-dom';
import TransitionPage from '../../shared/Utils/TransitionPage';
import { FormEvent, useState, useEffect } from 'react';
import { login } from '../../../auth/auth';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../../store/slices/userSlice';
import { RootState } from '../../../store/store';

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/games');
    }
  }, [navigate, isLoggedIn]);
  const authenticate = async (event: FormEvent) => {
    event.preventDefault();
    if (isLoggedIn) {
      Swal.fire("You're already logged in!", '', 'info');
      navigate('/games');
      return;
    }
    const response = await login(email, password);
    if (response.status === 200 && response.data.user) {
      dispatch(
        loginUser({
          email: response.data.user.email,
          name: response.data.user.name,
          isAdmin: response.data.user.isAdmin,
          token: response.data.user.token,
        })
      );
    }

    const icon = response.status === 200 ? 'success' : 'error';
    const title =
      icon === 'success'
        ? 'Logado com sucesso!'
        : response.data.message || 'Error';
    Swal.fire({ title, icon, confirmButtonColor: '#B5C401' });
    navigate('/games');
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
