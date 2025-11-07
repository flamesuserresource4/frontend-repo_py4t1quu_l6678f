import Spline from '@splinetool/react-spline';
import { ArrowRight, Shield, Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-10 md:pt-28 md:pb-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
            <Shield className="h-3.5 w-3.5" />
            Trusted, clean, and conversion-focused
          </div>
          <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Webnity — Modern Websites that Convert
          </h1>
          <p className="mt-5 text-lg text-gray-600 max-w-xl">
            Get a free demo website tailored to your brand. Fast, responsive, and optimized to turn visitors into clients.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="#pricing" className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition">
              Get Your Free Demo Website
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a href="#portfolio" className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 text-gray-800 font-semibold hover:bg-gray-50 transition">
              See Examples
            </a>
          </div>
          <div className="mt-6 flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2"><Rocket className="h-4 w-4 text-blue-600"/>Fast-loading</div>
            <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-blue-600"/>Trust-building</div>
          </div>
          <p className="mt-6 text-xs text-gray-500">Founded by a 14-year-old builder with a passion for clean design and real business results.</p>
        </div>
        <div className="relative h-[380px] md:h-[520px] order-1 md:order-2 rounded-xl overflow-hidden ring-1 ring-gray-200">
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-white/20" />
        </div>
      </div>
    </section>
  );
}
