import React from 'react'
import BorderDivider from './BorderDivider'
import { IdentificationIcon } from '@heroicons/react/solid'

export default function About() {
  return (
    <section id="about">
      <div className='container mx-auto flex flex-col justify-center items-center px-10 py-14 md:py-16 lg:py-20 xl:py-24 2xl:py-28 2xl:px-20'>
        <IdentificationIcon className="inline-block w-10 mb-4" />
        <h1 className="text-white text-3xl title-font font-medium mb-4 sm:text-4xl sm:mb-6 xl:mb-8">
          About
        </h1>
        <div className="flex flex-col justify-center items-center lg:flex-row xl:mx-20">
          <p className="mx-auto text-center text-base leading-relaxed lg:w-1/2 xl:w-5/12">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
            ipsa delectus eum quo voluptas aspernatur accusantium distinctio
            possimus est. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
            ipsa delectus eum quo voluptas aspernatur accusantium distinctio
            possimus est.
          </p>
          <div className='mx-auto pt-6 sm:pt-8 lg:pt-0'>
            <img
              className="object-cover object-center rounded-full"
              alt="Michael Orzel"
              src="./img/michael.png" />
          </div>
        </div>
      </div>
      <BorderDivider />
    </section>
  );
}
