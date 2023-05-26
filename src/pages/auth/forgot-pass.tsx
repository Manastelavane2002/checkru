import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import ForgotPassPage from 'src/components/pages/ForgotPassPage/ForgotPassPage';
import { checkSSRTokenAndRedirect } from 'src/utils/auth-redirect';

export const getServerSideProps: GetServerSideProps<{}> = async (
  context: GetServerSidePropsContext
) => {
  return checkSSRTokenAndRedirect({ context,  });
};

export default function ForgotPass() {
  return <ForgotPassPage />;
}
