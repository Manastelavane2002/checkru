export enum ROUTES {
  LOGIN = "login",
  SIGN_UP = "signUp",
  FORGOT_PASSWORD = "forgotPass",
  RESET_PASSWORD = "resetPass",
  DASHBOARD = "dashboard",
  DEFAULT = "default",
}

export const ROUTE_MAP: { [routeName: string]: string } = {
  [ROUTES.LOGIN]: "/auth/login",
  [ROUTES.SIGN_UP]: "/atuh/sign-up",
  [ROUTES.FORGOT_PASSWORD]: "/auth/forgot-pass",
  [ROUTES.RESET_PASSWORD]: "/auth/reset-pass",
  [ROUTES.DASHBOARD]: "/dashboard",
  [ROUTES.DEFAULT]: "/",
};
