import React from 'react'
import RevealOnScroll from '../ui/RevealOnScroll'
import { Github, Linkedin, Mail, Icon, Send } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative z-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyan-900/10 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative">
        <RevealOnScroll>
          <div className="bg-black/80 backdrop-blur-xl border border-white/10 rounded-lg overflow-hidden shadow-2xl">
              {/* Terminal Header */}
              <div className="bg-white/5 px-4 py-2 border-b border-white/10 flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <div className="ml-4 text-xs font-mono text-slate-500">user@portfolio:~</div>
              </div>

              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-2">INITIATE CONTACT</h2>
                <p className="text-slate-400 font-mono text-sm mb-8">Enter your message parameters below...</p>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-cyan-500 uppercase">Input: Name</label>
                      <input type="text" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-cyan-500 focus:bg-cyan-900/10 transition-colors" placeholder="_" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-cyan-500 uppercase">Input: Email</label>
                      <input type="email" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-cyan-500 focus:bg-cyan-900/10 transition-colors" placeholder="_" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-cyan-500 uppercase">Input: Message</label>
                    <textarea rows="4" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-cyan-500 focus:bg-cyan-900/10 transition-colors" placeholder="Type your message here..."></textarea>
                  </div>

                  <button className="group w-full py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold uppercase tracking-widest transition-all flex justify-center items-center gap-2">
                    <span className="group-hover:mr-2 transition-all">Transmit Data</span>
                    <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>

                <div className="mt-12 flex justify-center gap-8 pt-8 border-t border-white/10">
                  {[Github, Linkedin, Mail].map((Icon, i) => (
                    <a key={i} href="#" className="text-slate-500 hover:text-cyan-400 hover:scale-110 transition-all duration-300">
                      <Icon size={24} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

        </RevealOnScroll>
      </div>
    </section>
  )
}

export default Contact
