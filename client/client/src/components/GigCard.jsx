import { Heart, Star, CheckCircle, MessageCircle } from 'lucide-react';

export default function GigCard({ gig, isFavorite, onToggleFavorite, onViewDetails, onContactSeller }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-blue-200">
      
      {/* Gig Image Header */}
      <div className="relative aspect-3/2 overflow-hidden bg-slate-100">
        <img
          src={gig.image}
          alt={gig.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent opacity-60"></div>
        
        {/* Favorite Heart Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(gig.id);
          }}
          className={`absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full backdrop-blur-md transition-all ${
            isFavorite
              ? 'bg-red-50 text-red-600 shadow-md'
              : 'bg-white/90 text-slate-700 hover:bg-white hover:text-red-500 hover:scale-110 shadow-xs'
          }`}
          aria-label="Save gig"
        >
          <Heart className={`h-4 w-4 ${isFavorite ? 'fill-red-600 text-red-600' : ''}`} />
        </button>
      </div>

      {/* Card Content Body */}
      <div className="flex flex-1 flex-col justify-between gap-3 p-4">
        
        <div>
          {/* Seller Metadata */}
          <div className="flex items-center gap-2.5">
            <img
              src={gig.seller.avatar}
              alt={gig.seller.name}
              className="h-10 w-10 shrink-0 rounded-full object-cover ring-2 ring-blue-50"
            />
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1">
                <span className="font-semibold text-xs text-slate-900 truncate">
                  {gig.seller.name}
                </span>
                {gig.seller.badge && (
                  <CheckCircle className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                )}
                <span className="ml-auto rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-semibold text-blue-700 shrink-0">
                  {gig.seller.level}
                </span>
              </div>
              
              <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-0.5">
                <span className="truncate">{gig.seller.title}</span>
                <span>•</span>
                <span className="flex items-center gap-0.5 font-semibold text-slate-800">
                  <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  {gig.seller.rating.toFixed(1)}
                </span>
                <span className="text-slate-400">({gig.seller.reviewsCount})</span>
              </div>
            </div>
          </div>

          {/* Gig Title */}
          <h3
            onClick={() => onViewDetails(gig)}
            className="mt-3 text-sm font-semibold leading-snug text-slate-900 line-clamp-2 cursor-pointer hover:text-blue-700 transition-colors"
            title={gig.title}
          >
            {gig.title}
          </h3>
        </div>

        {/* Pricing & Call to Actions */}
        <div className="flex flex-col gap-3 pt-3 border-t border-slate-100">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-medium tracking-wider text-slate-400 uppercase">
              Starting From
            </span>
            <span className="text-lg font-bold text-slate-900 font-heading">
              ${gig.price}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => onViewDetails(gig)}
              className="w-full rounded-full border border-blue-600 bg-white py-1.5 text-xs font-semibold text-blue-700 hover:bg-blue-50 transition-colors shadow-2xs"
            >
              View Details
            </button>
            <button
              type="button"
              onClick={() => onContactSeller(gig)}
              className="flex w-full items-center justify-center gap-1 rounded-full bg-blue-700 py-1.5 text-xs font-semibold text-white hover:bg-blue-800 transition-colors shadow-xs"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              Contact
            </button>
          </div>
        </div>

      </div>
    </article>
  );
}
