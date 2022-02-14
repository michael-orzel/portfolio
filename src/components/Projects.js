import React from 'react'
import { CodeIcon } from '@heroicons/react/solid'
import { projects } from './resume'

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-900 text-gray-400 body-font">
      <div className='container mx-auto flex flex-col justify-center items-center px-10 py-14 2xl:px-20'>
        <CodeIcon className="mx-auto w-10 mb-4" />
        <h1 className="text-white text-3xl title-font font-medium mb-4 sm:text-4xl">
          Apps I've Built
        </h1>
        <p className="mx-auto text-base leading-relaxed pb-6 lg:w-2/3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
          facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
          fuga dolore.
        </p>
        <div className='flex flex-col justify-center items-center flex-wrap xl:flex-row'>
          { projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="w-100 relative py-4 sm:w-10/12 md:w-8/12 xl:w-8/12 2x:w-6/12 xl:basis-4/12"
            >
              <div className='relative z-1'>
                <img
                  src={project.image}
                  alt="gallery"
                  className="relative z-2 w-full h-full py-0 rounded-md object-cover object-center"
                />
                <div className="absolute z-3 top-0 bg-gray-900 w-full h-full px-8 py-10 flex flex-col justify-center items-start border-4 border-gray-800 opacity-90 hover:opacity-80 hover:border-gray-900">
                  <h1 className="title-font text-lg font-medium text-white">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed py-3">{project.description}</p>
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400">
                    {project.subtitle}
                  </h2>
                </div>
              </div>
            </a>
          )) }
        </div>
      </div>

      {/* <div className="container px-10 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
          </p>
        </div>
        <div className="flex flex-wrap">
          { projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="w-100 xl:w-1/2 py-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="py-0 absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          )) }
        </div>
      </div> */}
    </section>
  );
}
