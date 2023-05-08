import { useRouter } from "next/router";
import React from "react";
import { ROUTES, ROUTE_MAP } from "src/constants/routes";

interface ErrorPageProps {
  statusCode: number;
}

function ErrorPage({ statusCode }: ErrorPageProps) {
  const router = useRouter();

  return (
    <div>
      <label>Oops! Something went wrong!</label>
      {statusCode && <label>Error Status: {statusCode}</label>}
      <button onClick={() => router.replace(ROUTE_MAP[ROUTES.DEFAULT])}>
        <label>Go Home?</label>
      </button>
    </div>
  );
}

export default ErrorPage;
