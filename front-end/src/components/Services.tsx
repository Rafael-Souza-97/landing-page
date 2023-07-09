import React from 'react';
import Image from 'next/image';
import dashboard from "@/assets/services/dashboard.png";
import business from "@/assets/services/business.png";
import megafone from "@/assets/services/megafone.png";
import '@/styles/Home.css';

const Services = () => {
  return (
    <section
      id="services"
      className='md:pt-0 px-4 md:px-0 bg-gradient-to-b from-background to-white'
    >
      <div className="max-w-screen-xl mx-auto flex flex-col-reverse items-center justify-center h-full px-8 md:flex-row md:mb-20">
        <div className="flex cursor-pointer ml-3 mb-10 sm:mb-0 ">
          <Image
            src={dashboard}
            alt={"dashboard"}
            width={1000}
            className='mt-1'
          />
        </div>

        <div className="flex flex-col justify-center ">
          <h1 className="font-semibold text-2xl sm:text-4xl mb-5 text-center">
            Tudo o que você precisa, eu um só lugar
          </h1>

          <h3 className="text-xl sm:text-2xl mb-5 ml-10">
            Gerencie suas mídias sociais, conecte-se a influenciadores e impulsione suas campanhas de marketing com facilidade através do nosso <span className='text-primary font-bold'>dashboard completo</span>. 
          </h3>
        </div>
      </div>
  
      <div className="max-w-screen-2xl mx-auto flex flex-col items-center justify-center h-full px-8 md:flex-row md:mb-20">
        <div className="flex flex-col justify-center ">
          <h1 className="font-semibold text-2xl sm:text-3xl mb-5 text-center">
            Potencialize sua estratégia de marketing de influência
          </h1>

          <h3 className="text-xl sm:text-2xl mb-5 ml-10">
            Simplifique sua estratégia de marketing de influência, encontre <span className='text-primary font-bold'>influenciadores relevantes</span>, negocie contratos, acompanhe o progresso das colaborações e obtenha análises em tempo real para alcançar resultados excepcionais em um ambiente seguro e intuitivo.
          </h3>
        </div>

        <div className="flex cursor-pointer ml-3 mb-10 sm:mb-0 ">
          <Image
            src={business}
            alt={"business"}
            width={2000}
            className='mt-1'
          />
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto flex flex-col-reverse items-center justify-center h-full px-8 md:flex-row md:mb-44">
        <div className="flex cursor-pointer ml-3 mb-10 sm:mb-0 ">
          <Image
            src={megafone}
            alt={"megafone"}
            width={2000}
            className='mt-1'
          />
        </div>
        <div className="flex flex-col justify-center ">
          <h1 className="font-semibold text-2xl sm:text-4xl mb-5 text-center">
            Alcance o próximo nível como influenciador
          </h1>

          <h3 className="text-xl sm:text-2xl mb-5 ml-10">
            Amplie seu alcance e estabeleça parcerias de sucesso. Acesse métricas detalhadas, analise o engajamento e tome decisões estratégicas para impulsionar seu crescimento. Conecte-se a <span className='text-primary font-bold'>marcas relevantes</span>, negocie contratos eficientemente e impulsione sua carreira em um só lugar.
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Services;
