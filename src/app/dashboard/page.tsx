'use client';

import { cn } from '@/lib/utils';
import React from 'react';
import DataPill from './components/DataPill';
import Link from 'next/link';
import Card from '@/components/Card';

export default function Dashboard() {
  return (
    <main
      className={cn('px-4 py-8 flex flex-col gap-8 bg-beige-100 min-h-screen')}
    >
      <h1 className="text-preset-1">Overview</h1>
      <section className="space-y-3">
        <DataPill label="Current Balance" value="$4836.00" invertColor />
        <DataPill label="Current Balance" value="$4836.00" />
        <DataPill label="Current Balance" value="$4836.00" />
      </section>

      <Card>
        <Card.Header>
          <Card.Title>Pots</Card.Title>
          <Card.Action href={'/'}>See Details</Card.Action>
        </Card.Header>
        <DataPill label="Total Saved" value="$850" invertColor />
      </Card>
    </main>
  );
}
