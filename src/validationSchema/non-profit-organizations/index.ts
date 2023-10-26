import * as yup from 'yup';

export const nonProfitOrganizationValidationSchema = yup.object().shape({
  name: yup.string().nullable(),
  description: yup.string().nullable(),
});
