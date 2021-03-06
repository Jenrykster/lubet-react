import { Centered, Column } from '@components/SharedComponents';
import { ErrorStyle } from './styles';

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
