import React, { useState } from 'react'
import { navData } from './navData'
import { 
  MenuIcon, HomeIcon, IdentificationIcon,
  ChipIcon, CodeIcon, MailIcon 
} from '@heroicons/react/solid'

export default function Navbar() {
  const [navigation, setNavigation] = useState(false)

  const toggleNavigation = () => setNavigation(!navigation)
  
  return (
    <div>
      <div className='fixed bottom-0 left-0 z-30 bg-gray-800 w-full xl:top-0 xl:bottom-auto'>
        <ul className='flex flex-row justify-around align-center text-base'>
          <li className='pl-0'>
            <a href='#' className="px-8 hover:text-white">
              <MenuIcon onClick={toggleNavigation} />
            </a>
          </li>
            <li className='px-0'>
              <a href="#projects" className="px-8 hover:text-white">
                <CodeIcon />
              </a>
            </li>
            <li className='pr-0'>
              <a href="#contact" className="px-8 hover:text-white">
                <MailIcon />
              </a>
            </li>
        </ul>
      </div>

      <nav 
        className={navigation 
          ? 'fixed z-50 top-0 left-0 bg-gray-900 w-80 h-screen flex flex-col justify-center items-center'
          : 'hidden'}
      >
        <ul className='flex flex-col justify-center items-center'>
          { navData.map((section) => {
            return (
              <li key={section.name} className='w-32'>
                <a href={section.link} className='flex flex-row justify-center align-center px-0 hover:text-white'>
                  {section.icon}
                  {section.name}
                </a>
              </li>
            );
          }) }
        </ul>
      </nav>
    </div>
  );
}


{/* <li className='px-0'>
                <a href="#hero" className="px-9 hover:text-white">
                  <HomeIcon></HomeIcon>
                </a>
              </li>
              <li className='px-0'>
                <a href="#about" className="px-9 hover:text-white">
                  <IdentificationIcon></IdentificationIcon>
                </a>
              </li>
              <li className='px-0'>
                <a href="#skills" className="px-9 hover:text-white">
                  <ChipIcon></ChipIcon>
                </a>
              </li> */}