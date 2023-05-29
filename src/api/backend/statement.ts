import { FetchMethods, FetchProps, handleFetch } from '../fetch/fetch';
import { ErrorResponse, StatementResponse } from '../types';

export const getStatementDataBackend = async (): Promise<StatementResponse | ErrorResponse> => {
  const fetchProps: FetchProps = {
    includeAuthorization: true,
    endpoint: '/4f885718-bd96-4709-87c0-cf2b62e3f7c8',
    customUrlBase: 'https://run.mocky.io/v3',
    method: FetchMethods.GET,
    backendCall: true,
  };
  return (await handleFetch(fetchProps)) as unknown as StatementResponse | ErrorResponse;
};
