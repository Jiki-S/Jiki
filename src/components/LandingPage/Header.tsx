'use client';

import React from 'react';
import { FaBook } from 'react-icons/fa';
import { MdPhone } from 'react-icons/md';
import { IoPersonAdd } from 'react-icons/io5';
import { IoPersonSharp } from 'react-icons/io5';
import { IoIosPricetags } from 'react-icons/io';
import JikiLogo from '../../../public/svg/Jiki48X48X.svg';

export default function Header() {
  return (
    <div className="navbar bg-white-main sticky top-0 z-50 shadow-md">
      <div className="flex-1 gap-2 px-2">
        <div className="w-12 h-12">
          <JikiLogo
            alt="Jiki Logo"
            className="w-full h-full"
          />
        </div>
        <p className="text-3xl text-black">Jiki</p>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle "
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
