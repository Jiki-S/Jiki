import React from "react";
import Link from 'next/link';
import {SiFoodpanda} from 'react-icons/si';
import Spline from "@splinetool/react-spline";
import {FaArrowRight} from 'react-icons/fa6';
import {AiFillAlert, AiFillApi} from "react-icons/ai";
import {FaBookReader, FaRunning} from "react-icons/fa";
import {Button} from "@/components/Button/Button";

export default function Main() {
  return (
      <main className="flex flex-col w-full h-full bg-white-main">
        <div className="grid grid-cols-2 items-center h-[75vh] justify-center w-full">
          <section className="col-span-1 flex items-center justify-start w-full pl-56">
            <div className="flex flex-col items-start justify-start gap-4 px-14">
              <h1 className={`text-start text-4xl text-secondary-main font-bold`}>
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
                  <SiFoodpanda/> Teste Grátis
                </Button>
                <p className="flex items-center justify-start gap-2 underline cursor-pointer">
                  ver planos
                  <FaArrowRight/>
                </p>
              </div>
            </div>
          </section>
          <section className="col-span-1 pr-56">
            <Spline scene="https://prod.spline.design/u5CaaMXLphNu2yot/scene.splinecode"/>
          </section>
        </div>

        <section className="flex flex-col w-full h-[100vh] bg-gradient-random rounded-[110px]">
          <div
              className="w-full h-[20vh] text-white-main p-6 sm:p-12 md:p-16 border-b-2 border-white-main/50 border-dashed">
            <div className="w-full h-full flex items-center justify-center gap-4">
              <h3 className="flex items-center justify-center font-semibold gap-2 sm:gap-4">
                <span className="text-lg sm:text-2xl">Veja como funciona o Jiki</span>
                <FaArrowRight className="w-6 h-6 sm:w-8 sm:h-8"/>
              </h3>
              <Button size="small" color="white_outline" shade="main" rounded="full"
                      className="text-[15px] sm:text-[17px]">
                <FaRunning/> Modalidades
              </Button>
              <Button size="small" color="white_outline" shade="main" rounded="full"
                      className="text-[15px] sm:text-[17px]">
                <AiFillAlert/> Funcionalidades
              </Button>
              <Button size="small" color="white_outline" shade="main" rounded="full"
                      className="text-[15px] sm:text-[17px]">
                <AiFillApi/> Integrações
              </Button>
              <Button size="small" color="white_outline" shade="main" rounded="full"
                      className="text-[15px] sm:text-[17px]">
                <FaBookReader/> Tutoriais
              </Button>
            </div>
          </div>
          <div className="flex w-full h-full">
            <div className={`flex flex-col items-start justify-between p-56 gap-8 w-1/2`}>
              <h2 className={`text-[42px] font-bold font-sans text-white-lighter`}>Automatize processos e ganhe tempo
                para focar no crescimento do
                negócio.</h2>
              <p className={`text-[20px] font-sans font-medium text-white-dark`}>Com o sistema ERP Bling você automatiza
                tarefas e otimiza processos como a
                emissão de notas fiscais,
                controle de estoque e gestão financeira de forma integrada com plataformas de e-commerce e
                marketplaces.</p>
              <Button size="medium" color="white" shade="main" rounded="full"
                      className="text-[15px] sm:text-[17px]">Começe agora
              </Button>
            </div>
            <div className={`w-1/2`}>
              <Spline scene="https://prod.spline.design/uMIqQiI8vbb8lv0g/scene.splinecode"/>
            </div>
          </div>
        </section>
        <section className="flex w-full h-[120vh] bg-white-main rounded-[50px] overflow-y-auto">
          <div className="flex items-center justify-center gap-10 w-full">
            <div className={`px-20 py-32 bg-terciary-main rounded-xl`}>card 01</div>
            <div className={`px-20 py-32 bg-terciary-main rounded-xl`}>card 02</div>
            <div className={`px-20 py-32 bg-terciary-main rounded-xl`}>card 03</div>
          </div>
        </section>
      </main>
  );
}
