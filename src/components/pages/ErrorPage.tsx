import { useRouter } from 'next/router';
import React from 'react';
import { ROUTES } from 'src/constants/routes';
import { Button } from '../global/Button/Button';

interface ErrorPageProps {
  statusCode: number;
}

function ErrorPage({ statusCode }: ErrorPageProps) {
  const router = useRouter();

  return (
    <div className="flex flex-col  justify-center max-w-[200px]">
      <label>Oops! Something went wrong!</label>
      {statusCode && <label>Error Status: {statusCode}</label>}
      <Button variant="primary" onClick={() => router.replace(ROUTES.DEFAULT)} label="Go Home?" />
    </div>
  );
}

export default ErrorPage;
