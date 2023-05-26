import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import React from 'react';
import { checkSSRTokenAndRedirect } from 'src/utils/auth-redirect';

export const getServerSideProps: GetServerSideProps<{}> = async (
  context: GetServerSidePropsContext
) => {
  return checkSSRTokenAndRedirect({ context });
};

export default function Index() {
  return <div />;
}
