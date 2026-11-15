import { Award, ShieldCheck, Lock, Headphones } from 'lucide-react';
import { FEATURES } from '../data/marketplaceData';

const iconMap = {
  Award,
  ShieldCheck,
  Lock,
  Headphones
};

export default function FeaturesSection() {
  return (
    <section id="features" className="py-16 bg-gradient-to-b from-blue-50/50 to-white border-y border-blue-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100/60 px-3 py-1 rounded-full">
            The wmaruf Advantage
          </span>
          <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            A whole world of freelance talent at your fingertips
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            Build your dream projects faster, smarter, and with complete peace of mind.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((item, idx) => {
            const Icon = iconMap[item.icon] || ShieldCheck;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-blue-200"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700 group-hover:bg-blue-700 group-hover:text-white transition-colors duration-300 mb-4 shadow-2xs">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-base font-semibold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
