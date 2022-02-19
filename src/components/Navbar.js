import React, { useState } from 'react'
import { navData } from './navData'
import {
  MenuIcon, HomeIcon, IdentificationIcon,
  ChipIcon, CodeIcon, MailIcon
} from '@heroicons/react/outline'

export default function Navbar() {
  const [navigation, setNavigation] = useState(false)

  const toggleNavigation = () => setNavigation(!navigation)

  return (
    <div>
      <div className='fixed bottom-0 left-0 z-30 bg-gray-800 w-full h-20 flex flex-col justify-center align-center xl:top-0 xl:bottom-auto xl:flex-row xl:justify-around 2xl:justify-evenly'>
        <a href="#hero" className="hidden px-4 py-1 rounded flex flex-row justify-center items-center hover:bg-gray-700 hover:text-white xl:inline-flex">
          <HomeIcon className='w-10' />
          <span className='text-xl pl-1'>Top</span>
        </a>
        <ul className='flex flex-row justify-around align-center text-base'>
          <li className='inline-flex pl-0 lg:hidden'>
            <a href='#' className="px-4 py-1 flex flex-row justify-center items-center hover:text-white">
              <MenuIcon className='w-10' onClick={toggleNavigation} />
            </a>
          </li>
          <li className='hidden px-0 lg:inline-flex xl:hidden xl:pl-4 2xl:pl-24'>
            <a href="#hero" className="px-4 py-1 rounded flex flex-row justify-center items-center hover:bg-gray-700 hover:text-white">
              <HomeIcon className='w-10' />
              <span className='text-xl pl-1'>Top</span>
            </a>
          </li>
          <li className='hidden px-0 md:inline-flex 2xl:pl-80'>
            <a href="#about" className="px-4 py-1 rounded flex flex-row justify-center items-center hover:bg-gray-700 hover:text-white">
              <IdentificationIcon className='w-10' />
              <span className='text-xl pl-1'>About</span>
            </a>
          </li>
          <li className='hidden px-0 sm:inline-flex'>
            <a href="#skills" className="px-4 py-1 rounded flex flex-row justify-center items-center hover:bg-gray-700 hover:text-white">
              <ChipIcon className='w-10' />
              <span className='text-xl pl-1'>Skills</span>
            </a>
          </li>
          <li className='inline-flex px-0 2xl:pr-80'>
            <a href="#projects" className="px-4 py-1 rounded flex flex-row justify-center items-center hover:bg-gray-700 hover:text-white">
              <CodeIcon className='w-10' />
              <span className='text-xl pl-1'>Projects</span>
            </a>
          </li>
          <li className='inline-flex px-0 2xl:pr-24 xl:hidden'>
            <a href="#contact" className="px-4 py-1 rounded flex flex-row justify-center items-center hover:bg-gray-700 hover:text-white">
              <MailIcon className='w-10'/>
              <span className='text-xl pl-1'>Contact</span>
            </a>
          </li>
        </ul>
        <a href="#contact" className="hidden px-4 py-1 rounded flex flex-row justify-center items-center hover:bg-gray-700 hover:text-white xl:inline-flex">
          <MailIcon className='w-10'/>
          <span className='text-xl pl-1'>Contact</span>
        </a>
      </div>

      <div className='hidden'></div>

      <nav
        className={navigation
          ? 'fixed z-50 top-0 left-0 bg-gray-900 w-80 h-screen flex flex-col justify-center items-center'
          : 'hidden'}
      >
        <ul className='flex flex-col justify-center items-center'>
          {navData.map((section) => {
            return (
              <li key={section.name} className='w-32'>
                <a href={section.link} className='flex flex-row justify-center align-center px-0 hover:text-white'>
                  {section.icon}
                  {section.name}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
