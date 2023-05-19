import { FetchMethods, FetchProps, handleFetch } from '../fetch/fetch';
import { URL_ENDPOINTS } from '../fetch/fetch.constants';
import { CommonResponse, ErrorResponse } from '../types/CommonResponse';

export const getMockDataBackend = async (): Promise<CommonResponse | ErrorResponse> => {
  const fetchProps: FetchProps = {
    includeAuthorization: true,
    endpoint: URL_ENDPOINTS.MOCK,
    method: FetchMethods.GET,
    backendCall: true,
  };
  return await handleFetch(fetchProps);
};
