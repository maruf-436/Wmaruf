import { useState } from 'react';
import { Search, ArrowRight, ShieldCheck, Zap, Users, Star } from 'lucide-react';
import { POPULAR_TAGS } from '../data/marketplaceData';

export default function Hero({ onSearchSubmit, onSelectTag }) {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearchSubmit) {
      onSearchSubmit(query);
    }
  };

  return (
    <section className="relative mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 px-6 py-14 sm:px-12 sm:py-20 lg:py-24 text-center shadow-xl">
        
        {/* Subtle decorative background effects */}
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-blue-500/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-indigo-500/15 blur-3xl pointer-events-none" />
        
        <div className="relative z-10 mx-auto max-w-3xl flex flex-col items-center gap-5">
          
          {/* Trust badge pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold text-blue-300 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Over 15,000+ Projects Completed Worldwide</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-balance font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
            The freelance marketplace built for work, connection, and growth.
          </h1>

          {/* Central Search Form */}
          <form
            onSubmit={handleSearch}
            className="w-full max-w-xl flex h-14 overflow-hidden rounded-full bg-white shadow-2xl p-1.5 focus-within:ring-4 focus-within:ring-blue-500/30 transition-all"
          >
            <div className="flex flex-1 items-center px-3">
              <Search className="h-5 w-5 text-slate-400 shrink-0 mr-2" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for any service (e.g. React, SEO, Logo)..."
                className="w-full bg-transparent text-sm sm:text-base text-slate-800 outline-none placeholder:text-slate-400"
              />
            </div>
            <button
              type="submit"
              className="flex aspect-square h-11 w-11 items-center justify-center rounded-full bg-blue-700 text-white hover:bg-blue-800 transition-all hover:scale-105 active:scale-95 shadow-md shadow-blue-700/30"
              aria-label="Search"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </form>

          {/* Popular Search Tags */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
            <span className="text-xs font-medium text-slate-300">Popular:</span>
            {POPULAR_TAGS.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => onSelectTag(tag)}
                className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-xs transition hover:bg-white hover:text-slate-900"
              >
                {tag} <span className="opacity-70 text-[10px]">→</span>
              </button>
            ))}
          </div>

          {/* Subtitle / Brand Description */}
          <p className="max-w-2xl text-xs sm:text-sm text-slate-300 leading-relaxed pt-2">
            <span className="font-semibold text-white">wmaruf</span> connects businesses with independent professionals for freelance opportunities, smart business connections, and practical collaboration.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10 w-full max-w-md text-white/90">
            <div>
              <div className="font-heading text-lg sm:text-xl font-bold text-white">100%</div>
              <div className="text-[11px] text-slate-400">Escrow Protected</div>
            </div>
            <div>
              <div className="font-heading text-lg sm:text-xl font-bold text-amber-400 flex items-center justify-center gap-1">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400 inline" /> 4.9/5
              </div>
              <div className="text-[11px] text-slate-400">Average Rating</div>
            </div>
            <div>
              <div className="font-heading text-lg sm:text-xl font-bold text-white">24/7</div>
              <div className="text-[11px] text-slate-400">Live Support</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
