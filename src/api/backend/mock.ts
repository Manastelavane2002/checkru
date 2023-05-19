import { FetchMethods, FetchProps, handleFetch } from '../fetch/fetch';
import { CommonResponse, ErrorResponse } from '../types/CommonResponse';

export const getMockDataBackend = async (): Promise<CommonResponse | ErrorResponse> => {
  const fetchProps: FetchProps = {
    includeAuthorization: true,
    endpoint: '/products',
    customUrlBase: 'https://dummyjson.com',
    method: FetchMethods.GET,
    backendCall: true,
  };
  return await handleFetch(fetchProps);
};
