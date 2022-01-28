import React from 'react'
import Navbar from './Navbar'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
