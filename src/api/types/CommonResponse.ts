export interface CommonResponse {
  data:
    | Record<string, string | number | boolean | Array<unknown> | undefined>
    | null
    | Array<unknown>
    | unknown;
  isSuccess: boolean;
}

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
  } | any;
  isSuccess: boolean;
}

export interface ErrorResponse extends CommonResponse {
  data: { errorCode: number; errorMessage: string };
  isSuccess: false;
  raw: any;
}
