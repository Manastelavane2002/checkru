import { FetchMethods, FetchProps, handleFetch } from '../fetch/fetch';
import { URL_ENDPOINTS } from '../fetch/fetch.constants';
import { CommonResponse, ErrorResponse } from '../types/CommonResponse';

export const getMockDataFrontend = async (): Promise<CommonResponse | ErrorResponse> => {
  const fetchProps: FetchProps = {
    includeAuthorization: true,
    endpoint: URL_ENDPOINTS.MOCK,
    method: FetchMethods.GET,
    backendCall: false,
  };
  return await handleFetch(fetchProps);
};
