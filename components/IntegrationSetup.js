import Link from 'next/link'
import ChevronArrow from './ChevronArrow'

const checklist = [
  'Importer opgaver automatisk',
  'Synkroniser planlægning direkte',
  'Undgå dobbeltindtastning',
]

export default function IntegrationSetup() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-teal-900">
            Fungerer med jeres eksisterende setup
          </h2>

          <ul className="mt-8 space-y-4">
            {checklist.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-copper/15 flex items-center justify-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-copper" />
                </span>
                <span className="text-teal-900/80 font-medium">{item}</span>
              </li>
            ))}
          </ul>

          <Link
            href="/kontakt"
            className="mt-8 block bg-white hover:bg-teal-900/5 border border-teal-900/15 rounded-xl px-6 py-5 transition-colors"
          >
            <span className="text-teal-900 font-semibold">
              Kører I et system, vi ikke nævner her? Kontakt os <span aria-hidden="true">→</span>
            </span>
          </Link>
        </div>

        <div>
          <div className="bg-teal-900 rounded-xl p-8 sm:p-10">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="bg-teal-800 border border-cream/10 rounded-lg px-5 py-4 text-center text-cream text-sm font-medium w-full sm:w-36">
                Jeres system / ERP / CRM
              </div>
              <ChevronArrow className="w-6 h-6 text-copper rotate-90 sm:rotate-0 flex-shrink-0" />
              <div className="bg-copper border border-copper-light/40 rounded-lg px-5 py-4 text-center text-white text-sm font-semibold w-full sm:w-36">
                SKEMALAGT / Optimering
              </div>
              <ChevronArrow className="w-6 h-6 text-copper rotate-90 sm:rotate-0 flex-shrink-0" />
              <div className="bg-teal-800 border border-cream/10 rounded-lg px-5 py-4 text-center text-cream text-sm font-medium w-full sm:w-36">
                Tilbage til / ERP / CRM
              </div>
            </div>
            <p className="mt-8 text-center text-cream/60 text-sm">
              Det optimerede skema sendes automatisk tilbage til jeres eget system – I skal ikke
              gøre noget manuelt.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
