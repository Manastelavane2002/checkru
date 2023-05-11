import React from 'react';
import { Auth } from 'aws-amplify';
import {
  ChangePasswordPayload,
  ConfirmUserPayload,
  IncognitoApiResponse,
  ResetPasswordPayload,
  SignInPayload,
  SignUpPayload,
} from './AuthContext.types';
import { getCookie, setCookie, deleteCookie } from 'cookies-next';
import { STORAGE } from 'src/constants/storage-keys';

export interface AuthContextProps {
  changePassword: (credentials: ChangePasswordPayload) => Promise<IncognitoApiResponse | null>;
  confirmUser: (credentials: ConfirmUserPayload) => Promise<IncognitoApiResponse | null>;
  getAccessTokenExpiration: () => Promise<number>;
  logout: () => void;
  resendUserConfirmOpt: (username: string) => void;
  saveToken: () => void;
  sendPasswordResetOtp: (email: string) => Promise<IncognitoApiResponse | null>;
  setNewPassword: (credentials: ResetPasswordPayload) => Promise<IncognitoApiResponse | null>;
  signIn: (credentials: SignUpPayload) => Promise<IncognitoApiResponse | null>;
  signUp: (credentials: SignUpPayload) => Promise<IncognitoApiResponse | null>;
  token?: string | null;
}

const useAuth = () => {
  const token = getCookie(STORAGE.TOKEN);
  const getCurrentAuthenticatedUser = async () => Auth.currentAuthenticatedUser();

  const getAccessToken = async () => {
    const session = await Auth.currentSession();
    return session.getIdToken().getJwtToken();
  };

  const signUp = async ({ email, password }: SignUpPayload): Promise<IncognitoApiResponse> => {
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

  const signIn = async ({ email, password }: SignInPayload): Promise<IncognitoApiResponse> => {
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

  const sendPasswordResetOtp = async (email: string): Promise<IncognitoApiResponse> => {
    try {
      await Auth.forgotPassword(email);
      return { isSuccess: true };
    } catch (error) {
      console.error(error);
      return { isSuccess: false, error: Error(error as string) };
    }
  };

  const setNewPassword = async ({
    email,
    password,
    otp,
  }: ResetPasswordPayload): Promise<IncognitoApiResponse> => {
    try {
      await Auth.forgotPasswordSubmit(email, otp, password);
      return { isSuccess: true };
    } catch (error) {
      console.error(error);
      return { isSuccess: false, error: Error(error as string) };
    }
  };

  const confirmUser = async ({
    otp,
    username,
  }: ConfirmUserPayload): Promise<IncognitoApiResponse> => {
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

  const changePassword = async ({
    oldPassword,
    newPassword,
  }: ChangePasswordPayload): Promise<IncognitoApiResponse> => {
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

  const logout = async () => {
    await Auth.signOut();
    deleteCookie(STORAGE.TOKEN);
    localStorage.clear();
  };

  const getAccessTokenExpiration = async () => {
    const session = await Auth.currentSession();
    return session.getAccessToken().getExpiration();
  };

  const saveToken = async () => {
    const token = await getAccessToken();
    setCookie(STORAGE.TOKEN, token);
  };

  const resendUserConfirmOpt = (username: string) => Auth.resendSignUp(username);

  return {
    token: String(token),
    signUp,
    signIn,
    sendPasswordResetOtp,
    setNewPassword,
    confirmUser,
    changePassword,
    logout,
    getAccessTokenExpiration,
    saveToken,
    resendUserConfirmOpt,
  };
};

const AuthContext = React.createContext<AuthContextProps>({
  token: '',
  signUp: () => Promise.resolve(null),
  signIn: () => Promise.resolve(null),
  sendPasswordResetOtp: () => Promise.resolve(null),
  setNewPassword: () => Promise.resolve(null),
  changePassword: () => Promise.resolve(null),
  confirmUser: () => Promise.resolve(null),
  logout: () => {},
  saveToken: () => {},
  getAccessTokenExpiration: () => Promise.resolve(0),
  resendUserConfirmOpt: () => {},
});

export function AuthContextProvider({ children }: { children: React.ReactNode }) {
  const authBag = useAuth();
  return <AuthContext.Provider value={authBag}>{children}</AuthContext.Provider>;
}

export const useAuthContext = () => React.useContext(AuthContext);
