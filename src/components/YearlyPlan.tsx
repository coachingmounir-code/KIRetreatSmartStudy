import { motion } from 'motion/react';
import { CalendarDays, Megaphone, Lock } from 'lucide-react';

export default function YearlyPlan() {
  const phases = [
    {
      title: "Phase 1: Fundament & Internal Launch",
      date: "April – Juni 2026",
      icon: CalendarDays,
      description: "In dieser Phase bündeln wir die Vorbereitung der Assets und den direkten Verkauf an die wärmste Zielgruppe.",
      steps: [
        { month: "April", title: "Assets & Landingpage", desc: "Aufbau der Landingpage, Skripterstellung & Generierung des KI-Werbefilms, Festlegung der Frühbucher-Boni." },
        { month: "Mai", title: "Der kombinierte Pitch", desc: "Kostenloses KI-Briefing Webinar für bestehende Unternehmenskunden und neue Interessenten. Pitch des Intensivseminars als nächster Schritt." },
        { month: "Juni", title: "Persönliches Closing", desc: "Direkte Follow-up-Telefonate. Ziel: 6 bis 8 der 12 Plätze durch das Netzwerk füllen." }
      ]
    },
    {
      title: "Phase 2: Externe Vermarktung & Sichtbarkeit",
      date: "Juli – September 2026",
      icon: Megaphone,
      description: "Wir gehen mit dem Werbefilm nach außen, um Restplätze zu vergeben und die Zusammenarbeit als Qualitätssiegel zu etablieren.",
      steps: [
        { month: "Juli", title: "Launch der Kampagne", desc: "Video-Release auf LinkedIn. Start der gezielten Direktansprache von potenziellen Neukunden." },
        { month: "August", title: "Fachlicher Fokus", desc: "Content über die Notwendigkeit von KI im Mittelstand. Betonung des USPs: KI-Strategie + mentaler Ausgleich." },
        { month: "September", title: "Intensivierter Outreach & Kaltakquise", desc: "Nachfassen bei Interessenten und kontinuierliches Posten von Content." }
      ]
    },
    {
      title: "Phase 3: Closing & Vorfreude",
      date: "Oktober – Dezember 2026",
      icon: Lock,
      description: "Der Fokus wechselt vom aktiven Marketing zur Verknappung, Finalisierung und der Vorbereitung der Teilnehmer.",
      steps: [
        { month: "Oktober", title: "Scarcity-Marketing", desc: "Klare Kommunikation der letzten Plätze. Kaltakquise bei Bedarf (Mounir)." },
        { month: "November", title: "Onboarding", desc: "Versand von Vorab-Fragebögen zur Erfassung der individuellen KI-Bedürfnisse für optimale Seminarplanung." },
        { month: "Dezember", title: "Mentale Einstimmung", desc: "Yoga & Mindset: Selina teilt erste Impulse für mentale Klarheit digital vorab." }
      ]
    }
  ];

  return (
    <section className="py-24 bg-stone-900 border-y border-stone-800">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-light mb-4">Jahresplan 2026</h2>
          <p className="text-stone-400 text-lg">Reverse Engineering für maximalen Erfolg.</p>
        </div>

        <div className="space-y-12">
          {phases.map((phase, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-stone-950 rounded-3xl p-8 md:p-10 border border-stone-800"
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="flex items-center gap-3 text-amber-500 mb-4">
                    <phase.icon className="w-6 h-6" />
                    <span className="font-mono text-sm tracking-wider uppercase">{phase.date}</span>
                  </div>
                  <h3 className="text-2xl font-serif mb-4">{phase.title}</h3>
                  <p className="text-stone-400 leading-relaxed">{phase.description}</p>
                </div>
                <div className="md:w-2/3 space-y-6">
                  {phase.steps.map((step, sIdx) => (
                    <div key={sIdx} className="flex gap-4">
                      <div className="w-24 shrink-0 pt-1">
                        <span className="text-stone-500 font-medium">{step.month}</span>
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">{step.title}</h4>
                        <p className="text-stone-400 text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
