import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const el = sectionRef.current;

    // Line drawing animation
    gsap.fromTo(lineRef.current,
      { height: 0 },
      {
        height: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top center',
          end: 'bottom center',
          scrub: true,
        }
      }
    );

    // Items popping in
    itemsRef.current.forEach((item, i) => {
      gsap.fromTo(item,
        { opacity: 0, x: i % 2 === 0 ? 50 : -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
          }
        }
      );
    });
  }, []);

  const experiences = [
    {
      title: "Associate Software Engineer",
      company: "Prodapt",
      client: "Verizon",
      date: "2024 - Present",
      points: [
        "Engineered and deployed scalable backend services and feature enhancements for Verizon's Customer Wave Services application using Java and Spring Boot, driving core network provisioning capabilities.",
        "Architected business logic to automate circuit creation, bandwidth management, and network traffic capture.",
        "Designed and optimized complex SQL queries to manage massive datasets, improving data retrieval efficiency.",
        "Managed the end-to-end feature lifecycle using Git and Agile methodologies, resolving production bugs for zero-downtime operations."
      ]
    },
    // Adding a placeholder for earlier experience or education if needed to make the timeline look fuller
    {
      title: "Bachelor of Engineering",
      company: "Vel Tech High Tech Engineering College",
      date: "Graduated",
      points: [
        "Focused on core computer science concepts, object-oriented programming, and software engineering principles.",
        "Participated in various technical symposiums and developed foundational skills in Java and database management."
      ]
    }
  ];

  return (
    <section id="experience" ref={sectionRef} className="py-32 bg-white dark:bg-slate-900 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <h2 className="text-sm uppercase tracking-widest text-accent font-semibold mb-12 text-center">Experience</h2>
        
        <div className="relative">
          {/* Vertical Line Background */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800 -translate-x-1/2"></div>
          
          {/* Animated Vertical Line */}
          <div ref={lineRef} className="absolute left-4 md:left-1/2 top-0 w-px bg-accent -translate-x-1/2 origin-top"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                ref={el => itemsRef.current[index] = el}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-accent border-4 border-white dark:border-slate-900 -translate-x-1/2 mt-1.5 md:mt-6 z-10"></div>
                
                {/* Content Box */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <div className="p-6 md:p-8 bg-slate-50 dark:bg-slate-800/50 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hoverable transition-colors hover:border-accent/50">
                    <span className="text-sm font-bold text-accent mb-2 block">{exp.date}</span>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-1">{exp.title}</h3>
                    <h4 className="text-lg font-medium text-slate-600 dark:text-slate-400 mb-1">{exp.company}</h4>
                    {exp.client && (
                      <span className="inline-block text-sm font-semibold text-white bg-accent/80 px-3 py-0.5 rounded-full mb-4">Client: {exp.client}</span>
                    )}
                    <ul className="space-y-3">
                      {exp.points.map((point, i) => (
                        <li key={i} className="flex items-start text-slate-600 dark:text-slate-400 text-sm md:text-base">
                          <span className="mr-3 text-accent mt-1.5">•</span>
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
