import { Text } from '@components/SharedComponents';
import { Link } from 'react-router-dom';
const ResetPasswordLink = () => {
  return (
    <Text>
      <Link data-cy='reset-password-btn' to='/reset'>
        I forgot my password
      </Link>
    </Text>
  );
};

export default ResetPasswordLink;
