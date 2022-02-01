import Centered from './Centered';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const PageNotFound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate('/games');
    }, 1000);
  }, [navigate]);
  return (
    <Centered>
      <div>
        <h1>404 Page not found</h1>
        <p>redirecting...</p>
      </div>
    </Centered>
  );
};

export default PageNotFound;
