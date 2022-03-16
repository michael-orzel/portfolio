import React, { useState } from 'react'
import { MailIcon } from '@heroicons/react/solid'

export default function Contact() {
  const [formName, setFormName] = useState('')
  const [formEmail, setFormEmail] = useState('')
  const [formMessage, setFormMessage] = useState('')

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "portfolio-contact-form": "contact", formName, formEmail, formMessage }),
    })
    .then(() => alert("Your message was sent."))
    .catch((error) => alert(error));
  }

  return (
    <section id="contact" className="relative">
      <div className='container mx-auto flex flex-col justify-center items-center px-12 py-14 pb-24 md:py-16 lg:py-20 xl:py-24 2xl:py-28 2xl:px-20 sm:px-14 md:px-20 lg:px-20 xl:px-0 2xl:px-20'>
        <MailIcon className="inline-block w-10 pb-4"/>
        <h1 className="text-white text-3xl title-font font-medium pb-4 sm:text-4xl xl:pb-6">
          Get In Touch
        </h1>
        <form onSubmit={(e) => handleFormSubmit(e)}
          netlify="true"
          name="contact"
          className="flex flex-col justify-center align-center w-full max-w-md lg:max-w-lg sm:w-11/12 md:w-9/12 lg:w-7/12 xl:w-6/12 2xl:w-5/12">
          <p className="mx-auto text-center leading-relaxed pb-5 lg:pb-4 xl:pb-6">
            <div className='text-justify'>
              I'm currently looking for new remote opportunities. 
              Use the form below or contact me direclty with:
            </div>
            <br/> <span className='text-lg text-blue-300 font-bold opacity-80 lg:text-xl'>hello@michaelorzel.com</span>
          </p>
          <div className="relative pb-4 lg:pb-5 2xl:pb-6">
            <label htmlFor="name" className="text-gray-400 text-sm leading-7">
              Name
            </label>
            <input onChange={(e) => setFormName(e.target.value)}
              type="text"
              id="name"
              name="name"
              className="bg-gray-800 text-gray-100 text-base w-full px-3 py-1 border border-gray-700 rounded outline-none transition duration-300 ease-in-out focus:border-green-500 focus:ring-2 focus:ring-green-900 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="relative pb-4 lg:pb-5 2xl:pb-6">
            <label htmlFor="email" className="text-gray-400 text-sm leading-7">
              Email
            </label>
            <input onChange={(e) => setFormEmail(e.target.value)}
              type="email"
              id="email"
              name="email"
              className="bg-gray-800 text-gray-100 text-base w-full px-3 py-1 border border-gray-700 rounded outline-none transition duration-300 ease-in-out focus:border-green-500 focus:ring-2 focus:ring-green-900 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="relative pb-4 lg:pb-5 2xl:pb-6">
            <label htmlFor="message" className="text-gray-400 text-sm leading-7">
              Message
            </label>
            <textarea onChange={(e) => setFormMessage(e.target.value)}
              id="message"
              name="message"
              className="bg-gray-800 text-gray-100 text-base w-full px-3 py-1 border border-gray-700 rounded outline-none transition duration-300 ease-in-out focus:border-green-500 focus:ring-2 focus:ring-green-900 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <button
            type="submit"
            className="bg-green-600 text-white text-lg py-2 px-6 border-0 rounded transition duration-300 ease-in-out hover:bg-green-700 focus:outline-none active:bg-green-500">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
