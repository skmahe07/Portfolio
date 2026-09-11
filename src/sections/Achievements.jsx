import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star } from 'lucide-react';

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 md:py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <h2 className="text-sm uppercase tracking-widest text-accent font-semibold mb-12 text-center">Achievements & Recognition</h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700 relative overflow-hidden group hoverable"
        >
          {/* Decorative background blur */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-colors duration-500"></div>

          <div className="flex flex-col md:flex-row gap-10 items-center relative z-10">
            
            {/* Left side: Content */}
            <div className="w-full md:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 rounded-full text-sm font-bold">
                <Award size={16} />
                <span>Award of Excellence</span>
              </div>
              
              <h3 className="text-3xl font-black text-slate-900 dark:text-white leading-tight">
                Certificate of Achievement
              </h3>
              
              <p className="text-lg text-slate-600 dark:text-slate-300 italic">
                "Significant contribution to NTLS application with technical expertise and strong ownership."
              </p>
              
              <div className="flex flex-col gap-2 pt-4 border-t border-slate-100 dark:border-slate-700/50">
                <div className="flex justify-between items-center text-sm font-medium">
                  <span className="text-slate-500 dark:text-slate-400">Awarded By</span>
                  <span className="text-slate-900 dark:text-white">Prodapt & Verizon</span>
                </div>
                <div className="flex justify-between items-center text-sm font-medium">
                  <span className="text-slate-500 dark:text-slate-400">Date</span>
                  <span className="text-slate-900 dark:text-white">September 2025</span>
                </div>
              </div>
            </div>

            {/* Right side: Certificate Image */}
            <div className="w-full md:w-1/2 relative group">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700 bg-white p-2 transform transition-transform duration-500 group-hover:scale-[1.02] group-hover:-rotate-1">
                {/* 
                  Make sure to save your certificate image in the 'public' folder 
                  of your project as 'certificate.jpg'
                */}
                <img 
                  src="/certificate.jpg" 
                  alt="Certificate of Achievement from Prodapt and Verizon" 
                  className="w-full h-auto rounded-xl"
                  onError={(e) => {
                    // Fallback visual if the image isn't placed yet
                    e.target.onerror = null; 
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                
                {/* Fallback box if image is missing */}
                <div className="hidden w-full aspect-[4/3] bg-slate-50 dark:bg-slate-900 rounded-xl flex-col items-center justify-center text-center p-6 border border-dashed border-slate-300 dark:border-slate-600">
                  <Star className="text-amber-400 mb-4" size={48} />
                  <p className="text-slate-500 dark:text-slate-400 text-sm">Save your certificate image as <br/> <code className="text-accent bg-accent/10 px-1 rounded">public/certificate.jpg</code></p>
                </div>
              </div>
              
              {/* Gold badge decoration */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-amber-300 to-amber-600 rounded-full shadow-lg flex items-center justify-center text-white font-bold text-xs transform rotate-12 group-hover:rotate-0 transition-transform duration-300 border-2 border-white dark:border-slate-800 z-10">
                2025
              </div>
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}
