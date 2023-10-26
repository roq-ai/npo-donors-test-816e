import * as yup from 'yup';

export const donorProfileValidationSchema = yup.object().shape({
  name: yup.string().nullable(),
  description: yup.string().nullable(),
  created_by: yup.string().nullable().required(),
});
