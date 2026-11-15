import { useState } from 'react';
import { Search, Menu, X, ArrowRight, User, Sparkles } from 'lucide-react';

export default function Navbar({ searchQuery, setSearchQuery, onSearchSubmit, onOpenAuth }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearchSubmit) {
      onSearchSubmit(searchQuery);
    }
  };

  return (
    <header className="sticky top-0 z-40 border-b border-blue-100 bg-white/95 backdrop-blur-md shadow-xs transition-all">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        
        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 lg:hidden focus:outline-none"
          aria-label="Open menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Brand Logo */}
        <a href="/" className="flex items-center gap-2 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-700 to-indigo-600 text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
            <span className="font-heading text-xl font-bold tracking-tight">W</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-blue-700 font-heading">
              wmaruf<span className="text-amber-500">.</span>
            </h1>
            <span className="hidden text-[10px] font-medium uppercase tracking-wider text-slate-400 sm:block -mt-1">
              Freelance Marketplace
            </span>
          </div>
        </a>

        {/* Desktop Search Bar */}
        <form onSubmit={handleSubmit} className="hidden min-w-0 flex-1 max-w-xl mx-4 lg:flex">
          <div className="flex w-full items-center overflow-hidden rounded-full border border-slate-300 bg-white shadow-xs focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
            <Search className="ml-4 h-4 w-4 text-slate-400 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search freelance services, professionals, or projects..."
              className="h-11 min-w-0 flex-1 bg-transparent px-3 text-sm outline-none placeholder:text-slate-400"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="px-2 text-xs text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
            <button
              type="submit"
              className="grid h-11 w-12 place-items-center bg-blue-700 text-white hover:bg-blue-800 transition-colors"
              aria-label="Search wmaruf"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </form>

        {/* Desktop Navigation Links & Auth Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <a href="#services" className="text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors">
            Services
          </a>
          <a href="#how-it-works" className="text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors">
            How It Works
          </a>
          <a href="#features" className="text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors">
            Why wmaruf
          </a>
          <a href="#faq" className="text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors">
            FAQ
          </a>

          <div className="flex items-center gap-3 pl-2 border-l border-slate-200">
            <button
              onClick={() => onOpenAuth('login')}
              className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-blue-700 transition-colors"
            >
              Sign In
            </button>
            <button
              onClick={() => onOpenAuth('register')}
              className="flex items-center gap-1.5 rounded-full bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-600/20 hover:bg-blue-800 hover:scale-105 active:scale-95 transition-all"
            >
              <Sparkles className="h-4 w-4" />
              Join wmaruf
            </button>
          </div>
        </div>

        {/* Mobile quick actions */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => onOpenAuth('login')}
            className="rounded-full bg-blue-700 px-4 py-2 text-xs font-semibold text-white"
          >
            Sign In
          </button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="px-4 pb-3 lg:hidden">
        <form onSubmit={handleSubmit} className="flex w-full items-center overflow-hidden rounded-full border border-slate-300 bg-white shadow-xs">
          <Search className="ml-3 h-4 w-4 text-slate-400 shrink-0" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search services or skills..."
            className="h-10 min-w-0 flex-1 bg-transparent px-3 text-sm outline-none placeholder:text-slate-400"
          />
          <button
            type="submit"
            className="grid h-10 w-10 place-items-center bg-blue-700 text-white"
            aria-label="Search"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-3 shadow-lg animate-in slide-in-from-top duration-200">
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-700 hover:text-blue-700"
          >
            Explore Services
          </a>
          <a
            href="#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-700 hover:text-blue-700"
          >
            How It Works
          </a>
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-700 hover:text-blue-700"
          >
            Why Choose wmaruf
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-700 hover:text-blue-700"
          >
            Frequently Asked Questions
          </a>
          <div className="pt-3 border-t border-slate-100 flex gap-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenAuth('login'); }}
              className="flex-1 rounded-lg border border-slate-300 py-2.5 text-center text-sm font-semibold text-slate-700"
            >
              Sign In
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenAuth('register'); }}
              className="flex-1 rounded-lg bg-blue-700 py-2.5 text-center text-sm font-semibold text-white"
            >
              Join Free
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
