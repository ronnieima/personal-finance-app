'use client';

import { cn, pages } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function Footer({ className }: { className: string }) {
  const path = usePathname();

  return (
    <footer
      className={cn(
        'bg-grey-900 rounded-t-xl h-[52px] pt-2 px-4',
        'md:px-10 md:h-[74px]',
        'xl:h-full xl:rounded-t-none xl:rounded-r-xl xl:px-0 xl:pr-6 xl:flex-col xl:flex xl:gap-6 xl:justify-start xl:pb-14',
        className
      )}
    >
      <header className={cn('hidden xl:block', 'px-8 py-10')}>
        <Link href={'/overview'}>
          <img src="/assets/images/logo-large.svg" />
        </Link>
      </header>
      <nav
        className={cn(
          'flex items-center justify-evenly h-full',
          'md:gap-[42px]',
          'xl:flex-col xl:justify-start xl:gap-1'
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
                'xl:flex-row xl:justify-start xl:h-16 xl:rounded-t-none xl:rounded-r-xl xl:px-8 xl:gap-4 xl:py-0 xl:max-h-[56px]',
                {
                  'bg-beige-100 border-b-4 border-secondary-green xl:border-b-0 xl:border-l-4':
                    isActive,
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
      <div className="px-8 py-4">
        <div className="flex items-center gap-4">
          <img src="/assets/images/icon-minimize-menu.svg" className="size-5" />
          <span className="text-grey-300 text-preset-3">Minimize Menu</span>
        </div>
      </div>
    </footer>
  );
}
