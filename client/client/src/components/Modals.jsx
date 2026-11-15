import { useState } from 'react';
import { X, Star, Clock, RefreshCw, CheckCircle, Send, Check } from 'lucide-react';

export function GigDetailModal({ gig, isOpen, onClose, onContactSeller }) {
  const [selectedTier, setSelectedTier] = useState('basic');
  const [ordered, setOrdered] = useState(false);

  if (!isOpen || !gig) return null;

  const currentPkg = gig.packages[selectedTier] || gig.packages.basic;

  const handleOrder = () => {
    setOrdered(true);
    setTimeout(() => {
      setOrdered(false);
      onClose();
      alert(`Order placed successfully for ${currentPkg.name} ($${currentPkg.price})! Freelancer ${gig.seller.name} will be in touch.`);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Left Column: Media & Overview */}
          <div>
            <img
              src={gig.image}
              alt={gig.title}
              className="h-56 w-full rounded-xl object-cover shadow-xs"
            />
            
            {/* Seller Info */}
            <div className="mt-4 flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
              <img
                src={gig.seller.avatar}
                alt={gig.seller.name}
                className="h-12 w-12 rounded-full object-cover ring-2 ring-blue-500"
              />
              <div>
                <div className="flex items-center gap-1">
                  <span className="font-semibold text-sm text-slate-900">{gig.seller.name}</span>
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                </div>
                <p className="text-xs text-slate-500">{gig.seller.title}</p>
                <div className="flex items-center gap-1 text-xs text-slate-700 mt-0.5">
                  <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  <span className="font-bold">{gig.seller.rating.toFixed(1)}</span>
                  <span className="text-slate-400">({gig.seller.reviewsCount} reviews)</span>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <h4 className="font-semibold text-xs text-slate-400 uppercase tracking-wider">
                About This Service
              </h4>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {gig.description}
              </p>
            </div>
          </div>

          {/* Right Column: Packages & Pricing */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="font-heading text-lg font-bold text-slate-900 leading-snug">
                {gig.title}
              </h2>

              {/* Package Tier Tabs */}
              <div className="mt-4 grid grid-cols-3 rounded-lg bg-slate-100 p-1">
                {['basic', 'standard', 'premium'].map((tier) => (
                  <button
                    key={tier}
                    type="button"
                    onClick={() => setSelectedTier(tier)}
                    className={`py-1.5 text-xs font-semibold uppercase rounded-md transition-all ${
                      selectedTier === tier
                        ? 'bg-white text-blue-700 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {tier}
                  </button>
                ))}
              </div>

              {/* Selected Tier Details */}
              <div className="mt-4 rounded-xl border border-blue-100 bg-blue-50/40 p-4">
                <div className="flex items-center justify-between">
                  <span className="font-heading text-base font-bold text-slate-900">
                    {currentPkg.name}
                  </span>
                  <span className="font-heading text-2xl font-extrabold text-blue-700">
                    ${currentPkg.price}
                  </span>
                </div>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  {currentPkg.desc}
                </p>

                <div className="mt-4 flex items-center gap-4 text-xs font-medium text-slate-600 border-t border-blue-100/70 pt-3">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-blue-600" />
                    <span>{currentPkg.delivery} Delivery</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <RefreshCw className="h-4 w-4 text-blue-600" />
                    <span>{currentPkg.revisions} Revisions</span>
                  </div>
                </div>
              </div>

              {/* Orders in Queue */}
              <div className="mt-3 text-[11px] text-slate-500 text-center">
                🔥 {gig.ordersInQueue} clients have orders in queue for this gig
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 space-y-2">
              <button
                type="button"
                onClick={handleOrder}
                disabled={ordered}
                className="w-full flex items-center justify-center gap-2 rounded-full bg-blue-700 py-3 text-sm font-bold text-white shadow-md hover:bg-blue-800 transition-all hover:scale-[1.01] active:scale-95 disabled:opacity-75"
              >
                {ordered ? (
                  <>
                    <Check className="h-4 w-4" /> Processing Order...
                  </>
                ) : (
                  `Continue ($${currentPkg.price})`
                )}
              </button>

              <button
                type="button"
                onClick={() => {
                  onClose();
                  onContactSeller(gig);
                }}
                className="w-full rounded-full border border-slate-300 bg-white py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
              >
                Contact {gig.seller.name}
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export function ContactModal({ gig, isOpen, onClose }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  if (!isOpen || !gig) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      onClose();
      alert(`Message successfully sent to ${gig.seller.name}! They will reply to ${form.email} shortly.`);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200"
        >
          <X className="h-5 w-5" />
        </button>

        <h3 className="font-heading text-lg font-bold text-slate-900">
          Message {gig.seller.name}
        </h3>
        <p className="text-xs text-slate-500 mt-0.5">
          Regarding: <span className="font-medium text-slate-700">{gig.title}</span>
        </p>

        <form onSubmit={handleSubmit} className="mt-4 space-y-3">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Your Name</label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="e.g. Alex Johnson"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Your Email</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="alex@example.com"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Project Details & Requirements</label>
            <textarea
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Describe what you want to achieve, your timeline, and any questions you have..."
              className="w-full rounded-lg border border-slate-300 p-3 text-sm outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            />
          </div>

          <button
            type="submit"
            disabled={sent}
            className="w-full flex items-center justify-center gap-2 rounded-full bg-blue-700 py-3 text-sm font-bold text-white shadow-md hover:bg-blue-800 transition-all disabled:opacity-75"
          >
            {sent ? 'Sending Message...' : (
              <>
                <Send className="h-4 w-4" /> Send Direct Message
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export function AuthModal({ isOpen, initialMode = 'login', onClose }) {
  const [mode, setMode] = useState(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('client');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome to wmaruf! Successfully ${mode === 'login' ? 'logged in' : 'registered'} as ${email}.`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="text-center mb-6">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-700 text-white font-heading font-bold text-xl mb-2 shadow-md">
            W
          </div>
          <h3 className="font-heading text-xl font-bold text-slate-900">
            {mode === 'login' ? 'Welcome Back to wmaruf' : 'Create Your wmaruf Account'}
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Hire skilled talent or sell your services globally.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="grid grid-cols-2 rounded-lg bg-slate-100 p-1 mb-5">
          <button
            type="button"
            onClick={() => setMode('login')}
            className={`py-1.5 text-xs font-semibold rounded-md transition-all ${
              mode === 'login' ? 'bg-white text-blue-700 shadow-xs' : 'text-slate-600'
            }`}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => setMode('register')}
            className={`py-1.5 text-xs font-semibold rounded-md transition-all ${
              mode === 'register' ? 'bg-white text-blue-700 shadow-xs' : 'text-slate-600'
            }`}
          >
            Join wmaruf
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          {mode === 'register' && (
            <>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="MD Walyullah Maruf"
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">I want to:</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setRole('client')}
                    className={`p-2 rounded-lg text-xs font-semibold border ${
                      role === 'client' ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-slate-200 text-slate-600'
                    }`}
                  >
                    Hire Freelancers
                  </button>
                  <button
                    type="button"
                    onClick={() => setRole('freelancer')}
                    className={`p-2 rounded-lg text-xs font-semibold border ${
                      role === 'freelancer' ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-slate-200 text-slate-600'
                    }`}
                  >
                    Work as Freelancer
                  </button>
                </div>
              </div>
            </>
          )}

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@domain.com"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-blue-700 py-3 text-sm font-bold text-white shadow-md hover:bg-blue-800 transition-all hover:scale-[1.01] active:scale-95"
          >
            {mode === 'login' ? 'Sign In to wmaruf' : 'Create Free Account'}
          </button>
        </form>

        <p className="mt-4 text-[11px] text-center text-slate-400">
          By joining wmaruf, you agree to our Terms of Service and Privacy Policy.
        </p>

      </div>
    </div>
  );
}
