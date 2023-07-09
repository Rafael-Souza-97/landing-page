import React from 'react';
import ServiceContent from './ServiceContent';
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
      <ServiceContent
        imgSide={'left'}
        src={dashboard}
        imgWidth={1000}
        title='Tudo o que você precisa, eu um só lugar'
        text={`Gerencie suas mídias sociais, conecte-se a influenciadores e impulsione suas campanhas de marketing com facilidade através do nosso <span className='text-primary font-bold'>dashboard completo</span>.`}
      />

      <ServiceContent
        imgSide={'right'}
        src={business}
        imgWidth={2000}
        title='Potencialize sua estratégia de marketing de influência'
        text={`Simplifique sua estratégia de marketing de influência, encontre <span className='text-primary font-bold'>influenciadores relevantes</span>, negocie contratos, acompanhe o progresso das colaborações e obtenha análises em tempo real para alcançar resultados excepcionais em um ambiente seguro e intuitivo.`}
      />

      <ServiceContent
        imgSide={'left'}
        src={megafone}
        imgWidth={2000}
        title='Alcance o próximo nível como influenciador'
        text={`Amplie seu alcance e estabeleça parcerias de sucesso. Acesse métricas detalhadas, analise o engajamento e tome decisões estratégicas para impulsionar seu crescimento. Conecte-se a <span className='text-primary font-bold'>marcas relevantes</span>, negocie contratos eficientemente e impulsione sua carreira em um só lugar.`}
      />
    </section>
  );
};

export default Services;
