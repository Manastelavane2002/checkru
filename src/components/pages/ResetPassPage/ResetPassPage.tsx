import { useRouter } from 'next/router';
import * as React from 'react';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Button, TextField } from 'src/components/global';
import {
  passwordlRequiredSchema,
  passwordMaxLengthSchema,
} from 'src/components/global/TextField/TextField.constants';
import { AuthContainer } from 'src/components/hoc/AuthContainer';
import { ROUTES } from 'src/constants/routes';
import { STATIC_TEXT } from 'src/constants/static-text';
import { useAuthContext } from 'src/context/AuthContext';
const { inputs, placeholders, labels } = STATIC_TEXT;
const { title, subTitle, button } = STATIC_TEXT.resetPass;

export default function ResetPassPage() {
  const methods = useForm<{
    newPassword: string;
    password: string;
  }>();
  const [error, setError] = useState<string>();

  const {
    handleSubmit,
    formState: { errors },
  } = methods;
  const router = useRouter();
  const { changePassword } = useAuthContext();
  const onSubmit = async (data: { newPassword: string; password: string }) => {
    const res = await changePassword({
      oldPassword: data?.password,
      newPassword: data?.newPassword,
    });
    if (res && res.isSuccess) {
      router.replace(ROUTES.DEFAULT);
    } else {
      setError(res?.error?.message as string);
    }
  };
  return (
    <AuthContainer title={title} subTitle={subTitle} error={error}>
      <FormProvider {...methods}>
        <TextField
          validationSchema={{
            required: passwordlRequiredSchema,
            maxLength: passwordMaxLengthSchema,
          }}
          name={inputs.password}
          label={labels.currentPass}
          error={Boolean(errors.password)}
          helperText={errors.password?.message as string}
          variant="outlined"
          type={inputs.password}
          fullWidth
          className="dark-rounded"
          placeholder={placeholders.currentPass}
        />
        <TextField
          validationSchema={{
            required: passwordlRequiredSchema,
            maxLength: passwordMaxLengthSchema,
          }}
          name={inputs.newPassword}
          label={labels.newPass}
          error={Boolean(errors.newPassword)}
          helperText={errors.newPassword?.message as string}
          variant="outlined"
          type={inputs.password}
          fullWidth
          placeholder={placeholders.newPass}
          className="dark-rounded"
        />
        <TextField
          validationSchema={{
            required: passwordlRequiredSchema,
            maxLength: passwordMaxLengthSchema,
          }}
          name={inputs.confirmPassword}
          label={labels.confirmPass}
          error={Boolean(errors.newPassword)}
          helperText={errors.newPassword?.message as string}
          variant="outlined"
          type={inputs.password}
          fullWidth
          className="dark-rounded"
          placeholder={placeholders['confirmPass-alt']}
        />
        <Button label={button} onClick={handleSubmit(onSubmit)} variant="default" />
      </FormProvider>
    </AuthContainer>
  );
}
