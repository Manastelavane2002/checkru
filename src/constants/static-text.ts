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
  resetPass: {
    title: 'Change Password',
    subTitle: 'Welcome back! Please enter your older password.',
    button: 'Change Password',
  },
  confirmSignup: {
    title: 'Create an account',
    subTitle: 'Start your 30-day free trial.',
    buttons: {
      resendDesc: 'Didn’t receive the code?',
      resend: 'Click to resend',
      signUp: 'Confirm Sign Up',
      back: 'Go back',
    },
  },
  inputs: {
    email: 'email',
    password: 'password',
    confirmPassword: 'confirmPassword',
    newPassword: 'newPassword',
    otp: 'otp',
  },
  labels: {
    otp: 'One Time Password',
    confirmPass: 'Confirm New Password',
    currentPass: 'Current Password',
    newPass: 'New Password',
  },
  placeholders: {
    email: 'Enter your email',
    password: 'Enter your password',
    otp: 'Enter the OTP',
    confirmPass: 'Confirm New Password',
    currentPass: 'Enter your current password',
    newPass: 'Enter your new password',
    'confirmPass-alt': 'Confirm your new password',
  },
  errors: {
    emailRequired: 'Email is required',
    passwordRequired: 'Password is required',
    passwordMinLength: 'Password should contain only 8 chars',
    otpRequired: 'Otp is required',
  },
  dateRangePicker: {
    fromRequired: 'From data is required',
    toRequired: 'To date is required.',
    invalidFrom: 'Invalid from date format',
    invalidTo: 'Invalid to date format',
    fromBeforeTo: 'From date should be on or before to date',
    cancelButton: 'Cancel',
    applyButton: 'Apply',
  },
  dateSinglePicker: {
    invalidDate: 'Invalid date format',
    cancelButton: 'Cancel',
    applyButton: 'Apply',
  },
  dateRangeName: {
    sameDay: 'allTime',
    past: 'past',
    present: 'present',
    custom: 'custom',
    unknown: 'unknown',
  },
  dashboard: {
    heading: 'My Ruralco Dashboard',
    subHeading:
      ' Transactions are listed below as they are made available to Ruralco. Your full list of transactions will be available once your monthly statement has been produced',
    statementTableTitle: 'Statements',
    transactionTableTitle: 'Transactions',
    transactionTableHeaders: ['Doc Date', 'Doc Num', 'Ref', 'Statement Period', 'Debit', 'Credit'],
  },
  accountDetails: {
    accountNumber: 'Account Number: {number}',
    accountName: 'Account Name: {name}',
  },
  title: {
    mainTitle: 'Ruralco',
  },
};
