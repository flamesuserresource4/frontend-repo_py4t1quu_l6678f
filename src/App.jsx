import Hero from './components/Hero';
import FeaturesPricing from './components/FeaturesPricing';
import Portfolio from './components/Portfolio';
import AboutTestimonialsCTA from './components/AboutTestimonialsCTA';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-xl font-extrabold tracking-tight text-blue-700">Webnity</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            <a href="#pricing" className="hover:text-blue-700">Pricing</a>
            <a href="#portfolio" className="hover:text-blue-700">Portfolio</a>
            <a href="#cta" className="hover:text-blue-700">Contact</a>
            <a href="#pricing" className="ml-2 inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-white font-semibold hover:bg-blue-700 transition">Free Demo</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <FeaturesPricing />
        <Portfolio />
        <AboutTestimonialsCTA />
      </main>

      <footer className="border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Webnity. All rights reserved.</p>
          <p>Built by a 14-year-old founder focused on results.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
