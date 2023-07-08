import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import homeImage from "@/assets/influencer.png";
import goDown from '@/assets/go-down.png';
import { BsChevronDoubleDown } from 'react-icons/bs';
import '@/styles/Home.css';

const Home = () => {
  return (
    <section
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
            A <span className='font-bold'>InfluenceHub</span> é uma empresa que conecta marcas a influenciadores, encerre longas esperas por campanhas ou e-mails. Nosso sistema centralizado acelera o marketing de influência, potencializando resultados.
          </h3>

          <div className='flex flex-col md:flex-row items-center'>
            <Link href='/register'>        
              <div>
                <button
                  className="text-md md:text-lg font-semibold text-white mt-1 px-10 py-5 hover:shadow-lg bg-primary hover:bg-purple-600 rounded-3xl"
                >
                  Sou empresa
                </button>
              </div>
            </Link>

            <Link href='/login'>        
              <div>
                <button
                  className="text-md md:text-lg font-semibold text-purple-700 mt-3 md:mt-1 px-10 py-5 md:ml-4 border border-primary hover:text-primary hover:shadow-md hover:bg-white rounded-3xl"
                >
                  Sou influenciador
                </button>
              </div>
            </Link>
          </div>

          <Link href="#about" className='flex justify-center mt-44 mx-auto'>
            <button className="hidden md:flex group items-center rounded-md bg-transparent mb-5">
              <BsChevronDoubleDown size={30} className="ml-2 text-primary down-arrow" />
            </button>
          </Link>
        </div>

        <div className="flex cursor-pointer ml-3 mb-10 sm:mb-0 md:mb-60">
          <Image
            src={homeImage}
            alt={"logo"}
            width={2000}
            className='mt-1'
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
