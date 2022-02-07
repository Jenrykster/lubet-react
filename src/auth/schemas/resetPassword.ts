import * as yup from 'yup';

const resetPasswordSchema = yup.object().shape({
  email: yup.string().email().required(),
});

export default resetPasswordSchema;
