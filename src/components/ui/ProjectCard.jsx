import { Monitor, ArrowUpRight } from 'lucide-react'
import React from 'react'

const ProjectCard = ({ project }) => {

    return (
        <div className="group relative h-full bg-zinc-950 border border-white/10 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_-5px_rgba(6,182,212,0.15)]">

            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none z-0"></div>
            
            <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 blur-md"></div>

            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-500/0 group-hover:border-cyan-500 transition-all duration-300 rounded-tl-xl z-20"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-500/0 group-hover:border-cyan-500 transition-all duration-300 rounded-br-xl z-20"></div>

            <div className='relative h-full p-6 md:p-8 flex flex-col z-10'>
                
                <div className='flex justify-between items-start mb-6'>
                    <div className='p-3 bg-white/5 rounded-lg border border-white/10 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/50 transition-colors duration-300'>
                        <Monitor className='text-slate-300 group-hover:text-cyan-400 transition-colors' size={24} />
                    </div>
                    
                    <a href={project?.link} className='text-slate-500 group-hover:text-cyan-400 transition-colors hover:scale-110'>
                        <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform duration-300" />
                    </a>
                </div>

                <div className='mb-6'>
                    <span className="text-xs font-bold font-mono text-cyan-500 mb-2 block uppercase tracking-widest">
                        {project?.category || "System Module"}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-100 transition-colors">
                        {project?.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                        {project?.desc}
                    </p>
                </div>

                <div className="mt-auto pt-4 border-t border-white/5">
                      <div className="flex flex-wrap gap-2">
                        {project?.tech?.map((t, i) => (
                          <span key={i} className="px-2 py-1 text-[10px] font-mono tracking-wider bg-white/5 text-slate-400 border border-white/10 rounded-sm uppercase group-hover:text-cyan-300 group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10 transition-all duration-300">
                            {t}
                          </span>
                        ))}
                      </div>
                </div>

            </div>

        </div>
    )
}

export default ProjectCard