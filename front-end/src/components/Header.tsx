'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import headerLinks from '@/utils/navigate';
import { FiMenu, FiX } from 'react-icons/fi';
import '@/styles/Header.css';

function Header() {
  const [nav, setNav] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setNav(false);
      }
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="flex p-5 justify-between bg-background">
      <Link href='/'>
        <div className="flex cursor-pointer opacity-90 hover:opacity-100 ml-3 mt-3">
          <h1 className="font-Lora text-2xl md:text-3xl text-purple-600">INFLUNCE HUB</h1>
        </div>
      </Link>

      <div className="hidden xl:flex items-center justify-between flex-wrap md:flex-no-wrap px-5">
        <ul className="hidden xl:flex ml-20">
          {headerLinks.map(({ id, link, name }) => (
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

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer z-30 xl:hidden ml-auto pr-4"
      >
        {!nav ? <FiMenu className="mt-3" size={30} /> : <FiX className="text-red-500 hover:text-red-700 mt-3" size={30} />}
      </div>
    
      {nav && (
        <ul className="flex flex-col z-20 fixed top-0 right-0 h-screen justify-center items-center w-full md:w-2/4 lg:w-1/3 xl:w-1/4 bg-secondary hamburguer-transition overflow-hidden">
          {headerLinks.map(({ id, link, name }) => (
            <li
              key={id}
              className="px-4 cursor-pointer py-6 text-4xl text-gray-600 hover:text-purple-700 mt-2"
            >
              <Link
                onClick={() => setNav(!nav)}
                href={link}
              >
                {name}
              </Link>
            </li>
          ))}

          <li
            className="px-4 cursor-pointer py-6 text-4xl text-gray-600 hover:text-purple-700 mt-44"
          >
            <Link href='/login'>        
              <button
                className="font-mono text-lg text-purple-700 mt-1 mx-2 px-4 py-4 md:ml-4 border border-primary hover:text-primary hover:shadow-md hover:bg-white rounded-3xl"
              >
                Fazer Login
              </button>
            </Link>

            <Link href='/register'>        
              <button
                className="text-lg text-white mt-1 mx-2 px-4 py-4 font-medium md:ml-4 border border-gray-300 hover:shadow-md bg-primary hover:bg-purple-600 rounded-3xl"
              >
                Registrar-se
              </button>
            </Link>
          </li>
        </ul>
      )}

      <section className='flex'>
        <Link href='/login'>        
          <div className="hidden xl:block">
            <button
              className="text-md font-semibold text-purple-700 mt-1 px-4 py-4 md:ml-4 border border-primary hover:text-primary hover:shadow-md hover:bg-white rounded-3xl"
            >
              Fazer Login
            </button>
          </div>
        </Link>

        <Link href='/register'>        
          <div className="hidden xl:block">
            <button
              className="text-md font-semibold text-white mt-1 px-4 py-4 md:ml-4 hover:shadow-lg bg-primary hover:bg-purple-600 rounded-3xl"
            >
              Registrar-se
            </button>
          </div>
        </Link>
      </section>
    </header>
  );
}

export default Header;
