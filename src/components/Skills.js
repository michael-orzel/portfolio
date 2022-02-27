import React from 'react'
import BorderDivider from './BorderDivider'
import { skills } from './resume'
import { BadgeCheckIcon, ChipIcon } from '@heroicons/react/solid'

export default function Skills() {
  return (
    <section id="skills">
      <div className="container mx-auto max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl flex flex-col justify-center items-center px-12 py-14 pb-24 md:py-16 lg:py-20 xl:py-24 2xl:py-28 sm:px-14 md:px-20 lg:px-20 xl:px-20 2xl:px-20">
        <div className="text-justify mb-10 flex flex-col justify-center items-center">
          <ChipIcon className="inline-flex w-10 mb-4 sm:mb-6 xl:mb-8"/>
          <h1 className="text-3xl text-white font-medium title-font mb-4 sm:text-4xl md:mb-6 xl:mb-8">
            What I Work With
          </h1>
          <p className="text-base leading-relaxed lg:w-2/3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
            ipsa delectus eum quo voluptas aspernatur accusantium distinctio
            possimus est.
          </p>
        </div>
        <div className="flex flex-wrap sm:mb-2 lg:w-4/5 2xl:max-w-4xl">
          { skills.map((skill) => (
            <div key={skill} className="w-full py-2 lg:w-1/2 lg:px-2">
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
