import { Globe, Monitor, Smartphone } from 'lucide-react';

const examples = [
  {
    title: 'SaaS Landing',
    desc: 'Crisp hero, value-focused copy, and clear CTAs.',
    tags: ['SaaS', 'Conversion'],
    img: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Local Service',
    desc: 'Trust signals, reviews, and booking-focused layout.',
    tags: ['Local', 'Booking'],
    img: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Personal Brand',
    desc: 'Clean sections, authority-building design, fast.',
    tags: ['Portfolio', 'Personal'],
    img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Recent examples</h2>
            <p className="mt-2 text-gray-600">A glimpse of clean, high-performing layouts we build.</p>
          </div>
          <div className="hidden md:flex items-center gap-3 text-gray-500">
            <Monitor className="h-5 w-5" />
            <Smartphone className="h-5 w-5" />
            <Globe className="h-5 w-5" />
          </div>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {examples.map((ex) => (
            <div key={ex.title} className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
              <div className="relative h-48 overflow-hidden">
                <img src={ex.img} alt={ex.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-2 text-xs text-blue-700">
                  {ex.tags.map((t) => (
                    <span key={t} className="rounded-full bg-blue-50 px-2 py-0.5 border border-blue-200">{t}</span>
                  ))}
                </div>
                <h3 className="mt-3 text-lg font-semibold text-gray-900">{ex.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{ex.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
