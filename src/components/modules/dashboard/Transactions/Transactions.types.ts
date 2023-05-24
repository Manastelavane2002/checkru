export interface TransactionRowProps {
  credit: string;
  debit: string;
  docDate: string;
  docNum: string;
  id: number;
  ref: string;
  statementPeriod: string;
}

export interface TransactionDataProps {
  data: TransactionRowProps[];
  numberOfRows: number;
}
