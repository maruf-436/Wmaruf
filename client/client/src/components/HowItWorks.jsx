import { HOW_IT_WORKS } from '../data/marketplaceData';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function HowItWorks({ onGetStarted }) {
  return (
    <section id="how-it-works" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full">
            Simple Process
          </span>
          <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            How wmaruf works
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            Getting your work done by experts has never been this straightforward.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 relative">
          {HOW_IT_WORKS.map((step, idx) => (
            <div key={idx} className="relative flex flex-col items-start p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors">
              <span className="font-heading text-3xl font-extrabold text-blue-700/30 mb-2">
                {step.step}
              </span>
              <h3 className="font-heading text-base font-bold text-slate-900 mb-2">
                {step.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA banner below */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-blue-700 to-indigo-700 p-8 text-center text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h3 className="font-heading text-xl sm:text-2xl font-bold">
              Ready to find the right talent for your next project?
            </h3>
            <p className="text-xs sm:text-sm text-blue-100 mt-1">
              Join thousands of businesses scaling their growth with wmaruf freelancers.
            </p>
          </div>
          <button
            onClick={onGetStarted}
            className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-blue-700 shadow-md hover:bg-blue-50 hover:scale-105 active:scale-95 transition-all shrink-0"
          >
            <span>Get Started Now</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
