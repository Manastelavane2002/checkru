import { NextApiRequest, NextApiResponse } from 'next';
import { getMockDataBackend } from 'src/api/backend/mock';
import { ErrorResponse } from 'src/api/types/CommonResponse';

const MockApi = async (request: NextApiRequest, response: NextApiResponse) => {
  const res = await getMockDataBackend();
  if (res.isSuccess) {
    response.json(res.data);
    return;
  }

  response.status((res as ErrorResponse).data.errorCode).end();
};

export default MockApi;
