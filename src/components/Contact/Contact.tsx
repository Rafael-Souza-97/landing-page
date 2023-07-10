import React from 'react';
import ContactForm from './ContactForm';
import { AiOutlineMail } from 'react-icons/ai';
import '@/styles/Home.css';

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full h-full mx-auto flex flex-col items-center justify-center md:flex-row bg-gradient-to-b from-white to-background mt-5"
    >
      <div className="w-full mx-auto flex flex-col items-center justify-center h-full px-8 xl:flex-row">
        <div className="flex flex-col justify-center w-full xl:w-1/3">
          <h1 className="font-semibold text-xl sm:text-4xl mb-2 mt-10 md:mt-0">
            Vamos conversar?
          </h1>

          <h3 className="text-md sm:text-xl mb-14 lg:mb-24">
            Complete o formulário para saber como a <span className='font-bold text-primary'>InfluenceHub</span>{' '} pode ajudar a sua marca a se conectar com influenciadores e alavancar suas campanhas.
          </h3>

          <h1 className="font-semibold text-xl sm:text-4xl my-5">
            Contato
          </h1>

          <a
            href="mailto:contato@influencehub.com"
            className="flex text-lg sm:text-xl mb-5 text-black hover:text-purple-700 px-3 lg:px-0 w-72"
            target="_blank"
            rel="noreferrer"
          >
            <span><AiOutlineMail size={20} className='text-purple-700 mt-1 mr-2'/></span>contato@influencehub.com
          </a>
        </div>

        <div className='w-full lg:w-2/3 xl:w-1/3'>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
