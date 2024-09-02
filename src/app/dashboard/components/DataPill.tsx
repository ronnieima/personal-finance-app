import { cn } from '@/lib/utils';
import React from 'react';

type Props = {
  label: string;
  value: number;
  variant?: 'dark' | 'beige';
};

export default function DataPill({ label, value, variant }: Props) {
  return (
    <div
      className={cn('bg-white rounded-xl p-5 space-y-3', {
        'bg-grey-900 text-white': variant === 'dark',
        'bg-beige-100': variant === 'beige',
      })}
    >
      <h2
        className={cn('text-preset-4 text-grey-500', {
          'text-white': variant === 'dark',
        })}
      >
        {label}
      </h2>
      <p className="text-preset-1">${value.toFixed(2)}</p>
    </div>
  );
}
