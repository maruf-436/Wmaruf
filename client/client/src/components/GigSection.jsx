import GigCard from './GigCard';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function GigSection({
  title,
  subtitle,
  gigs,
  favorites,
  onToggleFavorite,
  onViewDetails,
  onContactSeller,
  onSeeAll,
  id
}) {
  if (!gigs || gigs.length === 0) {
    return null;
  }

  return (
    <section id={id} className="py-8 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-heading text-xl font-bold text-slate-900 sm:text-2xl md:text-3xl">
                {title}
              </h2>
            </div>
            {subtitle && (
              <p className="mt-1 text-xs sm:text-sm text-slate-500">
                {subtitle}
              </p>
            )}
          </div>

          {onSeeAll && (
            <button
              onClick={onSeeAll}
              className="flex items-center gap-1 text-xs sm:text-sm font-semibold text-blue-700 hover:text-blue-800 transition-colors self-start sm:self-auto"
            >
              <span>Explore all</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {gigs.map((gig) => (
            <GigCard
              key={gig.id}
              gig={gig}
              isFavorite={favorites.includes(gig.id)}
              onToggleFavorite={onToggleFavorite}
              onViewDetails={onViewDetails}
              onContactSeller={onContactSeller}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
