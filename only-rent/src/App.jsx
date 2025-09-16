import { useState } from 'react'
import { Route, Routes} from 'react-router-dom'
import './App.css'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import ScrollToTop from './component/ScrollToTop.jsx'
import Home from './sections/Home.js'
import News from './sections/News.js'
import About from './sections/About.js'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


export default function App(){
  return(
    <div className='wrap'>
      <ScrollToTop/>
      <Navbar/>
      <div className='all'>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/News' element={<News/>}></Route>
        <Route path="/EventDetailPage" element={<EventDetailPage/>}></Route>
        <Route path='/Illustrations' element={<Illustrations/>}></Route>
        <Route path='/Bar' element={<Bar/>}></Route>
        <Route path='/BarInnerPage' element={<BarInnerPage/>}></Route>
        <Route path='/BarRoute' element={<BarRoute/>}></Route>
        <Route path='/Member' element={<Member/>}></Route>
        <Route path='/About' element={<About/>}></Route>
      </Routes>
      </div>
      <Footer/>
      
    </div>
  )
}
