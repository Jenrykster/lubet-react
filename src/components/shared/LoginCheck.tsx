import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../store/store';
import TransitionPage from './TransitionPage';

const LoginCheck: React.FC = (props) => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/games');
    }
  }, [navigate, isLoggedIn]);
  if (isLoggedIn) {
    return <TransitionPage>{props.children}</TransitionPage>;
  } else {
    return <p></p>;
  }
};

export default LoginCheck;
