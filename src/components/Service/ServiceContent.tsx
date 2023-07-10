import React from 'react';
import Image from 'next/image';
import parse from 'html-react-parser';
import IServiceProps from '@/interfaces/IServiceProps';
import Link from 'next/link';
import { AiOutlineRight } from 'react-icons/ai';
import '@/styles/Home.css';

const ServiceContent = ({ title, text, src, imgWidth, imgSide, button, link, buttonText }: IServiceProps) => {
  return (
    <section
      id="influencer"
      className='md:pt-0 px-4 md:px-0'
    >
      {imgSide === 'left' ? (
        <div className="max-w-screen-xl mx-auto flex flex-col-reverse items-center justify-center h-full px-8 md:flex-row md:mb-20">
          <div className="flex cursor-pointer ml-3 mb-10 sm:mb-0">
            <Image
              src={src}
              alt={text}
              width={imgWidth}
              className='mt-1'
            />
          </div>

          <div className="flex flex-col justify-center items-center">
            <h1 className="font-semibold text-2xl sm:text-4xl mb-5 text-center">
              {title}
            </h1>

            <h3 className="text-xl sm:text-2xl mb-5 ml-10">
              {parse(text)}
            </h3>

            {button &&
              <Link href={link}>        
                <div>
                  <button
                    className="flex text-xl text-white mt-7 mx-2 px-10 py-5 font-semibold md:ml-4 border border-gray-300 hover:shadow-md bg-primary hover:bg-purple-600 rounded-3xl"
                  >
                    {buttonText}
                    <AiOutlineRight className='mt-1 ml-3' />
                  </button>
                </div>
              </Link>
            }
          </div>
        </div>
      ) : (
        <div className="max-w-screen-2xl mx-auto flex flex-col items-center justify-center h-full px-8 md:flex-row md:mb-20">
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-semibold text-2xl sm:text-3xl mb-5 text-center">
              {title}
            </h1>

            <h3 className="text-xl sm:text-2xl mb-5 ml-10">
              {parse(text)}
            </h3>

            {button &&
              <Link href={link}>        
                <div>
                  <button
                    className="flex text-xl text-white mt-7 mx-2 px-10 py-5 font-semibold md:ml-4 border border-gray-300 hover:shadow-md bg-primary hover:bg-purple-600 rounded-3xl"
                  >
                    {buttonText}
                    <AiOutlineRight className='mt-1 ml-3' />
                  </button>
                </div>
              </Link>
            }
          </div>

          <div className="flex cursor-pointer ml-3 mb-10 sm:mb-0">
            <Image
              src={src}
              alt={text}
              width={imgWidth}
              className='mt-1'
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default ServiceContent;
