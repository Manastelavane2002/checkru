import { useRouter } from 'next/router';
import React from 'react';
import { ROUTES } from 'src/constants/routes';

interface ErrorPageProps {
  statusCode: number;
}

function ErrorPage({ statusCode }: ErrorPageProps) {
  const router = useRouter();

  return (
    <div className='flex-col'>
      <label>Oops! Something went wrong!</label>
      {statusCode && <label>Error Status: {statusCode}</label>}
      <button onClick={() => router.replace(ROUTES.DEFAULT)}>
        <label>Go Home?</label>
      </button>
    </div>
  );
}

export default ErrorPage;
