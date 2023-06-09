export enum ROUTES {
  CONFIRM_SIGN_UP = '/auth/confirm-sign-up',
  DASHBOARD = '/dashboard',
  DEFAULT = '/',
  FORGOT_PASSWORD = '/auth/forgot-pass',
  LOGIN = '/auth/login',
  RESET_PASSWORD = '/auth/reset-pass',
  SIGN_UP = '/auth/sign-up',
}

export const AUTH_ROUTES = [
  ROUTES.LOGIN,
  ROUTES.SIGN_UP,
  ROUTES.FORGOT_PASSWORD,
  ROUTES.CONFIRM_SIGN_UP,
  ROUTES.RESET_PASSWORD,
];
