import Card from '../../shared/Card';
import Input from '../../shared/Input';
import TextButton from '../../shared/TextButton';
import BoldText from '../../shared/BoldText';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  const navigate = useNavigate();
  return (
    <div>
      <BoldText>Reset Password</BoldText>
      <Card>
        <Input type='email' placeholder='Email' />
        <TextButton primary text='Send link' arrow />
      </Card>
      <TextButton arrowLeft text='Back' onClick={() => navigate('/')} />
    </div>
  );
};

export default ResetPassword;
