import { User, Star, MessageCircle, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Ava M.',
    role: 'Local Store Owner',
    quote: 'Our new site looks amazing and we booked 12 new clients in week one. The process was simple and fast.',
  },
  {
    name: 'Daniel K.',
    role: 'SaaS Founder',
    quote: 'Clean design, great mobile experience, and clear CTAs. Exactly what we needed to convert traffic.',
  },
  {
    name: 'Sofia L.',
    role: 'Consultant',
    quote: 'Professional, responsive, and focused on results. Highly recommended.',
  },
];

export default function AboutTestimonialsCTA() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-700">
              <User className="h-3.5 w-3.5" />
              Meet the founder
            </div>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">Built by a 14-year-old creator with a business mindset</h2>
            <p className="mt-3 text-gray-700 max-w-prose">
              Hey, I’m the founder of Webnity. I focus on clean design, fast performance, and clear structure so your visitors know exactly what to do next. I bring fresh ideas and relentless effort to every project.
            </p>
            <ul className="mt-4 list-disc list-inside text-gray-700 space-y-1">
              <li>Direct communication and quick turnarounds</li>
              <li>Transparent pricing and deliverables</li>
              <li>Focused on real results, not fluff</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900">What clients say</h3>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              {testimonials.map((t) => (
                <div key={t.name} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-2 text-amber-500">
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                  </div>
                  <p className="mt-3 text-gray-700">“{t.quote}”</p>
                  <p className="mt-2 text-sm text-gray-500">— {t.name}, {t.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div id="cta" className="mt-16 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-extrabold">Ready to see your free demo website?</h3>
            <p className="mt-1 text-white/90">Click below and I’ll send you a tailored preview with your branding.</p>
          </div>
          <a href="#pricing" className="inline-flex items-center justify-center rounded-lg bg-white text-blue-700 px-6 py-3 font-semibold shadow hover:bg-blue-50 transition">
            Get Your Free Demo Website
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
