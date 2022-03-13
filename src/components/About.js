import React from 'react'
import BorderDivider from './BorderDivider'
import { IdentificationIcon } from '@heroicons/react/solid'

export default function About() {
  return (
    <section id="about">
      <div className='container mx-auto max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl flex flex-col justify-center items-center px-12 py-14 pb-24 sm:px-14 md:px-20 md:py-16 lg:px-20 lg:py-20 xl:px-0 xl:py-24 2xl:px-20 2xl:py-28'>
        <IdentificationIcon className="inline-block w-10 pb-4" />
        <h1 className="text-white text-3xl title-font font-medium pb-4 sm:text-4xl sm:mb-6 xl:mb-8">
          About Me
        </h1>
        <div className="flex flex-col justify-center items-center lg:flex-row xl:mx-20 lg:py-6 xl:pt-5">
          <p className="mx-auto text-justify text-base leading-relaxed lg:w-1/2 xl:w-5/12">
            Michael has been interested in web development since taking a
            course at the University of Michigan Dearborn.
            He fell in love with it completely when he first saw React
            and how it changed the way developers think about and create web apps. <br /> <br />
            His main focus right now is making web apps for the blockchain.<br /> <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
            ipsa delectus eum quo voluptas aspernatur accusantium distinctio
            possimus est. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
            ipsa delectus eum quo voluptas aspernatur accusantium distinctio
            possimus est. <br /> <br />
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
