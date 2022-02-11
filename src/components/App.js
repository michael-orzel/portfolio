import React from 'react'
import Navbar from './Navbar'
import Main from './Main'
import Footer from './Footer'

export default function App() {
  return (
    <main className="bg-gray-900 text-gray-400 body-font">
      <Navbar />
      <Main />
      <Footer />
    </main>
  );
}
