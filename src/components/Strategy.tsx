import { motion } from 'motion/react';
import { TrendingUp, Target, Maximize } from 'lucide-react';

export default function Strategy() {
  return (
    <section className="py-24 bg-stone-950">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-light mb-4">Die 3-Phasen Strategie</h2>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto">Ein strukturierter Weg vom ersten Testlauf bis zur Skalierung auf 12 Seminare pro Jahr.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              phase: "Phase 1",
              title: "Angebot testen",
              desc: "Schnell & unkompliziert. Geringe Investitionskosten. Finanzielle Möglichkeiten sichtbar machen.",
              icon: Target
            },
            {
              phase: "Phase 2",
              title: "Optimieren",
              desc: "Das Angebot dank Feedback und Erfahrungswerten verbessern und mehrmals testen.",
              icon: TrendingUp
            },
            {
              phase: "Phase 3",
              title: "Skalieren",
              desc: "Ausbau und Skalierung auf 12 exklusive Seminare pro Jahr.",
              icon: Maximize
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="p-8 rounded-2xl bg-stone-900/50 border border-stone-800 relative group hover:border-amber-500/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center mb-6 text-amber-500">
                <item.icon className="w-6 h-6" />
              </div>
              <div className="text-amber-500 text-sm font-medium tracking-wider uppercase mb-2">{item.phase}</div>
              <h3 className="text-xl font-medium mb-3">{item.title}</h3>
              <p className="text-stone-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Business Case */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-stone-900 rounded-3xl p-8 md:p-12 border border-stone-800"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-serif mb-6 text-center">Business Case: KI Intensivseminar Marokko</h3>
            <p className="text-stone-400 mb-12 text-center max-w-2xl mx-auto">
              Dieses einwöchige Intensivseminar ist sowohl für die bestehenden Unternehmenskunden von Smart Study als auch zur Akquise von Neukunden konzipiert. 
              Die Kalkulation basiert auf einem Netto-Ticketpreis von 4.999 €. Das Event ist bereits ab 5 Teilnehmern (Break-even) komplett durchfinanziert und profitabel.
            </p>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-lg font-medium mb-6 text-amber-500">Übersicht der Gesamtkosten (Fix)</h4>
                <ul className="space-y-4 text-stone-300">
                  <li className="flex justify-between border-b border-stone-800 pb-3">
                    <span>Villa (Marokko)</span>
                    <span>7.000 €</span>
                  </li>
                  <li className="flex justify-between border-b border-stone-800 pb-3">
                    <span>Verpflegung vor Ort</span>
                    <span>1.500 €</span>
                  </li>
                  <li className="flex justify-between border-b border-stone-800 pb-3">
                    <span>Team-Flüge</span>
                    <span>1.200 €</span>
                  </li>
                  <li className="flex justify-between border-b border-stone-800 pb-3">
                    <span>Arbeitsmaterialien & Extras</span>
                    <span>500 €</span>
                  </li>
                  <li className="flex justify-between border-b border-stone-800 pb-3">
                    <span>Produktion KI-Werbefilm</span>
                    <span>300 €</span>
                  </li>
                  <li className="flex justify-between border-b border-stone-800 pb-3">
                    <span>Honorar KI-Leitung</span>
                    <span>5.000 €</span>
                  </li>
                  <li className="flex justify-between border-b border-stone-800 pb-3">
                    <span>Honorar Yoga-Leitung</span>
                    <span>5.000 €</span>
                  </li>
                  <li className="flex justify-between text-white font-medium pt-3 text-lg">
                    <span>Gesamtkosten</span>
                    <span>20.500 €</span>
                  </li>
                </ul>
                <p className="text-xs text-stone-500 mt-4 italic">* Teilnehmer-Flüge sind nicht inkludiert.</p>
              </div>

              <div>
                <h4 className="text-lg font-medium mb-6 text-amber-500">Profit-and-Loss (Smart Study)</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="border-b border-stone-700 text-stone-400">
                        <th className="pb-4 font-medium">Position</th>
                        <th className="pb-4 font-medium text-right">Pilot (5 TN)</th>
                        <th className="pb-4 font-medium text-right">Skaliert (12 TN)</th>
                      </tr>
                    </thead>
                    <tbody className="text-stone-300">
                      <tr className="border-b border-stone-800">
                        <td className="py-4">Umsatzerlös (netto)</td>
                        <td className="py-4 text-right">24.995,00 €</td>
                        <td className="py-4 text-right">59.988,00 €</td>
                      </tr>
                      <tr className="border-b border-stone-800">
                        <td className="py-4 text-stone-400">Abzug Gesamtkosten</td>
                        <td className="py-4 text-right text-stone-400">- 20.500,00 €</td>
                        <td className="py-4 text-right text-stone-400">- 20.500,00 €</td>
                      </tr>
                      <tr className="border-b border-stone-800 font-medium text-white">
                        <td className="py-4">Operativer Gewinn</td>
                        <td className="py-4 text-right">4.495,00 €</td>
                        <td className="py-4 text-right">39.488,00 €</td>
                      </tr>
                      <tr className="border-b border-stone-800">
                        <td className="py-4 text-stone-400">10% Gewinnbeteiligung</td>
                        <td className="py-4 text-right text-stone-400">- 449,50 €</td>
                        <td className="py-4 text-right text-stone-400">- 3.948,80 €</td>
                      </tr>
                      <tr className="text-amber-500 font-medium text-lg">
                        <td className="pt-6">Reingewinn Smart Study</td>
                        <td className="pt-6 text-right">4.045,50 €</td>
                        <td className="pt-6 text-right">35.539,20 €</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
