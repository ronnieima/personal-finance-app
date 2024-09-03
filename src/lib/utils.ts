import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const pages = [
  'overview',
  'transactions',
  'budgets',
  'pots',
  'recurring-bills',
];
