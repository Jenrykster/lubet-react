import TextLink from '../../shared/Primitives/Text';
import { Link } from 'react-router-dom';
const ResetPasswordLink = () => {
  return (
    <TextLink>
      <Link data-cy='reset-password-btn' to='/reset'>
        I forgot my password
      </Link>
    </TextLink>
  );
};

export default ResetPasswordLink;