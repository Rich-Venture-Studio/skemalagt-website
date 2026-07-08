import Link from 'next/link'
import CalendarMockup from './CalendarMockup'

const steps = [
  {
    n: '1',
    title: 'Medarbejdere angiver tider',
    body: 'Sættes typisk op én gang ved faste skemaer. Har I mange deltidsansatte, f.eks. en restaurant, er det en mere tilbagevendende del af rutinen.',
  },
  {
    n: '2',
    title: 'Kunder booker',
    body: 'Automatisk booking via kundeportalen.',
  },
  {
    n: '3',
    title: 'Systemet optimerer',
    body: 'Ruter, opgaver og vagtplaner sættes automatisk.',
  },
]

export default function HowItWorksTeaser() {
  return (
    <section className="bg-teal-900 text-cream">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-center">Sådan virker det</h2>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div key={s.n}>
              <div className="w-10 h-10 rounded-full bg-copper text-white font-bold flex items-center justify-center">
                {s.n}
              </div>
              <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-cream/70 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-16 text-center text-cream/60">
          Systemet optimerer opgaver, ruter og vagtplaner automatisk, hele ugen på én gang:
        </p>
        <div className="mt-6">
          <CalendarMockup />
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/saadan-virker-det"
            className="inline-flex items-center gap-2 text-copper-light font-semibold hover:text-copper transition-colors"
          >
            Læs hele forklaringen <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
