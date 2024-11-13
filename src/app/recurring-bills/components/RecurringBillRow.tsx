import Separator from '@/app/overview/components/Separator';
import { TransactionType } from '@/app/overview/components/Transaction';
import dayjs from 'dayjs';
import React from 'react';
var advancedFormat = require('dayjs/plugin/advancedFormat');
dayjs.extend(advancedFormat);

type Props = {
  bill: TransactionType;
};

export default function RecurringBillRow({ bill }: Props) {
  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-4">
          <div className="size-8 rounded-full bg-secondary-green"></div>
          <p className="text-preset-4 font-bold">{bill.name}</p>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-preset-5">
            Monthly - {dayjs(bill.date).format('Do')}
          </span>
          <p className="text-preset-4 font-bold">
            ${Math.abs(bill.amount).toFixed(2)}
          </p>
        </div>
      </div>
      <Separator />
    </>
  );
}
