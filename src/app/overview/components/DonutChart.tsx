'use client';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { BudgetType } from './BudgetsSection';
import { TransactionType } from './Transaction';
import dayjs from 'dayjs';

type Props = { budgets: BudgetType[]; transactions: TransactionType[] };

export default function DonutChart({ budgets, transactions }: Props) {
  const budgetLimit = budgets.reduce((total, curr) => total + curr.maximum, 0);

  const transactionsThisMonth = transactions.filter((transaction) =>
    dayjs(transaction.date).isSame(dayjs('2024-08-08'), 'month')
  );
  const spentThisMonth = Math.abs(
    transactionsThisMonth.reduce(
      (total, transaction) => (total += transaction.amount),
      0
    )
  );

  return (
    <div className="relative py-4">
      <Doughnut
        className="m-auto"
        options={{
          layout: { padding: 16 },
          elements: { arc: { borderAlign: 'inner' } },
          cutout: '65%',
          animation: { animateScale: true, animateRotate: true },
          plugins: { tooltip: { enabled: true } },
        }}
        data={{
          labels: budgets.map((budget) => budget.category),
          datasets: [
            {
              label: 'Budgets',
              data: budgets.map((budget) => budget.maximum),
              backgroundColor: budgets.map((budget) => budget.theme),
              hoverOffset: 4,
            },
          ],
        }}
      />
      <div className="flex justify-center items-center flex-col absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2">
        <span className="text-preset-1 font-bold">${spentThisMonth}</span>
        <span className="text-preset-5 text-grey-500">
          of ${budgetLimit} limit
        </span>
      </div>
    </div>
  );
}
