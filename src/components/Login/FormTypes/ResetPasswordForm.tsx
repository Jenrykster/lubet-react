import { Card, TextButton } from '../../shared';
import {
  changePassword,
  resetPassword,
} from '../../../shared/services/auth/auth';
import resetPasswordSchema from '@schemas/resetPassword';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import BackButton from '../BackButton';
import FormInput from '../FormInput';
import { IData, InputTypes } from '../../../shared/interfaces';
import useUserRequest from '../../../hooks/useUserRequest';
import FormWrapper from '../FormWrapper';
import { useState } from 'react';

const ResetPasswordForm = () => {
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

  return (
    <FormWrapper title='Reset Password'>
      {!canChangePassword && requestPasswordChangeForm}
      {canChangePassword && changePasswordForm}
      <BackButton />
    </FormWrapper>
  );
};

export default ResetPasswordForm;
