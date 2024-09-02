import Card from '@/components/Card';
import React from 'react';
import Transaction, { TransactionType } from './Transaction';
import Separator from './Separator';

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
              <>
                <Transaction key={transaction.name} transaction={transaction} />
                <Separator />
              </>
            )
        )}
      </div>
    </Card>
  );
}
