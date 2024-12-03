'use client';

import { HiMiniArrowSmallRight } from 'react-icons/hi2';

export default function Main() {
  return (
    <main className="h-screen bg-primary-main">
      <div className="flex flex-col bg-primary-main w-full">
        <div className="h-[60vh] w-full">
          <div className="h-full w-full rounded-xl ">
            {/*Aqui vai spline 3d*/}
          </div>
        </div>
        <div className="flex flex-col h-[60vh] w-full bg-white-light rounded-3xl p-6 gap-4">
          <h3 className="flex items-center justify-start gap-2 pt-2 text-black text-xl underline">
            Escolha como voce quer começar{' '}
            <HiMiniArrowSmallRight className="w-8 h-8" />
          </h3>
          <div className="flex gap-2">
            <button className="btn btn-sm rounded-2xl text-lg">Preços</button>
            <button className="btn btn-sm rounded-2xl text-lg">Sobre</button>
            <button className="btn btn-sm rounded-2xl text-lg">Contato</button>
          </div>
          <div className="flex items-center justify-center gap-2 pt-4 w-full">
            <h3 className="text-xl text-black">
              Registre-se e ganhe recompensas!
            </h3>
            <button className="btn text-lg">Registrar-se</button>
          </div>
        </div>
        <div className="flex flex-col h-[60vh] w-full gap-4">
          {/*informações de garantias ou beneficios ...*/}
          <h3>Items benficios</h3>
        </div>
      </div>
    </main>
  );
}
