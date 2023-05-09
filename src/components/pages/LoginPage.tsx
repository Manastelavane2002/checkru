import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { ROUTES } from 'src/constants/routes';
import { AuthContainer } from '../modules/auth/AuthContainer';
import { Button } from '../global/Button';
import { TextField } from '../global/TextField';
import { Typography } from '../global/Typography';
import { useAuthContext } from '../context/AuthContext/AuthContext';

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
    <AuthContainer title="Log in" subTitle="Welcome back! Please enter your details." error={error}>
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
        />

        <TextField
          validationSchema={{
            required: {
              value: true,
              message: 'Password is required',
            },
            maxLength: {
              value: 30,
              message: 'Password should contain only 8 chars',
            },
          }}
          placeholder="Enter your password"
          name="password"
          label="Password"
          error={Boolean(errors.password)}
          helperText={errors.password?.message as string}
          variant="outlined"
          type="password"
          fullWidth
        />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            justifyContent: 'space-between',
            marginTop: 10,
            marginBottom: 10,
          }}>
          <div className="flex">
            <input
              type="checkbox"
              className="mr-2 bg-primaryDashboard"
              id="rememberMe"
              name="Remember me"
            />
            <label className="text-white">Remember me</label>
          </div>
          <button
            type="submit"
            className="text-primary px-2 cursor-pointer rounded-md"
            onClick={handleResetPasswordNavigation}>
            Forgot password
          </button>
        </div>

        <Button
          variant="primary"
          onClick={handleSubmit((values) => onSubmit(values))}
          label="Sign In"
        />

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            justifyContent: 'center',
            marginTop: 24,
          }}>
          <Typography variant="p" className="text-secondaryText">
            Don&apos;t have an account?
          </Typography>
          <Button onClick={handleSignUpNavigation} label="Sign Up" variant="text" />
        </div>
      </FormProvider>
    </AuthContainer>
  );
}
