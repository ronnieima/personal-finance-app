import Card from '@/components/Card';
import React from 'react';
import Pot from './Pot';
import { cn } from '@/lib/utils';

export type BudgetType = {
  category: string;
  maximum: number;
  theme: string;
};

export default function BudgetsSection({ budgets }: { budgets: BudgetType[] }) {
  const budgetLimit = budgets.reduce((total, curr) => total + curr.maximum, 0);
  return (
    <Card className="xl:col-span-5 xl:col-start-8 xl:row-start-1 xl:row-span-2">
      <Card.Header>
        <Card.Title>Budgets</Card.Title>
        <Card.Action href="/budgets">See Details</Card.Action>
      </Card.Header>
      <div className={cn('flex flex-col', 'md:grid md:grid-cols-[4fr_1fr]')}>
        <div className="flex justify-center items-center flex-col">
          <span className="text-preset-1 font-bold">$338</span>
          <span className="text-preset-5 text-grey-500">
            of ${budgetLimit} limit
          </span>
        </div>
        <div
          className={cn(
            'flex flex-col flex-wrap max-h-[102px] gap-3',
            'md:flex-nowrap'
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
