import {  getCookie } from 'cookies-next';
import { GetServerSidePropsContext } from 'next';
import { AUTH_ROUTES, ROUTES } from 'src/constants/routes';
import { STORAGE } from 'src/constants/storage-keys';

interface AuthRedirecProps {
  context: GetServerSidePropsContext;
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

/**
 * @param {AuthRedirecProps}
 * @returns {redirect: {permanent: boolean, destination: ROUTES}| props: Record<string,string>}
 * @description Returns Page props or redirects the user to the page depending on login status
 * @example return checkSSRTokenAndRedirect({context, pageProps});
 */
export function checkSSRTokenAndRedirect({ context, pageProps = {} }: AuthRedirecProps) {
  const { req, res } = context;
  const token = getCookie(STORAGE.TOKEN, { req, res });
  if (context.resolvedUrl !== ROUTES.DASHBOARD && token) {
    return redirectOnSSRToken({ isLoggedIn: true }); // If route is not dashboard and user is logged in, redirect to dashboard
  } else if (!token && context.resolvedUrl.includes(ROUTES.CONFIRM_SIGN_UP)) {
    return { props: pageProps }; // Special condition for confirm signup because we are passing query param, never redirect from this page
  } else if (!token && !AUTH_ROUTES.includes(context.resolvedUrl as ROUTES)) {
    return redirectOnSSRToken({ isLoggedIn: false }); // If route is not an Auth page and user is not logged in, redirect to login page
  }

  return { props: pageProps }; // When no conditions meet (user is logged out and is on auth page, or user is logged in and is on dashborad)
}
