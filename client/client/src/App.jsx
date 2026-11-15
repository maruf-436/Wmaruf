import { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import CategoryBar from './components/CategoryBar';
import Hero from './components/Hero';
import GigCard from './components/GigCard';
import GigSection from './components/GigSection';
import FeaturesSection from './components/FeaturesSection';
import HowItWorks from './components/HowItWorks';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import FloatingWidgets from './components/FloatingWidgets';
import { GigDetailModal, ContactModal, AuthModal } from './components/Modals';
import { GIGS, CATEGORIES } from './data/marketplaceData';
import { SearchX } from 'lucide-react';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [favorites, setFavorites] = useState([1, 3]);

  // Modal states
  const [detailGig, setDetailGig] = useState(null);
  const [contactGig, setContactGig] = useState(null);
  const [authModal, setAuthModal] = useState({ isOpen: false, mode: 'login' });

  // Filtered Gigs
  const filteredGigs = useMemo(() => {
    return GIGS.filter((gig) => {
      const matchesCategory =
        activeCategory === 'all' || gig.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        gig.title.toLowerCase().includes(q) ||
        gig.category.toLowerCase().includes(q) ||
        gig.seller.name.toLowerCase().includes(q) ||
        gig.description.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  // Category specific slices for home page view
  const programmingGigs = useMemo(
    () => GIGS.filter((g) => g.category === 'programming-development'),
    []
  );
  const marketingGigs = useMemo(
    () => GIGS.filter((g) => g.category === 'digital-marketing'),
    []
  );
  const designGigs = useMemo(
    () => GIGS.filter((g) => g.category === 'graphics-design'),
    []
  );
  const videoGigs = useMemo(
    () => GIGS.filter((g) => g.category === 'video-animation'),
    []
  );

  const toggleFavorite = (gigId) => {
    setFavorites((prev) =>
      prev.includes(gigId) ? prev.filter((id) => id !== gigId) : [...prev, gigId]
    );
  };

  const handleSearchSubmit = (query) => {
    setSearchQuery(query);
    const servicesEl = document.getElementById('services');
    if (servicesEl) {
      servicesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectTag = (tag) => {
    setSearchQuery(tag);
    setActiveCategory('all');
    const servicesEl = document.getElementById('services');
    if (servicesEl) {
      servicesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isFiltering = searchQuery.trim() !== '' || activeCategory !== 'all';

  return (
    <div className="min-h-screen bg-[#fbfaf7] text-slate-800 flex flex-col selection:bg-blue-600 selection:text-white">
      
      {/* Top Navbar */}
      <Navbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSearchSubmit={handleSearchSubmit}
        onOpenAuth={(mode) => setAuthModal({ isOpen: true, mode })}
      />

      {/* Categories Horizontal Navigation */}
      <CategoryBar
        activeCategory={activeCategory}
        onSelectCategory={(catId) => {
          setActiveCategory(catId);
          const servicesEl = document.getElementById('services');
          if (servicesEl) {
            servicesEl.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      />

      <main className="flex-1">
        
        {/* Hero Section */}
        <Hero
          onSearchSubmit={handleSearchSubmit}
          onSelectTag={handleSelectTag}
        />

        {/* Dynamic Gigs Container */}
        <div id="services">
          {isFiltering ? (
            /* Filtered View */
            <section className="py-10">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-slate-200 pb-4">
                  <div>
                    <h2 className="font-heading text-2xl font-bold text-slate-900">
                      Search Results {searchQuery && `for "${searchQuery}"`}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Showing {filteredGigs.length} available service{filteredGigs.length === 1 ? '' : 's'}
                    </p>
                  </div>
                  
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setActiveCategory('all');
                    }}
                    className="self-start sm:self-auto rounded-full border border-slate-300 bg-white px-4 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors shadow-2xs"
                  >
                    Reset Filters
                  </button>
                </div>

                {filteredGigs.length > 0 ? (
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {filteredGigs.map((gig) => (
                      <GigCard
                        key={gig.id}
                        gig={gig}
                        isFavorite={favorites.includes(gig.id)}
                        onToggleFavorite={toggleFavorite}
                        onViewDetails={(g) => setDetailGig(g)}
                        onContactSeller={(g) => setContactGig(g)}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8 shadow-xs">
                    <SearchX className="h-12 w-12 text-slate-300 mx-auto mb-3" />
                    <h3 className="font-heading text-lg font-bold text-slate-900">
                      No services found matching your criteria
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
                      Try different keywords or explore one of our popular categories above.
                    </p>
                    <button
                      onClick={() => {
                        setSearchQuery('');
                        setActiveCategory('all');
                      }}
                      className="mt-4 rounded-full bg-blue-700 px-5 py-2 text-xs font-semibold text-white hover:bg-blue-800 transition-colors"
                    >
                      Browse All Services
                    </button>
                  </div>
                )}
              </div>
            </section>
          ) : (
            /* Default Home View with Curated Sections */
            <>
              {/* Popular Freelance Services */}
              <GigSection
                id="popular"
                title="Popular freelance services on wmaruf"
                subtitle="Explore our top-performing services vetted by clients worldwide"
                gigs={GIGS.slice(0, 4)}
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
                onViewDetails={(g) => setDetailGig(g)}
                onContactSeller={(g) => setContactGig(g)}
              />

              {/* Programming & Development Section */}
              <GigSection
                title="Programming & Development"
                subtitle="Build full-stack apps, optimize speed, and scale your tech stack"
                gigs={programmingGigs}
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
                onViewDetails={(g) => setDetailGig(g)}
                onContactSeller={(g) => setContactGig(g)}
                onSeeAll={() => setActiveCategory('programming-development')}
              />

              {/* Digital Marketing Section */}
              <GigSection
                title="Digital Marketing & Ads"
                subtitle="Accelerate lead generation and brand awareness with proven campaigns"
                gigs={marketingGigs}
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
                onViewDetails={(g) => setDetailGig(g)}
                onContactSeller={(g) => setContactGig(g)}
                onSeeAll={() => setActiveCategory('digital-marketing')}
              />

              {/* Graphics & Design Section */}
              <GigSection
                title="Graphics & Design"
                subtitle="Standout visual assets, brand identities, and promotional graphics"
                gigs={designGigs}
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
                onViewDetails={(g) => setDetailGig(g)}
                onContactSeller={(g) => setContactGig(g)}
                onSeeAll={() => setActiveCategory('graphics-design')}
              />

              {/* Video & Animation Section */}
              <GigSection
                title="Video & Animation"
                subtitle="Captivating video editing, YouTube content, and dynamic social reels"
                gigs={videoGigs}
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
                onViewDetails={(g) => setDetailGig(g)}
                onContactSeller={(g) => setContactGig(g)}
                onSeeAll={() => setActiveCategory('video-animation')}
              />
            </>
          )}
        </div>

        {/* Why Choose wmaruf Section */}
        <FeaturesSection />

        {/* How It Works Section */}
        <HowItWorks
          onGetStarted={() => setAuthModal({ isOpen: true, mode: 'register' })}
        />

        {/* FAQs */}
        <FaqSection />

      </main>

      {/* Footer */}
      <Footer onSelectCategory={(catId) => setActiveCategory(catId)} />

      {/* Floating Messenger / WhatsApp / Live Chat */}
      <FloatingWidgets />

      {/* Modals */}
      <GigDetailModal
        gig={detailGig}
        isOpen={!!detailGig}
        onClose={() => setDetailGig(null)}
        onContactSeller={(gig) => setContactGig(gig)}
      />

      <ContactModal
        gig={contactGig}
        isOpen={!!contactGig}
        onClose={() => setContactGig(null)}
      />

      <AuthModal
        isOpen={authModal.isOpen}
        initialMode={authModal.mode}
        onClose={() => setAuthModal({ isOpen: false, mode: 'login' })}
      />

    </div>
  );
}
