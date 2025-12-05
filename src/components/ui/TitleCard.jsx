import React from 'react'

const TitleCard = ({item}) => {
  return (
    <>
      <div className='group relative p-8 bg-white/5 border border-white/5 hover:border-cyan-500/50 transition-all duration-300 hover:bg-cyan-900/10 overflow-hidden cursor-pointer'>
        {/* Hover Corner Bracket */}
        <div className="absolute top-0 left-0 w-2 h-2 border-l-2 border-t-2 border-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="absolute top-0 right-0 w-2 h-2 border-r-2 border-t-2 border-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="absolute bottom-0 left-0 w-2 h-2 border-l-2 border-b-2 border-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="absolute bottom-0 right-0 w-2 h-2 border-r-2 border-b-2 border-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>

        <item.icon className="w-12 h-12 text-slate-500 group-hover:text-cyan-400 mb-6 transition-colors duration-300"/>
        <h3 className="text-xl font-bold mb-1">{item.label}</h3>
        <p className="text-xs font-mono text-slate-500 uppercase tracking-wider">{item.sub}</p>
        
      </div>
    </>
  )
}

export default TitleCard
