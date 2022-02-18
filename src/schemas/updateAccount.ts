import * as yup from 'yup';

const updateAccountSchema = yup.object().shape({
  email: yup.string().email().required(),
});

export default updateAccountSchema;
