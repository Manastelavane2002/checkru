import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import ResetPassPage from 'src/components/pages/ResetPassPage/ResetPassPage';
import { checkSSRTokenAndRedirect } from 'src/utils/auth-redirect';

export const getServerSideProps: GetServerSideProps<{}> = async (
  context: GetServerSidePropsContext
) => {
  return checkSSRTokenAndRedirect({ context,  });
};

export default function ResetPass() {
  return <ResetPassPage />;
}
