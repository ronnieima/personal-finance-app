import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const pages = [
  { label: 'Overview', value: 'overview' },
  { label: 'Transactions', value: 'transactions' },
  { label: 'Budgets', value: 'budgets' },
  { label: 'Pots', value: 'pots' },
  { label: 'Recurring Bills', value: 'recurring-bills' },
];
