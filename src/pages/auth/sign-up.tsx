import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import SignUpPage from 'src/components/pages/SignUpPage/SignUpPage';
import { checkSSRTokenAndRedirect } from 'src/utils/auth-redirect';

export const getServerSideProps: GetServerSideProps<{}> = async (
  context: GetServerSidePropsContext
) => {
  return checkSSRTokenAndRedirect({ context });
};

export default function SignUp() {
  return <SignUpPage />;
}
