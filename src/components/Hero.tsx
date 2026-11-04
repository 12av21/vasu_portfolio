import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowRight, Calculator, BookOpen, Award, Sparkles, Building2, TrendingUp, GraduationCap } from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const { profile } = PORTFOLIO_DATA;

  return (
    <section className="relative pt-8 pb-16 lg:pt-14 lg:pb-20 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-amber-500/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-10 right-10 w-[400px] h-[300px] bg-blue-600/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Split Hero: Content (Left) + Visual (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 space-y-6">
            {/* Quiet kicker metadata with typographic separator */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-400">
              <span>CBSE Senior Secondary</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Class 12 Commerce</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Future Business Leader</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-display leading-[1.1] text-balance">
              Strategic commerce, analytical rigor &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200">
                entrepreneurial vision.
              </span>
            </h1>

            {/* Lead copy */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              I am <span className="text-white font-medium">Vasu Verma</span>, a Class 12 Commerce student dedicated to unpacking how real enterprises scale. Beyond textbook balance sheets, I build financial models, dissect unit economics of Indian ventures, and lead high-impact student business initiatives.
            </p>

            {/* Unboxed curriculum indicators */}
            <div className="pt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-300">
                <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
                Accountancy & Corporate Finance
              </span>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
                Applied Financial Math & BEP
              </span>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <Building2 className="w-3.5 h-3.5 text-amber-400" />
                Business Studies & Management
              </span>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#calculators"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-[0.98] rounded-xl shadow-lg shadow-amber-500/10 transition-all cursor-pointer"
              >
                <Calculator className="w-4 h-4" />
                <span>Test Financial Calculators</span>
              </a>

              <a
                href="#case-studies"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800/80 border border-slate-800 hover:border-slate-700 rounded-xl transition-all cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span>Explore Case Studies</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-1.5 px-4 py-3 text-xs font-medium text-slate-400 hover:text-amber-300 transition-colors cursor-pointer"
              >
                <span>View Full CV & Profile</span>
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Container with Vasu's Portrait */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl shadow-black/60 group">
              {/* Subtle top glare */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-10 pointer-events-none" />

              <img
                src="/src/assets/images/hero_vasu_portrait_1793793275948.jpg"
                alt="Vasu Verma - Class 12 Commerce Scholar and Aspiring Business Leader"
                className="w-full h-[420px] sm:h-[480px] lg:h-[500px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Verified Scholar Badge Overlay */}
              <div className="absolute bottom-5 left-5 right-5 z-20 p-4 rounded-xl backdrop-blur-md bg-slate-950/85 border border-slate-800/90 text-xs">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <span className="font-semibold text-white tracking-wide">Vasu Verma</span>
                  </div>
                  <span className="font-mono text-amber-400 font-semibold tabular-nums">Class of 2027</span>
                </div>
                <p className="text-slate-400 text-[11px] leading-tight">
                  CBSE Commerce · Accountancy & Financial Strategy · Delhi NCR, India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width proof metrics row below the split (adhering to domain guideline §2.B) */}
        <div className="mt-14 pt-8 border-t border-slate-800/80">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {profile.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/70 hover:border-slate-700/90 transition-colors"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums tracking-tight">
                  {metric.value}
                </div>
                <div className="mt-1 text-xs font-semibold text-amber-400/90 tracking-wide">
                  {metric.label}
                </div>
                <div className="mt-0.5 text-xs text-slate-400">
                  {metric.note}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
