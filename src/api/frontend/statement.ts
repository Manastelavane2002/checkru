import { FetchMethods, FetchProps, handleFetch } from '../fetch/fetch';
import { URL_ENDPOINTS } from '../fetch/fetch.constants';
import { ErrorResponse, StatementResponse } from '../types/CommonResponse';

export const getStatementDataFrontend = async (): Promise<StatementResponse | ErrorResponse> => {
  const fetchProps: FetchProps = {
    includeAuthorization: true,
    endpoint: URL_ENDPOINTS.MOCK_STATEMENT,
    method: FetchMethods.GET,
    backendCall: false,
  };
  return await handleFetch(fetchProps);
};
