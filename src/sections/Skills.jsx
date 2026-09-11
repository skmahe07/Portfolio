import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  {
    category: "Languages",
    skills: ["Java (Core, Adv, 8)", "JavaScript", "SQL", "Python"],
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-1",
    bg: "bg-blue-50 dark:bg-blue-900/20",
    border: "border-blue-100 dark:border-blue-800/50"
  },
  {
    category: "Frameworks & Libraries",
    skills: ["Spring Boot", "Spring Security", "Spring Data JPA", "Hibernate (ORM)", "React.js"],
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-2",
    bg: "bg-emerald-50 dark:bg-emerald-900/20",
    border: "border-emerald-100 dark:border-emerald-800/50"
  },
  {
    category: "Architecture & Design",
    skills: ["Microservices", "Domain-Driven Design", "Monolithic", "API Gateway", "Kafka", "RabbitMQ"],
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-1",
    bg: "bg-purple-50 dark:bg-purple-900/20",
    border: "border-purple-100 dark:border-purple-800/50"
  },
  {
    category: "Databases",
    skills: ["MySQL", "PostgreSQL", "Oracle SQL", "MongoDB", "Redis", "RDBMS"],
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
    bg: "bg-orange-50 dark:bg-orange-900/20",
    border: "border-orange-100 dark:border-orange-800/50"
  },
  {
    category: "Cloud & DevOps",
    skills: ["Docker", "Kubernetes", "Jenkins", "CI/CD"],
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
    bg: "bg-cyan-50 dark:bg-cyan-900/20",
    border: "border-cyan-100 dark:border-cyan-800/50"
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "GitHub", "GitLab", "Postman", "JIRA", "Maven", "Gradle"],
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-1",
    bg: "bg-slate-100 dark:bg-slate-800",
    border: "border-slate-200 dark:border-slate-700"
  }
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <section id="skills" className="py-32 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <h2 className="text-sm uppercase tracking-widest text-accent font-semibold mb-12 text-center">Technical Skills & Competencies</h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillsData.map((item, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className={`${item.colSpan} ${item.rowSpan} ${item.bg} border ${item.border} rounded-3xl p-8 hoverable group transition-all duration-300 hover:shadow-lg`}
            >
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 group-hover:text-accent transition-colors">
                {item.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-2 bg-white/60 dark:bg-slate-900/40 backdrop-blur-sm text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium border border-white/20 dark:border-slate-700/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
