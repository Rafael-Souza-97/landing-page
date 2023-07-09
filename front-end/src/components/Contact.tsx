import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import homeImage from "@/assets/homePage/influencer.png";
import { AiOutlineMail } from 'react-icons/ai';
import '@/styles/Home.css';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section
      id="contact"
      className="h-full md:h-screen mx-auto flex items-center justify-center px-8 md:flex-row bg-gradient-to-b from-white to-background"
    >
      <div className="max-w-screen-2xl mx-auto flex flex-col items-center justify-center h-full px-8 md:flex-row">
        <div className="flex flex-col justify-center md:w-1/3">
          <h1 className="font-semibold text-xl sm:text-4xl mb-5 mt-10 md:mt-0">
            Vamos conversar?
          </h1>

          <h3 className="text-md sm:text-xl mb-24">
            Complete o formulário para saber como a <span className='font-bold text-primary'>InfluenceHub</span>{' '} pode ajudar a sua marca a se conectar com influenciadores e alavancar suas campanhas.
          </h3>

          <h1 className="font-semibold text-xl sm:text-4xl my-5">
            Contato
          </h1>

          <h3 className="flex text-lg sm:text-xl mb-5">
            <span><AiOutlineMail size={20} className='text-purple-700 mt-1 mr-2'/></span>contato@influencehub.com
          </h3>
        </div>

        <div className='max-w-screen-2xl'>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
