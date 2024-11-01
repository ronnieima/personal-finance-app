'use client';

import data from '@/../public/assets/data.json';
import Card from '@/components/Card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Separator from '../overview/components/Separator';
import TransactionListColumnHeaders from './components/TransactionListColumnHeaders';
import TransactionPageList from './components/TransactionPageList';

export default function TransactionsPage() {
  return (
    <>
      <h1 className="text-preset-1 font-bold">Transactions</h1>
      <Card className=" gap-6 md:p-8">
        <header className="flex  gap-6">
          <Input placeholder="Search transaction" />
          <div className="flex gap-1">
            <Label className="hidden md:block">Sort by</Label>
            <Select>
              <SelectTrigger className="w-[180px] ">
                <SelectValue placeholder="Latest" className="hidden md:flex" />
              </SelectTrigger>
              <SelectTrigger className="">
                <img src="/assets/images/icon-sort-mobile.svg" />
              </SelectTrigger>

              <SelectContent>
                <SelectGroup>
                  <SelectItem value="latest">Latest</SelectItem>
                  <SelectItem value="oldest">Oldest</SelectItem>
                  <SelectItem value="a-to-z">A-to-Z</SelectItem>
                  <SelectItem value="z-to-a">Z-to-A</SelectItem>
                  <SelectItem value="highest">Highest</SelectItem>
                  <SelectItem value="lowest">Lowest</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <Button variant={'ghost'} className="p-0">
            <img
              src="/assets/images/icon-filter-mobile.svg"
              className="size-5"
            />
          </Button>
        </header>

        <TransactionListColumnHeaders />
        <Separator />
        <TransactionPageList transactions={data.transactions} />

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </Card>
    </>
  );
}
