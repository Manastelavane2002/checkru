import React from 'react';
import { Typography } from 'src/components/global';
import { STATIC_TEXT } from 'src/constants/static-text';

interface AccountDetailsProps {
  accountData: {
    name: string;
    number: string;
  };
}

export function AccountDetails({ accountData }: AccountDetailsProps) {
  const { number, name } = accountData;
  return (
    <div className="px-6 py-1.5 border-l-2 border-primary mt-14">
      <Typography htmlElement="p" className="font-semibold text-lg">
        {STATIC_TEXT.accountDetails.accountNumber.replace('{number}', number)}
      </Typography>
      <Typography htmlElement="p" className="font-semibold text-lg">
        {STATIC_TEXT.accountDetails.accountName.replace('{name}', name)}
      </Typography>
    </div>
  );
}
