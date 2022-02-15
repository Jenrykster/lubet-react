import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { ProfilePicture } from '..';
import updateAccountSchema from '@schemas/updateAccount';
import { Button } from '../../shared';
import { AccountContainer, UserEmail, UserName } from './styles';
import { IFormData } from '../../../shared/interfaces';
import { updateMyUser } from '../../../shared/services';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { loginUser } from '../../../store/slices/userSlice';
import { useNavigate } from 'react-router-dom';

export const Main = () => {
  const userAccountData = useSelector((state: RootState) => state.user);
  const userPicture =
    'https://cataas.com/cat/says/' +
    userAccountData.name +
    '?width=128&height=128';

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(updateAccountSchema),
    defaultValues: {
      name: userAccountData.name,
      email: userAccountData.email,
    },
  });

  const updateUser = async (data: IFormData) => {
    const response = await updateMyUser({
      name: data.name!,
      email: data.email!,
    });

    if ('status' in response && 'data' in response && response.status === 200) {
      const userData = {
        email: response.data.email,
        name: response.data.name,
        isAdmin: userAccountData.isAdmin,
        token: userAccountData.token,
      };

      dispatch(loginUser(userData));
      localStorage.setItem('userData', JSON.stringify(userData));
      Swal.fire('User updated', '', 'success').then(() => navigate('/games'));
    } else {
      Swal.fire('There was an error', '', 'error');
    }
  };
  return (
    <form onSubmit={handleSubmit(updateUser)}>
      <AccountContainer>
        <UserName type='text' {...register('name')} />
        <ProfilePicture img={userPicture} alt='profile pic' />
        <UserEmail type='email' {...register('email')} />

        {formState.isDirty && <Button>Update</Button>}
      </AccountContainer>
    </form>
  );
};
