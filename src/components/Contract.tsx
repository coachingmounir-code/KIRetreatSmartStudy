import { motion } from 'motion/react';
import { FileText } from 'lucide-react';

export default function Contract() {
  return (
    <section className="py-24 bg-stone-900">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-stone-100 text-stone-900 rounded-xl p-8 md:p-12 shadow-2xl font-serif"
        >
          <div className="flex items-center justify-center gap-3 mb-8 text-stone-400">
            <FileText className="w-6 h-6" />
            <span className="uppercase tracking-widest text-sm font-sans">Vertragsentwurf</span>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Kooperationsvertrag – "KI Intensivseminar Marokko"</h2>

          <div className="space-y-6 text-stone-700 leading-relaxed">
            <p><strong>Zwischen:</strong><br/>
            [Dein Vorname Nachname / Firmenname], [Deine Adresse]<br/>
            – nachfolgend "Dienstleister" genannt –</p>

            <p><strong>und</strong></p>

            <p><strong>Smart Study</strong> (vertreten durch Michael [Nachname / Firmenname]), [Adresse Smart Study]<br/>
            – nachfolgend "Auftraggeber" genannt –</p>

            <h3 className="text-lg font-bold text-stone-900 mt-8 mb-2">§ 1 Vertragsgegenstand</h3>
            <p>Gegenstand dieses Vertrages ist die gemeinsame Konzeption, Vermarktung und Durchführung eines einwöchigen "KI Intensivseminars in Marokko". Der Auftraggeber bietet dieses Intensivseminar seinen bestehenden Unternehmenskunden sowie neuen B2B-Geschäftskunden als Premium-Leistung an. Der Dienstleister übernimmt die inhaltliche Leitung (KI-Beratung/Seminare) und stellt mit Selina [Nachname] die Yoga-Leitung für die Dauer des Intensivseminars.</p>

            <h3 className="text-lg font-bold text-stone-900 mt-8 mb-2">§ 2 Rahmenbedingungen des Intensivseminars</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Maximale Teilnehmerzahl:</strong> 12 Personen.</li>
              <li><strong>Ticketpreis:</strong> 4.999,- Euro pro Teilnehmer.</li>
              <li><strong>Mindestteilnehmerzahl:</strong> Das Intensivseminar wird verbindlich durchgeführt, sobald 5 Anmeldungen vorliegen.</li>
            </ul>

            <h3 className="text-lg font-bold text-stone-900 mt-8 mb-2">§ 3 Kosten- und Risikoübernahme</h3>
            <p>Der Auftraggeber trägt das unternehmerische Risiko und übernimmt die Vorabinvestitionen in Höhe von maximal 3.300,- Euro. Diese setzen sich wie folgt zusammen:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>3.000,- Euro für die Anzahlung/Reservierung der Villa in Marokko.</li>
              <li>Maximal 300,- Euro für die Erstellung eines KI-Werbefilms für das Seminar durch den Dienstleister.</li>
            </ul>
            <p>Alle weiteren anfallenden Kosten (Verpflegung, Logistik etc.) werden aus den Ticket-Einnahmen gedeckt.</p>

            <h3 className="text-lg font-bold text-stone-900 mt-8 mb-2">§ 4 Honorar & Gewinnbeteiligung</h3>
            <p>Für die vollumfängliche Leistungserbringung wird folgende Vergütung vereinbart:</p>
            <ol className="list-decimal pl-5 space-y-1">
              <li><strong>Fixum Dienstleister:</strong> 5.000,- Euro (brutto).</li>
              <li><strong>Fixum Yoga-Leitung (Selina):</strong> 5.000,- Euro (brutto).</li>
              <li><strong>Gewinnbeteiligung:</strong> Der Dienstleister erhält zusätzlich 10 % der Nettogewinne, die aus dem Intensivseminar erwirtschaftet werden.</li>
            </ol>

            <h3 className="text-lg font-bold text-stone-900 mt-8 mb-2">§ 5 Zahlungsmodalitäten (Meilensteine)</h3>
            <p>Die Auszahlung der unter § 4 definierten Honorare erfolgt risikominimierend in zwei Tranchen:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Tranche 1:</strong> 50 % der Fixgagen (jeweils 2.500,- Euro brutto) werden fällig, sobald die Mindestteilnehmerzahl von 5 Personen verbindlich angemeldet ist.</li>
              <li><strong>Tranche 2:</strong> Die restlichen 50 % der Fixgagen sowie die 10 % Gewinnbeteiligung werden unmittelbar nach der vollständigen Durchführung des Intensivseminars in Rechnung gestellt und zur Zahlung fällig.</li>
            </ul>

            <h3 className="text-lg font-bold text-stone-900 mt-8 mb-2">§ 6 Nächste Schritte & Laufzeit</h3>
            <p>Nach Unterzeichnung dieses Vertrages erfolgen zeitnah die verbindliche Buchung der Villa, die Terminfestlegung für Marokko sowie drei Zoom-Meetings zur Abstimmung der gemeinsamen Marketingstrategie.</p>

            <div className="mt-16 pt-8 border-t border-stone-300 flex flex-col md:flex-row justify-between gap-12">
              <div className="flex-1">
                <div className="mb-2 text-sm text-stone-500">Ort, Datum</div>
                <div className="border-b border-stone-400 h-8"></div>
                <div className="mt-2 text-sm font-bold">Unterschrift Dienstleister</div>
              </div>
              <div className="flex-1">
                <div className="mb-2 text-sm text-stone-500">Ort, Datum</div>
                <div className="border-b border-stone-400 h-8"></div>
                <div className="mt-2 text-sm font-bold">Unterschrift Auftraggeber (Smart Study)</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
