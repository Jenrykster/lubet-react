import { FormRoutes, Title } from '@components/Login';
import { Centered } from '@components/SharedComponents';

const Login: React.FC = () => {
  return (
    <Centered>
      <Title />
      <FormRoutes />
    </Centered>
  );
};

export default Login;
