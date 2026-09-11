import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Code } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: "Chennai Metro Ticket Booking",
    category: "Full Stack Development",
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=2071&auto=format&fit=crop",
    shortDescription: "Comprehensive metro ticket booking portal with dynamic QR code generation.",
    description: "Developed a comprehensive metro ticket booking portal allowing users to book tickets based on passenger destination, count, and ticket fare. The system features dynamic QR code generation for valid tickets.",
    tech: ["Java", "Hibernate", "HTTP Servlets", "MySQL", "HTML/CSS/JS"],
    links: { github: "https://github.com/skmahe07/Chennai_Metro" }
  },
  {
    id: 2,
    title: "Portfolio Website",
    category: "Frontend Development",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
    shortDescription: "My personal portfolio website showcasing my projects, tech stack, and professional journey.",
    description: "An immersive, Awwwards-style portfolio website built to showcase my backend engineering experience using modern frontend tools. Features 3D WebGL backgrounds, smooth scrolling, and Framer Motion animations.",
    tech: ["React", "Vite", "Tailwind CSS", "GSAP", "Framer Motion", "Three.js"],
    links: { github: "https://github.com/skmahe07/Portfolio" }
  }
];

export default function Projects() {
  const [selectedId, setSelectedId] = useState(null);
  const selectedProject = projectsData.find(p => p.id === selectedId);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selectedId]);

  return (
    <section id="projects" className="py-32 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <h2 className="text-sm uppercase tracking-widest text-accent font-semibold mb-12 text-center">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projectsData.map((project, index) => (
            <motion.div 
              key={project.id}
              onClick={() => setSelectedId(project.id)}
              className="group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-md hoverable"
              style={{ cursor: 'none' }}
              whileHover={{ y: -10, scale: 1.02, boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.25)" }}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
            >
              {/* Image with parallax-like hover */}
              <div className="relative h-64 overflow-hidden">
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Floating category badge */}
                <span className="absolute top-4 left-4 px-3 py-1 bg-accent/90 text-white rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                  {project.category}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">{project.shortDescription}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((t, i) => (
                    <span key={i} className="px-2.5 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full text-xs font-medium">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2.5 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedId && selectedProject && (
          <>
            {/* Backdrop — clicking this closes the modal */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedId(null)}
              className="fixed inset-0 bg-black/70 backdrop-blur-md"
              style={{ zIndex: 9990, cursor: 'none' }}
            />

            {/* Modal Content — clicking inside does NOT close */}
            <div 
              className="fixed inset-0 flex items-center justify-center px-4 md:px-8"
              style={{ zIndex: 9995, cursor: 'none' }}
              onClick={() => setSelectedId(null)}
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-800 rounded-2xl shadow-2xl"
                style={{ cursor: 'none' }}
                data-lenis-prevent="true"
              >
                {/* Close button */}
                <button 
                  onClick={() => setSelectedId(null)}
                  className="absolute top-4 right-4 p-2 bg-black/30 hover:bg-black/50 backdrop-blur-md rounded-full text-white z-20 transition-colors hoverable"
                  style={{ cursor: 'none' }}
                >
                  <X size={20} />
                </button>
                
                {/* Modal Image */}
                <div className="relative h-64 md:h-80 overflow-hidden rounded-t-2xl">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                
                {/* Modal Body */}
                <div className="p-8 md:p-12">
                  <span className="text-xs font-bold uppercase tracking-wider text-accent mb-2 block">{selectedProject.category}</span>
                  <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                    {selectedProject.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-8">
                    {selectedProject.description}
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((t, i) => (
                        <span key={i} className="px-3 py-1.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 flex-wrap">
                    {selectedProject.links.github && (
                      <a 
                        href={selectedProject.links.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        onClick={(e) => e.stopPropagation()} 
                        className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 active:scale-95 transition-all hoverable shadow-lg hover:shadow-xl"
                        style={{ cursor: 'none' }}
                      >
                        <Code size={18} /> View Code
                      </a>
                    )}
                    {selectedProject.links.live && (
                      <a 
                        href={selectedProject.links.live} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        onClick={(e) => e.stopPropagation()} 
                        className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-xl font-semibold hover:bg-accent/90 active:scale-95 transition-all hoverable shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40"
                        style={{ cursor: 'none' }}
                      >
                        <ExternalLink size={18} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
