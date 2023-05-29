import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { getStatementDataBackend } from 'src/api/backend/statement';
import { Statement } from 'src/api/types';
import DashboardPage from 'src/components/pages/Dashboard/Dashboard';
import { checkSSRTokenAndRedirect } from 'src/utils/auth-redirect';

interface StatementPageProps {
  statements: Array<Statement>;
}

export const getServerSideProps: GetServerSideProps<{}> = async (
  context: GetServerSidePropsContext
) => {
  let pageProps: StatementPageProps = { statements: [] };
  const statementsResponse = await getStatementDataBackend();
  if (statementsResponse.data && statementsResponse.isSuccess) {
    pageProps = {
      ...pageProps,
      statements: statementsResponse.data.statements,
    };
  }
  return checkSSRTokenAndRedirect({
    context,
    pageProps: pageProps as unknown as Record<string, string>,
  });
};

export default function Dashboard(props: StatementPageProps) {
  console.info(props);
  return <DashboardPage />;
}
