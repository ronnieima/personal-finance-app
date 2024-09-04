import Transaction, {
  TransactionType,
} from '@/app/overview/components/Transaction';
import { cn } from '@/lib/utils';
import React from 'react';

type Props = {
  transaction: TransactionType;
};

export default function TransactionItem({ transaction }: Props) {
  const isPositive = transaction.amount > 0;
  const date = new Date(transaction.date).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
  const amount = `${isPositive ? '+' : '-'}$${Math.abs(
    transaction.amount
  ).toFixed(2)}`;

  return (
    <>
      <div className="md:hidden">
        <Transaction transaction={transaction} />
      </div>
      <div className="grid-cols-[4fr_repeat(3,_1fr)] text-preset-5 text-grey-500 hidden md:grid gap-8 items-center">
        <div className="flex items-center gap-4">
          <img src={transaction.avatar} className="rounded-full size-8" />
          <p className="text-preset-4 font-bold text-grey-900">
            {transaction.name}
          </p>
        </div>
        <span>{transaction.category}</span>
        <span className="text-grey-500 text-preset-5">{date}</span>
        <span
          className={cn(
            'justify-self-end font-bold text-preset-4 text-grey-900',
            {
              'text-secondary-green': isPositive,
            }
          )}
        >
          {amount}
        </span>
      </div>
    </>
  );
}
