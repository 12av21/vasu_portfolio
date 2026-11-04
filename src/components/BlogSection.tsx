import React, { useState } from 'react';
import { PORTFOLIO_DATA, BlogPost } from '../data/portfolioData';
import { BookOpen, X, Clock, Calendar, ArrowRight, Quote } from 'lucide-react';

export const BlogSection: React.FC = () => {
  const { blogPosts } = PORTFOLIO_DATA;
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-16 lg:py-24 border-t border-slate-800 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-400 mb-2">
            <span>Commerce & Venture Insights</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Vasu's Writing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Essays on Modern Commerce & Corporate Finance
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base">
            Reflecting on corporate balance sheets, startup capital structures, and the intersection between high-school economics and Indian enterprise.
          </p>
        </div>

        {/* Blog Post Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => setActiveArticle(post)}
              className="group cursor-pointer rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-amber-400/40 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
            >
              <div className="space-y-4">
                {/* Quiet unboxed metadata */}
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span className="text-amber-400 font-semibold">{post.category}</span>
                  <span aria-hidden="true" className="text-slate-700">·</span>
                  <span>{post.readTime}</span>
                  <span aria-hidden="true" className="text-slate-700">·</span>
                  <span>{post.date}</span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-mono text-[11px]">
                  Commerce Essay
                </span>
                <span className="inline-flex items-center gap-1 text-amber-400 font-medium group-hover:translate-x-1 transition-transform">
                  Read Article <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Full Article Reader Modal */}
      {activeArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveArticle(null)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl text-slate-200 space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-800">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
                  <span>{activeArticle.category}</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span>{activeArticle.date}</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span>{activeArticle.readTime}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display leading-tight">
                  {activeArticle.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Authored by Vasu Verma · Class 12 Commerce
                </p>
              </div>

              <button
                onClick={() => setActiveArticle(null)}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Close article"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Article Content */}
            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {activeArticle.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Key Takeaway Highlight Box */}
            <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-800/40 text-xs sm:text-sm flex items-start gap-3">
              <Quote className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-amber-300 block mb-1">Key Commerce Principle:</strong>
                <span className="text-slate-200">{activeArticle.keyTakeaway}</span>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-800 text-xs text-slate-400">
              <span>Published in Vasu's Commerce Journal</span>
              <button
                onClick={() => setActiveArticle(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg cursor-pointer"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
