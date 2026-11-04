import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GraduationCap, Award, CheckCircle2, ChevronRight, BookOpen, Trophy, Sparkles } from 'lucide-react';

export const AcademicsAndLeadership: React.FC = () => {
  const { academics, leadership, skills } = PORTFOLIO_DATA;
  const [activeSubject, setActiveSubject] = useState<number>(0);

  return (
    <section id="academics" className="py-16 lg:py-24 border-t border-slate-800 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-400 mb-2">
            <span>Academic Rigor & Impact</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Class 12 Commerce Foundation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Curriculum Mastery & Student Leadership
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base">
            Demonstrating deep theoretical grounding in corporate accounts, macroeconomic policy, commercial mathematics, and real student venture governance.
          </p>
        </div>

        {/* 1. ACADEMIC CURRICULUM GRID */}
        <div className="mb-16">
          <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-amber-400" />
            Class 12 Commerce Core Subjects
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {academics.map((subject, index) => (
              <div
                key={subject.code}
                onClick={() => setActiveSubject(index)}
                className={`p-6 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                  activeSubject === index
                    ? 'bg-slate-900 border-amber-400/80 shadow-lg shadow-amber-500/5'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span className="font-mono">{subject.code}</span>
                    <span className="font-mono font-bold text-amber-400 text-sm">{subject.score}</span>
                  </div>

                  <h4 className="text-lg font-bold text-white tracking-tight mb-2">
                    {subject.name}
                  </h4>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {subject.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80">
                  <div className="text-[11px] font-semibold text-amber-400/90 uppercase tracking-wider mb-2">
                    Key Competencies:
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {subject.keyTopics.slice(0, 3).map((topic, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-amber-400 font-bold">·</span>
                        <span className="line-clamp-1">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. LEADERSHIP & ACHIEVEMENTS TIMELINE */}
        <div className="mb-16">
          <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <Trophy className="w-5 h-5 text-amber-400" />
            Leadership Track Record & Competitions
          </h3>

          <div className="space-y-4">
            {leadership.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-amber-400/40 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="space-y-1 md:max-w-2xl">
                  <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
                    <span className="font-mono">{item.year}</span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span className="text-white font-bold">{item.role}</span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span>{item.organization}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 shrink-0 md:w-72">
                  <div className="text-[10px] uppercase font-bold tracking-wider text-amber-400/90 mb-1">
                    Quantified Impact
                  </div>
                  <div className="text-xs text-slate-200 font-medium">
                    {item.impact}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. SKILLS & BUSINESS TOOLKIT */}
        <div>
          <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400" />
            Vasu's Commerce & Business Toolkit
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 pb-2 border-b border-slate-800 flex items-center justify-between">
                <span>Financial Modeling</span>
                <span className="text-xs text-amber-400 font-mono">01</span>
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-300">
                {skills.financialModeling.map((skill, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 pb-2 border-b border-slate-800 flex items-center justify-between">
                <span>Business & Strategy</span>
                <span className="text-xs text-amber-400 font-mono">02</span>
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-300">
                {skills.businessAcumen.map((skill, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 pb-2 border-b border-slate-800 flex items-center justify-between">
                <span>Technical & Analytics</span>
                <span className="text-xs text-amber-400 font-mono">03</span>
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-300">
                {skills.technicalTools.map((skill, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
