import React, { useEffect, useState } from 'react'
import './App.css'
// import Temp2 from './Trash/Temp2.jsx'
import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import TechStack from './components/sections/TechStack';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

const App = () => {

  const [mousePos, setmousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setmousePos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);



  return (
    <>
      <div className="min-h-screen bg-black text-slate-200 font-sans selection:bg-cyan-500/30 overflow-x-hidden relative">
        <div className="fixed inset-0 grid-bg z-0 pointer-events-none"></div>
        <div className="fixed inset-0 scanline-bg z-10 pointer-events-none opacity-20"></div>

        <div
          className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(29, 98, 216, 0.15), transparent 90%)`
          }}
        ></div>
        <Navbar />
        <Hero />
        <TechStack />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </div>
    </>

  )
}

export default App
