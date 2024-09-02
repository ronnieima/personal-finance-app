'use client';

import { cn } from '@/lib/utils';
import React from 'react';
import DataPill from './components/DataPill';
import PotsSection from './components/PotsSection';
import data from '../../../public/assets/data.json';

export default function Dashboard() {
  return (
    <main
      className={cn('px-4 py-8 flex flex-col gap-8 bg-beige-100 min-h-screen')}
    >
      <h1 className="text-preset-1">Overview</h1>
      <section className="space-y-3">
        <DataPill
          label="Current Balance"
          value={data.balance.current}
          variant="dark"
        />
        <DataPill label="Income" value={data.balance.income} />
        <DataPill label="Expenses" value={data.balance.expenses} />
      </section>
      <PotsSection />
    </main>
  );
}
