import Card from '../../shared/Card';
import Input from '../../shared/Input';
import TextButton from '../../shared/TextButton';
import BoldText from '../../shared/BoldText';
import { useNavigate } from 'react-router-dom';
import TransitionPage from '../../shared/TransitionPage';

const RegistrationForm = () => {
  const navigate = useNavigate();
  return (
    <TransitionPage>
      <BoldText>Registration</BoldText>
      <Card>
        <Input type='text' placeholder='Name' />
        <Input type='email' placeholder='Email' />
        <Input type='password' placeholder='Password' />
        <TextButton primary text='Register' arrow />
      </Card>
      <TextButton arrowLeft text='Back' onClick={() => navigate('/')} />
    </TransitionPage>
  );
};

export default RegistrationForm;
