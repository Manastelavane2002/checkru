import { useRouter } from 'next/router';
import * as React from 'react';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Button } from '../global/Button';
import { TextField } from '../global/TextField';
import { Typography } from '../global/Typography';
import { AuthContainer } from '../modules/auth/AuthContainer';
import { ROUTES } from 'src/constants/routes';
import { useAuthContext } from '../context/AuthContext/AuthContext';
import { ResetPasswordPayload } from '../context/AuthContext/AuthContext.types';

export default function ForgotPassPage() {
  const { sendPasswordResetOtp, setNewPassword } = useAuthContext();
  const methods = useForm<ResetPasswordPayload>();
  const [showOtpFields, setShowOtpFields] = useState(false);
  const {
    handleSubmit,
    getValues,
    formState: { errors },
  } = methods;
  const router = useRouter();
  const [error, setError] = useState<string>();
  const onSubmit = async (data: Record<string, string>) => {
    const res = await sendPasswordResetOtp(data?.email as string);
    if (res && res.isSuccess) {
      setShowOtpFields(true);
    }
  };
  const handleResetPassword = async (data: ResetPasswordPayload) => {
    const res = await setNewPassword(data);
    if (res && res.isSuccess) {
      router.push(ROUTES.LOGIN);
    } else {
      setError(res?.error?.message as string);
    }
  };
  const handleResendOtp = async () => {
    await sendPasswordResetOtp(getValues()?.email);
  };
  return (
    <AuthContainer
      title="Forgot password?"
      subTitle="Reset your password by entering your email to receive a reset link"
      error={error}>
      <FormProvider {...methods}>
        <TextField
          name="email"
          label="Email"
          validationSchema={{
            required: {
              value: true,
              message: 'Email is required',
            },
          }}
          placeholder="Enter your email"
          error={Boolean(errors.email)}
          helperText={errors.email?.message as string}
          variant="outlined"
          type="email"
          fullWidth
          disabled={showOtpFields}
          className="dark-rounded"
        />
        {showOtpFields ? (
          <>
            <TextField
              name="otp"
              label="One Time Password"
              validationSchema={{
                required: {
                  value: true,
                  message: 'Otp is required',
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
            <div className="flex-center mt-2">
              <Typography variant="p" className="text-body">
                Didn’t receive the code?
              </Typography>
              <Button variant="text" label="Click to resend" onClick={handleResendOtp} />
            </div>
            <TextField
              validationSchema={{
                required: {
                  value: true,
                  message: 'Password is required',
                },
                maxLength: {
                  value: 30,
                  message: 'Password should contain max 30 chars',
                },
              }}
              name="password"
              label="Password"
              error={Boolean(errors.password)}
              helperText={errors.password?.message as string}
              variant="outlined"
              type="password"
              fullWidth
              placeholder="Enter the password"
              className="dark-rounded"
            />
            <TextField
              validationSchema={{
                required: {
                  value: true,
                  message: 'Password is required',
                },
                maxLength: {
                  value: 30,
                  message: 'Password should contain max 30 chars',
                },
              }}
              name="cpassword"
              label="Confirm New Password"
              error={Boolean(errors.password)}
              helperText={errors.password?.message as string}
              variant="outlined"
              type="password"
              fullWidth
              placeholder="Confirm new password"
              className="dark-rounded"
            />
          </>
        ) : null}

        <Button
          onClick={showOtpFields ? handleSubmit(handleResetPassword) : handleSubmit(onSubmit)}
          label={showOtpFields ? 'Reset Password' : 'Request OTP'}
        />
        <div className="flex-center mt-6">
          <Button
            onClick={() => {
              router.replace(ROUTES.LOGIN);
            }}
            variant="text"
            label="back to login"
          />
        </div>
      </FormProvider>
    </AuthContainer>
  );
}
