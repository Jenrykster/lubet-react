import { Card, TextButton } from '@components/SharedComponents';
import { createUser } from '@shared/services/auth/auth';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import registerSchema from '@schemas/register';
import { BackButton, FormInput, FormWrapper } from '..';
import { InputTypes } from '@shared/interfaces';
import { useUserRequest } from '@hooks/';

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema) });

  const requestUserRegistration = useUserRequest(createUser, {
    route: '/',
    message: 'Registered successfully !',
  });

  return (
    <FormWrapper title='Registration'>
      <form onSubmit={handleSubmit(requestUserRegistration.fire)}>
        <Card>
          <FormInput
            errors={errors}
            register={register}
            inputName={InputTypes.name}
          />
          <FormInput
            inputName={InputTypes.email}
            errors={errors}
            register={register}
          />
          <FormInput
            inputName={InputTypes.password}
            errors={errors}
            register={register}
            defaultError='min password length is 6'
            password
          />
          <TextButton data-cy='sign-up-btn' primary text='Register' arrow />
        </Card>
      </form>
      <BackButton />
    </FormWrapper>
  );
};

export default RegistrationForm;
