import Card from '@/components/Card';
import React from 'react';
import data from '@/../public/assets/data.json';
import SpendingSummaryBudgetRow from './SpendingSummaryBudgetRow';

export default function SpendingSummary() {
  return (
    <Card>
      <h2>Spending Summary</h2>
      <div className="flex flex-col gap-4">
        {data.budgets.map((budget) => {
          return (
            <SpendingSummaryBudgetRow key={budget.category} budget={budget} />
          );
        })}
      </div>
    </Card>
  );
}
