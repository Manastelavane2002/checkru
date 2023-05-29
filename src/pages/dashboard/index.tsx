import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { getAccountInformationDataBackend } from 'src/api/backend/accountInformation';
import { getStatementDataBackend } from 'src/api/backend/statement';
import { AccountInformationResponse, Statement } from 'src/api/types';
import DashboardPage from 'src/components/pages/Dashboard/Dashboard';
import { checkSSRTokenAndRedirect } from 'src/utils/auth-redirect';

export interface DashboardPageProps {
  accountInfo?: AccountInformationResponse['data'];
  statements: Array<Statement>;
  transactions?: null;
}

export const getServerSideProps: GetServerSideProps<{}> = async (
  context: GetServerSidePropsContext
) => {
  let pageProps: DashboardPageProps = { statements: [], accountInfo: {}, transactions: null };
  const statementsResponse = await getStatementDataBackend();
  const accountInformationResponse = await getAccountInformationDataBackend();
  if (statementsResponse.data && statementsResponse.isSuccess) {
    pageProps = {
      ...pageProps,
      statements: statementsResponse.data.statements,
    };
  }
  if (accountInformationResponse.data && accountInformationResponse.isSuccess) {
    pageProps = {
      ...pageProps,
      accountInfo: accountInformationResponse.data,
    };
  }
  return checkSSRTokenAndRedirect({
    context,
    pageProps: pageProps as unknown as Record<string, string>,
  });
};

export default function Dashboard(props: DashboardPageProps) {
  return <DashboardPage {...props} />;
}
