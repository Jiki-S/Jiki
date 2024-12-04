'use client';

import React from 'react';
import Header from '@/components/LandingPage/Header';
import { Button } from '../components/Button/Button';

export default function Home() {
  return (
    <>
      <Header />
      <div className="bg-white-main w-screen h-screen flex items-center justify-center gap-4">
        <div className='flex flex-col gap-4'>
          <div className='flex gap-4'>
            <Button
              size="medium"
              color="red"
              shade="lighter"
              rounded="lg"
            >
              Rounded Full Button
            </Button>
            <Button
              size="medium"
              color="red"
              shade="light"
              rounded="lg"
            >
              Rounded Full Button
            </Button>
            <Button
              size="medium"
              color="red"
              shade="main"
              rounded="lg"
            >
              Rounded Full Button
            </Button>
            <Button
              size="medium"
              color="red"
              shade="dark"
              rounded="lg"
            >
              Rounded Full Button
            </Button>
            <Button
              size="medium"
              color="red"
              shade="darker"
              rounded="lg"
            >
              Rounded Full Button
            </Button>
          </div>
          <div className='flex gap-4'>
            <Button
              size="medium"
              color="red_outline"
              shade="lighter"
              rounded="lg"
            >
              Rounded Full Button
            </Button>
            <Button
              size="medium"
              color="red_outline"
              shade="light"
              rounded="lg"
            >
              Rounded Full Button
            </Button>
            <Button
              size="medium"
              color="red_outline"
              shade="main"
              rounded="lg"
            >
              Rounded Full Button
            </Button>
            <Button
              size="medium"
              color="red_outline"
              shade="dark"
              rounded="lg"
            >
              Rounded Full Button
            </Button>
            <Button
              size="medium"
              color="red_outline"
              shade="darker"
              rounded="lg"
            >
              Rounded Full Button
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
