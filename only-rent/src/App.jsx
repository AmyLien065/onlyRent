import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './component/Nav';
import Footer from './component/Footer'
import Hero from './sections/Hero';
import Features from './sections/Features';
import Skills from './sections/Skills';
import Steps from './sections/Steps';
import AboutUs from './sections/AboutUs';
import FAQ from './sections/FAQ';
import CTA from './sections/CTA';
// import ScrollToTop from './component/ScrollToTop.jsx'



function App() {
  return (


    <div className="wrap">
      <Nav />
      {/* <ScrollToTop/> */}
      <Hero />
      <Features />
      <Skills />
      <Steps />
      <AboutUs />
      <FAQ />
      <CTA />
      <Footer />
    </div>

  );
}

export default App;