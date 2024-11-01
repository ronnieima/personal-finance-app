import { Button } from '@/components/ui/button';
import React from 'react';
import data from '@/../public/assets/data.json';
import Card from '@/components/Card';
import { Ellipsis } from 'lucide-react';

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
          </Card>
        ))}
      </section>
    </div>
  );
}
