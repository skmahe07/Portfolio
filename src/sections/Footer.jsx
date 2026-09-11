import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-4 md:mb-0">
          © {new Date().getFullYear()} Satheeshkumar P. All rights reserved.
        </p>
        
        <button 
          onClick={scrollToTop}
          className="p-3 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full hover:bg-accent hover:text-white transition-colors hoverable cursor-none"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
}
