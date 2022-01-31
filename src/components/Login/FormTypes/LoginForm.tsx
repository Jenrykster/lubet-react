import Card from '../../shared/Card';
import Input from '../../shared/Input';
import TextLink from '../../shared/TextLink';
import TextButton from '../../shared/TextButton';
import BoldText from '../../shared/BoldText';
import { Link } from 'react-router-dom';
import TransitionPage from '../../shared/TransitionPage';

const LoginForm = () => {
  return (
    <TransitionPage>
      <BoldText>Authentication</BoldText>
      <Card>
        <Input type='email' placeholder='Email' />
        <Input type='password' placeholder='Password' />
        <TextLink href='#'>
          <Link to='/reset'>I forgot my password</Link>
        </TextLink>
        <TextButton primary text='Log in' arrow />
      </Card>
      <TextButton text='Sign Up' arrow />
    </TransitionPage>
  );
};

export default LoginForm;
