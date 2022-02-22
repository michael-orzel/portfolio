import React from 'react'
import {
   MailIcon
} from '@heroicons/react/outline'

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-9 pb-32 flex flex-col justify-center items-center bottom-0 xl:pb-14">
      <ul className="py-2 flex flex-row justify-center items-center">
        <li className='inline-flex px-0'>
          <a href="#contact" className="px-4 py-1 rounded flex flex-row justify-center items-center hover:bg-gray-700 hover:text-white">
            <MailIcon className='w-10'/>
          </a>
        </li>
        <li className='inline-flex px-0'>
          <a href="#contact" className="px-4 py-1 rounded flex flex-row justify-center items-center hover:bg-gray-700 hover:text-white">
            <MailIcon className='w-10'/>
          </a>
        </li>
      </ul>
      <span className='text-sm text-gray-500'>&copy; 2022 Michael Orzel</span>

      {/* <ul className="py-2 flex flex-row justify-center items-center">
        <li className="px-3"><a href="#about">About</a></li>
        <li className="px-3"><a href="#projects">Projects</a></li>
        <li className="px-3"><a href="#contact">Contact</a></li>
      </ul>
      <ul className="py-2 flex flex-row justify-center items-center">
        <li className="px-3"><a>Github</a></li>
        <li className="px-3"><a>Linkedin</a></li>
      </ul>
      <div className="flex flex-col justify-center items-center">
      <p className="py-1">Resume Download:</p>
      <a href="#skills" className="py-1">
        <DocumentDownloadIcon className="w-10 inline-block mb-4 hover:text-indigo-500 focus:text-indigo-600" />
      </a>
      </div> */}
    </footer>
  );
}
