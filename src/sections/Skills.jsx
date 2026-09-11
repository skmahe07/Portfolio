import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  {
    category: "Programming Languages",
    skills: ["Java (Core, Advanced, Java 8)", "JavaScript", "SQL", "Python (Basic)"],
    colSpan: "md:col-span-2",
    gradient: "from-blue-500/20 to-indigo-500/20",
    darkGradient: "dark:from-blue-500/10 dark:to-indigo-500/10",
    accent: "text-blue-400",
    tagBg: "bg-blue-500/10 hover:bg-blue-500/25 border-blue-500/20 hover:border-blue-400/60",
    darkTagBg: "dark:bg-blue-400/10 dark:hover:bg-blue-400/25 dark:border-blue-400/20 dark:hover:border-blue-400/60"
  },
  {
    category: "Frameworks & Libraries",
    skills: ["Spring Boot", "Spring Security", "Spring Data JPA", "Hibernate (ORM)", "React.js"],
    colSpan: "md:col-span-2",
    gradient: "from-emerald-500/20 to-teal-500/20",
    darkGradient: "dark:from-emerald-500/10 dark:to-teal-500/10",
    accent: "text-emerald-400",
    tagBg: "bg-emerald-500/10 hover:bg-emerald-500/25 border-emerald-500/20 hover:border-emerald-400/60",
    darkTagBg: "dark:bg-emerald-400/10 dark:hover:bg-emerald-400/25 dark:border-emerald-400/20 dark:hover:border-emerald-400/60"
  },
  {
    category: "Architecture & Design",
    skills: ["Microservices", "Domain-Driven Design (DDD)", "Monolithic", "API Gateway Pattern", "Design Patterns", "Kafka", "RabbitMQ"],
    colSpan: "md:col-span-2",
    gradient: "from-purple-500/20 to-violet-500/20",
    darkGradient: "dark:from-purple-500/10 dark:to-violet-500/10",
    accent: "text-purple-400",
    tagBg: "bg-purple-500/10 hover:bg-purple-500/25 border-purple-500/20 hover:border-purple-400/60",
    darkTagBg: "dark:bg-purple-400/10 dark:hover:bg-purple-400/25 dark:border-purple-400/20 dark:hover:border-purple-400/60"
  },
  {
    category: "APIs",
    skills: ["REST", "RESTful APIs", "gRPC"],
    colSpan: "md:col-span-1",
    gradient: "from-rose-500/20 to-pink-500/20",
    darkGradient: "dark:from-rose-500/10 dark:to-pink-500/10",
    accent: "text-rose-400",
    tagBg: "bg-rose-500/10 hover:bg-rose-500/25 border-rose-500/20 hover:border-rose-400/60",
    darkTagBg: "dark:bg-rose-400/10 dark:hover:bg-rose-400/25 dark:border-rose-400/20 dark:hover:border-rose-400/60"
  },
  {
    category: "Security & Auth",
    skills: ["JWT", "Spring Security"],
    colSpan: "md:col-span-1",
    gradient: "from-red-500/20 to-orange-500/20",
    darkGradient: "dark:from-red-500/10 dark:to-orange-500/10",
    accent: "text-red-400",
    tagBg: "bg-red-500/10 hover:bg-red-500/25 border-red-500/20 hover:border-red-400/60",
    darkTagBg: "dark:bg-red-400/10 dark:hover:bg-red-400/25 dark:border-red-400/20 dark:hover:border-red-400/60"
  },
  {
    category: "Databases",
    skills: ["MySQL", "PostgreSQL", "Oracle SQL", "MongoDB", "Redis", "RDBMS"],
    colSpan: "md:col-span-2",
    gradient: "from-orange-500/20 to-amber-500/20",
    darkGradient: "dark:from-orange-500/10 dark:to-amber-500/10",
    accent: "text-orange-400",
    tagBg: "bg-orange-500/10 hover:bg-orange-500/25 border-orange-500/20 hover:border-orange-400/60",
    darkTagBg: "dark:bg-orange-400/10 dark:hover:bg-orange-400/25 dark:border-orange-400/20 dark:hover:border-orange-400/60"
  },
  {
    category: "Cloud & DevOps",
    skills: ["Docker", "Kubernetes", "Jenkins", "CI/CD"],
    colSpan: "md:col-span-2",
    gradient: "from-cyan-500/20 to-sky-500/20",
    darkGradient: "dark:from-cyan-500/10 dark:to-sky-500/10",
    accent: "text-cyan-400",
    tagBg: "bg-cyan-500/10 hover:bg-cyan-500/25 border-cyan-500/20 hover:border-cyan-400/60",
    darkTagBg: "dark:bg-cyan-400/10 dark:hover:bg-cyan-400/25 dark:border-cyan-400/20 dark:hover:border-cyan-400/60"
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "GitHub", "GitLab", "Postman", "JIRA (Agile/Scrum)", "Maven", "Gradle", "iTextPDF"],
    colSpan: "md:col-span-2",
    gradient: "from-slate-500/20 to-gray-500/20",
    darkGradient: "dark:from-slate-400/10 dark:to-gray-400/10",
    accent: "text-slate-400",
    tagBg: "bg-slate-500/10 hover:bg-slate-500/25 border-slate-500/20 hover:border-slate-400/60",
    darkTagBg: "dark:bg-slate-400/10 dark:hover:bg-slate-400/25 dark:border-slate-400/20 dark:hover:border-slate-400/60"
  },
  {
    category: "Core Engineering Competencies",
    skills: ["Backend Development", "Object-Oriented Programming (OOP)", "Database Optimization", "Core Network Provisioning", "Root Cause Analysis (RCA)", "Software Development Life Cycle (SDLC)"],
    colSpan: "md:col-span-4",
    gradient: "from-amber-500/20 to-yellow-500/20",
    darkGradient: "dark:from-amber-500/10 dark:to-yellow-500/10",
    accent: "text-amber-400",
    tagBg: "bg-amber-500/10 hover:bg-amber-500/25 border-amber-500/20 hover:border-amber-400/60",
    darkTagBg: "dark:bg-amber-400/10 dark:hover:bg-amber-400/25 dark:border-amber-400/20 dark:hover:border-amber-400/60"
  }
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: 'spring', stiffness: 120, damping: 14 } 
    }
  };

  return (
    <section id="skills" className="py-20 md:py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <h2 className="text-sm uppercase tracking-widest text-accent font-semibold mb-4 text-center">Technical Skills & Competencies</h2>
        <p className="text-slate-500 dark:text-slate-400 text-center mb-12 max-w-2xl mx-auto">
          A comprehensive toolkit spanning backend engineering, cloud infrastructure, and system design.
        </p>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {skillsData.map((item, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`${item.colSpan} bg-gradient-to-br ${item.gradient} ${item.darkGradient} rounded-2xl p-6 border border-white/40 dark:border-slate-700/50 hoverable group relative overflow-hidden`}
            >
              {/* Subtle glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/0 group-hover:from-white/10 group-hover:to-transparent dark:group-hover:from-white/5 transition-all duration-500 rounded-2xl" />
              
              <h3 className={`text-lg font-bold text-slate-800 dark:text-white mb-4 group-hover:${item.accent} relative z-10`}>
                {item.category}
              </h3>
              <div className="flex flex-wrap gap-2 relative z-10">
                {item.skills.map((skill, i) => (
                  <motion.span 
                    key={i}
                    whileHover={{ 
                      scale: 1.08, 
                      y: -2,
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                    className={`px-3.5 py-1.5 ${item.tagBg} ${item.darkTagBg} text-slate-700 dark:text-slate-200 rounded-lg text-sm font-medium border cursor-default`}
                    style={{ cursor: 'none' }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
