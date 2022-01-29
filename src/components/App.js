import React from 'react'
import Navbar from './Navbar'
import Content from './Content'
import Footer from './Footer'

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <Content />
      <Footer />
    </main>
  );
}
