'use client';

import { cn } from '@/lib/utils';
import data from '../../../public/assets/data.json';
import BudgetsSection from './components/BudgetsSection';
import DataPill from './components/DataPill';
import PotsSection from './components/PotsSection';
import RecurringBillsSection from './components/RecurringBillsSection';
import TransactionsSection from './components/TransactionsSection';

export default function OverviewPage() {
  const { pots, balance, transactions, budgets } = data;
  return (
    <>
      <h1 className="text-preset-1">Overview</h1>
      <section className={cn('flex flex-col gap-3', 'md:flex-row md:gap-6')}>
        <DataPill
          label="Current Balance"
          value={data.balance.current}
          variant="dark"
        />
        <DataPill label="Income" value={data.balance.income} />
        <DataPill label="Expenses" value={data.balance.expenses} />
      </section>
      <div
        className={cn(
          'flex flex-col gap-8',
          'xl:grid xl:grid-rows-1 xl:grid-cols-12 xl:gap-6'
        )}
      >
        <PotsSection />
        <TransactionsSection transactions={data.transactions} />
        <BudgetsSection
          budgets={data.budgets}
          transactions={data.transactions}
        />
        <RecurringBillsSection recurringBills={data.transactions} />
      </div>
    </>
  );
}
