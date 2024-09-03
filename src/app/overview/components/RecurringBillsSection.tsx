import Card from '@/components/Card';
import React from 'react';
import { TransactionType } from './Transaction';
import RecurringBillDataPill from './RecurringBillDataPill';

export default function RecurringBillsSection({
  recurringBills,
}: {
  recurringBills: TransactionType[];
}) {
  console.log(recurringBills);
  return (
    <Card>
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
