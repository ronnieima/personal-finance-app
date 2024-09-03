'use client';

import { cn, pages } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function Footer() {
  const path = usePathname();

  return (
    <footer className="bg-grey-900 rounded-t-xl h-[52px] pt-2 px-4">
      <nav className="flex items-center justify-evenly h-full">
        {pages.map((page) => {
          return (
            <Link
              key={page}
              href={page}
              className={cn(
                'w-full flex rounded-t-[8px] justify-center h-full',
                {
                  'bg-beige-100 border-b-4 border-secondary-green':
                    `/${page}` === path,
                }
              )}
            >
              <img
                src={`/assets/images/icon-nav-${page}.svg`}
                className="size-5 flex items-center justify-center h-full fill-secondary-green"
              />
            </Link>
          );
        })}
      </nav>
    </footer>
  );
}
