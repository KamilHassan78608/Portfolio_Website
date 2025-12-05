import React from 'react'
import RevealOnScroll from '../ui/RevealOnScroll'
import ProjectCard from '../ui/ProjectCard';

const Projects = () => {

  const projects = [
    {
      title: "NEON DASHBOARD",
      category: "Analytics Platform",
      desc: "High-fidelity admin console with real-time data visualization streams.",
      tech: ["React", "D3.js", "Firebase", "Tailwind"],
      color: "border-cyan-500/50 shadow-cyan-500/20"
    },
    {
      title: "SYNTH SOCIAL",
      category: "Real-time Network",
      desc: "Decentralized social protocol featuring end-to-end encrypted messaging.",
      tech: ["MERN", "Socket.io", "WebRTC", "Redis"],
      color: "border-purple-500/50 shadow-purple-500/20"
    },
    {
      title: "AI NEXUS",
      category: "Generative Engine",
      desc: "Neural network interface for automated content generation and NLP tasks.",
      tech: ["Next.js", "Python", "TensorFlow", "FastAPI"],
      color: "border-emerald-500/50 shadow-emerald-500/20"
    }
  ];

  return (
    <section className='py-24 bg-zinc-950/50 relative z-20'>
      <div className='max-w-7xl mx-auto px-6'>

        <RevealOnScroll>
          <div className='mb-20'>
            <span className='text-cyan-500 font-mono text-xs tracking-widest uppercase mb-2 block'>Case Studies</span>
            <span className='text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500'>
              DEPLOYED
              </span>
              <span className='text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
                UNITS
              </span>
          </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-3 gap-8">
        {
          projects.map((proj, index)=> (
            <RevealOnScroll delay={index * 200}><ProjectCard project={proj}/></RevealOnScroll>
          ))
        }
        </div>





      </div>

    </section>
  )
}

export default Projects
