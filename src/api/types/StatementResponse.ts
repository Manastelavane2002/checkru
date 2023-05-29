import { CommonResponse } from './CommonResponse';

export interface StatementResponse extends CommonResponse {
  data: {
    statements: Array<{
      availableCredit: number;
      creditLimit: number;
      endDate: string;
      minAmountDue: number;
      paymentDueDate: string;
      startDate: string;
      statementPeriod: string;
      totalAmountDue: number;
    }>;
  };
}
