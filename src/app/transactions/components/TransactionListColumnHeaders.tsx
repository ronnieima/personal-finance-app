import React from 'react';

export default function TransactionListColumnHeaders() {
  return (
    <div className="grid-cols-[4fr_repeat(3,_1fr)] text-preset-5 text-grey-500 hidden md:grid gap-8 items-center">
      <p>Receipt / Sender</p>
      <p>Category</p>
      <p>Transaction Date</p>
      <p className="justify-self-end">Amount</p>
    </div>
  );
}
