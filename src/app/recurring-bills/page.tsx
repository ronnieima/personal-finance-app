import Card from '@/components/Card';
import React from 'react';
import Separator from '../overview/components/Separator';
import data from '@/../public/assets/data.json';
import { Input } from '@/components/ui/input';
import RecurringBillRow from './components/RecurringBillRow';

export default function RecurringBillsPage() {
  const { pots, balance, transactions, budgets } = data;

  const recurringBills = transactions.filter(
    (transaction) => transaction.recurring
  );

  return (
    <>
      <h1 className="text-preset-1">Recurring Bills</h1>
      <div className="flex flex-col gap-4 xl:grid xl:grid-cols-[1fr_2fr] xl:gap-8">
        <div className="md:grid md:grid-cols-2 xl:flex-col xl:flex gap-4 flex flex-col">
          <Card className="bg-grey-900 text-white flex-row items-center md:flex-col md:items-start md:justify-end">
            <div className="size-10">
              <img src="/assets/images/icon-recurring-bills.svg" />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-preset-4">Total bills</h3>
              <span className="text-preset-1">$384.98</span>
            </div>
          </Card>
          <Card>
            <header>
              <h2 className="text-preset-3">Summary</h2>
            </header>
            <div className="flex justify-between text-preset-5">
              <p className="text-grey-500">Paid Bills</p>
              <p className="font-bold">2 ($320.00)</p>
            </div>
            <Separator />
            <div className="flex justify-between text-preset-5">
              <p className="text-grey-500">Paid Bills</p>
              <p className="font-bold">6 ($1,230.00)</p>
            </div>
            <Separator />
            <div className="flex justify-between text-preset-5 text-secondary-red">
              <p className="">Due Soon</p>
              <p className="font-bold">2 ($40.00)</p>
            </div>
          </Card>
        </div>
        <Card className="gap-6">
          <header className="flex justify-between items-center gap-6">
            <Input placeholder="Search bills" className="max-w-[320px]" />
            <div>
              <img src="/assets/images/icon-sort-mobile.svg" />
            </div>
          </header>
          <section className="flex flex-col gap-4">
            {recurringBills.map((bill) => (
              <RecurringBillRow key={bill.name} bill={bill} />
            ))}
          </section>
        </Card>
      </div>
    </>
  );
}
