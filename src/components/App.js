import React from 'react'
import Navbar from './Navbar'
import Content from './Content'
import Footer from './Footer'

export default function App() {
  return (
    <main className="bg-gray-900 text-gray-400 body-font scroll-smooth">
      <Navbar />
      <Content />
      <Footer />
    </main>
  );
}
