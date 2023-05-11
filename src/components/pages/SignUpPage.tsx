import { useState } from 'react';
import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Button } from '../global/Button';
import { TextField } from '../global/TextField';
import { Typography } from '../global/Typography';
import { AuthContainer } from '../hoc/AuthContainer';
import { useRouter } from 'next/router';
import { ROUTES } from 'src/constants/routes';
import { SignUpPayload } from '../../context/AuthContext/AuthContext.types';
import { useAuthContext } from '../../context/AuthContext/AuthContext';

export default function SignUpPage() {
  const methods = useForm<SignUpPayload>();
  const router = useRouter();
  const {
    handleSubmit,
    formState: { errors },
  } = methods;
  const [error, setError] = useState<string>();
  const { signUp, saveToken } = useAuthContext();

  const onSubmit = async (data: SignUpPayload) => {
    try {
      const res = await signUp(data);
      if (!res || !res.userConfirmed) {
        router.replace(`/confirmSignUp/${res?.username || ''}`);
      }
      if (res && res.isSuccess) {
        await saveToken();
        router.replace(ROUTES.LOGIN);
      } else {
        setError(res?.error?.message as string);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleSignInNavigation = () => {
    router.push(ROUTES.LOGIN);
  };

  return (
    <AuthContainer title="Create an account" error={error}>
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
              message: 'Password should contain only 30 chars',
            },
          }}
          name="password"
          label="Password"
          error={Boolean(errors.password)}
          helperText={errors.password?.message as string}
          variant="outlined"
          type="password"
          fullWidth
        />
        <div className="flex mb-4">
          <input type="checkbox" className="mr-2" name="tnc" id="tnc" />
          <label htmlFor="tnc" className="text-white">
            Terms and conditions
          </label>
        </div>
        <Button onClick={handleSubmit(onSubmit)} label="Get started" />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            justifyContent: 'center',
            marginTop: 24,
          }}>
          <Typography variant="p" className="text-secondaryText">
            Already have an account?
          </Typography>
          <Button onClick={handleSignInNavigation} label=" Sign in" variant="text" />
        </div>
      </FormProvider>
    </AuthContainer>
  );
}
