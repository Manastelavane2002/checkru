import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { checkSSRTokenAndRedirect } from 'src/utils/auth-redirect';

export const getServerSideProps: GetServerSideProps<{}> = async (
  context: GetServerSidePropsContext
) => {
  return checkSSRTokenAndRedirect({ context });
};
export default function Error() {
  return <div />;
}
