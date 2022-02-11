import FormRoutes from '../components/Login/FormRoutes';
import Title from '../components/Login/Title';
import Centered from '../components/shared/Primitives/Centered';

const Login: React.FC = () => {
  return (
    <Centered>
      <Title />
      <FormRoutes />
    </Centered>
  );
};

export default Login;
