import React, { useState } from 'react'
import { navData } from './navData'
import {
  MenuIcon, HomeIcon, IdentificationIcon,
  ChipIcon, CodeIcon, MailIcon
} from '@heroicons/react/outline'

export default function Navbar() {
  const [navigation, setNavigation] = useState(false)

  const toggleNavigation = () => setNavigation(!navigation)

  const hideNavigation = () => setNavigation(false)

  return (
    <div>
      <div className='fixed bottom-0 left-0 z-30 bg-gray-800 w-full h-20 drop-shadow-2xl flex flex-col justify-center opacity-100 xl:top-0 xl:bottom-auto xl:flex-row xl:justify-around 2xl:justify-evenly'>
        <a href="#hero" className="hidden transition duration-300 ease-in-out px-4 py-1 rounded flex flex-row justify-center items-center hover:bg-gray-700 hover:text-white xl:inline-flex">
          <HomeIcon className='w-10' />
          <span className='text-xl pl-1'>Top</span>
        </a>
        <ul className='flex flex-row justify-around items-center text-base'>
          <li className='inline-flex pl-0 lg:hidden'>
            <a role='button' tabIndex='0' 
              className="transition duration-300 ease-in-out px-4 py-4 flex flex-row justify-center items-center hover:text-white"
              onClick={toggleNavigation}>
              <MenuIcon className='w-10' />
            </a>
          </li>
          <li className='hidden px-0 lg:inline-flex xl:hidden xl:pl-4 2xl:pl-24'>
            <a href="#hero" className="transition duration-300 ease-in-out px-4 py-1 rounded flex flex-row justify-center items-center hover:bg-gray-700 hover:text-white">
              <HomeIcon className='w-10' />
              <span className='text-xl pl-1'>Top</span>
            </a>
          </li>
          <li className='hidden px-0 md:inline-flex 2xl:pl-80'>
            <a href="#about" className="transition duration-300 ease-in-out px-4 py-1 rounded flex flex-row justify-center items-center hover:bg-gray-700 hover:text-white">
              <IdentificationIcon className='w-10' />
              <span className='text-xl pl-1'>About</span>
            </a>
          </li>
          <li className='hidden px-0 sm:inline-flex'>
            <a href="#skills" className="transition duration-300 ease-in-out px-4 py-1 rounded flex flex-row justify-center items-center hover:bg-gray-700 hover:text-white">
              <ChipIcon className='w-10' />
              <span className='text-xl pl-1'>Skills</span>
            </a>
          </li>
          <li className='inline-flex px-0 2xl:pr-80'>
            <a href="#projects" className="transition duration-300 ease-in-out px-4 py-1 rounded flex flex-row justify-center items-center hover:bg-gray-700 hover:text-white">
              <CodeIcon className='w-10' />
              <span className='text-xl pl-1'>Projects</span>
            </a>
          </li>
          <li className='inline-flex px-0 2xl:pr-24 xl:hidden'>
            <a href="#contact" className="transition duration-300 ease-in-out px-4 py-1 rounded flex flex-row justify-center items-center hover:bg-gray-700 hover:text-white">
              <MailIcon className='w-10'/>
              <span className='text-xl pl-1'>Contact</span>
            </a>
          </li>
        </ul>
        <a href="#contact" className="hidden transition duration-300 ease-in-out px-4 py-1 rounded flex flex-row justify-center items-center hover:bg-gray-700 hover:text-white xl:inline-flex">
          <MailIcon className='w-10'/>
          <span className='text-xl pl-1'>Contact</span>
        </a>
      </div>

      <div 
        className={navigation 
          ? 'fixed z-40 w-full h-screen bg-gray-700 opacity-70 transition duration-500 ease-in-out transform translate-x-0'
          : 'fixed z-40 w-full h-screen bg-gray-700 opacity-0 transition duration-500 ease-in-out transform translate-x-full'} 
        onClick={hideNavigation}
      />

      <nav
        className={navigation
          ? 'fixed z-50 top-0 left-0 transition duration-500 ease-in-out transform translate-x-0 bg-gray-900 w-80 h-screen flex flex-col justify-center items-center'
          : 'fixed z-50 top-0 left-0 transition duration-500 ease-in-out transform -translate-x-80 bg-gray-900 w-80 h-screen flex flex-col justify-center items-center'}
      >
        <ul className='w-full h-full flex flex-col justify-center items-center'>
          { navData.map((section) => {
            return (
              <li key={section.name} className='inline-flex w-7/12'>
                <a href={section.link}
                  onClick={hideNavigation} 
                  className='transition duration-300 ease-in-out flex flex-row justify-start items-center min-w-full pl-4 py-4 rounded hover:bg-gray-700 hover:text-white'
                >
                  <span className='w-12'>{section.icon}</span>
                  <span className='text-2xl pl-2'>{section.name}</span>
                </a>
              </li>
            );
          }) }
        </ul>
      </nav>
    </div>
  );
}
