import React from 'react'
import { twMerge } from 'tailwind-merge' // Import this

const Button = ({ data, link, Property }) => {
    return (
        <a 
            href={link}
            // twMerge ensures that if you pass 'bg-red-600', it REMOVES 'bg-white/5' automatically
            className={twMerge(
                "px-6 py-2 bg-white/5 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all duration-300 text-xs font-bold font-mono tracking-widest uppercase hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] [clip-path:polygon(10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%,0_10px)] hover:[clip-path:polygon(0_0,100%_0,100%_100%,0_100%)] cursor-pointer",
                Property
            )}
        >
            {data}
        </a>
    )
}

export default Button