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
        <p className="mx-auto text-center text-base leading-relaxed pb-6 lg:w-2/3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
          facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
          fuga dolore.
        </p>
        <div className='flex flex-col justify-center items-center flex-wrap xl:flex-row xl:w-9/12 2xl:w-8/12'>
          { projects.map((project) => (
            <a
              key={project.image}
              href={project.link}
              className="basis-1/2 relative py-4 sm:w-10/12 md:w-8/12 xl:w-8/12 xl:px-4 2xl:w-8/12"
            >
              <div className='relative z-1 w-full'>
                <img
                  src={project.image}
                  alt="gallery"
                  className="relative z-2 w-full h-full py-0 rounded-md object-cover object-center"
                />
                <div className="absolute z-3 top-0 bg-gray-900 w-full h-full px-8 py-10 flex flex-col justify-center items-start border-4 border-gray-800 opacity-90 hover:opacity-80 hover:border-gray-900">
                  <h1 className="text-xl title-font font-medium text-white">
                    {project.title}
                  </h1>
                  <p className="text-md leading-relaxed py-3">{project.description}</p>
                  <h2 className="text-sm title-font font-medium text-green-400 tracking-widest">
                    {project.subtitle}
                  </h2>
                </div>
              </div>
            </a>
          )) }
        </div>
      </div>
    </section>
  );
}
