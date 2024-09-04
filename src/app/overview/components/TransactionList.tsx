import React from 'react';
import Transaction, { TransactionType } from './Transaction';
import Separator from './Separator';

type Props = {
  transactions: TransactionType[];
  limit?: number;
  showCategories?: boolean;
  tableView?: boolean;
};

export default function TransactionList({
  transactions,
  limit,
  showCategories = false,
}: Props) {
  return (
    <>
      {transactions
        .slice(0, limit || transactions.length)
        .map((transaction) => (
          <React.Fragment key={transaction.name}>
            <Transaction
              transaction={transaction}
              showCategory={showCategories}
            />
            <Separator />
          </React.Fragment>
        ))}
    </>
  );
}
