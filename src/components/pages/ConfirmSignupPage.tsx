import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Button } from '../global/Button';
import { TextField } from '../global/TextField';
import { Typography } from '../global/Typography';
import { AuthContainer } from '../modules/auth/AuthContainer';
import { useRouter } from 'next/router';
import { ROUTES } from 'src/constants/routes';
import { useAuthContext } from '../context/AuthContext/AuthContext';

export function ConfirmSignUpPage() {
  const [error, setError] = useState<string>();
  const router = useRouter();
  const methods = useForm<{ otp: string }>();
  const {
    handleSubmit,
    formState: { errors },
  } = methods;
  const { confirmUser, resendUserConfirmOpt } = useAuthContext();
  const onSubmit = async (data: { otp: string }) => {
    try {
      const res = await confirmUser({ ...data, username: String(router.query.username) ?? '' });
      if (res && res?.isSuccess) {
        router.replace(ROUTES.LOGIN);
      } else {
        setError(res?.error?.message as string);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleResendOtp = async () => {
    await resendUserConfirmOpt(String(router.query.username) ?? '');
  };
  return (
    <AuthContainer title="Create an account" subTitle="Start your 30-day free trial." error={error}>
      <FormProvider {...methods}>
        <TextField
          name="otp"
          label="One time Password"
          validationSchema={{
            required: {
              value: true,
              message: 'One time Password is required',
            },
          }}
          error={Boolean(errors.otp)}
          helperText={errors.otp?.message as string}
          variant="outlined"
          type="otp"
          fullWidth
        />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            justifyContent: 'center',
            marginTop: 24,
            marginBottom: 24,
          }}>
          <Typography variant="p" className="text-secondaryText">
            Didn’t receive the code?
          </Typography>
          <Button variant="text" label="Click to resend" onClick={handleResendOtp} />
        </div>
        <Button onClick={handleSubmit(onSubmit)} label="Confirm Sign Up" />

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            justifyContent: 'center',
            marginTop: 24,
          }}>
          <Button variant="text" onClick={() => router.replace(ROUTES.SIGN_UP)} label="Go Back" />
        </div>
      </FormProvider>
    </AuthContainer>
  );
}
