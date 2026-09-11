import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    
    gsap.fromTo(textRef.current.children, 
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 75%',
        }
      }
    );
  }, []);

  const stack = [
    { name: 'Java', bg: 'bg-orange-100 dark:bg-orange-900/30', text: 'text-orange-600 dark:text-orange-400' },
    { name: 'Spring Boot', bg: 'bg-green-100 dark:bg-green-900/30', text: 'text-green-600 dark:text-green-400' },
    { name: 'SQL', bg: 'bg-blue-100 dark:bg-blue-900/30', text: 'text-blue-600 dark:text-blue-400' },
    { name: 'React', bg: 'bg-cyan-100 dark:bg-cyan-900/30', text: 'text-cyan-600 dark:text-cyan-400' },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-32 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-2/3" ref={textRef}>
            <h2 className="text-sm uppercase tracking-widest text-accent font-semibold mb-4">About Me</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              Backend-focused Software Engineer building clean, efficient architectures.
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              With 2 years of experience at Prodapt, I specialize in the Java/Spring Boot ecosystem and SQL. I have a proven track record of developing mission-critical features for Verizon’s core Customer Wave Services to manage circuit creation and actual network bandwidth.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              I am passionate about building scalable digital systems, optimizing databases, and ensuring high availability of infrastructure through robust microservices and Domain-Driven Design.
            </p>
          </div>

          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">Core Stack</h4>
            <div className="grid grid-cols-2 gap-4">
              {stack.map((tech, i) => (
                <motion.div 
                  key={tech.name}
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.1 }}
                  className={`p-6 rounded-2xl ${tech.bg} ${tech.text} flex flex-col items-center justify-center text-center hoverable cursor-none`}
                >
                  <span className="font-bold">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
