import React from 'react'
import BorderDivider from './BorderDivider'
import { projects } from './resume'
import { CodeIcon } from '@heroicons/react/solid'

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-900 text-gray-400 body-font">
      <div className='container mx-auto flex flex-col justify-center items-center px-12 py-14 pb-24 sm:px-14 md:px-20 md:py-16 lg:py-20 xl:py-24 2xl:py-28 2xl:px-20'>
        <CodeIcon className="inline-block w-10 pb-4"/>
        <h1 className="text-white text-3xl title-font font-medium pb-4 sm:text-4xl sm:pb-6 xl:pb-8">
          Some Things I've Built
        </h1>
        <p className="mx-auto text-justify text-base leading-relaxed pb-6 lg:max-w-2xl lg:w-2/3 max-w-sm sm:max-w-md md:max-w-lg">
          Click on a project's image to see it live. 
          You can view it's source code by clicking the 'View Code' button.
        </p>
        <div className='flex flex-col justify-center items-center flex-wrap xl:flex-row xl:w-9/12 2xl:w-8/12 lg:pb-4 xl:pt-5 2xl:pt-6 2xl:pb-5'>
          { projects.map((project) => (
            <a
              key={project.image}
              href={project.link}
              target="_blank"
              className="basis-1/2 relative py-4 max-w-sm sm:max-w-md md:max-w-xl 2xl:max-w-md sm:w-10/12 md:w-8/12 xl:w-8/12 xl:px-4 2xl:w-8/12"
            >
              <div className='relative z-1 w-full'>
                <img
                  src={project.image}
                  alt="gallery"
                  style={{ minHeight: "33rem" }}
                  className="relative z-10 w-full h-full py-0 rounded-md object-cover object-center"
                />
                <div className="absolute z-20 top-0 transition duration-300 ease-in-out bg-gray-900 text-justify w-full h-full px-10 py-10 flex flex-col justify-evenly items-center border-4 border-gray-800 opacity-80 hover:opacity-70">
                  <div className='max-w-xs flex flex-col justify-center items-center'>
                    <h2 className="text-xl title-font font-medium text-white">
                      {project.title}
                    </h2>
                    <p className="text-md leading-relaxed py-5">{project.description}</p>
                    <h3 className="text-sm title-font font-medium text-green-400 tracking-widest">
                      {project.technologies}
                    </h3>
                  </div>
                  <a
                    href={project.code} target='_blank'
                    className='bg-gray-900 text-white text-lg transition duration-300 ease-in-out px-6 py-2 border rounded hover:bg-gray-800 focus:outline-none active:bg-gray-700'>
                    View Code
                  </a>
                </div>
              </div>
            </a>
          )) }
        </div>
      </div>
      <BorderDivider />
    </section>
  );
}
