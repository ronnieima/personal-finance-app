import { cn } from '@/lib/utils';
import React from 'react';

export type TransactionType = {
  avatar: string;
  name: string;
  category: string;
  date: string;
  amount: number;
  recurring: boolean;
};

export default function Transaction({
  transaction,
}: {
  transaction: TransactionType;
}) {
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
    <div className="flex justify-between">
      <div className="flex items-center gap-4">
        <img src={transaction.avatar} className="rounded-full size-8" />
        <p className="text-preset-4 font-bold">{transaction.name}</p>
      </div>
      <div className="flex flex-col items-end justify-center">
        <span
          className={cn('font-bold text-preset-4', {
            'text-secondary-green': isPositive,
          })}
        >
          {amount}
        </span>
        <span className="text-grey-500 text-preset-5">{date}</span>
      </div>
    </div>
  );
}
