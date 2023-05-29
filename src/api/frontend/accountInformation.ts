import { FetchMethods, FetchProps, handleFetch } from '../fetch/fetch';
import { URL_ENDPOINTS } from '../fetch/fetch.constants';
import { ErrorResponse, AccountInformationResponse } from '../types';

export const getAccountInformationDataFrontend = async (): Promise<AccountInformationResponse | ErrorResponse> => {
  const fetchProps: FetchProps = {
    includeAuthorization: true,
    endpoint: URL_ENDPOINTS.ACCOUNT_INFORMATION,
    method: FetchMethods.GET,
    backendCall: false,
  };
  return (await handleFetch(fetchProps)) as unknown as AccountInformationResponse | ErrorResponse;
};
