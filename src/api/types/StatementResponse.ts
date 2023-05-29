import { CommonResponse } from './CommonResponse';

export interface Statement {
  availableCredit: number;
  creditLimit: number;
  endDate: string;
  minAmountDue: number;
  paymentDueDate: string;
  startDate: string;
  statementPeriod: string;
  totalAmountDue: number;
}
export interface StatementResponse extends CommonResponse {
  data: {
    statements: Array<Statement>;
  };
}
