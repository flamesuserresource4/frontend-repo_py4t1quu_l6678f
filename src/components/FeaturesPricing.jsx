import { CheckCircle2 } from 'lucide-react';

const features = [
  'Responsive across all devices',
  'SEO-friendly structure',
  'Lightning-fast performance',
  'Conversion-focused layouts',
  'Secure & reliable hosting guidance',
];

const plans = [
  {
    name: 'Basic',
    price: '$299',
    cadence: 'one-time',
    description: 'Perfect for a simple, clean web presence that converts.',
    items: ['1-3 pages', 'Modern hero section', 'Contact form', 'Basic SEO', 'Delivery in 3-5 days'],
    cta: 'Choose Basic',
    highlight: false,
  },
  {
    name: 'Intermediate',
    price: '$699',
    cadence: 'one-time',
    description: 'Best for growing brands needing more pages and polish.',
    items: ['Up to 6 pages', 'Portfolio/Blog section', 'Advanced animations', 'Enhanced SEO', 'Delivery in 7-10 days'],
    cta: 'Choose Intermediate',
    highlight: true,
  },
  {
    name: 'Expert',
    price: '$1299',
    cadence: 'one-time',
    description: 'Premium experience with advanced features and strategy.',
    items: ['Unlimited pages', 'Custom components', 'Conversion copy guidance', 'Analytics setup', 'Priority support'],
    cta: 'Choose Expert',
    highlight: false,
  },
];

export default function FeaturesPricing() {
  return (
    <section id="pricing" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Everything you need for a high-converting site</h2>
            <p className="mt-3 text-gray-600 max-w-xl">
              We craft clean, trustworthy designs that guide visitors to take action. Every build is fast, responsive, and tailored to your goals.
            </p>
            <ul className="mt-6 space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl border ${plan.highlight ? 'border-blue-600 bg-white shadow-xl' : 'border-gray-200 bg-white shadow-sm'} p-6 flex flex-col`}
              >
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                  <p className="mt-1 text-gray-600 text-sm">{plan.description}</p>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-3xl font-extrabold text-gray-900">{plan.price}</span>
                    <span className="text-gray-500">{plan.cadence}</span>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {plan.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-gray-700 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="#cta"
                  className={`mt-6 inline-flex items-center justify-center rounded-lg px-4 py-2 font-semibold transition ${plan.highlight ? 'bg-blue-600 text-white hover:bg-blue-700' : 'border border-gray-300 text-gray-800 hover:bg-gray-50'}`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
