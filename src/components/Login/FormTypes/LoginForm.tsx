import Card from '../../shared/Card';
import Input from '../../shared/Input';
import TextLink from '../../shared/Text';
import TextButton from '../../shared/TextButton';
import BoldText from '../../shared/BoldText';
import { Link, useNavigate } from 'react-router-dom';
import TransitionPage from '../../shared/TransitionPage';

const LoginForm = () => {
  const navigate = useNavigate();
  return (
    <TransitionPage>
      <BoldText>Authentication</BoldText>
      <Card>
        <Input type='email' placeholder='Email' />
        <Input type='password' placeholder='Password' />
        <TextLink>
          <Link to='/reset'>I forgot my password</Link>
        </TextLink>
        <TextButton primary text='Log in' arrow />
      </Card>
      <TextButton text='Sign Up' arrow onClick={() => navigate('/register')} />
    </TransitionPage>
  );
};

export default LoginForm;
