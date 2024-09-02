import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import React from 'react';

export default function LoginForm() {
  return (
    <div className="w-full flex flex-col justify-center p-8 bg-white rounded-xl gap-8 md:max-w-[560px] md:m-auto md:max-h-[422px]">
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
  );
}
