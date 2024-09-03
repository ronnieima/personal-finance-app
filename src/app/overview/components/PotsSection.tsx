import Card from '@/components/Card';
import React from 'react';
import DataPill from './DataPill';
import data from '../../../../public/assets/data.json';
import Pot from './Pot';
import { cn } from '@/lib/utils';

export default function PotsSection() {
  return (
    <Card className="xl:col-span-7 xl:row-span-1 xl:col-start-1">
      <Card.Header>
        <Card.Title>Pots</Card.Title>
        <Card.Action href={'/'}>See Details</Card.Action>
      </Card.Header>
      <div
        className={cn('flex flex-col gap-5', 'md:grid md:grid-cols-[2fr_3fr]')}
      >
        <DataPill label="Total Saved" value={850} variant="beige" />
        <div className="flex flex-col flex-wrap max-h-[102px] gap-3">
          {data.pots.map(
            (pot, index) =>
              index < 4 && (
                <Pot
                  key={pot.name}
                  label={pot.name}
                  value={pot.total}
                  hexColor={pot.theme}
                />
              )
          )}
        </div>
      </div>
    </Card>
  );
}
