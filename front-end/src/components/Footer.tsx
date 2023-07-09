import footerLinks from "@/utils/navigate";
import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai';
import { FaInstagram, FaFacebook, FaTiktok, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bottom-0 flex-row w-full py-5 bg-background  text-white z-10">
      <div className="flex py-4 justify-around shadow-sm">
        <div className="hidden xl:flex flex-col">
          <div className="flex cursor-pointer opacity-90 hover:opacity-100 ml-3 mt-3">
            <h1 className="font-Lora text-2xl md:text-4xl text-purple-600">INFLUNCE HUB</h1>
          </div>

          <div className="flex justify-center mt-5">
            <div className="bg-primary p-3 mx-2 rounded-lg hover:bg-purple-700 cursor-pointer">
              <FaInstagram size={24} className="text-white" />
            </div>
            <div className="bg-primary p-3 mx-2 rounded-lg hover:bg-purple-700 cursor-pointer">
              <FaFacebook size={24} className="text-white" />
            </div>
            <div className="bg-primary p-3 mx-2 rounded-lg hover:bg-purple-700 cursor-pointer">
              <FaTiktok size={24} className="text-white" />
            </div>
            <div className="bg-primary p-3 mx-2 rounded-lg hover:bg-purple-700 cursor-pointer">
              <FaLinkedin size={24} className="text-white" />
            </div>
          </div>
        </div>

        <div className="hidden xl:flex flex-col items-center justify-center align-center px-5">
          <h3 className="text-xl md:text-3xl text-black mb-2 text-center">Links Úteis</h3>
          <ul className="hidden xl:flex flex-col">
            {footerLinks.map(({ id, link, name }) => (
              <li
                key={ id }
                className="ml-1 px-10 mt-2 cursor-pointer text-lg text-black hover:text-purple-700 hover:scale-105 text-center"
              >
                <Link href={ link }>
                  { name }
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden xl:flex flex-col items-center justify-start px-5">
          <h3 className="text-xl md:text-3xl text-black mb-4 text-center">Políticas</h3>
          <ul className="hidden xl:flex flex-col">
            <li
              className="ml-1 px-10 mt-2 cursor-pointer text-lg text-black hover:text-purple-700 hover:scale-105 text-center"
            >
              Política de privacidade
            </li>

            <li
              className="ml-1 px-10 mt-2 cursor-pointer text-lg text-black hover:text-purple-700 hover:scale-105 text-center"
            >
              Termos de uso
            </li>
          </ul>
        </div>

        <div className="hidden xl:flex flex-col items-center justify-start px-5 w-3xl">
          <h3 className="text-xl md:text-3xl text-black mb-4 text-center">Contato</h3>
          <ul className="hidden xl:flex flex-col">
            <li
              className="ml-1 px-10 mt-2 cursor-pointer text-lg text-black hover:text-purple-700 hover:scale-105 text-center"
            >
              <a
                href="mailto:souza_rafael.97@outlook.com"
                className="flex text-lg sm:text-xl mb-5 text-black hover:text-purple-700 hover:scale-105"
                target="_blank"
                rel="noreferrer"
              >
                <span><AiOutlineMail size={20} className='text-purple-700 mt-1 mr-2'/></span>contato@influencehub.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-between py-4 flex-col lg:flex-row">
        <p className="px-10 font-medium text-gray-500 hover:text-gray-800 tracking-widest text-md">
          Copyright INFLUENCE HUB © 2023 All Rights reserved.
        </p> 

        <p className="px-10 font-medium text-gray-500 tracking-widest text-md mt-4 xl:mt-0">
          Desenvolvido por <a href="https://github.com/Rafael-Souza-97" target="_blank" rel="noreferrer"><span className="cursor-pointer font-medium text-gray-500 hover:text-black tech">Rafael Souza</span></a> utilizando <a href="https://nextjs.org/" target="_blank" rel="noreferrer" ><span className="cursor-pointer font-medium text-gray-500 hover:text-black">Next</span></a> e <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"><span className="cursor-pointer font-medium text-gray-500 hover:text-cyan-400 font">Tailwind</span></a>.
        </p> 
      </div>
    </footer>
  );
};

export default Footer;
