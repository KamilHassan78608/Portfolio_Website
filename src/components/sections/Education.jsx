import React from 'react'
import RevealOnScroll from '../ui/RevealOnScroll'
import EducationCard from '../ui/EducationCard'

const Education = () => {

  const education = [
    { year: "2021 - 2023", role: "Frontend Developer", company: "Freelancer", desc: "Converting Figma Designs and making Frontend." },
    { year: "2023 - PRESENT", role: "MERN stack Developer", company: "Freelancer", desc: "Building real time Projects." },
    { year: "2024 - PRESENT", role: "B.S. Computer Science", company: "UET Peshawar", desc: "Completing my degree." },
  ]

  return (
    <section id='education' className="py-24 bg-black relative z-20">

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
