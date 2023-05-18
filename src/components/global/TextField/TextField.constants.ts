import { STATIC_TEXT } from 'src/constants/static-text';
const { errors } = STATIC_TEXT;

export const emailRequiredSchema = {
  value: true,
  message: errors.emailRequired,
};

export const passwordlRequiredSchema = {
  value: true,
  message: errors.passwordRequired,
};

export const passwordMaxLengthSchema = {
  value: 30,
  message: errors.passwordMinLength,
};

export const otpRequiredSchema = {
  value: true,
  message: errors.otpRequired,
};
