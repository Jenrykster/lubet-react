import Centered from './Primitives/Centered';
import styled from 'styled-components';
import Column from './Primitives/Column';

const ErrorStyle = styled.h3`
  color: red;
  text-align: center;
  p {
    color: #bbbbbb;
  }
  b {
    color: #756d6d;
    font-weight: 800;
  }
  b:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
const ErrorMessage = () => {
  return (
    <Centered>
      <Column>
        <ErrorStyle>:(</ErrorStyle>
        <ErrorStyle>
          Sorry, there was an error while contacting the server
          <p>
            please <b onClick={() => window.location.reload()}>refresh</b> the
            page
          </p>
        </ErrorStyle>
      </Column>
    </Centered>
  );
};

export default ErrorMessage;
