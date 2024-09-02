import { cn } from '@/lib/utils';
import React from 'react';

type Props = {
  label: string;
  value: number;
  hexColor: string;
};

export default function Pot({ label, value, hexColor }: Props) {
  return (
    <div className="flex gap-4 h-[43]">
      <div
        className={cn(`w-1 h-11 rounded-[8px]`)}
        style={{ backgroundColor: hexColor }}
      />
      <div className="flex flex-col  justify-between gap-1">
        <h3 className="text-grey-500 text-preset-5">{label}</h3>
        <p className="text-preset-4 font-bold">${value}</p>
      </div>
    </div>
  );
}
