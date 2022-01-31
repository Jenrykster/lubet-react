import Card from '../../shared/Card';
import Input from '../../shared/Input';
import TextButton from '../../shared/TextButton';
import BoldText from '../../shared/BoldText';
import { useNavigate } from 'react-router-dom';
import TransitionPage from '../../shared/TransitionPage';

const ResetPassword = () => {
  const navigate = useNavigate();
  return (
    <TransitionPage>
      <BoldText>Reset Password</BoldText>
      <Card>
        <Input type='email' placeholder='Email' />
        <TextButton primary text='Send link' arrow />
      </Card>
      <TextButton arrowLeft text='Back' onClick={() => navigate('/')} />
    </TransitionPage>
  );
};

export default ResetPassword;
