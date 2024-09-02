import Card from '@/components/Card';
import React from 'react';
import Pot from './Pot';

export type BudgetType = {
  category: string;
  maximum: number;
  theme: string;
};

export default function BudgetsSection({ budgets }: { budgets: BudgetType[] }) {
  const budgetLimit = budgets.reduce((total, curr) => total + curr.maximum, 0);
  return (
    <Card>
      <Card.Header>
        <Card.Title>Budgets</Card.Title>
        <Card.Action href="/budgets">See Details</Card.Action>
      </Card.Header>
      <div className="flex justify-center items-center flex-col">
        <span></span>
        <span className="text-preset-5 text-grey-500">
          of ${budgetLimit} limit
        </span>
      </div>
      <div className="flex flex-col flex-wrap max-h-[102px] gap-3">
        {budgets.map((budget) => (
          <Pot
            key={budget.category}
            label={budget.category}
            value={budget.maximum}
            hexColor={budget.theme}
          />
        ))}
      </div>
    </Card>
  );
}
