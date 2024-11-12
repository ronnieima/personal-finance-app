import data from '@/../public/assets/data.json';
import { Button } from '@/components/ui/button';
import BudgetCard from './components/BudgetCard';
import SpendingSummary from './components/SpendingSummary';
import dayjs from 'dayjs';

export default function BudgetsPage() {
  const transactionsThisMonth = data.transactions.filter((transaction) =>
    dayjs(transaction.date).isSame(dayjs('2024-08-01'), 'month')
  );

  const spentThisMonth = Math.abs(
    transactionsThisMonth.reduce(
      (total, transaction) => (total += transaction.amount),
      0
    )
  );
  return (
    <div className="flex flex-col gap-4">
      <header className="flex justify-between items-center">
        <h1 className="text-preset-1">Budgets</h1>
        <Button className="bg-grey-900 h-14 text-white">
          + Add New Budget
        </Button>
      </header>
      <SpendingSummary />
      <section className="flex flex-col gap-8">
        {data.budgets.map((budget) => {
          const transactionsThisMonthByCategory = transactionsThisMonth.filter(
            (transaction) => transaction.category === budget.category
          );
          return <BudgetCard key={budget.category} budget={budget} />;
        })}
      </section>
    </div>
  );
}
