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
import { STORAGE } from 'src/constants/storage-keys';
import { setCookie } from 'cookies-next';
const { inputs, placeholders } = STATIC_TEXT;
const { title, subTitle, buttons } = STATIC_TEXT.login;

export default function LoginPage() {
  const methods = useForm<{ email: string; password: string }>();
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);
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
    setLoading(true);
    try {
      const res = await signIn(data);
      if (res && res.isSuccess) {
        localStorage.setItem('email', res!.data!.attributes.email as string);
        localStorage.setItem('name', res!.data!.attributes?.name || ('' as string));
        checked && setCookie(STORAGE.REMEMBER, true);
        await saveToken();
        router.replace(ROUTES.DASHBOARD);
      } else {
        setError(res?.error?.message as string);
      }
      setLoading(false);
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
          <div className="flex w-full">
            <input
              type="checkbox"
              className="mr-2 bg-primaryDashboard"
              id="rememberMe"
              onChange={(e) => {
                setChecked(e.target.checked);
              }}
              name={buttons.rememberMe}
            />
            <label className="text-white" htmlFor="rememberMe">
              {buttons.rememberMe}
            </label>
          </div>
          <Button
            variant="text"
            onClick={handleResetPasswordNavigation}
            label={buttons.forgotPass}
          />
        </div>
        <Button
          onClick={handleSubmit((values) => onSubmit(values))}
          label={buttons.signIn}
          loader={loading}
          disabled={loading}
          variant="fullWidth"
        />
        <div className="flex-center mt-6">
          <Typography htmlElement="p" variant="login-signup-extra-end-white">
            {buttons.signupDesc}
          </Typography>
          <Button variant="text" onClick={handleSignUpNavigation} label={buttons.signUp} />
        </div>
      </FormProvider>
    </AuthContainer>
  );
}
