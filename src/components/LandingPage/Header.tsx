'use client';

import React from 'react';
import { FaBook } from 'react-icons/fa';
import { MdPhone } from 'react-icons/md';
import { Button } from '../Button/components';
import { IoPersonAdd } from 'react-icons/io5';
import { IoPersonSharp } from 'react-icons/io5';
import { IoIosPricetags } from 'react-icons/io';
import JikiLogo from '../../../public/svg/Jiki48X48X.svg';

export default function Header() {
  return (
    <div className="navbar h-24 bg-white-main sticky top-0 z-50 shadow-md">
      <div className="flex items-center justify-center px-12 w-full">
        <div className="flex items-center justify-center w-1/2 gap-2">
          <div className="w-12 h-12">
            <JikiLogo
              alt="Jiki Logo"
              className="w-full h-full"
            />
          </div>
          <p className="text-3xl text-black">Jiki</p>
        </div>

        <div className="flex items-center justify-center w-1/2 gap-4 text-base text-black">
          <Button.Root
            styleButton="primary"
            colorVariant="dark"
          >
            <Button.Icon icon={IoPersonAdd} />
            <Button.Content
              text="Registrar-se"
              size="text-lg"
            />
          </Button.Root>

          <Button.Root
            styleButton="primary"
            colorVariant="light"
            className="flex gap-2 rounded-xl border-2 border-primary-main px-4 py-2"
          >
            <Button.Icon
              icon={IoPersonSharp}
              color="fill-primary-darker"
            />
            <Button.Content
              text="Login"
              size="text-lg"
              color="text-primary-darker"
            />
          </Button.Root>

          <h2 className="cursor-pointer text-xl">Preços</h2>
          <h2 className="cursor-pointer text-xl">Sobre</h2>
          <h2 className="cursor-pointer text-xl">Contato</h2>
        </div>
      </div>

      <div className="flex-none gap-2 sm:hidden">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 20 20"
              stroke="black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-36 p-2 shadow"
          >
            <li>
              <a>
                <IoPersonAdd />
                Registrar-se
              </a>
            </li>
            <li>
              <a>
                <IoPersonSharp />
                Login
              </a>
            </li>
            <li>
              <a>
                <IoIosPricetags />
                Preços
              </a>
            </li>
            <li>
              <a>
                <FaBook />
                Sobre
              </a>
            </li>
            <li>
              <a>
                <MdPhone />
                Contato
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
