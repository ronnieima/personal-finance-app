import React from 'react';
import { TransactionType } from './Transaction';

type Props = {
  recurringBills: TransactionType[];
};

export default function RecurringBillDataPill({ recurringBills }: Props) {
  const paidBillsAmount = recurringBills
    .filter((bill) => bill.category === 'Bills')
    .reduce((total, curr) => total + curr.amount, 0);
  return (
    <div className="flex justify-between bg-beige-100 rounded-xl py-5 px-4 border-l-4 border-secondary-green">
      <p className="text-preset-4">Paid Bills</p>{' '}
      <p className="text-preset-4 font-bold">${Math.abs(paidBillsAmount)}</p>
    </div>
  );
}
