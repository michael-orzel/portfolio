import React, { useState } from 'react'
import { 
  MenuIcon, HomeIcon, IdentificationIcon,
  CodeIcon, AcademicCapIcon, MailIcon 
} from '@heroicons/react/solid'

export default function Navbar() {
  const [mobileNav, setMobileNav] = useState(false)

  const showMobileNav = () => setMobileNav(!mobileNav)
  
  return (
    <div className="bg-gray-800 relative bottom-0 z-10">
      <div className='container mx-auto '>
        <nav className="text-base">
          <ul className='flex flex-row justify-between align-center'>
            <li className='pl-5'>
              <a href="" className="px-10 hover:text-white">
                <MenuIcon></MenuIcon>
              </a>
            </li>
            <div className='flex flex-row justify-center align-center'>
              <li className='px-4'>
                <a href="#hero" className="px-10 hover:text-white">
                  <HomeIcon></HomeIcon>
                </a>
              </li>
              <li className='px-4'>
                <a href="#projects" className="px-10 hover:text-white">
                  <CodeIcon></CodeIcon>
                </a>
              </li>
            </div>
            <li className='pr-5'>
              <a href="#contact" className="px-10 hover:text-white">
                <MailIcon></MailIcon>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div></div>

      {/* <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Michael <span className="text-gray-400">Orzel</span>
          </a>
        </div>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex justify-end flex-wrap items-center text-base">
          <a href="#projects" className="mr-5 hover:text-white">
            Projects
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 hover:bg-gray-700 focus:outline-none rounded text-base mt-4 md:mt-0">
          Contact
        </a>
      </div> */}
    </div>
  );
}

//flex justify-end flex-wrap items-center md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700

//flex flex-row justify-center items-center flex-wrap p-0