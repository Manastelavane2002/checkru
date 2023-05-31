import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { AuthContextProvider } from 'src/context/AuthContext/AuthContext';
import { Amplify } from 'aws-amplify';
import ErrorBoundary from 'src/ErrorBoundary';
import Head from 'next/head';
import { STATIC_TEXT } from 'src/constants/static-text';

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
      <ErrorBoundary>
        <Head>
          <title>{STATIC_TEXT.title.mainTitle}</title>
        </Head>
        <Component {...pageProps} />
      </ErrorBoundary>
    </AuthContextProvider>
  );
}
