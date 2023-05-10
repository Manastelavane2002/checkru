import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { AuthContextProvider } from 'src/components/context/AuthContext/AuthContext';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}
