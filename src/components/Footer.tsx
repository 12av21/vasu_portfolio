import React from 'react';
import { ArrowUp, FileText } from 'lucide-react';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand lockup */}
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 font-bold text-xs">
              VV
            </span>
            <div>
              <span className="font-bold text-white font-display text-sm">Vasu Verma</span>
              <span className="text-slate-500 mx-2">·</span>
              <span className="text-slate-400">Class 12 Commerce & Strategic Ventures</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-6 text-slate-300">
            <a href="#case-studies" className="hover:text-amber-400 transition-colors">Case Studies</a>
            <a href="#calculators" className="hover:text-amber-400 transition-colors">Calculators</a>
            <a href="#blog" className="hover:text-amber-400 transition-colors">Commerce Blog</a>
            <a href="#academics" className="hover:text-amber-400 transition-colors">Academics</a>
            <button
              onClick={onOpenResume}
              className="hover:text-amber-400 transition-colors cursor-pointer flex items-center gap-1"
            >
              <FileText className="w-3 h-3" />
              <span>Resume</span>
            </button>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-3">
          <p>© {new Date().getFullYear()} Vasu Verma. Prepared for CBSE Commerce & Business Management Aspirations.</p>
          <p>Built with React, TypeScript & Financial Mathematics</p>
        </div>
      </div>
    </footer>
  );
};
