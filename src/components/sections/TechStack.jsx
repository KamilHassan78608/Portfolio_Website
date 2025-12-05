import React from 'react'
import RevealOnScroll from '../ui/RevealOnScroll'
import { Braces, Code2, Coffee, Cpu, Database, Globe, Layers, Server, Terminal, Zap } from 'lucide-react';
import TitleCard from '../ui/TitleCard';

const TechStack = () => {

  const iconsStack = [
    { icon: Database, label: "MongoDB", sub: "Data Persistence" },
    { icon: Server, label: "Express", sub: "Server Logic" },
    { icon: Code2, label: "React", sub: "UI Library" },
    { icon: Terminal, label: "Node.js", sub: "Runtime Env" },
    { icon: Layers, label: "Tailwind", sub: "Utility CSS" },
    { icon: Cpu, label: "Next.js", sub: "Meta Framework" },
    { icon: Coffee, label: "Java", sub: "App development" },
    { icon: Braces, label: "C++", sub: "DSA" },
  ];

  return (
    <div>
      <section className='py-24 bg-black relative z-20'>
        <div className='max-w-7xl mx-auto px-6'>
          <RevealOnScroll>
            <div className='flex items-center gap-4 mb-16'>
              <div className='h-px bg-linear-to-r from-transparent via-cyan-500 to-transparent w-full opacity-30'></div>
              <h2 className='text-4xl font-bold whitespace-nowrap tracking-tighter'>SYSTEM <span className='text-cyan-500'>CORE</span></h2>
              <div className='h-px bg-linear-to-r from-transparent via-cyan-500 to-transparent w-full opacity-30'></div>
            </div>
          </RevealOnScroll>

          <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
            {
              iconsStack.map((Icon)=>(
                <RevealOnScroll>
                <TitleCard item={Icon} />
                </RevealOnScroll>
              ))
            }
          </div>

        </div>

      </section>
    </div>
  )
}

export default TechStack
