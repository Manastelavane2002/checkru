import { useRouter } from 'next/router';
import * as React from 'react';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Button, TextField, Typography } from 'src/components/global';
import {
  emailRequiredSchema,
  otpRequiredSchema,
  passwordMaxLengthSchema,
  passwordlRequiredSchema,
} from 'src/components/global/TextField/TextField.constants';
import { AuthContainer } from 'src/components/hoc/AuthContainer';
import { ROUTES } from 'src/constants/routes';
import { STATIC_TEXT } from 'src/constants/static-text';
import { useAuthContext, ResetPasswordPayload } from 'src/context/AuthContext';
import { capitalizeFirstLetter } from 'src/utils/string-functions';
const { inputs, placeholders, labels } = STATIC_TEXT;
const { title, subTitle, buttons } = STATIC_TEXT.forgotPass;
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
    <AuthContainer title={title} subTitle={subTitle} error={error}>
      <FormProvider {...methods}>
        <TextField
          name={inputs.email}
          label={capitalizeFirstLetter(inputs.email)}
          validationSchema={{
            required: emailRequiredSchema,
          }}
          placeholder={placeholders.email}
          error={Boolean(errors.email)}
          helperText={errors.email?.message as string}
          variant="outlined"
          type={inputs.email}
          fullWidth
          className="dark-rounded"
        />
        {showOtpFields ? (
          <>
            <TextField
              name={inputs.otp}
              label={labels.otp}
              validationSchema={{
                required: otpRequiredSchema,
              }}
              error={Boolean(errors.otp)}
              helperText={errors.otp?.message as string}
              variant="outlined"
              type={inputs.otp}
              fullWidth
              placeholder={placeholders.otp}
              className="dark-rounded"
            />
            <div className="flex-center my-2">
              <Typography htmlElement="p" variant="login-signup-extra-end-white">
                {buttons.resendCodeDesc}
              </Typography>
              <Button variant="text" label={buttons.resendCode} onClick={handleResendOtp} />
            </div>
            <TextField
              validationSchema={{
                required: passwordlRequiredSchema,
                maxLength: passwordMaxLengthSchema,
              }}
              placeholder={placeholders.password}
              name={inputs.password}
              label={capitalizeFirstLetter(inputs.password)}
              error={Boolean(errors.password)}
              helperText={errors.password?.message as string}
              variant="outlined"
              type={inputs.password}
              fullWidth
              className="dark-rounded"
            />
            <TextField
              validationSchema={{
                required: passwordlRequiredSchema,
                maxLength: passwordMaxLengthSchema,
              }}
              name={inputs.confirmPassword}
              label={labels.confirmPass}
              error={Boolean(errors.password)}
              helperText={errors.password?.message as string}
              variant="outlined"
              type={inputs.password}
              fullWidth
              placeholder={placeholders.confirmPass}
              className="dark-rounded"
            />
          </>
        ) : null}

        <Button
          variant="fullWidth"
          onClick={showOtpFields ? handleSubmit(handleResetPassword) : handleSubmit(onSubmit)}
          label={showOtpFields ? buttons.resetPassword : buttons.sendOTP}
        />
        <div className="flex-center mt-6">
          <Button
            onClick={() => {
              router.replace(ROUTES.LOGIN);
            }}
            variant="text"
            label={buttons.backToLogin}
          />
        </div>
      </FormProvider>
    </AuthContainer>
  );
}
