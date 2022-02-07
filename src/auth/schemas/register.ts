import * as yup from 'yup';

const registerSchema = yup.object().shape({
  name: yup
    .string()
    .min(2)
    .matches(/^[a-z]+$/, 'your name must be letters only')
    .required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).max(10).required(),
});

export default registerSchema;
