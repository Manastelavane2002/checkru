import { NextApiRequest, NextApiResponse } from 'next';
import { getAccountInformationDataBackend } from 'src/api/backend/accountInformation';
import { ErrorResponse } from 'src/api/types/CommonResponse';

const AccountInformationApi = async (request: NextApiRequest, response: NextApiResponse) => {
  const res = await getAccountInformationDataBackend();
  if (res.isSuccess) {
    response.json(res.data);
    return;
  }

  response.status((res as ErrorResponse).data.errorCode).end();
};

export default AccountInformationApi;
