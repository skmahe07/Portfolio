import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Code } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: "Metro Ticket Booking System",
    category: "Full Stack Development",
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=2071&auto=format&fit=crop",
    shortDescription: "Comprehensive metro ticket booking portal with dynamic QR code generation.",
    description: "Developed a comprehensive metro ticket booking portal allowing users to book tickets based on passenger destination, count, and ticket fare. The system features dynamic QR code generation for valid tickets.",
    tech: ["Java", "Hibernate", "HTTP Servlets", "MySQL", "HTML/CSS/JS"],
    links: { github: "#", live: "#" }
  },
  {
    id: 2,
    title: "Dynamic Invoice Generation",
    category: "Backend System",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop",
    shortDescription: "Automated invoice generation system producing PDF format with barcodes.",
    description: "Developed a robust backend system to generate dynamic invoices in PDF format with integrated barcodes. The system fetches real-time data from a MySQL database via JDBC and utilizes iTextPDF for document generation.",
    tech: ["Java", "JDBC", "iTextPDF", "MySQL"],
    links: { github: "#" }
  }
];

export default function Projects() {
  const [selectedId, setSelectedId] = useState(null);
  const selectedProject = projectsData.find(p => p.id === selectedId);

  return (
    <section id="projects" className="py-32 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <h2 className="text-sm uppercase tracking-widest text-accent font-semibold mb-12 text-center">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <motion.div 
              layoutId={`project-container-${project.id}`}
              key={project.id}
              onClick={() => setSelectedId(project.id)}
              className="group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden cursor-none shadow-md hoverable"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative h-64 overflow-hidden">
                <motion.img 
                  layoutId={`project-image-${project.id}`}
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/40 transition-colors duration-300"></div>
              </div>
              <div className="p-8">
                <span className="text-xs font-bold uppercase tracking-wider text-accent mb-2 block">{project.category}</span>
                <motion.h3 layoutId={`project-title-${project.id}`} className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  {project.title}
                </motion.h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">{project.shortDescription}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full text-xs font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedId && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm cursor-none"
            />
            <motion.div 
              layoutId={`project-container-${selectedId}`}
              className="relative w-full max-w-3xl bg-white dark:bg-slate-800 rounded-2xl overflow-hidden z-10 shadow-2xl"
            >
              <button 
                onClick={() => setSelectedId(null)}
                className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white z-20 transition-colors cursor-none hoverable"
              >
                <X size={20} />
              </button>
              
              <motion.img 
                layoutId={`project-image-${selectedId}`}
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-64 md:h-80 object-cover"
              />
              
              <div className="p-8 md:p-12">
                <span className="text-xs font-bold uppercase tracking-wider text-accent mb-2 block">{selectedProject.category}</span>
                <motion.h3 layoutId={`project-title-${selectedId}`} className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                  {selectedProject.title}
                </motion.h3>
                <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-8">
                  {selectedProject.description}
                </p>
                
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  {selectedProject.links.github && (
                      <a href={selectedProject.links.github} className="flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-medium hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors hoverable cursor-none">
                      <Code size={18} /> Code
                    </a>
                  )}
                  {selectedProject.links.live && (
                    <a href={selectedProject.links.live} className="flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors hoverable cursor-none">
                      <ExternalLink size={18} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
