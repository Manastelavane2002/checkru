import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { ConfirmSignUpPage } from 'src/components/pages/ConfirmSignupPage/ConfirmSignupPage';
import { checkSSRTokenAndRedirect } from 'src/utils/auth-redirect';

export const getServerSideProps: GetServerSideProps<{}> = async (
  context: GetServerSidePropsContext
) => {
  return checkSSRTokenAndRedirect({ context });
};

export default function ConfirmSignUp() {
  return <ConfirmSignUpPage />;
}
