import React from 'react'
import RevealOnScroll from '../ui/RevealOnScroll'
import ProjectCard from '../ui/ProjectCard';

const Projects = () => {

  const projects = [
    {
      title: "NewsX",
      category: "News Website",
      desc: "A News App that uses API to give you dialy News and also you can add Categories.",
      tech: ["React JS", "CSS", "API",],
    },
    {
      title: "Weather App",
      category: "Real time Weather App",
      desc: "A Weather App that uses API to give you dialy Weather of each and every city.",
      tech: ["React JS", "CSS", "API",],
    },
    {
      title: "BK Organics",
      category: "Real time E-Commerce Website",
      desc: "BK Organics is an E-Commerce that is used to sell Organic Items",
      tech: ["React JS", "Tailwind", "Express", "Mongo DB", "Claudinary"],
    },
    {
      title: "Dokan",
      category: "Real time E-Commerce Website",
      desc: "Dokan is an E-Commerce that is used to sell Organic Items",
      tech: ["React JS", "Tailwind", "Express", "Mongo DB", "Claudinary"],
    },
    {
      title: "Institute",
      category: "Real time Institute Website",
      desc: "A Institute that is offering courses and projects.",
      tech: ["React JS", "Tailwind", "Express", "mySQL",],
    },
    {
      title: "Hired",
      category: "Real time Job Website",
      desc: "A Job website where you can offer or get a job.",
      tech: ["React JS", "Tailwind", "SupaBase", "mySQL",],
    },
  ];

  return (
    <section id='projects' className='py-24 bg-zinc-950/50 relative z-20'>
      <div className='max-w-7xl mx-auto px-6'>

        <RevealOnScroll>
          <div className='mb-20'>
            <span className='text-cyan-500 font-mono text-xs tracking-widest uppercase mb-2 block'>Case Studies</span>
            <span className='text-5xl md:text-6xl text-transparent bg-clip-text bg-linear-to-r from-cyan-500 to-purple-500'>
              DEPLOYED
              </span>
              <span className='text-3xl md:text-4xl text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-cyan-500'>
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
