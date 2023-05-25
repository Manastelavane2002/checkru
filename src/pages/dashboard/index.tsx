import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import DashboardPage from 'src/components/pages/Dashboard/Dashboard';
import { checkSSRTokenAndRedirect } from 'src/utils/auth-redirect';

export const getServerSideProps: GetServerSideProps<{}> = async (
  context: GetServerSidePropsContext
) => {
  return checkSSRTokenAndRedirect({ context });
};

export default function Dashboard() {
  return <DashboardPage />;
}
