import React from 'react'

const EducationCard = ({item}) => {
    return (
        <div className="ml-10 relative group">
            <span className="cursor-pointer absolute -left-[45px] top-1.5 h-3 w-3 bg-black border border-cyan-500 rounded-full group-hover:bg-cyan-500 group-hover:scale-150 transition-all shadow-[0_0_10px_rgba(34,211,238,0.5)]"></span>
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                <span className="text-cyan-500 font-mono text-xs tracking-wider">{item.year}</span>
                <h3 className="text-xl font-bold text-white">{item.role}</h3>
            </div>
            <div className="text-sm font-mono text-slate-500 mb-4 uppercase">{item.company}</div>
            <p className="text-slate-400 leading-relaxed max-w-lg">
                {item.desc}
            </p>
        </div>
    )
}

export default EducationCard
