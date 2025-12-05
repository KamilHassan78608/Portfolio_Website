import React from 'react'
import RevealOnScroll from '../ui/RevealOnScroll'
import { TypeAnimation } from 'react-type-animation'
import HackerEffect from '../ui/HackerEffect'
import { ChevronDown } from 'lucide-react'
import Button from '../ui/Button'

const Hero = () => {
  return (
    <section className='min-h-screen flex justify-center items-center pt-20 relative overflow-hidden'>

      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-700/40 rounded-full blur-[128px] animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-600/40 rounded-full blur-[128px] animate-pulse delay-1000"></div>

      <div className='max-w-6xl mx-auto px-6 text-center z-20'>
        <RevealOnScroll>
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-white/5 border border-cyan-500/30 backdrop-blur-sm text-[8px] font-mono text-cyan-400 tracking-widest uppercase shadow-[0_0_10px_rgba(34,211,238,0.2)]">
            <span className='w-1 h-1 rounded-full bg-cyan-400 animate-ping'></span>
            System Online // V.2.0.24
          </div>

          <h1 className='text-3xl md:text-7xl font-black tracking-tighter mb-0 text-white/40 leading-[0.9] min-h-40 md:min-h-[280px] flex flex-col justify-center items-center'>
            <HackerEffect
              text="KAMIL HASSAN"
              speed={80}
              className=""
            />

            
            <TypeAnimation
              sequence={[
                "MERN Stack Developer",
                1000,
                "React & Tailwind Expert",
                1000,
                "Professional Frontend",
                1000,
              ]}
              speed={50}
              repeat={Infinity}
              className="text-2xl mb-0 md:text-8xl bg-linear-to-r from-cyan-400 via-blue-400 to-purple-600 text-transparent bg-clip-text text-glow font-bold mt-2"
            />
          </h1>
        </RevealOnScroll>

        <RevealOnScroll delay={200}>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            <span className="text-cyan-500 font-mono text-sm mr-2">&gt;</span>
            Passionate MERN Stack Developer building scalable web applications with MongoDB, Express, React, and Node.js for seamless, high-performance user experiences
          </p>


        <div className='flex justify-center items-center gap-10'>
          <Button data="View Project" Property="!bg-cyan-500 !text-black hover:!bg-white/5 hover:!text-cyan-400" />
          <Button data="Hire me!" />
        </div> 
        </RevealOnScroll>


        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500 flex flex-col items-center gap-2">
          <span className="text-[10px] font-mono tracking-widest uppercase opacity-50">Scroll</span>
          <ChevronDown size={20} />
        </div>
      </div>
    </section>
  )
}

export default Hero