import React from 'react';
import Image from 'next/image';
import homeImage from "../assets/home-image.png";
import goDown from '../assets/go-down.png';
import Link from 'next/link';

const Home = () => {
  return (
    <div
      id="home"
      className="h-full md:h-screen mx-auto flex  items-center justify-center px-8 md:flex-row bg-background"
    >
      <div className="max-w-screen-2xl mx-auto flex flex-col-reverse items-center justify-center h-full px-8 md:flex-row">
        <div className="flex flex-col justify-center sm:mt-20 md:mt-20 lg:mt-0">
          <h1 className="font-semibold text-4xl sm:text-6xl mb-5">
            Transformando<br />
            <span className='font-bold text-primary'>conteúdos</span>{' '}
            em negócios.
          </h1>
          <h3 className="text-xl sm:text-3xl mb-5">
            A <span className='font-bold'>Howhow</span> é uma empresa que conecta marcas a influenciadores, encerre longas esperas por campanhas ou e-mails. Nosso sistema centralizado acelera o marketing de influência, potencializando resultados.
          </h3>

          <section className='flex flex-col md:flex-row items-center'>
            <Link href='/register'>        
              <div>
                <button
                  className="text-sm md:text-lg font-semibold text-white mt-1 px-10 py-5 hover:shadow-lg bg-primary hover:bg-blue-700 rounded-3xl"
                >
                  Sou empresa
                </button>
              </div>
            </Link>

            <Link href='/login'>        
              <div>
                <button
                  className="text-sm md:text-lg font-semibold text-primary mt-3 md:mt-1 px-10 py-5 md:ml-4 border border-primary hover:text-primary hover:shadow-md hover:bg-gray-100 rounded-3xl"
                >
                  Sou influenciador
                </button>
              </div>
            </Link>
          </section>

          <Link href='/#about'> 
            <div className='hidden md:block mt-44 cursor-pointer'>
                <Image
                  src={goDown}
                  alt={"logo"}
                  width={150}
                  className='mt-1'
                />

            </div>
          </Link>
        </div>

        <div className="flex cursor-pointer ml-3 mb-10 sm:mb-0 md:mb-60">
          <Image
            src={homeImage}
            alt={"logo"}
            width={3000}
            className='mt-1'
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
