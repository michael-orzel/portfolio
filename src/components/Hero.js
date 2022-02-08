import React from 'react'

export default function Hero() {
  return (
    <section id="hero">
      <div className="bg-gray-900 flex flex-col justify-center items-center w-screen h-screen">
        <div className='flex flex-row justify-center items-center w-3/4 lg:1/2'>
          <h1 className="title-font text-white text-3xl md:text-4xl mb-4 font-medium">
            Hi, I'm Michael.
            <br className="inline-block" />A Fullstack Blockchain Developer
          </h1>
        </div>
        <div className="flex flex-row justify-center items-center">
          <a
            href="#contact"
            className="bg-green-500 text-white text-lg px-6 py-2 border-0 rounded hover:bg-green-600 focus:outline-none active:bg-green-400">
            Work With Me
          </a>
          <a
            href="#projects"
            className="bg-green-500 text-white text-lg px-6 py-2 border-0 rounded hover:bg-green-600 focus:outline-none active:bg-green-400"
            className="bg-gray-800 text-gray-400 text-lg px-6 py-2 ml-4 border-0 rounded hover:text-white hover:bg-gray-700 focus:outline-none active:bg-gray-800">
            See My Past Work
          </a>
        </div>
      </div>
    </section>
  );
}

