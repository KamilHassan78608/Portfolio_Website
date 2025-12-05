import React, { Children, useEffect, useRef, useState } from 'react'

const RevealOnScroll = ({children, delay = 0}) => {

  const [isVisible, setisVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() =>{
    const observer = new IntersectionObserver(
      ([entry]) => {
        if(entry.isIntersecting){
          setisVisible(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.15}
    );
    if (ref.current) observer.observe(ref.current);
      return () => {
        if(ref.current) observer.unobserve(ref.current);
      }
  }, [])

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
  )
}

export default RevealOnScroll
