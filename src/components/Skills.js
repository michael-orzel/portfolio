import React from 'react'
import BorderDivider from './BorderDivider'
import { skills } from './resume'
import { BadgeCheckIcon, ChipIcon } from '@heroicons/react/solid'

export default function Skills() {
  return (
    <section id="skills">
      <div className="container mx-auto max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl flex flex-col justify-center items-center px-12 py-14 pb-24 md:py-16 lg:py-20 xl:py-24 2xl:py-28 sm:px-14 md:px-20 lg:px-20 xl:px-20 2xl:px-20">
        <div className="text-justify mb-10 flex flex-col justify-center items-center">
          <ChipIcon className="inline-flex w-10 pb-4"/>
          <h1 className="text-3xl text-white font-medium title-font pb-4 sm:text-4xl md:pb-6 xl:pb-8">
            What I Work With
          </h1>
          <p className="mx-auto text-base text-justify leading-relaxed -mb-2 ">
            Some of the technologies and skills that I use 
            to take ideas and turn them into websites.
          </p>
        </div>
        <div className="flex flex-wrap sm:mb-2 lg:w-4/5 2xl:max-w-4xl lg:pb-5 xl:pt-5 2xl:pt-6">
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
