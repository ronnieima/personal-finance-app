import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import React from 'react';

export default function LoginPage() {
  return (
    <>
      <header className="h-[70px] bg-grey-900 rounded-b-xl flex justify-center items-center">
        <img src="/assets/images/logo-large.svg"></img>
      </header>
      <main className="bg-beige-100 min-h-screen h-full m-auto flex flex-col justify-center px-4">
        <div className="flex flex-col justify-center p-8 bg-white rounded-xl gap-8">
          <h1 className="text-preset-1">Login</h1>
          <div className="flex flex-col gap-4">
            <div>
              <Label>Email</Label>
              <Input type="email" />
            </div>
            <div>
              <Label>Password</Label>
              <Input type="password" />
            </div>
          </div>
          <Button className="bg-grey-900 text-white h-[53px]">Login</Button>
          <p className="text-preset-4 text-center">
            Need to create an account?{' '}
            <Link
              href={'signup'}
              className="font-bold underline underline-offset-2"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}
