import Card from '@/components/Card';
import { Progress } from '@/components/ui/progress';
import { Ellipsis } from 'lucide-react';
import React from 'react';
import data from '@/../public/assets/data.json';
import dayjs from 'dayjs';

type Props = {
  budget: {
    category: string;
    maximum: number;
    theme: string;
  };
};

export default function BudgetCard({ budget }: Props) {
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
    <Card key={budget.category}>
      <header className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div
            className={`h-4 w-4 rounded-full`}
            style={{ background: budget.theme }}
          />
          <h2 className="text-preset-2">{budget.category}</h2>
        </div>
        <Ellipsis className="text-grey-300" />
      </header>
      <h3 className="text-preset-4 text-grey-500">
        Maximum of ${budget.maximum.toFixed(2)}
      </h3>
      <Progress
        value={(spentThisMonth / budget.maximum) * 100}
        color={budget.theme}
      />
    </Card>
  );
}
