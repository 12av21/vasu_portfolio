import React, { useState } from 'react';
import { PORTFOLIO_DATA, CaseStudy } from '../data/portfolioData';
import { ArrowUpRight, X, BookOpen, CheckCircle, TrendingUp, BarChart2 } from 'lucide-react';

export const CaseStudies: React.FC = () => {
  const { caseStudies } = PORTFOLIO_DATA;
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalStudy, setActiveModalStudy] = useState<CaseStudy | null>(null);

  const categories = ['all', 'Unit Economics', 'Strategy & M&A', 'Venture Creation'];

  const filteredStudies = selectedCategory === 'all'
    ? caseStudies
    : caseStudies.filter((study) => study.category === selectedCategory);

  return (
    <section id="case-studies" className="py-16 lg:py-24 border-t border-slate-800 bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-400 mb-2">
              <span>Applied Commerce Research</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Real-World Business Analysis</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              Venture Case Studies & Unit Economics
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-2xl">
              Applying Class 12 management principles, ratio analysis, and corporate finance models to evaluate market leaders and startup growth engines.
            </p>
          </div>

          {/* Interactive filter buttons (allowed per §1.A for functional interactive filter controls) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl shrink-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-amber-400 text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {cat === 'all' ? 'All Case Studies' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredStudies.map((study, idx) => (
            <div
              key={study.id}
              onClick={() => setActiveModalStudy(study)}
              className="group cursor-pointer rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-amber-400/50 transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-1 shadow-lg hover:shadow-amber-500/5"
            >
              {/* Card Image */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                
                {/* Clean unboxed category & read time overlay */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-medium text-slate-300">
                  <span className="text-amber-400 font-semibold">{study.category}</span>
                  <span className="text-slate-400">{study.readTime}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                    {study.title}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-amber-400/90 line-clamp-1">
                    {study.subtitle}
                  </p>
                  <p className="mt-3 text-xs text-slate-400 line-clamp-3 leading-relaxed">
                    {study.summary}
                  </p>
                </div>

                {/* Key Metric Preview & Action Link */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-slate-300 font-mono">
                    <BarChart2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>{study.unitEconomics[0].label}:</span>
                    <strong className="text-white">{study.unitEconomics[0].value}</strong>
                  </div>

                  <span className="inline-flex items-center gap-1 text-amber-400 font-medium group-hover:translate-x-1 transition-transform">
                    Read Analysis <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Full Detail Modal */}
      {activeModalStudy && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveModalStudy(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl text-slate-200 space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-800">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1">
                  <span>{activeModalStudy.category}</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span>{activeModalStudy.readTime}</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span>Research Paper by Vasu Verma</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                  {activeModalStudy.title}
                </h3>
                <p className="text-sm text-slate-300 mt-1">
                  {activeModalStudy.subtitle}
                </p>
              </div>

              <button
                onClick={() => setActiveModalStudy(null)}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Featured Image */}
            <div className="h-64 sm:h-72 w-full rounded-xl overflow-hidden bg-slate-950 border border-slate-800 relative">
              <img
                src={activeModalStudy.image}
                alt={activeModalStudy.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Core Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">01. Problem & Context</span>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {activeModalStudy.problemStatement}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">02. Analytical Methodology</span>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {activeModalStudy.methodology}
                </p>
              </div>
            </div>

            {/* Unit Economics Matrix */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-amber-400" />
                Unit Economics & Financial Metrics
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {activeModalStudy.unitEconomics.map((metric, i) => (
                  <div key={i} className="p-3 rounded-lg bg-slate-950/80 border border-slate-800">
                    <div className="text-[11px] text-slate-400">{metric.label}</div>
                    <div className="text-lg font-bold font-mono text-white tabular-nums mt-0.5">
                      {metric.value}
                    </div>
                    {metric.change && (
                      <div className="text-[10px] text-amber-400/90 mt-0.5 font-medium">
                        {metric.change}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Empirical Findings & Strategic Recommendation */}
            <div className="space-y-4 pt-2 border-t border-slate-800">
              <div>
                <h4 className="text-sm font-bold text-white mb-2">Key Research Insights:</h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  {activeModalStudy.findings.map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-amber-400 font-bold font-mono text-xs mt-0.5">0{i + 1}.</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-800/40 text-xs sm:text-sm">
                <strong className="text-amber-300 block mb-1">Vasu's Strategic Recommendation:</strong>
                <p className="text-slate-300 leading-relaxed">
                  {activeModalStudy.recommendation}
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-800 text-xs text-slate-400">
              <span>Frameworks: {activeModalStudy.strategicFrameworks.join(' · ')}</span>
              <button
                onClick={() => setActiveModalStudy(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg cursor-pointer"
              >
                Close Case Study
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
