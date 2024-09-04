import { TransactionType } from '@/app/overview/components/Transaction';
import React from 'react';
import TransactionItem from './TransactionItem';
import Separator from '@/app/overview/components/Separator';

type Props = {
  transactions: TransactionType[];
  limit?: number;
  showCategories?: boolean;
  tableView?: boolean;
};

export default function TransactionPageList({ transactions, limit }: Props) {
  return (
    <>
      {transactions
        .slice(0, limit || transactions.length)
        .map((transaction) => (
          <React.Fragment key={transaction.name}>
            <TransactionItem transaction={transaction} />
            <Separator />
          </React.Fragment>
        ))}
    </>
  );
}
