import React from 'react'
import BorderDivider from './BorderDivider'
import { skills } from './resume'
import { BadgeCheckIcon, ChipIcon } from '@heroicons/react/solid'

export default function Skills() {
  return (
    <section id="skills">
      <div className="container mx-auto flex flex-col justify-center items-center px-5 py-14 md:py-16 lg:py-20 xl:py-24 2xl:py-28 2xl:px-20">
        <div className="text-center mb-10">
          <ChipIcon className="inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4 md:mb-6 xl:mb-8">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
            ipsa delectus eum quo voluptas aspernatur accusantium distinctio
            possimus est.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          { skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          )) }
        </div>
      </div>
      <BorderDivider />
    </section>
  );
}
