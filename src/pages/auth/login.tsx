import { GetStaticProps } from 'next';
import LoginPage from 'src/components/pages/LoginPage';

function Login() {
  return <LoginPage />;
}

export const getStaticProps: GetStaticProps<
  Record<string, unknown>
> = async () => {
  return {
    props: {},
  };
};

export default Login;
