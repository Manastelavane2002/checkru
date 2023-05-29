import React from 'react';
import { Typography } from 'src/components/global';
import { STATIC_TEXT } from 'src/constants/static-text';

interface AccountDetailsProps {
  accountInfo?: {
    accountNumber?: string;
    name?: string;
  };
}

export function AccountDetails({ accountInfo }: AccountDetailsProps) {
  return (
    <div className="px-6 py-1.5 border-l-2 border-primary mt-14">
      <Typography htmlElement="p" className="font-semibold text-lg">
        {STATIC_TEXT.accountDetails.accountNumber.replace('{number}', accountInfo?.accountNumber || '')}
      </Typography>
      <Typography htmlElement="p" className="font-semibold text-lg">
        {STATIC_TEXT.accountDetails.accountName.replace('{name}', accountInfo?.name || '')}
      </Typography>
    </div>
  );
}
