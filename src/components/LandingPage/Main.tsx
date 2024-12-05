'use client';

import Link from 'next/link';
import { Button } from '../Button/Button';
import { FaArrowRight } from 'react-icons/fa6';
import { SiFoodpanda } from 'react-icons/si';
import Spline from '@splinetool/react-spline/next';

export default function Main() {
  return (
    <main className="flex flex-col w-full h-full bg-white-main">
      <div className="grid grid-cols-2 items-center h-[75vh] justify-center w-full">
        <section className="col-span-1 flex items-center justify-start w-full">
          <div className="flex flex-col items-start justify-start gap-4 px-14">
            <h1 className={`text-start text-3xl text-secondary-main font-bold`}>
              Simplifique sua rotina,{' '}
              <span className="text-secondary-darker">foque</span> no que
              importa.
            </h1>
            <h2 className="text-start text-xl text-black">
              Facilitamos o sucesso de micro e pequenos negócios com soluções
              simples e eficazes.
            </h2>
            <Link href={''}>
              <p className="underline">
                *Saiba mais sobre o regulamento no site.
              </p>
            </Link>
            <div className="flex items-center justify-start gap-4">
              <Button
                size="small"
                color="primary"
                shade="main"
                rounded="full"
                className="text-[15px]"
              >
                <SiFoodpanda /> Teste Grátis
              </Button>
              <p className="flex items-center justify-start gap-2 underline cursor-pointer">
                ver planos
                <FaArrowRight />
              </p>
            </div>
          </div>
        </section>
        <section className="col-span-1">
          <Spline scene="https://prod.spline.design/u5CaaMXLphNu2yot/scene.splinecode" />
        </section>
      </div>
      <section className="flex w-full h-[120vh] bg-primary-main rounded-[50px] overflow-y-auto">
        <div className="flex items-center justify-center">
          {/* Conteúdo adicional da segunda seção */}
          <div className="p-6"></div>
        </div>
      </section>
      <section className="flex w-full h-[120vh] bg-white-main rounded-[50px] overflow-y-auto">
        <div className="flex items-center justify-center">
          {/* Conteúdo adicional da segunda seção */}
          <div className="p-6"></div>
        </div>
      </section>
    </main>
  );
}
