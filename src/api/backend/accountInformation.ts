import { FetchMethods, FetchProps, handleFetch } from '../fetch/fetch';
import { ErrorResponse, AccountInformationResponse } from '../types';

export const getAccountInformationDataBackend = async (): Promise<AccountInformationResponse | ErrorResponse> => {
  const fetchProps: FetchProps = {
    includeAuthorization: true,
    endpoint: '/973d85d9-a0a6-4b68-b403-a10d1c23a444',
    customUrlBase: 'https://run.mocky.io/v3',
    method: FetchMethods.GET,
    backendCall: true,
  };
  return (await handleFetch(fetchProps)) as unknown as AccountInformationResponse | ErrorResponse;
};
