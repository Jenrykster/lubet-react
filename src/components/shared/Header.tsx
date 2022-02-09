import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { logoutUser } from '../../store/slices/userSlice';
import Column from './Primitives/Column';
import Row from './Primitives/Row';
import TextButton, { TextButtonStyles } from './TextButton';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 100px;
  border-bottom: 2px solid #ebebeb;

  ${TextButtonStyles} {
    font-size: 1.1rem;
    margin: 0;
    margin-right: 1rem;
  }
  ${TextButtonStyles}:last-child {
    margin-right: 8rem;
    margin-left: 3rem;
  }

  @media (max-width: 700px) {
    padding-left: 10px;
    justify-content: space-around;
    ${TextButtonStyles} {
      margin: 10px;
    }
    ${TextButtonStyles}:last-child {
      margin: 0;
    }
  }
`;

const HeaderLogo = styled.h1`
  font-weight: 800;
  font-size: 2.4rem;
  font-style: italic;
  margin: 0;
  padding: 10px;
  padding-bottom: 2px;
`;

const CurvedUnderline = styled.div`
  margin-bottom: -3px;
  width: 100%;
  border: #b5c401 solid 3px;
  background-color: #b5c401;
  border-radius: 4px;
`;

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
          <HeaderLogo>TGL</HeaderLogo>
          <CurvedUnderline />
        </Column>
        {props.showHomeButton && (
          <TextButton text='Home' onClick={() => navigate('/games')} />
        )}
      </Row>
      <Row>
        <TextButton text='Account' />
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
