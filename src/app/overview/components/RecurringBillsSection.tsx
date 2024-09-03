import Card from '@/components/Card';
import React from 'react';
import { TransactionType } from './Transaction';
import RecurringBillDataPill from './RecurringBillDataPill';

export default function RecurringBillsSection({
  recurringBills,
}: {
  recurringBills: TransactionType[];
}) {
  return (
    <Card className="xl:row-start-3 xl:row-span-2 xl:col-start-8 xl:col-span-5">
      <Card.Header>
        <Card.Title>Recurring Bills</Card.Title>
        <Card.Action href="recurring-bills">See Details</Card.Action>
      </Card.Header>
      <div className="flex flex-col gap-3">
        <RecurringBillDataPill recurringBills={recurringBills} />
        <RecurringBillDataPill recurringBills={recurringBills} />
        <RecurringBillDataPill recurringBills={recurringBills} />
      </div>
    </Card>
  );
}
