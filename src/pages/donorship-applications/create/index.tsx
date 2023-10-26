import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { useRoqClient } from 'lib/roq';
import * as RoqTypes from 'lib/roq/types';

import { donorshipApplicationValidationSchema } from 'validationSchema/donorship-applications';
import { NonProfitOrganizationInterface } from 'interfaces/non-profit-organization';
import { DonorProfileInterface } from 'interfaces/donor-profile';
import { DonorshipApplicationInterface } from 'interfaces/donorship-application';

function DonorshipApplicationCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const roqClient = useRoqClient();
  const handleSubmit = async (values: DonorshipApplicationInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await roqClient.donorship_application.create({ data: values as RoqTypes.donorship_application });
      resetForm();
      router.push('/donorship-applications');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<DonorshipApplicationInterface>({
    initialValues: {
      status: '',
      non_profit_organisation_id: (router.query.non_profit_organisation_id as string) ?? null,
      donot_profile_id: (router.query.donot_profile_id as string) ?? null,
    },
    validationSchema: donorshipApplicationValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Donorship Applications',
              link: '/donorship-applications',
            },
            {
              label: 'Create Donorship Application',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Donorship Application
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <TextInput
            error={formik.errors.status}
            label={'Status'}
            props={{
              name: 'status',
              placeholder: 'Status',
              value: formik.values?.status,
              onChange: formik.handleChange,
            }}
          />

          <AsyncSelect<NonProfitOrganizationInterface>
            formik={formik}
            name={'non_profit_organisation_id'}
            label={'Select Non Profit Organization'}
            placeholder={'Select Non Profit Organization'}
            fetcher={() => roqClient.non_profit_organization.findManyWithCount({})}
            labelField={'name'}
          />
          <AsyncSelect<DonorProfileInterface>
            formik={formik}
            name={'donot_profile_id'}
            label={'Select Donor Profile'}
            placeholder={'Select Donor Profile'}
            fetcher={() => roqClient.donor_profile.findManyWithCount({})}
            labelField={'name'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/donorship-applications')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'donorship_application',
    operation: AccessOperationEnum.CREATE,
  }),
)(DonorshipApplicationCreatePage);
