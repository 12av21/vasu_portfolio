import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { X, Printer, Download, Copy, Check, Mail, Phone, MapPin, Award } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const { profile, academics, leadership, skills } = PORTFOLIO_DATA;

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopySummary = () => {
    const text = `VASU VERMA - Class 12 Commerce Scholar & Aspiring Entrepreneur
Email: ${profile.email} | Location: ${profile.location}
Academics: CBSE Class 12 Commerce - 96.5% Mid-Term Aggregate
Key Subjects: Accountancy (98%), Business Studies (97%), Economics (96%), Applied Math (95%)
Leadership: President, Commerce & Economics Society (Led 120+ students, 18-school Conclave)
Key Case Studies: Zepto Quick Commerce Unit Economics, Tata-Air India Vihaan.AI, Bootstrapped D2C Brand`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl text-slate-100 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Controls Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
            <span>Executive Curriculum Vitae</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Vasu Verma</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopySummary}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Summary'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-2"
              aria-label="Close CV Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Canvas */}
        <div className="p-6 sm:p-10 space-y-8 bg-slate-900 text-slate-200">
          
          {/* Resume Header */}
          <div className="border-b border-slate-800 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
                  Vasu Verma
                </h1>
                <p className="text-sm font-medium text-amber-400 mt-1">
                  Class 12 Commerce Scholar · Aspiring Entrepreneur & Business Strategist
                </p>
                <p className="text-xs text-slate-400 mt-1 max-w-xl">
                  {profile.tagline}
                </p>
              </div>

              <div className="text-xs text-slate-400 space-y-1 sm:text-right font-mono">
                <div>Email: {profile.email}</div>
                <div>Location: Delhi NCR, India</div>
                <div>Board: CBSE Senior Secondary Commerce (2026-27)</div>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-amber-400 border-b border-slate-800/80 pb-1">
              Education & Academic Rigor
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
              <div>
                <h3 className="text-sm font-bold text-white">
                  Senior Secondary School Certificate (Class 12 Commerce)
                </h3>
                <p className="text-xs text-slate-400">
                  Central Board of Secondary Education (CBSE)
                </p>
              </div>
              <div className="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 border border-amber-500/30 px-2.5 py-1 rounded">
                Mid-Term Aggregate: 96.5% (Rank 1)
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {academics.map((sub) => (
                <div key={sub.code} className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                  <div className="text-[11px] text-slate-400 font-medium">{sub.name}</div>
                  <div className="text-sm font-bold font-mono text-white tabular-nums mt-0.5">{sub.score}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Research & Case Studies */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-amber-400 border-b border-slate-800/80 pb-1">
              Selected Applied Commerce & Unit Economics Case Studies
            </h2>

            <div className="space-y-3">
              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-sm font-bold text-white">Zepto & Dark-Store Micro-Fulfillment Economics</h3>
                  <span className="text-[11px] font-mono text-slate-400">2026</span>
                </div>
                <p className="text-xs text-slate-300 mt-1">
                  Modeled throughput, order density within 2.2 km radius, and retail media network advertising margin impact. Demonstrated unit economics trajectory from -18% to +3.8% contribution margin.
                </p>
              </div>

              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-sm font-bold text-white">Tata Group & Air India Vihaan.AI Transformation</h3>
                  <span className="text-[11px] font-mono text-slate-400">2025</span>
                </div>
                <p className="text-xs text-slate-300 mt-1">
                  Applied Porter's Five Forces and Kotter's Change Model to analyze consolidation of Air India, Vistara, and AIX Connect, evaluating 470 aircraft fleet renewal economics and international hub capture.
                </p>
              </div>

              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-sm font-bold text-white">Bootstrapping a D2C FMCG Brand in India</h3>
                  <span className="text-[11px] font-mono text-slate-400">2025</span>
                </div>
                <p className="text-xs text-slate-300 mt-1">
                  Conducted survey of 240 consumer students; designed unit pricing (₹65 MRP, 62% gross margin), co-packing operational structure, and distribution bypassing supermarket slotting fees.
                </p>
              </div>
            </div>
          </div>

          {/* Leadership & Co-Curricular Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-amber-400 border-b border-slate-800/80 pb-1">
              Leadership & Extracurricular Roles
            </h2>

            <div className="space-y-3">
              {leadership.map((item, idx) => (
                <div key={idx}>
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-sm font-bold text-white">
                      {item.role} · <span className="text-amber-400/90 font-medium">{item.organization}</span>
                    </h3>
                    <span className="text-[11px] font-mono text-slate-400">{item.year}</span>
                  </div>
                  <p className="text-xs text-slate-300 mt-0.5">
                    {item.description}
                  </p>
                  <p className="text-[11px] text-amber-300/80 font-mono mt-0.5">
                    Impact: {item.impact}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills & Certifications */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-amber-400 border-b border-slate-800/80 pb-1">
              Core Skills & Certifications
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <strong className="text-white block mb-1">Financial Analysis & Modeling:</strong>
                <span className="text-slate-300">
                  {skills.financialModeling.join(', ')}
                </span>
              </div>

              <div>
                <strong className="text-white block mb-1">Business Management & Strategy:</strong>
                <span className="text-slate-300">
                  {skills.businessAcumen.join(', ')}
                </span>
              </div>

              <div>
                <strong className="text-white block mb-1">Software & Analytical Tools:</strong>
                <span className="text-slate-300">
                  {skills.technicalTools.join(', ')}
                </span>
              </div>

              <div>
                <strong className="text-white block mb-1">Certifications:</strong>
                <span className="text-slate-300">
                  National Stock Exchange (NSE) Investor Certification (94%), SEBI Financial Literacy Module.
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>Prepared for undergraduate business admissions, case competitions & venture mentorship.</span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg cursor-pointer"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};
