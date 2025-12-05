import React from 'react'
import RevealOnScroll from '../ui/RevealOnScroll'
import EducationCard from '../ui/EducationCard'

const Education = () => {

  const education = [
    { year: "2023 - PRESENT", role: "Senior Engineer", company: "CyberSystems Inc.", desc: "Leading microservices architecture migration." },
    { year: "2021 - 2023", role: "Frontend Developer", company: "Neon Creative", desc: "Implemented WebGL interfaces for clients." },
    { year: "2017 - 2021", role: "B.S. Computer Science", company: "Tech University", desc: "Specialized in AI & Data Structures." },
  ]

  return (
    <section className="py-24 bg-black relative z-20">

      <div className="max-w-4xl mx-auto px-6">

        <RevealOnScroll>
          <h2 className="text-3xl font-bold mb-16 font-mono text-center text-slate-500">
            &lt;EXECUTION_HISTORY /&gt;
          </h2>
        </RevealOnScroll>

        <div className="relative border-l border-white/10 ml-4 space-y-16">
        {
          education.map((edu, index)=> (
            <RevealOnScroll delay={index * 100}>
              <EducationCard item={edu}/>
            </RevealOnScroll>
          ))
        }
        </div>
      </div>

    </section>
  )
}

export default Education
