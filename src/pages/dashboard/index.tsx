import { GetStaticProps } from 'next';
import DashboardPage from 'src/components/pages/Dashboard';

function Dashboard() {
  return <DashboardPage />;
}

export const getStaticProps: GetStaticProps<
  Record<string, unknown>
> = async () => {
  return {
    props: {},
  };
};

export default Dashboard;
