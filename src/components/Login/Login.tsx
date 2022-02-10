import Centered from '../shared/Primitives/Centered';
import Form from './LoginComponents/FormRoutes';
import Title from './LoginComponents/Title';

const Login: React.FC = () => {
  return (
    <Centered>
      <Title />
      <Form />
    </Centered>
  );
};

export default Login;
