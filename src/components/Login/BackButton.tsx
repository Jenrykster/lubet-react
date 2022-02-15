import { useNavigate } from 'react-router-dom';
import { TextButton } from '../shared';

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <TextButton
      data-cy='back-btn'
      arrowLeft
      text='Back'
      onClick={() => navigate('/')}
    />
  );
};

export default BackButton;
