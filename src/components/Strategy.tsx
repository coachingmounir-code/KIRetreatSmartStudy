import { motion } from 'motion/react';
import { TrendingUp, Target, Maximize, BarChart3, PieChart, Calculator } from 'lucide-react';

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
          className="bg-stone-50 rounded-[2.5rem] p-8 md:p-14 shadow-2xl shadow-black/5 text-stone-900 relative overflow-hidden"
        >
          {/* Decorative background elements */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-stone-300/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-5xl mx-auto relative z-10">
            <div className="flex flex-col items-center justify-center mb-10">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-stone-100 flex items-center justify-center mb-6 text-amber-500">
                <BarChart3 className="w-8 h-8" />
              </div>
              <h3 className="text-3xl md:text-4xl font-serif text-center text-stone-900 tracking-tight">Business Case: KI Intensivseminar Marokko</h3>
            </div>
            
            <p className="text-stone-600 mb-14 text-center max-w-3xl mx-auto text-lg leading-relaxed">
              Dieses einwöchige Intensivseminar ist sowohl für die bestehenden Unternehmenskunden von Smart Study als auch zur Akquise von Neukunden konzipiert. 
              Die Kalkulation basiert auf einem Netto-Ticketpreis von 4.999 €. Das Event ist bereits ab 5 Teilnehmern (Break-even) komplett durchfinanziert und profitabel. <br/><br/>
              <span className="inline-block bg-amber-100/60 text-amber-900 px-5 py-3 rounded-2xl border border-amber-200/50 shadow-sm">
                <strong>Das finanzielle Risiko kann auf 3.000 Euro begrenzt werden</strong>, die für die Reservierung gebraucht werden. Wird 90 Tage vor Seminarbeginn storniert, wird das Geld komplett erstattet. Wird nach dieser Frist die Reservierung storniert, werden lediglich diese 3.000 Euro einbehalten.
              </span>
            </p>

            <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
              {/* Fixkosten Card */}
              <div className="bg-white rounded-3xl p-6 md:p-8 border border-stone-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-8 border-b border-stone-100 pb-5">
                  <div className="p-3 bg-stone-100 rounded-2xl text-stone-600">
                    <PieChart className="w-5 h-5" />
                  </div>
                  <h4 className="text-xl font-serif text-stone-900">Übersicht der Gesamtkosten (Fix)</h4>
                </div>
                
                <ul className="space-y-1">
                  <li className="flex justify-between p-3 rounded-xl hover:bg-stone-50 transition-colors duration-200">
                    <span className="text-stone-500 font-medium">Villa (Marokko)</span>
                    <span className="font-semibold text-stone-900">7.000 €</span>
                  </li>
                  <li className="flex justify-between p-3 rounded-xl hover:bg-stone-50 transition-colors duration-200">
                    <span className="text-stone-500 font-medium">Verpflegung vor Ort</span>
                    <span className="font-semibold text-stone-900">1.500 €</span>
                  </li>
                  <li className="flex justify-between p-3 rounded-xl hover:bg-stone-50 transition-colors duration-200">
                    <span className="text-stone-500 font-medium">Team-Flüge</span>
                    <span className="font-semibold text-stone-900">1.200 €</span>
                  </li>
                  <li className="flex justify-between p-3 rounded-xl hover:bg-stone-50 transition-colors duration-200">
                    <span className="text-stone-500 font-medium">Arbeitsmaterialien & Extras</span>
                    <span className="font-semibold text-stone-900">500 €</span>
                  </li>
                  <li className="flex justify-between p-3 rounded-xl hover:bg-stone-50 transition-colors duration-200">
                    <span className="text-stone-500 font-medium">Produktion KI-Werbefilm</span>
                    <span className="font-semibold text-stone-900">300 €</span>
                  </li>
                  <li className="flex justify-between p-3 rounded-xl hover:bg-stone-50 transition-colors duration-200">
                    <span className="text-stone-500 font-medium">Honorar KI-Leitung</span>
                    <span className="font-semibold text-stone-900">5.000 €</span>
                  </li>
                  <li className="flex justify-between p-3 rounded-xl hover:bg-stone-50 transition-colors duration-200">
                    <span className="text-stone-500 font-medium">Honorar Yoga-Leitung</span>
                    <span className="font-semibold text-stone-900">5.000 €</span>
                  </li>
                  <li className="flex justify-between p-[18px] mt-4 bg-stone-900 text-white rounded-2xl shadow-md">
                    <span className="font-medium">Gesamtkosten</span>
                    <span className="font-bold text-lg tracking-wide">20.500 €</span>
                  </li>
                </ul>
                <p className="text-xs text-stone-400 mt-5 italic px-3 text-center">* Teilnehmer-Flüge sind nicht inkludiert.</p>
              </div>

              {/* P&L Card */}
              <div className="bg-gradient-to-br from-amber-50 to-white rounded-3xl p-6 md:p-8 border border-amber-200/50 shadow-[0_8px_30px_rgb(245,158,11,0.08)] hover:shadow-[0_8px_30px_rgb(245,158,11,0.12)] transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-8 border-b border-amber-200/50 pb-5">
                  <div className="p-3 bg-amber-100/80 rounded-2xl text-amber-600">
                    <Calculator className="w-5 h-5" />
                  </div>
                  <h4 className="text-xl font-serif text-stone-900">Profit-and-Loss (Smart Study)</h4>
                </div>
                
                <div className="overflow-x-auto pb-2">
                  <table className="w-full text-left text-sm whitespace-nowrap">
                    <thead>
                      <tr>
                        <th className="pb-5 font-medium px-3 text-stone-400 uppercase tracking-wider text-xs align-bottom">Position</th>
                        <th className="pb-5 font-semibold text-right px-3 text-stone-800 align-bottom leading-tight">Minimum<br/><span className="text-stone-400 font-medium text-[10px] md:text-xs">5 Teilnehmer</span></th>
                        <th className="pb-5 font-bold text-right px-3 text-amber-600 align-bottom leading-tight">ausgebucht<br/><span className="text-amber-500/80 font-medium text-[10px] md:text-xs">12 Teilnehmer</span></th>
                      </tr>
                    </thead>
                    <tbody className="text-stone-700">
                      <tr className="border-t border-amber-100/50 hover:bg-white/50 transition-colors">
                        <td className="py-4 px-3 font-medium">Umsatzerlös (netto)</td>
                        <td className="py-4 px-3 text-right">24.995,00 €</td>
                        <td className="py-4 px-3 text-right text-stone-900 font-medium">59.988,00 €</td>
                      </tr>
                      <tr className="border-t border-amber-100/50 hover:bg-white/50 transition-colors">
                        <td className="py-4 px-3 text-stone-400">Abzug Gesamtkosten</td>
                        <td className="py-4 px-3 text-right text-stone-400">- 20.500,00 €</td>
                        <td className="py-4 px-3 text-right text-stone-400">- 20.500,00 €</td>
                      </tr>
                      <tr className="border-t border-amber-200/60 bg-white/60">
                        <td className="py-4 px-3 font-semibold text-stone-900">Operativer Gewinn</td>
                        <td className="py-4 px-3 text-right font-semibold text-stone-900">4.495,00 €</td>
                        <td className="py-4 px-3 text-right font-semibold text-stone-900">39.488,00 €</td>
                      </tr>
                      <tr className="border-t border-amber-100/50 hover:bg-white/50 transition-colors">
                        <td className="py-4 px-3 text-stone-400">10% Gewinnbeteiligung</td>
                        <td className="py-4 px-3 text-right text-stone-400">- 449,50 €</td>
                        <td className="py-4 px-3 text-right text-stone-400">- 3.948,80 €</td>
                      </tr>
                      
                      {/* Spacer row for visual breathing room before the final sum */}
                      <tr><td colSpan={3} className="h-6"></td></tr>
                      
                    </tbody>
                  </table>
                </div>

                {/* Reingewinn callout */}
                <div className="bg-stone-900 rounded-2xl flex justify-between items-center p-5 md:p-6 shadow-lg relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full duration-1000 transition-transform pointer-events-none"></div>
                  
                  <div>
                     <div className="text-amber-500/80 text-xs font-medium uppercase tracking-wider mb-1">Reingewinn Smart Study</div>
                     <div className="text-stone-300 font-medium text-sm md:text-base">Minimum: <span className="text-white">4.045,50 €</span></div>
                  </div>
                  <div className="text-right">
                     <div className="text-amber-400/80 text-xs font-medium uppercase tracking-wider mb-1">ausgebucht</div>
                     <div className="text-amber-400 font-bold text-xl md:text-2xl tracking-tight">35.539,20 €</div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
