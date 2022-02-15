import { FormRoutes, Title } from '@components/Login';
import { Centered } from '@components/shared';

const Login: React.FC = () => {
  return (
    <Centered>
      <Title />
      <FormRoutes />
    </Centered>
  );
};

export default Login;
