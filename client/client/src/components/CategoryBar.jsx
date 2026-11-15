import { useRef } from 'react';
import { ChevronLeft, ChevronRight, Code, TrendingUp, Palette, Video, FileText, Briefcase, Cpu, Music } from 'lucide-react';
import { CATEGORIES } from '../data/marketplaceData';

const iconMap = {
  Code,
  TrendingUp,
  Palette,
  Video,
  FileText,
  Briefcase,
  Cpu,
  Music
};

export default function CategoryBar({ activeCategory, onSelectCategory }) {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -250 : 250;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="border-b border-slate-200 bg-white py-2 shadow-2xs">
      <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 sm:px-6 lg:px-8">
        
        {/* Scroll Left Button */}
        <button
          onClick={() => scroll('left')}
          className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors shadow-xs"
          aria-label="Previous categories"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        {/* Categories Horizontal Scroller */}
        <div
          ref={scrollContainerRef}
          className="flex min-w-0 flex-1 items-center gap-2 overflow-x-auto no-scrollbar py-1"
        >
          <button
            onClick={() => onSelectCategory('all')}
            className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
              activeCategory === 'all'
                ? 'bg-blue-700 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            All Services
          </button>

          {CATEGORIES.map((cat) => {
            const Icon = iconMap[cat.icon] || Code;
            const isSelected = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
                  isSelected
                    ? 'bg-blue-700 text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-700 hover:border-blue-300 hover:bg-blue-50/50'
                }`}
              >
                <Icon className={`h-3.5 w-3.5 ${isSelected ? 'text-white' : 'text-blue-600'}`} />
                <span>{cat.name}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isSelected ? 'bg-blue-600 text-blue-100' : 'bg-slate-100 text-slate-500'}`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Scroll Right Button */}
        <button
          onClick={() => scroll('right')}
          className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors shadow-xs"
          aria-label="Next categories"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
