import { useState } from 'react';
import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { ROUTES } from 'src/constants/routes';
import { SignUpPayload } from 'src/context/AuthContext/AuthContext.types';
import { useAuthContext } from 'src/context/AuthContext/AuthContext';
import { Button, TextField, Typography } from 'src/components/global';
import { AuthContainer } from 'src/components/hoc/AuthContainer';
import { STATIC_TEXT } from 'src/constants/static-text';
import {
  emailRequiredSchema,
  passwordMaxLengthSchema,
  passwordlRequiredSchema,
} from 'src/components/global/TextField/TextField.constants';
import { capitalizeFirstLetter } from 'src/utils/string-functions';
const { inputs, placeholders } = STATIC_TEXT;
const { title, terms, buttons, signInDesc } = STATIC_TEXT.signUp;

export default function SignUpPage() {
  const methods = useForm<SignUpPayload>();
  const router = useRouter();
  const {
    handleSubmit,
    formState: { errors },
  } = methods;
  const [error, setError] = useState<string>();
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const { signUp } = useAuthContext();

  const onSubmit = async (data: SignUpPayload) => {
    setLoading(true);
    try {
      const res = await signUp(data);
      if (res && res.isSuccess) {
        if (!res.userConfirmed) {
          router.replace(`${ROUTES.CONFIRM_SIGN_UP}?${res?.username || ''}`);
        } else {
          router.replace(ROUTES.LOGIN);
        }
      } else {
        setError(res?.error?.message as string);
      }
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const handleSignInNavigation = () => {
    router.push(ROUTES.LOGIN);
  };

  return (
    <AuthContainer title={title} error={error}>
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
        <div className="flex mb-4">
          <input
            type="checkbox"
            className="mr-2"
            name="tnc"
            id="tnc"
            onChange={(e) => {
              setChecked(e.target.checked);
            }}
          />
          <label htmlFor="tnc" className="text-white">
            {terms}
          </label>
        </div>

        <Button
          onClick={handleSubmit(onSubmit)}
          label={buttons.signUp}
          variant="fullWidth"
          disabled={!checked}
          loader={loading}
        />
        <div className="flex-center mt-6">
          <Typography htmlElement="p" variant="login-signup-extra-end-white">
            {signInDesc}
          </Typography>
          <Button onClick={handleSignInNavigation} label={buttons.signIn} variant="text" />
        </div>
      </FormProvider>
    </AuthContainer>
  );
}
