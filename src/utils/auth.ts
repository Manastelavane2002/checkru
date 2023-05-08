import { Auth } from 'aws-amplify';

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

export interface ApiResponse {
  data?: Record<string, Record<string, string>> | null;
  error?: Error;
  isSuccess: boolean;
  token?: string;
  userConfirmed?: boolean;
  username?: string;
}

export const extractErrorCodeFromMessage = (string: string) => {
  return string.replace(
    /InvalidPasswordException:|NotAuthorizedException:|LimitExceededException:|UsernameExistsException:/g,
    ''
  );
};

export const signUp = async ({ email, password }: SignUpPayload): Promise<ApiResponse> => {
  try {
    const res = await Auth.signUp({ username: email, password });
    return {
      isSuccess: true,
      data: res.user as unknown as Record<string, Record<string, string>>,
      userConfirmed: res.userConfirmed,
      username: res.user.getUsername(),
    };
  } catch (error) {
    console.error(error);
    return { isSuccess: false, error: Error(error as string) };
  }
};
export const signIn = async ({ email, password }: SignInPayload): Promise<ApiResponse> => {
  try {
    await Auth.signIn({ username: email, password });
    const user = await getCurrentAuthenticatedUser();
    const token = await getAccessToken();
    return { isSuccess: true, data: user, token };
  } catch (error) {
    console.error(error);
    return { isSuccess: false, error: Error(error as string) };
  }
};

export const sendPasswordResetOtp = async (email: string): Promise<ApiResponse> => {
  try {
    await Auth.forgotPassword(email);
    return { isSuccess: true };
  } catch (error) {
    console.error(error);
    return { isSuccess: false, error: Error(error as string) };
  }
};

export const setNewPassword = async ({
  email,
  password,
  otp,
}: ResetPasswordPayload): Promise<ApiResponse> => {
  try {
    await Auth.forgotPasswordSubmit(email, otp, password);
    return { isSuccess: true };
  } catch (error) {
    console.error(error);
    return { isSuccess: false, error: Error(error as string) };
  }
};

export const confirmUser = async ({ otp, username }: { otp: string; username: string }) => {
  try {
    const result = await Auth.confirmSignUp(username, otp);
    if (result === 'SUCCESS') {
      return { isSuccess: true };
    }
    return { isSuccess: false, data: null };
  } catch (error) {
    console.error(error);
    return { isSuccess: false, error: Error(error as string) };
  }
};
export const changePassword = async ({
  oldPassword,
  newPassword,
}: ChangePasswordPayload): Promise<ApiResponse> => {
  const user = await Auth.currentAuthenticatedUser();
  if (user) {
    try {
      const result = await Auth.changePassword(user, oldPassword, newPassword);
      if (result === 'SUCCESS') {
        return { isSuccess: true, data: user };
      }
      return { isSuccess: false, data: null };
    } catch (error) {
      console.error(error);
      return { isSuccess: false, error: Error(error as string) };
    }
  } else {
    return { isSuccess: false, data: null };
  }
};

export const logout = async () => {
  await Auth.signOut();
  localStorage.clear();
};

export const getCurrentAuthenticatedUser = async () => Auth.currentAuthenticatedUser();

export const getAccessToken = async () => {
  const session = await Auth.currentSession();
  return session.getIdToken().getJwtToken();
};

export const getAccessTokenExpiration = async () => {
  const session = await Auth.currentSession();
  return session.getAccessToken().getExpiration();
};
export const redirectToPrivateSection = async () => {
  const token = await getAccessToken();
  localStorage.setItem('accessToken', token);
};

export const resendUserConfirmOpt = (username: string) => Auth.resendSignUp(username);
