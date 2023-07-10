import React from 'react';
import ServiceContent from './ServiceContent';
import dashboard from "@/assets/services/dashboard.png";
import business from "@/assets/services/business.png";
import megafone from "@/assets/services/megafone.png";
import socialMedia from "@/assets/services/social-media.png";
import workDashboard from "@/assets/services/work-dashboard.png";
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
        title='Potencialize sua estratégia'
        text={`Simplifique sua estratégia de marketing de influência, encontre <span className='text-primary font-bold'>influenciadores relevantes</span>, negocie contratos, acompanhe o progresso das colaborações e obtenha análises em tempo real para alcançar resultados excepcionais em um ambiente seguro e intuitivo.`}
      />

      <ServiceContent
        imgSide={'left'}
        src={megafone}
        imgWidth={2000}
        title='Alcance o próximo nível'
        text={`Amplie seu alcance e estabeleça parcerias de sucesso. Acesse métricas detalhadas, analise o engajamento e tome decisões estratégicas para impulsionar seu crescimento. Conecte-se a <span className='text-primary font-bold'>marcas relevantes</span>, negocie contratos eficientemente e impulsione sua carreira em um só lugar.`}
      />

      <ServiceContent
        imgSide={'right'}
        src={socialMedia}
        imgWidth={1800}
        button={true}
        buttonText='Pesquisar por Empresas'
        link={'/search/brands'}
        title='Influenciadores conquistando novas oportunidades'
        text={`Potencialize sua carreira como influenciador(a) com acesso a marcas relevantes, busca por parcerias estratégicas e gerenciamento eficiente de campanhas. Aproveite todas as vantagens da plataforma para expandir seu alcance, demonstrar interesse em colaborações e impulsionar sua carreira de forma <span className='text-primary font-bold'>segura e confiável</span>.`}
      />

      <ServiceContent
        imgSide={'left'}
        src={workDashboard}
        imgWidth={1800}
        button={true}
        buttonText='Pesquisar por Influenciadores'
        link={'/search/brands'}
        title='Empresas com vantagens exclusivas'
        text={`Na Influence Hub, as empresas desfrutam de acesso simplificado aos influenciadores relevantes do seu ramo e estratégia. Com a plataforma, elas podem estabelecer conexões valiosas, demonstrar interesse em <span className='text-primary font-bold'>parcerias estratégicas</span> e contar com um dashboard completo para gerenciar suas campanhas de marketing de forma eficiente.`}
      />
    </section>
  );
};

export default Services;
