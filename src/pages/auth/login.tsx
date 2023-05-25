import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import LoginPage from 'src/components/pages/LoginPage/LoginPage';
import { checkSSRTokenAndRedirect } from 'src/utils/auth-redirect';

export const getServerSideProps: GetServerSideProps<{}> = async (
  context: GetServerSidePropsContext
) => {
  return checkSSRTokenAndRedirect({ context,  });
};

export default function Login() {
  return <LoginPage />;
}
