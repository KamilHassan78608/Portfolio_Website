import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, Github, Linkedin, Mail, ExternalLink, 
  Code2, Database, Server, Cpu, Terminal, Globe, 
  ChevronDown, Send, Layers, Zap, Monitor, Wifi, Activity
} from 'lucide-react';

/* --- UTILITY: TEXT SCRAMBLE HOOK --- */
const useScrambleText = (text, speed = 30) => {``
  const [displayedText, setDisplayedText] = useState(text);

  useEffect(() => {
    let interval;
    let iteration = 0;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
    
    interval = setInterval(() => {
      setDisplayedText(prev => 
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("")
      );

      if (iteration >= text.length) { 
        clearInterval(interval);
      }
      
      iteration += 1 / 3;
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return displayedText;
};

/* --- UTILITY: SCROLL REVEAL --- */
const RevealOnScroll = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div 
      ref={ref} 
      className={`transition-all duration-1000 ease-[cubic-bezier(0.17,0.55,0.55,1)] transform ${
        isVisible ? 'opacity-100 translate-y-0 filter blur-0' : 'opacity-0 translate-y-12 filter blur-sm'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

/* --- UTILITY: 3D TILT CARD (Added for Premium Feel) --- */
const TiltCard = ({ children, className }) => {
  const ref = useRef(null);
  const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg)");

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25; 
    const y = (e.clientY - top - height / 2) / 25;
    setTransform(`perspective(1000px) rotateX(${-y}deg) rotateY(${x}deg) scale(1.02)`);
  };

  const handleMouseLeave = () => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)");
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-transform duration-200 ease-out ${className}`}
      style={{ transform }}
    >
      {children}
    </div>
  );
};

/* --- MAIN COMPONENT --- */

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Handle Scroll Animations
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    // Mouse Move Logic
    const handleMouseMove = (e) => {
        setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Smooth Scroll Handler
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); 
    }
  };

  const titleText = useScrambleText("MASTERPIECES.", 40);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Stack', href: '#stack' },
    { name: 'Work', href: '#work' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

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
    <div className="min-h-screen bg-black text-slate-200 font-sans selection:bg-cyan-500/30 overflow-x-hidden relative">
      
      {/* --- CSS UTILS --- */}
      <style>{`
        html { scroll-behavior: smooth; }
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .scanline-bg {
          background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0) 50%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.2));
          background-size: 100% 4px;
        }
        .grid-bg {
          background-size: 50px 50px;
          background-image: linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
        }
        .text-glow {
          text-shadow: 0 0 20px rgba(34, 211, 238, 0.5);
        }
      `}</style>

      {/* --- MOUSE SPOTLIGHT --- */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`
        }}
      />

      {/* --- BACKGROUND LAYERS --- */}
      <div className="fixed inset-0 grid-bg z-0 pointer-events-none"></div>
      <div className="fixed inset-0 scanline-bg z-10 pointer-events-none opacity-20"></div>

      {/* --- NAVBAR --- */}
      <nav className={`fixed w-full z-50 transition-all duration-300 border-b border-transparent ${scrolled ? 'bg-black/80 backdrop-blur-md border-white/10 py-4 shadow-[0_0_20px_rgba(0,0,0,0.5)]' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={(e) => handleSmoothScroll(e, '#')}>
            <div className="w-10 h-10 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center transform group-hover:rotate-45 transition-transform duration-300">
              <Terminal className="text-white w-6 h-6 transform group-hover:-rotate-45 transition-transform duration-300" />
            </div>
            <span className="text-2xl font-bold tracking-tighter text-white">
              DEV<span className="text-cyan-400">.OS</span>
            </span>
          </div>

          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors uppercase tracking-[0.2em] relative group"
              >
                <span className="opacity-0 group-hover:opacity-100 absolute -left-4 text-cyan-500 transition-opacity">&gt;</span>
                {link.name}
              </a>
            ))}
            <a href="#contact" onClick={(e) => handleSmoothScroll(e, "#contact")} className="px-6 py-2 bg-white/5 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all duration-300 text-xs font-bold font-mono tracking-widest uppercase clip-path-polygon hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]">
              Init_Project
            </a>
          </div>

          <button className="md:hidden text-slate-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-black border-b border-white/10 p-6 md:hidden flex flex-col gap-6 shadow-2xl z-50">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={(e) => handleSmoothScroll(e, link.href)} className="text-xl font-bold text-slate-300 font-mono hover:text-cyan-400 transition-colors">
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
        
        {/* Animated Orbs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-600/30 rounded-full blur-[128px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-600/30 rounded-full blur-[128px] animate-pulse delay-1000"></div>

        <div className="max-w-6xl mx-auto px-6 text-center z-20">
          <RevealOnScroll>
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-white/5 border border-cyan-500/30 backdrop-blur-sm text-[10px] font-mono text-cyan-400 tracking-widest uppercase shadow-[0_0_10px_rgba(34,211,238,0.2)]">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
              System Online // V.2.0.24
            </div>
            
            <h1 className="text-5xl md:text-9xl font-black tracking-tighter mb-8 text-white leading-[0.9]">
              DIGITAL <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-transparent bg-clip-text text-glow">
                {titleText}
              </span>
            </h1>
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
              <span className="text-cyan-500 font-mono text-sm mr-2">&gt;</span>
              Architecting high-performance neural networks and immersive web experiences. 
              Merging technical precision with cyberpunk aesthetics.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={400}>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <a href="#work" onClick={(e) => handleSmoothScroll(e, "#work")} className="group relative px-8 py-4 bg-cyan-500 text-black font-bold text-sm tracking-widest uppercase overflow-hidden transition-all hover:scale-105">
                <div className="absolute inset-0 w-full h-full bg-white/30 transform -skew-x-12 -translate-x-full group-hover:animate-shine"></div>
                View_Database
              </a>
              <a href="#contact" onClick={(e) => handleSmoothScroll(e, "#contact")} className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold text-sm tracking-widest uppercase hover:bg-white/5 hover:border-white/50 transition-all">
                Est_Connection
              </a>
            </div>
          </RevealOnScroll>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500 flex flex-col items-center gap-2">
          <span className="text-[10px] font-mono tracking-widest uppercase opacity-50">Scroll</span>
          <ChevronDown size={20} />
        </div>
      </section>

      {/* --- TECH STACK --- */}
      <section id="stack" className="py-24 bg-black relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <RevealOnScroll>
            <div className="flex items-center gap-4 mb-16">
              <div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent w-full opacity-30"></div>
              <h2 className="text-4xl font-bold whitespace-nowrap tracking-tighter">SYSTEM <span className="text-cyan-500">CORE</span></h2>
              <div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent w-full opacity-30"></div>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Database, label: "MongoDB", sub: "Data Persistence" },
              { icon: Server, label: "Express", sub: "Server Logic" },
              { icon: Code2, label: "React", sub: "UI Library" },
              { icon: Terminal, label: "Node.js", sub: "Runtime Env" },
              { icon: Layers, label: "Tailwind", sub: "Utility CSS" },
              { icon: Cpu, label: "Next.js", sub: "Meta Framework" },
              { icon: Globe, label: "Three.js", sub: "3D Rendering" },
              { icon: Zap, label: "Socket.io", sub: "Realtime Comms" },
            ].map((item, i) => (
              <RevealOnScroll key={i} delay={i * 100}>
                <TiltCard className="group relative p-8 bg-white/5 border border-white/5 hover:border-cyan-500/50 transition-all duration-300 hover:bg-cyan-900/10 overflow-hidden cursor-crosshair">
                  {/* Hover Corner Brackets */}
                  <div className="absolute top-0 left-0 w-2 h-2 border-l-2 border-t-2 border-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute top-0 right-0 w-2 h-2 border-r-2 border-t-2 border-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-l-2 border-b-2 border-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-r-2 border-b-2 border-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  <item.icon className="w-12 h-12 text-slate-500 group-hover:text-cyan-400 mb-6 transition-colors duration-300" />
                  <h3 className="text-xl font-bold mb-1">{item.label}</h3>
                  <p className="text-xs font-mono text-slate-500 uppercase tracking-wider">{item.sub}</p>
                </TiltCard>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="work" className="py-24 bg-zinc-950/50 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <RevealOnScroll>
            <div className="mb-20">
              <span className="text-cyan-500 font-mono text-xs tracking-widest uppercase mb-2 block">Case Studies</span>
              <h2 className="text-5xl md:text-6xl font-black tracking-tighter">DEPLOYED <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">UNITS</span></h2>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <RevealOnScroll key={idx} delay={idx * 200}>
                <TiltCard className={`group relative h-full bg-black border border-white/10 p-1 transition-transform duration-500 ${project.color} hover:border-transparent`}>
                  
                  {/* Glowing Border on Hover */}
                  <div className={`absolute -inset-[1px] bg-gradient-to-r ${project.color.replace('border-', 'from-').replace('shadow-', '').split(' ')[0]} to-transparent rounded opacity-0 group-hover:opacity-50 blur transition duration-500`}></div>
                  
                  <div className="relative h-full bg-zinc-950 p-8 flex flex-col z-10">
                    <div className="flex justify-between items-start mb-8">
                      <div className="p-2 bg-white/5 rounded text-white">
                        <Monitor size={20} />
                      </div>
                      <ExternalLink className="text-slate-600 group-hover:text-white transition-colors" size={20} />
                    </div>

                    <div className="mb-6">
                      <span className="text-xs font-mono text-cyan-500 mb-2 block">{project.category}</span>
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {project.desc}
                      </p>
                    </div>

                    <div className="mt-auto pt-6 border-t border-white/5">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t, i) => (
                          <span key={i} className="px-2 py-1 text-[10px] font-mono bg-white/5 text-slate-400 border border-white/5 uppercase">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* --- EDUCATION TIMELINE --- */}
      <section id="education" className="py-24 bg-black relative z-20">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-3xl font-bold mb-16 font-mono text-center text-slate-500">
              &lt;EXECUTION_HISTORY /&gt;
            </h2>
          </RevealOnScroll>

          <div className="relative border-l border-white/10 ml-4 space-y-16">
            {[
              { year: "2023 - PRESENT", role: "Senior Engineer", company: "CyberSystems Inc.", desc: "Leading microservices architecture migration." },
              { year: "2021 - 2023", role: "Frontend Developer", company: "Neon Creative", desc: "Implemented WebGL interfaces for clients." },
              { year: "2017 - 2021", role: "B.S. Computer Science", company: "Tech University", desc: "Specialized in AI & Data Structures." },
            ].map((item, idx) => (
              <RevealOnScroll key={idx} delay={idx * 100}>
                <div className="ml-10 relative group">
                  <span className="absolute -left-[45px] top-1.5 h-3 w-3 bg-black border border-cyan-500 rounded-full group-hover:bg-cyan-500 group-hover:scale-150 transition-all shadow-[0_0_10px_rgba(34,211,238,0.5)]"></span>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                    <span className="text-cyan-500 font-mono text-xs tracking-wider">{item.year}</span>
                    <h3 className="text-xl font-bold text-white">{item.role}</h3>
                  </div>
                  <div className="text-sm font-mono text-slate-500 mb-4 uppercase">{item.company}</div>
                  <p className="text-slate-400 leading-relaxed max-w-lg">
                    {item.desc}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT TERMINAL --- */}
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

      {/* --- FOOTER --- */}
      <footer className="py-8 text-center border-t border-white/10 bg-black text-xs font-mono text-slate-600">
        <p>SYSTEM STATUS: ONLINE // COPYRIGHT 2025</p>
      </footer>
    </div>
  );
}

export default Portfolio;