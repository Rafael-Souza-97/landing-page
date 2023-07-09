import React from 'react';
import Image from 'next/image';
import parse from 'html-react-parser';
import IServiceProps from '@/interfaces/IServiceProps';
import '@/styles/Home.css';

const ServiceContent = ({ title, text, src, imgWidth, imgSide }: IServiceProps) => {
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

          <div className="flex flex-col justify-center ">
            <h1 className="font-semibold text-2xl sm:text-4xl mb-5 text-center">
              {title}
            </h1>

            <h3 className="text-xl sm:text-2xl mb-5 ml-10">
              {parse(text)}
            </h3>
          </div>
        </div>
      ) : (
        <div className="max-w-screen-2xl mx-auto flex flex-col items-center justify-center h-full px-8 md:flex-row md:mb-20">
          <div className="flex flex-col justify-center ">
            <h1 className="font-semibold text-2xl sm:text-3xl mb-5 text-center">
              {title}
            </h1>

            <h3 className="text-xl sm:text-2xl mb-5 ml-10">
              {parse(text)}
            </h3>
          </div>

          <div className="flex cursor-pointer ml-3 mb-10 sm:mb-0 ">
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
