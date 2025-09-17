import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './component/Nav';
import Footer from './component/Footer'
import Hero from './sections/Hero';
import Features from './sections/Features';
// import ScrollToTop from './component/ScrollToTop.jsx'



function App() {
  return (


    <div className="wrap">
      <Nav />
      {/* <ScrollToTop/> */}

      <Hero />
      <Features />
      <Footer />
    </div>

  );
}

export default App;