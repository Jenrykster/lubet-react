import Card from '../../shared/Card';
import Input from '../../shared/Input';
import Link from '../../shared/Link';
import TextButton from '../../shared/TextButton';
import BoldText from '../../shared/BoldText';

const LoginForm = () => {
  return (
    <Card>
      <BoldText>Authentication</BoldText>
      <Input type='email' placeholder='Email' />
      <Input type='password' placeholder='Password' />
      <Link href='#'>I forgot my password</Link>
      <TextButton primary text='Log in' arrow />
      <TextButton text='Sign Up' arrow />
    </Card>
  );
};

export default LoginForm;
