import React from 'react'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Education from './Education'
import Contact from './Contact'

export default function Content() {
  return (
    <div className="text-gray-400 bg-gray-900 body-font">
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}
