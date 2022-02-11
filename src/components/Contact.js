import React, { useState } from 'react'
import { MailIcon } from '@heroicons/react/solid'

export default function Contact() {
  const [formName, setFormName] = React.useState("")
  const [formEmail, setFormEmail] = React.useState("")
  const [formMessage, setFormMessage] = React.useState("")

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
      <div className='container mx-auto flex flex-col justify-center items-center px-10 py-14 2xl:px-20'>
        <MailIcon className="inline-block w-10 mb-4" />
        <h1 className="text-white text-3xl title-font font-medium mb-4 sm:text-4xl">
          Contact
        </h1>
        <form onSubmit={(e) => handleFormSubmit(e)}
          netlify
          name="contact"
          className="flex flex-col justify-center align-center w-full sm:w-11/12 md:w-9/12 lg:w-7/12 xl:w-6/12 2xl:w-5/12">
          <h2 className="text-white text-3xl mb-1 font-medium title-font sm:text-4xl">
            Hire Me
          </h2>
          <p className="leading-relaxed mb-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
            suscipit officia aspernatur veritatis. Asperiores, aliquid?
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input onChange={(e) => setFormName(e.target.value)}
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input onChange={(e) => setFormEmail(e.target.value)}
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400">
              Message
            </label>
            <textarea onChange={(e) => setFormMessage(e.target.value)}
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            type="submit"
            className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
