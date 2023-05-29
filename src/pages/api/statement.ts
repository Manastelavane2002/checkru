import { NextApiRequest, NextApiResponse } from 'next';
import { getStatementDataBackend } from 'src/api/backend/statement';
import { ErrorResponse } from 'src/api/types/CommonResponse';

const StatementApi = async (request: NextApiRequest, response: NextApiResponse) => {
  const res = await getStatementDataBackend();
  if (res.isSuccess) {
    response.json(res.data);
    return;
  }

  response.status((res as ErrorResponse).data.errorCode).end();
};

export default StatementApi;
