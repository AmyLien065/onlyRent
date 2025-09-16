import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './component/Nav';
import Footer from './component/Footer'
// import ScrollToTop from './component/ScrollToTop.jsx'
// import Home from './sections/Home.js'
// import News from './sections/News.js'
// import AboutUs from './sections/AboutUs.js'


function App() {
  return (
    <div className="wrap">
      <Nav />
      {/* <ScrollToTop/> */}

      {/* 測試內容 */}
      <main style={{ paddingTop: '80px', minHeight: '100vh' }}>
        <h1>Only Rent 測試頁面</h1>
        <p>導航列應該出現在這裡</p>

        {/* 製造滾動內容來測試 navbar 效果 */}
        <div style={{ height: '200vh', background: 'linear-gradient(to bottom, #f0f0f0, #e0e0e0)' }}>
          <p>滾動測試內容</p>
          <p>繼續滾動看看 navbar 效果</p>


        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;