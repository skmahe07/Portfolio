import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, Link as LinkIcon, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const buttonRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) * 0.2;
    const y = (e.clientY - top - height / 2) * 0.2;
    
    buttonRef.current.style.transform = `translate(${x}px, ${y}px)`;
  };

  const handleMouseLeave = () => {
    if (!buttonRef.current) return;
    buttonRef.current.style.transform = `translate(0px, 0px)`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => setIsSubmitting(false), 2000);
  };

  return (
    <section id="contact" className="py-32 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="w-full md:w-1/2">
            <h2 className="text-sm uppercase tracking-widest text-accent font-semibold mb-4">Contact</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
              Let's build something amazing together.
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10">
              I'm always open to discussing backend architectures, system optimizations, or new opportunities. Feel free to reach out.
            </p>
            
            <div className="space-y-6">
              <a href="mailto:satheeshkumar11098@gmail.com" className="flex items-center gap-4 text-slate-700 dark:text-slate-300 hover:text-accent dark:hover:text-accent transition-colors hoverable group">
                <div className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-sm group-hover:scale-110 transition-transform">
                  <Mail size={20} />
                </div>
                <span className="text-lg font-medium">satheeshkumar11098@gmail.com</span>
              </a>
              <a href="https://www.linkedin.com/in/satheeshkumar-p-48017020b/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-700 dark:text-slate-300 hover:text-accent dark:hover:text-accent transition-colors hoverable group">
                <div className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-sm group-hover:scale-110 transition-transform">
                  <LinkIcon size={20} />
                </div>
                <span className="text-lg font-medium">LinkedIn Profile</span>
              </a>
              <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300">
                <div className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-sm">
                  <MapPin size={20} />
                </div>
                <span className="text-lg font-medium">Chennai, India</span>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative group">
                <input 
                  type="text" 
                  id="name"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-4 text-slate-900 dark:text-white outline-none focus:border-accent dark:focus:border-accent transition-colors peer hoverable cursor-none"
                  placeholder=" "
                />
                <label 
                  htmlFor="name" 
                  className="absolute left-4 top-4 text-slate-400 cursor-text transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-accent peer-focus:bg-white dark:peer-focus:bg-slate-800 peer-focus:px-2 peer-valid:-top-2 peer-valid:text-xs peer-valid:bg-white dark:peer-valid:bg-slate-800 peer-valid:px-2 pointer-events-none"
                >
                  Your Name
                </label>
              </div>

              <div className="relative group">
                <input 
                  type="email" 
                  id="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-4 text-slate-900 dark:text-white outline-none focus:border-accent dark:focus:border-accent transition-colors peer hoverable cursor-none"
                  placeholder=" "
                />
                <label 
                  htmlFor="email" 
                  className="absolute left-4 top-4 text-slate-400 cursor-text transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-accent peer-focus:bg-white dark:peer-focus:bg-slate-800 peer-focus:px-2 peer-valid:-top-2 peer-valid:text-xs peer-valid:bg-white dark:peer-valid:bg-slate-800 peer-valid:px-2 pointer-events-none"
                >
                  Email Address
                </label>
              </div>

              <div className="relative group">
                <textarea 
                  id="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-4 text-slate-900 dark:text-white outline-none focus:border-accent dark:focus:border-accent transition-colors peer hoverable cursor-none resize-none"
                  placeholder=" "
                ></textarea>
                <label 
                  htmlFor="message" 
                  className="absolute left-4 top-4 text-slate-400 cursor-text transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-accent peer-focus:bg-white dark:peer-focus:bg-slate-800 peer-focus:px-2 peer-valid:-top-2 peer-valid:text-xs peer-valid:bg-white dark:peer-valid:bg-slate-800 peer-valid:px-2 pointer-events-none"
                >
                  Message
                </label>
              </div>

              <div className="pt-2">
                <div 
                  className="inline-block"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  style={{ transition: 'transform 0.1s ease-out' }}
                >
                  <button 
                    ref={buttonRef}
                    type="submit"
                    className="flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-xl font-bold hover:bg-accent/90 transition-colors shadow-lg shadow-accent/25 hoverable cursor-none"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send size={18} className={isSubmitting ? "animate-pulse" : ""} />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
