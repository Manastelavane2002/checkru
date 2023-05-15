import { GetStaticProps } from 'next';
import { ConfirmSignUpPage } from 'src/components/pages/ConfirmSignupPage/ConfirmSignupPage';

function ConfirmSignUp() {
  return <ConfirmSignUpPage />;
}

export const getStaticProps: GetStaticProps<Record<string, unknown>> = async () => {
  return {
    props: {},
  };
};

export default ConfirmSignUp;
