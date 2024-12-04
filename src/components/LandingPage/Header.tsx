'use client';

import React from 'react';
import { TbEdit } from "react-icons/tb";
import { IoPersonSharp } from 'react-icons/io5';
import JikiLogo from '../../../public/svg/Jiki48X48X.svg';
import { Protest_Revolution } from 'next/font/google';
import { Button } from '../Button/Button';

const logoFont = Protest_Revolution({
  weight: ['400'],
  subsets: ['latin'],
});

export default function Header() {
  return (
    <div className="navbar h-16 bg-white-light hover:bg-white-main duration-500 sticky top-0 z-50 shadow-sm">
      <div className="flex items-center justify-center w-full">
        <div className="flex items-center justify-start sm:justify-center w-1/2 gap-2">
          <div className="w-12 h-12">
            <JikiLogo
              alt="Jiki Logo"
              className="w-full h-full"
            />
          </div>
          <p
            className={`text-3xl text-black ${logoFont.className} select-none`}
          >
            Jiki
          </p>
        </div>

        <div className="flex items-center justify-end sm:justify-center w-1/2 gap-2 text-base text-black">
          <Button
            size="small"
            color="primary"
            shade="main"
            rounded="lg"
          >
            <TbEdit/>Registrar-se
          </Button>
          <Button
            size="small"
            color="primary_outline"
            shade="main"
            rounded="lg"
          >
            <IoPersonSharp/>Login
          </Button>
        </div>
      </div>
    </div>
  );
}
