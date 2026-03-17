import { motion } from 'motion/react';
import { ArrowRight, ExternalLink, Sparkles } from 'lucide-react';

export default function LandingPagePromo() {
  return (
    <section className="py-24 bg-stone-950 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-stone-900 to-stone-900/50 rounded-3xl p-8 md:p-12 lg:p-16 border border-stone-800 shadow-2xl relative overflow-hidden group text-center"
        >
          {/* Subtle hover effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/5 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            <span>Das Seminar im Detail</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 leading-tight">
            Tauche ein in die Welt des <br className="hidden md:block"/> 
            <span className="text-amber-500">KI Intensivseminars Marokko</span>
          </h2>
          
          <p className="text-stone-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Möchtest du dir einen umfassenden Eindruck vom Programm, der traumhaften Location und allen Details machen? Besuche unsere dedizierte Landingpage für das Event.
          </p>

          <a 
            href="https://ki-retreat-marokko.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-stone-950 px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:shadow-[0_0_30px_rgb(245,158,11,0.3)] hover:-translate-y-1 shadow-lg group/btn"
          >
            Zur offiziellen Landingpage
            <ExternalLink className="w-5 h-5 group-hover/btn:rotate-12 transition-transform" />
          </a>
          
          <div className="mt-8 flex items-center justify-center gap-2 text-stone-500 text-sm">
            <ArrowRight className="w-4 h-4" />
            <span>ki-retreat-marokko.vercel.app</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
