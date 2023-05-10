import { useRouter } from 'next/router';
import * as React from 'react';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Button } from '../global/Button';
import { TextField } from '../global/TextField';
import { AuthContainer } from '../modules/auth/AuthContainer';
import { ROUTES } from 'src/constants/routes';
import { useAuthContext } from '../context/AuthContext/AuthContext';

export default function ForgotPassPage() {
  const methods = useForm<{
    currentPassword: string;
    newPassword: string;
  }>();
  const [error, setError] = useState<string>();

  const {
    handleSubmit,
    formState: { errors },
  } = methods;
  const router = useRouter();
  const { changePassword } = useAuthContext();
  const onSubmit = async (data: { currentPassword: string; newPassword: string }) => {
    const res = await changePassword({
      oldPassword: data?.currentPassword,
      newPassword: data?.newPassword,
    });
    if (res && res.isSuccess) {
      router.replace(ROUTES.DEFAULT);
    } else {
      setError(res?.error?.message as string);
    }
  };
  return (
    <AuthContainer
      title="Change Password"
      subTitle="Welcome back! Please enter your older password."
      error={error}>
      <FormProvider {...methods}>
        <TextField
          validationSchema={{
            required: {
              value: true,
              message: 'Current password is required',
            },
            maxLength: {
              value: 30,
              message: 'Password should contain only 8 chars',
            },
          }}
          name="currentPassword"
          label="Current Password"
          error={Boolean(errors.currentPassword)}
          helperText={errors.currentPassword?.message as string}
          variant="outlined"
          type="password"
          fullWidth
        />
        <TextField
          validationSchema={{
            required: {
              value: true,
              message: 'New password is required',
            },
            maxLength: {
              value: 30,
              message: 'Password should contain only 8 chars',
            },
          }}
          name="newPassword"
          label="New Password"
          error={Boolean(errors.newPassword)}
          helperText={errors.newPassword?.message as string}
          variant="outlined"
          type="password"
          fullWidth
        />
        <TextField
          validationSchema={{
            required: {
              value: true,
              message: 'Please re-enter new password',
            },
            maxLength: {
              value: 30,
              message: 'Password should contain only 8 chars',
            },
          }}
          name="confirmPassword"
          label="Confirm Password"
          error={Boolean(errors.newPassword)}
          helperText={errors.newPassword?.message as string}
          variant="outlined"
          type="password"
          fullWidth
        />
        <Button label="Change Password" onClick={handleSubmit(onSubmit)} variant="default" />
      </FormProvider>
    </AuthContainer>
  );
}
