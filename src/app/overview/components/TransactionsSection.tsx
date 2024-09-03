import Card from '@/components/Card';
import Separator from './Separator';
import Transaction, { TransactionType } from './Transaction';
import React from 'react';

type Props = { transactions: TransactionType[] };

export default function TransactionsSection({ transactions }: Props) {
  return (
    <Card className="gap-8">
      <Card.Header>
        <Card.Title>Transactions</Card.Title>
        <Card.Action href="/transactions">View All</Card.Action>
      </Card.Header>
      <div className="space-y-5">
        {transactions.map(
          (transaction, index) =>
            index < 5 && (
              <React.Fragment key={transaction.name}>
                <Transaction transaction={transaction} />
                <Separator />
              </React.Fragment>
            )
        )}
      </div>
    </Card>
  );
}
