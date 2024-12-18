import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto text-center">
                <p className="text-lg mb-4 text-white-lighter">© 2024 Jiki LTDA. Todos os direitos reservados.</p>
                <div className="flex justify-center gap-6 text-white-lighter">
                    <a href="#" className="hover:underline">Política de Privacidade</a>
                    <a href="#" className="hover:underline">Termos de Serviço</a>
                    <a href="#" className="hover:underline">Contato</a>
                </div>
            </div>
        </footer>
    );
}
