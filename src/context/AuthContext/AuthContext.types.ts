export type SignInPayload = {
  email: string;
  password: string;
};
export type SignUpPayload = {
  email: string;
  password: string;
};

export type ResetPasswordPayload = {
  email: string;
  otp: string;
  password: string;
};

export type ChangePasswordPayload = {
  newPassword: string;
  oldPassword: string;
};

export type ConfirmUserPayload = { otp: string; username: string };

export interface IncognitoApiResponse {
  data?: Record<string, Record<string, string>> | null;
  error?: Error;
  isSuccess: boolean;
  token?: string;
  userConfirmed?: boolean;
  username?: string;
}
