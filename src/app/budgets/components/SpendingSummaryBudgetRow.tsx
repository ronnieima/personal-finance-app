import data from '@/../public/assets/data.json';
import dayjs from 'dayjs';
import React from 'react';

type Props = {
  budget: {
    category: string;
    maximum: number;
    theme: string;
  };
};

export default function SpendingSummaryBudgetRow({ budget }: Props) {
  const transactionsThisMonth = data.transactions.filter(
    (transaction) =>
      transaction.category === budget.category &&
      dayjs(transaction.date).isSame(dayjs('2024-08-08'), 'month')
  );

  const spentThisMonth = Math.abs(
    transactionsThisMonth.reduce(
      (total, transaction) => (total += transaction.amount),
      0
    )
  );
  return (
    <React.Fragment>
      <div className="flex justify-between">
        <div className="flex items-center gap-3">
          <div
            className="w-1 h-4 rounded-full"
            style={{ background: budget.theme }}
          />
          <p>{budget.category}</p>
        </div>
        <div className="text-preset-5 text-grey-500">
          <span className="text-preset-3 text-grey-900 font-bold">
            ${spentThisMonth.toFixed(2)}
          </span>{' '}
          of ${budget.maximum.toFixed(2)}
        </div>
      </div>
      <div className="last:hidden h-[1px] w-full bg-grey-500/15" />
    </React.Fragment>
  );
}
