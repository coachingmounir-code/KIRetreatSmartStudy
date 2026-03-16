import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function Investment() {
  return (
    <section className="py-24 bg-stone-950">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-light mb-4">Das Investment & Nächste Schritte</h2>
          <p className="text-amber-500 text-lg">Transparente Partnerschaft: Low Risk, High Reward</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-medium mb-4 text-white">Die Eckdaten des Retreats</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-stone-300">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <span><strong>Ticketpreis:</strong> 4.999,- Euro pro Teilnehmer.</span>
                </li>
                <li className="flex items-start gap-3 text-stone-300">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <span><strong>Kapazität:</strong> Exklusiver Rahmen mit maximal 12 Teilnehmerplätzen.</span>
                </li>
                <li className="flex items-start gap-3 text-stone-300">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <span><strong>Break-even & Go-Live:</strong> Verbindlich ab 5 Anmeldungen. Ab diesem Moment decken die Einnahmen alle Kosten.</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4 text-white">Überschaubares Vorab-Investment (Smart Study)</h3>
              <p className="text-stone-400 mb-4">Die initiale Investition ist stark gedeckelt und umfasst lediglich die Vorbereitung:</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-stone-300">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <span><strong>3.000,- Euro</strong> für die Reservierung der Premium-Villa in Marokko.</span>
                </li>
                <li className="flex items-start gap-3 text-stone-300">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <span><strong>Max. 300,- Euro</strong> für die Produktion des hochkonvertierenden KI-Werbefilms.</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-stone-900 rounded-3xl p-8 border border-stone-800"
          >
            <h3 className="text-xl font-medium mb-6 text-white">Honorare & Zahlungsmeilensteine</h3>
            <p className="text-stone-400 mb-6 text-sm">
              Alle weiteren Kosten werden direkt aus den laufenden Einnahmen generiert. Die Vergütung ist an den Erfolg gekoppelt:
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="p-5 rounded-xl bg-stone-950 border border-stone-800">
                <div className="text-amber-500 text-sm font-medium mb-2">Fixgage</div>
                <div className="text-stone-300">Jeweils 5.000,- € (brutto) für KI-Beratung & Durchführung sowie 5.000,- € (brutto) für Selina (Yoga).</div>
              </div>
              <div className="p-5 rounded-xl bg-stone-950 border border-stone-800">
                <div className="text-amber-500 text-sm font-medium mb-2">Erfolgsbeteiligung</div>
                <div className="text-stone-300">10 % Gewinnbeteiligung an den generierten Gewinnen des Retreats.</div>
              </div>
              <div className="p-5 rounded-xl bg-stone-950 border border-stone-800">
                <div className="text-amber-500 text-sm font-medium mb-2">Fairer Cashflow</div>
                <div className="text-stone-300 text-sm leading-relaxed">
                  50 % der Fixgagen werden erst fällig, sobald die 5 Mindestteilnehmer erreicht sind. Die restlichen 50 % sowie die Gewinnbeteiligung fließen unmittelbar nach Abschluss des Retreats.
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Next Steps */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-amber-600/10 border border-amber-500/20 rounded-3xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl font-serif mb-6 text-white">Der Fahrplan: Unsere nächsten Schritte</h3>
          <p className="text-stone-300 mb-10 max-w-2xl mx-auto">
            Sobald wir uns einig sind, gehen wir direkt in die Umsetzung, um das KI Retreat in Marokko zügig an eure Bestandskunden zu vermarkten:
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12 text-left">
            <div className="bg-stone-950/50 p-6 rounded-2xl border border-amber-500/10">
              <div className="text-amber-500 font-mono text-xl mb-3">01</div>
              <h4 className="text-white font-medium mb-2">Kooperationsvertrag</h4>
              <p className="text-stone-400 text-sm">Unterzeichnung unseres simplen, partnerschaftlichen Agreements.</p>
            </div>
            <div className="bg-stone-950/50 p-6 rounded-2xl border border-amber-500/10">
              <div className="text-amber-500 font-mono text-xl mb-3">02</div>
              <h4 className="text-white font-medium mb-2">Fixierung</h4>
              <p className="text-stone-400 text-sm">Verbindliche Reservierung der Villa und finale Terminfestlegung.</p>
            </div>
            <div className="bg-stone-950/50 p-6 rounded-2xl border border-amber-500/10">
              <div className="text-amber-500 font-mono text-xl mb-3">03</div>
              <h4 className="text-white font-medium mb-2">Strategie-Alignment</h4>
              <p className="text-stone-400 text-sm">Drei kurze Zoom-Calls zur genauen Abstimmung der Marketingstrategie.</p>
            </div>
          </div>

          <button className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 rounded-full font-medium transition-colors">
            Lass uns den Deal über WhatsApp finalisieren
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
