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
              desc: "Das Angebot dank Feedback und Erfahrungswerten verbessern und nochmal testen.",
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
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl text-stone-900"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-serif mb-6 text-center">Business Case: KI Intensivseminar Marokko</h3>
            <p className="text-stone-600 mb-12 text-center max-w-2xl mx-auto">
              Dieses einwöchige Intensivseminar ist sowohl für die bestehenden Unternehmenskunden von Smart Study als auch zur Akquise von Neukunden konzipiert. 
              Die Kalkulation basiert auf einem Netto-Ticketpreis von 4.999 €. Das Event ist bereits ab 5 Teilnehmern (Break-even) komplett durchfinanziert und profitabel. 
              <strong>Das finanzielle Risiko kann auf 3.000 Euro begrenzt werden, die für die Reservierung gebraucht werden. Wird 90 Tage vor Seminarbeginn storniert, wird das Geld komplett erstattet. Wird nach dieser Frist die Reservierung storniert, werden lediglich diese 3.000 Euro einbehalten.</strong>
            </p>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-stone-50 rounded-2xl p-6 md:p-8 border border-stone-200">
                <h4 className="text-xl font-serif mb-6 text-stone-900 border-b border-stone-300 pb-4">Übersicht der Gesamtkosten (Fix)</h4>
                <ul className="space-y-1">
                  <li className="flex justify-between p-3 rounded-lg hover:bg-white transition-colors">
                    <span className="text-stone-600">Villa (Marokko)</span>
                    <span className="font-medium text-stone-800">7.000 €</span>
                  </li>
                  <li className="flex justify-between p-3 rounded-lg hover:bg-white transition-colors">
                    <span className="text-stone-600">Verpflegung vor Ort</span>
                    <span className="font-medium text-stone-800">1.500 €</span>
                  </li>
                  <li className="flex justify-between p-3 rounded-lg hover:bg-white transition-colors">
                    <span className="text-stone-600">Team-Flüge</span>
                    <span className="font-medium text-stone-800">1.200 €</span>
                  </li>
                  <li className="flex justify-between p-3 rounded-lg hover:bg-white transition-colors">
                    <span className="text-stone-600">Arbeitsmaterialien & Extras</span>
                    <span className="font-medium text-stone-800">500 €</span>
                  </li>
                  <li className="flex justify-between p-3 rounded-lg hover:bg-white transition-colors">
                    <span className="text-stone-600">Produktion KI-Werbefilm</span>
                    <span className="font-medium text-stone-800">300 €</span>
                  </li>
                  <li className="flex justify-between p-3 rounded-lg hover:bg-white transition-colors">
                    <span className="text-stone-600">Honorar KI-Leitung</span>
                    <span className="font-medium text-stone-800">5.000 €</span>
                  </li>
                  <li className="flex justify-between p-3 rounded-lg hover:bg-white transition-colors">
                    <span className="text-stone-600">Honorar Yoga-Leitung</span>
                    <span className="font-medium text-stone-800">5.000 €</span>
                  </li>
                  <li className="flex justify-between p-4 mt-2 bg-stone-900 text-white rounded-xl shadow-sm">
                    <span className="font-medium">Gesamtkosten</span>
                    <span className="font-bold">20.500 €</span>
                  </li>
                </ul>
                <p className="text-xs text-stone-500 mt-5 italic px-3">* Teilnehmer-Flüge sind nicht inkludiert.</p>
              </div>

              <div className="bg-amber-50 rounded-2xl p-6 md:p-8 border border-amber-200/60 shadow-sm">
                <h4 className="text-xl font-serif mb-6 text-stone-900 border-b border-amber-200 pb-4">Profit-and-Loss (Smart Study)</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="text-stone-500">
                        <th className="pb-4 pt-2 font-medium px-3">Position</th>
                        <th className="pb-4 pt-2 font-medium text-right px-3">Pilot (5 TN)</th>
                        <th className="pb-4 pt-2 font-medium text-right px-3 text-amber-600">ausgebucht (12 TN)</th>
                      </tr>
                    </thead>
                    <tbody className="text-stone-700">
                      <tr className="border-t border-amber-200/50">
                        <td className="py-4 px-3">Umsatzerlös (netto)</td>
                        <td className="py-4 px-3 text-right font-medium">24.995,00 €</td>
                        <td className="py-4 px-3 text-right font-medium">59.988,00 €</td>
                      </tr>
                      <tr className="border-t border-amber-200/50">
                        <td className="py-4 px-3 text-stone-500">Abzug Gesamtkosten</td>
                        <td className="py-4 px-3 text-right text-stone-500">- 20.500,00 €</td>
                        <td className="py-4 px-3 text-right text-stone-500">- 20.500,00 €</td>
                      </tr>
                      <tr className="border-t border-amber-200 bg-amber-100/50">
                        <td className="py-4 px-3 font-medium text-stone-900">Operativer Gewinn</td>
                        <td className="py-4 px-3 text-right font-medium text-stone-900">4.495,00 €</td>
                        <td className="py-4 px-3 text-right font-medium text-stone-900">39.488,00 €</td>
                      </tr>
                      <tr className="border-t border-amber-200/50">
                        <td className="py-4 px-3 text-stone-500">10% Gewinnbeteiligung</td>
                        <td className="py-4 px-3 text-right text-stone-500">- 449,50 €</td>
                        <td className="py-4 px-3 text-right text-stone-500">- 3.948,80 €</td>
                      </tr>
                      <tr className="border-t-2 border-stone-800 bg-stone-900 text-white shadow-md">
                        <td className="py-5 px-4 font-medium rounded-l-xl text-base">Reingewinn Smart Study</td>
                        <td className="py-5 px-4 text-right font-medium text-amber-400">4.045,50 €</td>
                        <td className="py-5 px-4 text-right font-bold text-amber-400 rounded-r-xl text-lg">35.539,20 €</td>
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
