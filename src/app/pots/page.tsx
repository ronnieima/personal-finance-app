import React from 'react';
import data from '@/../public/assets/data.json';
import { Button } from '@/components/ui/button';
import PotCard from './components/PotCard';

export type PotType = {
  name: string;
  target: number;
  total: number;
  theme: string;
};

export default function PotsPage() {
  const { pots, balance, transactions, budgets } = data;

  return (
    <div className="space-y-8 ">
      <header className="flex justify-between">
        <h1 className="text-preset-1">Pots</h1>
        <Button variant={'dark'} className="">
          + Add New Pot
        </Button>
      </header>
      <section className="flex flex-col gap-4 xl:grid xl:grid-cols-2">
        {pots.map((pot) => (
          <PotCard key={pot.name} pot={pot} />
        ))}
      </section>
    </div>
  );
}
