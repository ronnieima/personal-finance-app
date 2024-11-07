import Card from '@/components/Card';
import React from 'react';
import Pot from './Pot';
import { cn } from '@/lib/utils';
import { Doughnut } from 'react-chartjs-2';
import DonutChart from './DonutChart';
import { Chart, ArcElement, Tooltip } from 'chart.js';
import { TransactionType } from './Transaction';
Chart.register(ArcElement, Tooltip);

export type BudgetType = {
  category: string;
  maximum: number;
  theme: string;
};

export default function BudgetsSection({
  budgets,
  transactions,
}: {
  budgets: BudgetType[];
  transactions: TransactionType[];
}) {
  return (
    <Card className="xl:col-span-5 xl:col-start-8 xl:row-start-1 xl:row-span-2">
      <Card.Header>
        <Card.Title>Budgets</Card.Title>
        <Card.Action href="/budgets">See Details</Card.Action>
      </Card.Header>
      <div className={cn('flex flex-col', 'md:grid md:grid-cols-[4fr_1fr]')}>
        <DonutChart budgets={budgets} transactions={transactions} />

        <div
          className={cn(
            'flex flex-col justify-center flex-wrap max-h-[102px] gap-3',
            'md:flex-nowrap md:max-h-full'
          )}
        >
          {budgets.map((budget) => (
            <Pot
              key={budget.category}
              label={budget.category}
              value={budget.maximum}
              hexColor={budget.theme}
            />
          ))}
        </div>
      </div>
    </Card>
  );
}
