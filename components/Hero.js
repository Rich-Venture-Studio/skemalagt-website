import Link from 'next/link'
import DashboardMockup from './DashboardMockup'

export default function Hero() {
  return (
    <section className="bg-teal-900 text-cream">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:py-28 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <span className="inline-block bg-copper/15 text-copper-light text-xs font-semibold tracking-wide px-4 py-1.5 rounded-full border border-copper/30">
            BYGGET TIL DANSKE HÅNDVÆRKS- OG SERVICEVIRKSOMHEDER
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl font-bold leading-tight">
            Bedre skemaer. Bedre ruter.
            <br />
            <span className="text-copper">Bedre udnyttet arbejdsdag.</span>
          </h1>

          <p className="mt-6 text-lg text-cream/80 max-w-xl">
            Automatisk planlægning der passer til både medarbejdere og kunder, med ruter der er
            optimeret fra dag ét.
          </p>

          <div className="mt-8">
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-copper hover:bg-copper-light text-white font-semibold px-6 py-3.5 rounded-full transition-colors"
            >
              Book demo <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-cream/70">
            <span>Integrerer med jeres ERP</span>
            <span>Opsætning på få dage</span>
            <span>Ingen teknisk viden nødvendig</span>
          </div>
        </div>

        <div>
          <DashboardMockup />
        </div>
      </div>
    </section>
  )
}
