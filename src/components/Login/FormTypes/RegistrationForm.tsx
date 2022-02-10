import Card from '../../shared/Primitives/Card';
import TextButton from '../../shared/TextButton';
import BoldText from '../../shared/Primitives/BoldText';
import { useNavigate } from 'react-router-dom';
import TransitionPage from '../../shared/Utils/TransitionPage';
import { createUser } from '../../../auth/auth';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import registerSchema from '../../../auth/schemas/register';
import BackButton from '../LoginComponents/BackButton';
import FormInput from '../LoginComponents/FormInput';
import { InputTypes } from '../../../shared/interfaces';

const RegistrationForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema) });

  const registerUser = async (data: any) => {
    const { name, email, password } = data;
    const response = await createUser(name, email, password);
    const icon = response && response.status === 200 ? 'success' : 'error';
    const errorMessage =
      (response && response.data.error?.message) || 'There was an error !';
    const title =
      icon === 'success' ? 'Registrado com sucesso!' : errorMessage || 'Error';
    Swal.fire({ title, icon, confirmButtonColor: '#B5C401' });
    navigate('/');
  };
  console.log(errors);
  return (
    <TransitionPage>
      <BoldText>Registration</BoldText>
      <form onSubmit={handleSubmit(registerUser)}>
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
    </TransitionPage>
  );
};

export default RegistrationForm;
