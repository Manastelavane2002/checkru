import { GetStaticProps } from 'next';
import ForgotPassPage from 'src/components/pages/ForgotPassPage';

function ForgotPass() {
  return <ForgotPassPage />;
}

export const getStaticProps: GetStaticProps<Record<string, unknown>> = async () => {
  return {
    props: {},
  };
};

export default ForgotPass;
