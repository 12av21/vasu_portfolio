import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Mail, MapPin, Send, CheckCircle2, MessageSquare, Linkedin, ExternalLink } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { profile } = PORTFOLIO_DATA;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    purpose: 'College Admissions / Mentorship',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate swift submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 border-t border-slate-800 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-400">
              <span>Get in Touch</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Collaboration & Mentorship</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              Let's connect on commerce, ventures & mentorship.
            </h2>

            <p className="text-sm text-slate-300 leading-relaxed font-normal">
              Whether you are a university admissions officer, a startup founder looking for young analytical minds, or a fellow student interested in case study competitions, I'd welcome the opportunity to discuss ideas.
            </p>

            <div className="space-y-4 pt-4 border-t border-slate-800 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider">Direct Email</div>
                  <a href={`mailto:${profile.email}`} className="text-white hover:text-amber-400 font-medium transition-colors">
                    {profile.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider">Location</div>
                  <div className="text-white font-medium">Delhi NCR, India</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider">Focus Areas</div>
                  <div className="text-white font-medium">BBA / BMS / B.Com (Hons), Startup Incubation, Financial Modeling</div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="pt-4 flex items-center gap-3">
              <a
                href={`mailto:${profile.email}?subject=Connecting%20with%20Vasu%20Verma%20-%20Commerce%20Portfolio`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-amber-400/50 text-xs text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span>Open Mail Client</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-display">
                    Thank you for reaching out!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Your note has been recorded. Vasu will review your message and reply back to <strong className="text-white">{formData.email}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', purpose: 'College Admissions / Mentorship', message: '' });
                    }}
                    className="mt-4 px-4 py-2 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Your Full Name <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Dr. Rajesh Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs text-white bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Your Email Address <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. rajesh@university.edu"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs text-white bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Purpose of Inquiry
                    </label>
                    <select
                      value={formData.purpose}
                      onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs text-white bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-amber-400 transition-colors cursor-pointer"
                    >
                      <option value="College Admissions / Mentorship">Undergraduate Business Admissions / Mentorship</option>
                      <option value="Case Study Collaboration">Inter-School Case Study Challenge / Olympiad</option>
                      <option value="Venture / Startup Project">Venture Incubation / Entrepreneurship Discussion</option>
                      <option value="General Academic Inquiry">General Academic Discussion / Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Message <span className="text-amber-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Share context on your program, inquiry, or topic..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs text-white bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-amber-400 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-[0.99] rounded-xl transition-all shadow-md shadow-amber-500/10 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending note...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Message to Vasu</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
