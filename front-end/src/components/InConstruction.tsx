import React from 'react';
import Link from 'next/link';

const InConstruction = () => {
  return (
    <section className="flex flex-col items-center justify-center h-full py-44">
      <div className="w-full max-w-screen-2xl mx-auto mb-10">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="mb-10 text-4xl font-semibold text-gray-800">Ops.. Erro 404</h1>
          <h1 className="mb-10 text-3xl font-semibold text-gray-800">Ainda não estamos prontos, mas estamos quase lá! 😉</h1>
          <p className="text-xl mb-12 text-gray-500">
            Nossa plataforma está sendo desenvolvida e nesse momento ela não está aberta para cadastros, somente uso interno, em breve todos poderão utilizar e fazer parte dessa evolução.
          </p>
        </div>

        <div className="flex justify-center mt-4">
          <Link href="/">
            <button
              type="button" 
              className="bg-primary hover:bg-purple-700 text-white font-bold text-xl py-4 px-8 rounded-lg md:w-auto"
            >
              Voltar para a página inicial
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InConstruction;
