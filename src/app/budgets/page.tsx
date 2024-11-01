import data from '@/../public/assets/data.json';
import { Button } from '@/components/ui/button';
import BudgetCard from './components/BudgetCard';
import { Progress } from '@/components/ui/progress';

export default function BudgetsPage() {
  return (
    <div>
      <header className="flex justify-between items-center">
        <h1 className="text-preset-1">Budgets</h1>
        <Button className="bg-grey-900 h-14 text-white">
          + Add New Budget
        </Button>
      </header>
      <section className="flex flex-col gap-8">
        {data.budgets.map((budget) => (
          <BudgetCard key={budget.category} budget={budget} />
        ))}
      </section>
    </div>
  );
}
