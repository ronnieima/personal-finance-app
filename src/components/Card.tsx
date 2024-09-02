'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import React, { createContext, PropsWithChildren } from 'react';

const CardContext = createContext(null);

type CardProps = { children: React.ReactNode; className?: string };
export default function Card({ children, className }: CardProps) {
  return (
    <CardContext.Provider value={null}>
      <section
        className={cn(
          'py-6 px-5 bg-white rounded-xl flex flex-col gap-5',
          className
        )}
      >
        {children}
      </section>
    </CardContext.Provider>
  );
}

Card.Header = function Header({ children }: PropsWithChildren) {
  return <header className="flex justify-between">{children}</header>;
};

Card.Title = function Title({ children }: PropsWithChildren) {
  return <h2 className="text-preset-2">{children}</h2>;
};

type ActionProps = { children: React.ReactNode; href: string };
Card.Action = function Action({ children, href }: ActionProps) {
  return (
    <Link
      href={href}
      className="text-grey-500 text-preset-4 flex justify-center
     items-center gap-3"
    >
      {children}{' '}
      <img src="/assets/images/icon-caret-right.svg" className="size-[12px]" />
    </Link>
  );
};
