import Card from '@/components/Card';
import { Progress } from '@/components/ui/progress';
import { Ellipsis } from 'lucide-react';
import React from 'react';
import data from '@/../public/assets/data.json';
import dayjs from 'dayjs';
import Link from 'next/link';

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
      <section
        className="flex justify-between
      "
      >
        <div className="flex items-center gap-2 w-1/2">
          <div
            className="w-1 h-12 rounded-full"
            style={{ background: budget.theme }}
          />
          <div className="flex flex-col">
            <span className="text-preset-5">Spent</span>
            <span className="text-preset-4 font-bold">
              ${spentThisMonth.toFixed(2)}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 w-1/2">
          <div className="w-1 h-12 rounded-full bg-grey-100" />
          <div className="flex flex-col">
            <span className="text-preset-5">Free</span>
            <span className="text-preset-4 font-bold">
              ${(budget.maximum - spentThisMonth).toFixed(2)}
            </span>
          </div>
        </div>
      </section>
      <Card className="bg-beige-100">
        <header className="flex justify-between items-center">
          <h3 className="text-preset-3">Latest Spending</h3>
          <Link href={'#'} className="text-preset-4 text-grey-500">
            See All
          </Link>
        </header>
        <div className="flex flex-col gap-4">
          {transactionsThisMonth.map((transaction, i) => {
            if (i > 3) return;
            return (
              <React.Fragment key={i}>
                <div className="text-preset-5 flex justify-between items-center">
                  <span className="font-bold">{transaction.name}</span>
                  <div className="flex flex-col text-right gap-1">
                    <span className="font-bold">
                      -${Math.abs(transaction.amount).toFixed(2)}
                    </span>
                    <span>{dayjs(transaction.date).format('DD MMM YYYY')}</span>
                  </div>
                </div>
                <div className="last:hidden h-[1px] w-full bg-grey-500/15"></div>
              </React.Fragment>
            );
          })}
        </div>
      </Card>
    </Card>
  );
}
