import styled from 'styled-components';

const FooterStyle = styled.footer`
  position: fixed;
  bottom: 1rem;
  border-top: 1px solid #dddddd;
  padding-top: 20px;
  left: 0;
  right: 0;
  text-align: center;
  color: #707070;
  font-size: 0.8rem;
`;

const Footer = () => {
  return <FooterStyle>Copyright 2020 Luby Software</FooterStyle>;
};

export default Footer;
