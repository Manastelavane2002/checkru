import { getCookie } from 'cookies-next';
import { GetServerSidePropsContext } from 'next';
import { ROUTES } from 'src/constants/routes';
import { STORAGE } from 'src/constants/storage-keys';

interface AuthRedirecProps {
  context: GetServerSidePropsContext;
  isDashboardOrUndefinedPath?: boolean;
  pageProps?: Record<string, string>;
}

function redirectOnSSRToken({ isLoggedIn }: { isLoggedIn: boolean }) {
  return {
    redirect: {
      permanent: false,
      destination: isLoggedIn ? ROUTES.DASHBOARD : ROUTES.LOGIN,
    },
  };
}

export function checkSSRTokenAndRedirect({
  context,
  isDashboardOrUndefinedPath,
  pageProps = {},
}: AuthRedirecProps) {
  const { req, res } = context;
  const token = getCookie(STORAGE.TOKEN, { req, res });
  if (token && !isDashboardOrUndefinedPath) {
    return redirectOnSSRToken({ isLoggedIn: true });
  } else if (!token && isDashboardOrUndefinedPath) {
    return redirectOnSSRToken({ isLoggedIn: false });
  }
  return { props: pageProps };
}
