import Card from '@/components/Card';
import React from 'react';
import PotsPage, { PotType } from '../page';
import { Ellipsis } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';

type Props = {
  pot: PotType;
};

export default function PotCard({ pot }: Props) {
  const savedPercentage = (pot.total / pot.target) * 100;

  return (
    <Card className="space-y-4">
      <header className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div
            className={`h-4 w-4 rounded-full`}
            style={{ background: pot.theme }}
          />
          <h2 className="text-preset-2">{pot.name}</h2>
        </div>
        <Ellipsis className="text-grey-300" />
      </header>
      <section className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-preset-4 text-beige-500">Total Saved</h3>
          <h2 className="text-preset-1">${pot.total.toFixed(2)}</h2>
        </div>
        <Progress value={savedPercentage} className="h-2" color={pot.theme} />
        <div className="flex justify-between text-grey-500 text-preset-5 ">
          <span className="font-bold ">{savedPercentage.toFixed(2)}%</span>
          <span>Target of ${pot.target}</span>
        </div>
      </section>
      <section className="flex justify-between gap-4">
        <Button variant={'beige'} className="w-full">
          + Add Money
        </Button>
        <Button variant={'beige'} className="w-full">
          Withdraw
        </Button>
      </section>
    </Card>
  );
}
