import React from 'react'

export default function Hero() {

  const heroStyles = {
    backgroundImage: `linear-gradient(rgba(2,132,199,0.1), rgba(2,132,199,0.1)), url(./img/blockchain.jpg)`,
  }

  return (
    <header 
      id='hero'>
      <div className='flex flex-col justify-center items-center w-screen h-screen bg-center bg-fixed bg-cover bg-no-repeat'
        style={heroStyles}>
        <div className='flex flex-row justify-center items-center w-3/4 lg:1/2'>
          <h1 className='title-font text-white font-medium text-3xl mb-6 md:text-4xl'>
            <span className='text-gray-300 inline-block'>Hi, I'm Michael.</span>
            <br /><span className='inline-block py-1 lg:py-2'>A Fullstack Blockchain Developer</span>
          </h1>
        </div>
        <div className='flex flex-row justify-center items-center'>
          <a
            href='#contact'
            className='bg-green-600 text-white text-lg px-6 py-2 border-0 rounded hover:bg-green-700 focus:outline-none active:bg-green-500'>
            Work With Me
          </a>
          <a
            href='#projects'
            className='bg-gray-800 text-gray-300 text-lg px-6 py-2 ml-4 border-0 rounded lg:ml-6 hover:bg-gray-700 hover:text-white focus:outline-none active:bg-gray-800'>
            See My Past Work
          </a>
        </div>
      </div>
    </header>
  );
}

//className='w-screen h-screen bg-center bg-fixed bg-cover bg-no-repeat'
//linear-gradient(rgba(135, 80, 156, 0.1), rgba(135, 80, 156, 0.3)),
