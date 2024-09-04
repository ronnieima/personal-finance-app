import Card from '@/components/Card';
import { TransactionType } from './Transaction';
import TransactionList from './TransactionList';

type Props = { transactions: TransactionType[] };

export default function TransactionsSection({ transactions }: Props) {
  return (
    <Card className="gap-8 xl:row-start-2 xl:row-span-3 xl:col-start-1 xl:col-span-7">
      <Card.Header>
        <Card.Title>Transactions</Card.Title>
        <Card.Action href="/transactions">View All</Card.Action>
      </Card.Header>
      <div className="space-y-5">
        <TransactionList transactions={transactions} limit={5} />
      </div>
    </Card>
  );
}
