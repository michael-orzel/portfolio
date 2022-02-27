import React from 'react'

export default function Hero() {

  const heroStyles = {
    backgroundImage: `linear-gradient(rgba(2,132,199,0.1), rgba(2,132,199,0.1)), url(./img/blockchain.jpg)`,
  }

  return (
    <header id='hero'>
      <div className='w-full h-screen pb-16 flex flex-col justify-center items-center bg-center bg-fixed bg-cover bg-no-repeat sm:pb-18 lg:pb-20 xl:pb-0 xl:pt-20'
        style={heroStyles}
      >
        <div className='flex flex-row justify-center items-center w-3/4 lg:1/2'>
          <h1 className='title-font text-white font-medium text-3xl mb-6 md:text-4xl'>
            <span className='inline-flex text-gray-400 text-sm pb-3'>Hi, my name is</span>
            <br /><span className='inline-flex text-white py-1 lg:py-2'>Michael Orzel.</span>
            <br /><span className='inline-flex text-gray-400 py-1 lg:py-2'>I build things for the blockchain.</span>
          </h1>
        </div>
        <div className='flex flex-row justify-center items-center pt-4'>
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
