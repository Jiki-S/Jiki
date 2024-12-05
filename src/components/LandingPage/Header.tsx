'use client';

import React from 'react';
import { TbEdit } from 'react-icons/tb';
import { IoPersonSharp } from 'react-icons/io5';
import JikiLogo from '../../../public/svg/logo-65x.svg';
import { Protest_Revolution } from 'next/font/google';
import { Button } from '../Button/Button';

const logoFont = Protest_Revolution({
  weight: ['400'],
  subsets: ['latin'],
});

export default function Header() {
  return (
    <div className="navbar h-20 bg-white-light sticky top-0 z-50 shadow-sm">
      <div className="flex items-center justify-center w-full">
        <div className="flex items-center justify-start sm:justify-center w-1/2 gap-4">
          <div className="">
            <JikiLogo
              alt="Jiki Logo"
              className="w-full h-full"
            />
          </div>
          <p
            className={`text-[50px] text-black ${logoFont.className} select-none`}
          >
            Jiki
          </p>
        </div>

        <div className="flex items-center justify-end sm:justify-center w-1/2 gap-4 text-base text-black">
          <Button
            size="medium"
            color="primary"
            shade="main"
            rounded="full"
            className='text-[15px]'
          >
            <TbEdit />
            Teste Grátis
          </Button>
          <Button
            size="medium"
            color="primary_outline"
            shade="main"
            rounded="full"
            className='text-[15px]'
          >
            <IoPersonSharp />
            Entrar
          </Button>
        </div>
      </div>
    </div>
  );
}
