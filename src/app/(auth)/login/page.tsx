import React from 'react';
import LoginForm from './components/LoginForm';
import { cn } from '@/lib/utils';

export default function LoginPage() {
  return (
    <main
      className={cn(
        'bg-beige-100 min-h-screen h-full m-auto flex flex-col justify-center px-4 ',
        'md:px-0',
        'xl:grid xl:grid-cols-[1.5fr_2fr] xl:justify-center xl:items-center'
      )}
    >
      <div className="p-5 relative hidden xl:block">
        <img
          src="/assets/images/logo-large.svg"
          className="absolute top-12 left-12"
        />
        <img
          src="/assets/images/illustration-authentication.svg"
          className="rounded-xl"
        />
        <div className="absolute mx-auto w-full left-16 bottom-20 text-white max-w-[480px] flex flex-col gap-6">
          <h1 className="text-preset-1">
            Keep track of your money
            <br /> and save for your future
          </h1>
          <p className="text-preset-4">
            Personal finance app puts you in control of your spending. Track
            transactions, set budgets, and add to savings pots easily.
          </p>
        </div>
      </div>
      <LoginForm />
    </main>
  );
}
