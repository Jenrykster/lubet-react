import styled from 'styled-components';
import Column from './Column';
import Row from './Row';
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
    margin-right: 3rem;
  }
  ${TextButtonStyles}:last-child {
    margin-right: 8rem;
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

const Header = () => {
  return (
    <StyledHeader>
      <Column>
        <HeaderLogo>TGL</HeaderLogo>
        <CurvedUnderline />
      </Column>
      <Row>
        <TextButton text='Account' />
        <TextButton text='Sign out' arrow />
      </Row>
    </StyledHeader>
  );
};

export default Header;
