import { GetStaticProps } from 'next';
import SignUpPage from 'src/components/pages/SignUpPage';

function SignUp() {
  return <SignUpPage />;
}

export const getStaticProps: GetStaticProps<
  Record<string, unknown>
> = async () => {
  return {
    props: {},
  };
};

export default SignUp;
