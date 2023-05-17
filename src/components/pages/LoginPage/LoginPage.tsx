import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { ROUTES } from 'src/constants/routes';
import { AuthContainer } from 'src/components/hoc/AuthContainer';
import { Button, TextField, Typography } from 'src/components/global';
import { useAuthContext } from 'src/context/AuthContext/AuthContext';
import { STATIC_TEXT } from 'src/constants/static-text';
import { capitalizeFirstLetter } from 'src/utils/string-functions';
import {
  emailRequiredSchema,
  passwordMaxLengthSchema,
  passwordlRequiredSchema,
} from 'src/components/global/TextField/TextField.constants';
const { inputs, placeholders } = STATIC_TEXT;
const { title, subTitle, buttons } = STATIC_TEXT.login;

export default function LoginPage() {
  const methods = useForm<{ email: string; password: string }>();
  const {
    handleSubmit,
    formState: { errors },
  } = methods;
  const router = useRouter();
  const { signIn, saveToken } = useAuthContext();
  const checkUserAuth = typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null;

  useEffect(() => {
    if (checkUserAuth) {
      router.replace(ROUTES.DEFAULT);
    }
  }, [checkUserAuth, router]);
  const [error, setError] = useState<string>();

  const handleSignUpNavigation = () => {
    router.push(ROUTES.SIGN_UP);
  };

  const handleResetPasswordNavigation = () => {
    router.push(ROUTES.FORGOT_PASSWORD);
  };

  const onSubmit = async (data: { email: string; password: string }) => {
    try {
      const res = await signIn(data);
      if (res && res.isSuccess) {
        localStorage.setItem('email', res!.data!.attributes.email as string);
        localStorage.setItem('name', res!.data!.attributes?.name || ('' as string));
        await saveToken();
        router.replace(ROUTES.DASHBOARD);
      } else {
        setError(res?.error?.message as string);
      }
    } catch (err) {
      console.error(err);
    }
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

        <div className="flex-center my-3">
          <div className="flex">
            <input
              type="checkbox"
              className="mr-2 bg-primaryDashboard"
              id="rememberMe"
              name={buttons.rememberMe}
            />
            <label className="text-white">{buttons.rememberMe}</label>
          </div>
          <button
            type="submit"
            className="text-primary font-semibold px-2 cursor-pointer rounded-md"
            onClick={handleResetPasswordNavigation}>
            {buttons.forgotPass}
          </button>
        </div>
        <Button
          variant="primary"
          onClick={handleSubmit((values) => onSubmit(values))}
          label={buttons.signIn}
        />

        <div className="flex-center mt-6">
          <Typography variant="p" className="text-body">
            {buttons.signupDesc}
          </Typography>
          <Button
            onClick={handleSignUpNavigation}
            label={buttons.signUp}
            variant="text"
            className="font-semibold"
          />
        </div>
      </FormProvider>
    </AuthContainer>
  );
}
