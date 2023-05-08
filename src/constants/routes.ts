export enum ROUTES {
  DASHBOARD = 'dashboard',
  DEFAULT = 'default',
  FORGOT_PASSWORD = 'forgotPass',
  LOGIN = 'login',
  RESET_PASSWORD = 'resetPass',
  SIGN_UP = 'signUp'
}

export const ROUTE_MAP: { [routeName: string]: string } = {
  [ROUTES.LOGIN]: '/auth/login',
  [ROUTES.SIGN_UP]: '/atuh/sign-up',
  [ROUTES.FORGOT_PASSWORD]: '/auth/forgot-pass',
  [ROUTES.RESET_PASSWORD]: '/auth/reset-pass',
  [ROUTES.DASHBOARD]: '/dashboard',
  [ROUTES.DEFAULT]: '/',
};
