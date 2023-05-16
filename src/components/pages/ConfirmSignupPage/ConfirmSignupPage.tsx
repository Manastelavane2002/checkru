import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Button } from '../../global/Button/Button';
import { TextField } from '../../global/TextField/TextField';
import { Typography } from '../../global/Typography/Typography';
import { AuthContainer } from '../../hoc/AuthContainer';
import { useRouter } from 'next/router';
import { ROUTES } from 'src/constants/routes';
import { useAuthContext } from '../../../context/AuthContext/AuthContext';

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
          placeholder="Enter the OTP"
          className="dark-rounded"
        />
        <div className="flex-center my-6">
          <Typography variant="p" className="text-body">
            Didn’t receive the code?
          </Typography>
          <Button
            variant="text"
            label="Click to resend"
            className="text-primary cursor-pointer px-2 rounded-md"
            onClick={handleResendOtp}
          />
        </div>
        <Button
          onClick={handleSubmit(onSubmit)}
          label="Confirm Sign Up"
          className="w-full bg-primary text-white py-2 rounded-[8px]"
        />
        <div className="flex-center mt-6">
          <Button
            variant="text"
            className="text-primary cursor-pointer px-2 rounded-md"
            onClick={() => router.replace(ROUTES.SIGN_UP)}
            label="Go Back"
          />
        </div>
      </FormProvider>
    </AuthContainer>
  );
}
