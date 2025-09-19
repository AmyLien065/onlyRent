import { useState, useRef } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './component/Nav';
import Footer from './component/Footer';
import Hero from './sections/Hero';
import Features from './sections/Features';
import Skills from './sections/Skills';
import Steps from './sections/Steps';
import AboutUs from './sections/AboutUs';
import FAQ from './sections/FAQ';
import CTA from './sections/CTA';


function App() {
  // 建立各個區塊的 useRef
  const featuresRef = useRef(null);
  const stepsRef = useRef(null);
  const aboutRef = useRef(null);
  const faqRef = useRef(null);

  // 將 refs 打包成一個物件傳給 Nav
  const sectionRefs = {
    featuresRef,
    stepsRef,
    aboutRef,
    faqRef
  };

  return (
    <div className="wrap">
      <Nav sectionRefs={sectionRefs} />
      
      <Hero />
      <Features ref={featuresRef} />
      <Skills />
      <Steps ref={stepsRef} />
      <AboutUs ref={aboutRef} />
      <FAQ ref={faqRef} />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;