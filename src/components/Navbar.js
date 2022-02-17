import React, { useState } from 'react'
import { navigation } from './navData'
import { 
  MenuIcon, HomeIcon, IdentificationIcon,
  ChipIcon, CodeIcon, MailIcon 
} from '@heroicons/react/solid'

export default function Navbar() {
  const [mobileNav, setMobileNav] = useState(false)

  const showMobileNav = () => setMobileNav(!mobileNav)
  
  return (
    <div className=" relative">
      {/* <div className='container mx-auto text-base bottom-0 z-10'>
          <ul className='flex flex-row justify-around align-center'>
            <li className='pl-0'>
              <a href="" className="px-9 hover:text-white">
                <MenuIcon />
              </a>
            </li>
              <li className='px-0'>
                <a href="#projects" className="px-9 hover:text-white">
                  <CodeIcon />
                </a>
              </li>
              <li className='pr-0'>
                <a href="#contact" className="px-9 hover:text-white">
                  <MailIcon />
                </a>
              </li>
          </ul>
      </div> */}

      <nav className='bg-gray-800 absolute z-99 top-0 left-0 w-80 h-screen flex flex-col justify-center items-center'>
        <ul className='flex flex-col justify-center items-center'>
          { navigation.map((section) => {
            return (
              <li key={section.name} className='w-28 flex '>
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

//flex justify-end flex-wrap items-center md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700

//flex flex-row justify-center items-center flex-wrap p-0

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