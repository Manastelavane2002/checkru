import { GetStaticProps } from 'next';
import ResetPassPage from 'src/components/pages/ResetPassPage/ResetPassPage';

function ResetPass() {
  return <ResetPassPage />;
}

export const getStaticProps: GetStaticProps<Record<string, unknown>> = async () => {
  return {
    props: {},
  };
};

export default ResetPass;
