import { Menu, Terminal, X } from 'lucide-react'
import React, { useState } from 'react'
import Button from '../ui/Button';

const Navbar = () => {

  const [scrolled, setscrolled] = useState(false);
  const [isMenuOpen, setisMenuOpen] = useState(false);

  const NavLinks = [
    { name: 'Home', link: '/home' },
    { name: 'Home', link: '/home' },
    { name: 'Home', link: '/home' },
    { name: 'Home', link: '/home' },
    { name: 'Home', link: '/home' },
  ];


  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 border-b border-transparent ${scrolled ? 'bg-black/80 backdrop-blur-md border-white/10 py-4 shadow-[0_0_20px_rgba(0,0,0,0.5)]' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

        <div className="flex items-center gap-2 group cursor-pointer" onClick={(e) => handleSmoothScroll(e, '#')}>
          <div className="w-10 h-10 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center transform group-hover:rotate-45 transition-transform duration-300">
            <Terminal className="text-white w-6 h-6 transform group-hover:-rotate-45 transition-transform duration-300" />
          </div>
          <span className="hidden md:block text-2xl font-bold tracking-tighter text-white">
            KAMIL<span className="text-cyan-400">.HASSAN</span>
          </span>
        </div>

        <div className="hidden md:flex gap-8 items-center">
          {NavLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="cursor-pointer text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors uppercase tracking-[0.2em] relative group"
            >
              <span className="opacity-0 group-hover:opacity-100 absolute -left-4 text-cyan-500 transition-opacity">&gt;</span>
              {link.name}
            </a>
          ))}


          {/* <a 
            href="#contact"
            className="px-6 py-2 bg-white/5 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all duration-300 text-xs font-bold font-mono tracking-widest uppercase clip-path-polygon hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] [clip-path:polygon(10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%,0_10px)]"
          >
            Init_Project
          </a> */}
          <Button
            data="Init Project"
            href="#"
            Property="bg-red-600 text-white border-red-500 hover:bg-red-700 hover:shadow-red-500/50"
          />
        </div>


        <button className="md:hidden text-slate-300" onClick={() => setisMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black border-b border-white/10 p-6 md:hidden flex flex-col gap-6 shadow-2xl z-50">
          {NavLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={(e) => handleSmoothScroll(e, link.href)} className="text-xl font-bold text-slate-300 font-mono hover:text-cyan-400 transition-colors">
              {link.name}
            </a>
          ))}
        </div>
      )}



    </nav>
  )
}

export default Navbar
