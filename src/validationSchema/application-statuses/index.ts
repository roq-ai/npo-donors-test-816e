import * as yup from 'yup';

export const applicationStatusValidationSchema = yup.object().shape({
  status: yup.string().nullable(),
});
