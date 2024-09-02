import { cn } from '@/lib/utils';
import React from 'react';

type Props = {
  label: string;
  value: string;
  invertColor?: boolean;
};

export default function DataPill({ label, value, invertColor }: Props) {
  return (
    <div
      className={cn('bg-white rounded-xl p-5 space-y-3', {
        'bg-grey-900 text-white': invertColor,
      })}
    >
      <h2 className="text-preset-4">{label}</h2>
      <p className="text-preset-1">{value}</p>
    </div>
  );
}
