import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { AuthContextProvider } from 'src/context/AuthContext/AuthContext';
import { Amplify } from 'aws-amplify';

Amplify.configure({
  Auth: {
    region: process.env.AWS_REGION,
    userPoolId: process.env.AWS_POOL_ID,
    userPoolWebClientId: process.env.AWS_CLIENT_ID,
  },
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}
