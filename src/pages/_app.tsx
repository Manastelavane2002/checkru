import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { AuthContextProvider } from 'src/context/AuthContext/AuthContext';
import { Amplify } from 'aws-amplify';

Amplify.configure({
  Auth: {
    region: 'ap-southeast-2',
    userPoolId: 'ap-southeast-2_0pe4dltcU',
    userPoolWebClientId: '5brg58l9fjgm3g44qkpnq4n64k',
  },
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}
