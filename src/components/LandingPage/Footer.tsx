'use client';

export default function Footer() {
  return (
    <footer className="flex place-items-end justify-center w-full h-screen bg-primary-main">
      <div className="flex flex-col items-start justify-between rounded-t-3xl bg-white-light w-screen h-[35vh] p-4">
        <div className="flex gap-4 w-full justify-start text-start pb-2">
          <div className="flex flex-col items-start w-1/2 text-start text-black">
            <h3 className="font-semibold">Sobre</h3>
            <ul>
              <li>
                <a href="#">Nossa História</a>
              </li>
              <li>
                <a href="#">Missão</a>
              </li>
              <li>
                <a href="#">Visão</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start w-1/2 text-start text-black">
            <h3 className="font-semibold">Suporte</h3>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Contato</a>
              </li>
              <li>
                <a href="#">Política de Privacidade</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex gap-4 w-full justify-start text-start pb-2">
          <div className="flex flex-col items-start text-start text-black w-1/2">
            <h3 className="font-semibold">Nossos Serviços</h3>
            <ul>
              <li>
                <a href="#">Consultoria</a>
              </li>
              <li>
                <a href="#">Desenvolvimento</a>
              </li>
              <li>
                <a href="#">Design</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start text-start text-black w-1/2">
            <h3 className="font-semibold">Siga-nos</h3>
            <ul>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
        <h1 className="bg-white-light text-black text-center p-2 w-full">
          © 2024 Jiki - Todos os direitos reservados
        </h1>
      </div>
    </footer>
  );
}
