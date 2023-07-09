import React from 'react';
import Link from 'next/link';
import LogoSlider from './LogoSlider';
import { AiOutlineRight } from 'react-icons/ai';

const About = () => {
  return (
    <section id="about" className="h-full md:h-screen mx-auto flex-col items-center justify-center">
      <div className='max-w-screen-2xl mx-auto flex flex-col items-center justify-center h-full px-8'>
        <div className="max-w-screen-xl mx-auto flex flex-wrap flex-col md:flex-row pt-5 md:pt-0 justify-center">
          <div className='text-center p-2 md:mx-6 mb-4 md:mb-0'>
            <h1 className='font-semibold text-2xl md:text-6xl'>+6.916</h1>
            <h3 className='text-2xl mt-2'>Campanhas realizadas</h3>
          </div>

          <div className='text-center p-2 md:mx-6 mb-4 md:mb-0'>
            <h1 className='font-semibold text-2xl md:text-6xl'>+12.400</h1>
            <h3 className='text-2xl mt-2'>Campanhas realizadas</h3>
          </div>

          <div className='text-center p-2 md:mx-6 mb-4 md:mb-0'>
            <h1 className='font-semibold text-2xl md:text-6xl'>+62</h1>
            <h3 className='text-2xl mt-2'>Empresas cadastradas</h3>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center pt-10 sm:mt-20 md:pt-20 lg:mt-0 text-center">
          <h1 className="font-semibold text-3xl sm:text-5xl mb-5">
            Um pouco da nossa história
          </h1>

          <h3 className="text-lg sm:text-2xl mb-5">
            A InfluenceHub reinventa a interação entre marcas e influenciadores. Nossa plataforma centraliza e acelera todas as fases das campanhas de marketing de influência, tornando a colaboração eficiente e eficaz. Com a InfluenceHub, cada conexão conta.
          </h3>

          <Link href='/login'>        
            <div>
              <button
                className="flex text-xl text-white mt-7 mx-2 px-10 py-5 font-semibold md:ml-4 border border-gray-300 hover:shadow-md bg-primary hover:bg-purple-600 rounded-3xl"
              >
                Entre em contato
                <AiOutlineRight className='mt-1 ml-3' />
              </button>
            </div>
          </Link>

          <div className="hidden xl:flex max-w-screen-lg flex-col justify-center items-center lg:pt-24 text-center">
            <h1 className="font-semibold text-xl sm:text-4xl mb-10">
              Mais de 30 marcas globais reconhecidas
            </h1>
            <LogoSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
