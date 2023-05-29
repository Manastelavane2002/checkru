import { FetchMethods, FetchProps, handleFetch } from '../fetch/fetch';
import { URL_ENDPOINTS } from '../fetch/fetch.constants';
import { ErrorResponse, StatementResponse } from '../types';

export const getStatementDataFrontend = async (): Promise<StatementResponse | ErrorResponse> => {
  const fetchProps: FetchProps = {
    includeAuthorization: true,
    endpoint: URL_ENDPOINTS.STATEMENT,
    method: FetchMethods.GET,
    backendCall: false,
  };
  return (await handleFetch(fetchProps)) as unknown as StatementResponse | ErrorResponse;
};
