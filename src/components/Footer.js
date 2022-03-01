import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 pt-7 pb-28 flex flex-col justify-center items-center bottom-0 lg:pt-9 lg:pb-32 xl:pb-12">
      <ul className="py-2 flex flex-row justify-center items-center">
        <li className='inline-flex px-0'>
          <a href="https://github.com/michael-orzel" target='_blank' 
            className="px-2 py-1 rounded-full flex flex-row justify-center items-center transition duration-300 ease-in-out hover:bg-gray-700 hover:text-white"
          >
            <img 
              src='./img/github.png' 
              alt='Github'
              className='w-12'
            />
          </a>
        </li>
        <li className='inline-flex px-0'>
          <a href="https://www.linkedin.com/in/michael-d-orzel/" target='_blank' 
            className="px-2 py-1 rounded-full flex flex-row justify-center items-center transition duration-300 ease-in-out hover:bg-gray-700 hover:text-white"
          >
            <img 
              src='./img/linkedin.png' 
              alt='Linkedin'
              className='w-12'
            />
          </a>
        </li>
      </ul>
      <span className='text-sm text-gray-500'>&copy; 2022 Michael Orzel</span>
    </footer>
  );
}
