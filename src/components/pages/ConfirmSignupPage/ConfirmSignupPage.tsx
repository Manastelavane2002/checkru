import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Button, TextField, Typography } from 'src/components/global';
import { AuthContainer } from 'src/components/hoc/AuthContainer';
import { useRouter } from 'next/router';
import { ROUTES } from 'src/constants/routes';
import { useAuthContext } from 'src/context/AuthContext/AuthContext';
import { otpRequiredSchema } from 'src/components/global/TextField/TextField.constants';
import { STATIC_TEXT } from 'src/constants/static-text';
const { labels, inputs, placeholders } = STATIC_TEXT;
const { title, subTitle, buttons } = STATIC_TEXT.confirmSignup;

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
      const res = await confirmUser({ ...data, username: 'raj.upadhyay+1@techwondoe.com' ?? '' });
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
    await resendUserConfirmOpt('raj.upadhyay+1@techwondoe.com' ?? '');
  };
  return (
    <AuthContainer title={title} subTitle={subTitle} error={error}>
      <FormProvider {...methods}>
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
        <div className="flex-center my-6">
          <Typography variant="p" className="text-body">
            {buttons.resendDesc}
          </Typography>
          <Button variant="text" label={buttons.resend} onClick={handleResendOtp} />
        </div>
        <Button onClick={handleSubmit(onSubmit)} label={buttons.signUp} variant="fullWidth" />
        <div className="flex-center mt-6">
          <Button
            variant="text"
            onClick={() => router.replace(ROUTES.SIGN_UP)}
            label={buttons.back}
          />
        </div>
      </FormProvider>
    </AuthContainer>
  );
}
