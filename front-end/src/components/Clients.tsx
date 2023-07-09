import React from 'react';
import Testimonial from './TestimonialContent';
import personOne from '@/assets/heros/person-one.svg';
import personTwo from '@/assets/heros/person-two.svg';
import personThree from '@/assets/heros/person-three.svg';

const Clients = () => {
  return (
    <div
      id="clients"
      className='pt-20 md:pt-0 px-4 md:px-0'
    > 
      <h1 className="font-semibold text-3xl sm:text-5xl mb-5 text-center">
        Depoimentos
      </h1>

      <h1 className="text-xl sm:text-2xl mb-5 text-center">
        O que nossos clientes estão dizendo:
      </h1>
      <div className='flex max-w-screen-xl justify-start mx-auto'>
        <Testimonial
          testimonial='A plataforma InfluenceHub mudou completamente a forma como conduzimos nossas campanhas de marketing. Com suas análises poderosas e ferramentas eficientes de comunicação, conseguimos alcançar resultados incríveis. A rede de influencers disponível nos ajuda a alcançar o público certo de forma eficaz.'
          src={personOne}
          job={'CEO at BigTech'}
          person={"Jeff Zuckerberg"}
          />
      </div>

      <div className='flex max-w-screen-xl justify-end mx-auto'>
        <Testimonial
          testimonial='A InfluenceHub é indispensável para qualquer influenciador. Ele oferece uma plataforma perfeita para colaboração entre influenciadores e empresas. Me ajuda a me conectar com as principais marcas sem esforço. Recomendo fortemente!'
          src={personTwo}
          job={'Influenciadora Digital'}
          person={"Camila Gavassi"}
          />
      </div>

      <div className='flex max-w-screen-xl justify-start mx-auto'>
        <Testimonial
          testimonial='InfluenceHub revolucionou a maneira como gerencio minhas campanhas de marketing. A plataforma oferece análises poderosas, ferramentas eficientes de comunicação e uma vasta rede de influencers.'
          src={personThree}
          job={'CEO da ABC Corporation'}
          person={"Elon Cook"}
          />
      </div>
    </div>
  );
};

export default Clients;
