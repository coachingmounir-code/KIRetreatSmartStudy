import { motion } from 'motion/react';
import { MapPin, Brain, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end justify-center overflow-hidden pb-16 md:pb-32">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 bg-stone-950">
        <img 
          src="/hero.jpg" 
          alt="Michael und Mounir in Marokko" 
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        {/* Adjusted the gradient to be darker at the bottom for the text */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs md:text-sm font-medium tracking-wide uppercase mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Erweiterungs-Pitch für Smart Study</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-light tracking-tight mb-4 md:mb-6 leading-tight text-white drop-shadow-md">
            KI Intensivseminar Marokko<br className="md:hidden" /> – <span className="text-amber-500 italic block md:inline mt-2 md:mt-0">Premium-Angebot für Smart Study</span>
          </h1>
          
          <p className="text-base md:text-lg text-stone-200 font-light mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
            Dieses einwöchige Intensivseminar ist sowohl für die bestehenden Unternehmenskunden von Smart Study als auch für neue, visionäre Geschäftskunden konzipiert. 
            Die perfekte Symbiose aus High-End KI-Strategie und mentaler Klarheit.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
            <div className="flex items-center gap-2 md:gap-3 text-sm md:text-base text-stone-100 font-medium">
              <Brain className="w-4 h-4 md:w-5 md:h-5 text-amber-400" />
              <span>KI-Implementierung</span>
            </div>
            <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-stone-500"></div>
            <div className="flex items-center gap-2 md:gap-3 text-sm md:text-base text-stone-100 font-medium">
              <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-amber-400" />
              <span>Yoga & Mindset</span>
            </div>
            <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-stone-500"></div>
            <div className="flex items-center gap-2 md:gap-3 text-sm md:text-base text-stone-100 font-medium">
              <MapPin className="w-4 h-4 md:w-5 md:h-5 text-amber-400" />
              <span>Premium Villa, Marokko</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

