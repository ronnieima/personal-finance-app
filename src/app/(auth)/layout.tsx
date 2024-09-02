import React, { PropsWithChildren } from 'react';

export default function layout({ children }: PropsWithChildren) {
  return (
    <>
      <header className="h-[70px] bg-grey-900 rounded-b-xl flex justify-center items-center xl:hidden">
        <img src="/assets/images/logo-large.svg"></img>
      </header>
      {children}
    </>
  );
}
