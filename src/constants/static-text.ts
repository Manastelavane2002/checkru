export const STATIC_TEXT = {
  login: {
    title: 'Log in',
    subTitle: 'Welcome back! Please enter your details.',
    buttons: {
      rememberMe: 'Remember me',
      forgotPass: 'Forgot password',
      signupDesc: `Don't have an account?`,
      signUp: 'Sign Up',
      signIn: 'Sign In',
    },
  },
  signUp: {
    title: 'Create an account',
    terms: 'Terms and conditions',
    signInDesc: 'Already have an account?',
    buttons: {
      signIn: 'Sign in',
      signUp: 'Get started',
    },
  },
  forgotPass: {
    title: 'Forgot password?',
    subTitle: 'Reset your password by entering your email to receive a reset link',
    buttons: {
      resendCodeDesc: `Didn’t receive the code?`,
      resendCode: 'Click to resend',
      sendOTP: 'Request OTP',
      resetPassword: 'Reset Password',
      backToLogin: 'Back to login',
    },
  },
  inputs: {
    email: 'email',
    password: 'password',
    confirmPassword: 'cpassword',
    otp: 'otp',
  },
  labels: {
    otp: 'One Time Password',
    confirmPass: 'Confirm New Password',
  },
  placeholders: {
    email: 'Enter your email',
    password: 'Enter your password',
    otp: 'Enter the OTP',
    confirmPass: 'Confirm New Password',
  },
  errors: {
    emailRequired: 'Email is required',
    passwordRequired: 'Password is required',
    passwordMinLength: 'Password should contain only 8 chars',
    otpRequired: 'Otp is required',
  },
};
