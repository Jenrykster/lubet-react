import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../../store/slices/userSlice';
import { Column, Row, TextButton } from '@components/SharedComponents';
import { CurvedUnderline, HeaderLogo, StyledHeader } from './styles';

const Header = (props: { showHomeButton?: boolean }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logoutUser());
    localStorage.removeItem('userData');
  };
  return (
    <StyledHeader>
      <Row>
        <Column>
          <HeaderLogo onClick={() => navigate('/games')}>TGL</HeaderLogo>
          <CurvedUnderline />
        </Column>
        {props.showHomeButton && (
          <TextButton text='Home' onClick={() => navigate('/games')} />
        )}
      </Row>
      <Row>
        <TextButton text='Account' onClick={() => navigate('/account')} />
        <TextButton
          data-cy='logout-btn'
          text='Sign out'
          arrow
          onClick={logoutHandler}
        />
      </Row>
    </StyledHeader>
  );
};

export default Header;
