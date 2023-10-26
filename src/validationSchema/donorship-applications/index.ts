import * as yup from 'yup';

export const donorshipApplicationValidationSchema = yup.object().shape({
  status: yup.string().nullable(),
  non_profit_organisation_id: yup.string().nullable().required(),
  donot_profile_id: yup.string().nullable().required(),
});
