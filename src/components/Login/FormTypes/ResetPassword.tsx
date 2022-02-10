import Card from '../../shared/Primitives/Card';
import TextButton from '../../shared/TextButton';
import { changePassword, resetPassword } from '../../../auth/auth';
import resetPasswordSchema from '../../../auth/schemas/resetPassword';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import BackButton from '../LoginComponents/BackButton';
import FormInput from '../LoginComponents/FormInput';
import { IData, InputTypes } from '../../../shared/interfaces';
import useUserRequest from '../../../hooks/useUserRequest';
import FormWrapper from '../LoginComponents/FormWrapper';
import { useState } from 'react';

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(resetPasswordSchema) });

  const [canChangePassword, setCanChangePassword] = useState(false);
  const [newPasswordToken, setNewPasswordToken] = useState('');

  const requestPasswordReset = useUserRequest(resetPassword, {
    route: '',
    message: 'Reset email sent successfully',
  });
  requestPasswordReset.appendOnSuccess((response: IData) => {
    setCanChangePassword(true);
    setNewPasswordToken(
      typeof response.token === 'string' ? response.token : ''
    );
  });

  const requestNewPassword = useUserRequest(
    changePassword,
    {
      route: '/',
      message: 'Changed Password',
    },
    newPasswordToken
  );

  const requestPasswordChangeForm = (
    <form onSubmit={handleSubmit(requestPasswordReset.fire)}>
      <Card>
        <FormInput
          inputName={InputTypes.email}
          errors={errors}
          register={register}
        />
        <TextButton data-cy='send-link-btn' primary text='Send link' arrow />
      </Card>
    </form>
  );

  const changePasswordForm = (
    <form onSubmit={handleSubmit(requestNewPassword.fire)}>
      <Card>
        <FormInput
          inputName={InputTypes.password}
          errors={errors}
          register={register}
          customPlaceholder='New Password'
          password
        />
        <TextButton data-cy='send-link-btn' primary text='Reset' arrow />
      </Card>
    </form>
  );
  console.log(canChangePassword);
  return (
    <FormWrapper title='Reset Password'>
      {!canChangePassword && requestPasswordChangeForm}
      {canChangePassword && changePasswordForm}
      <BackButton />
    </FormWrapper>
  );
};

export default ResetPassword;
