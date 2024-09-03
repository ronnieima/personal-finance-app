'use client';

import { cn, pages } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function Footer() {
  const path = usePathname();

  return (
    <footer
      className={cn(
        'bg-grey-900 rounded-t-xl h-[52px] pt-2 px-4',
        'md:px-10 md:h-[74px]'
      )}
    >
      <nav
        className={cn(
          'flex items-center justify-evenly h-full',
          'md:gap-[42px]'
        )}
      >
        {pages.map((page) => {
          const isActive = `/${page.value}` === path;
          return (
            <Link
              key={page.value}
              href={page.value}
              className={cn(
                'w-full flex flex-col items-center rounded-t-[8px] justify-center h-full',
                'md:py-1',
                {
                  'bg-beige-100 border-b-4 border-secondary-green': isActive,
                }
              )}
            >
              <img
                src={`/assets/images/icon-nav-${page.value}.svg`}
                className="size-5 flex items-center justify-center h-full fill-secondary-green"
              />
              <span
                className={cn(
                  'hidden text-preset-5 font-bold text-grey-300',
                  'md:block',
                  {
                    'text-grey-900': isActive,
                  }
                )}
              >
                {page.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </footer>
  );
}
