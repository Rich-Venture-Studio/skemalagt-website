import Link from 'next/link'

// OBS: begge tekstlinjer skal have eksplicit farve hver for sig.
// den gamle version arvede en forkert farve så "Klar til at optimere" blev usynlig.

export default function FinalCta() {
  return (
    <section className="bg-teal-900">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">
          <span className="text-cream">Klar til at optimere </span>
          <span className="text-copper">jeres drift?</span>
        </h2>
        <p className="mt-5 text-cream/80 text-lg">
          Ingen binding. Ingen risiko. Se værdien på under 30 minutter.
        </p>
        <div className="mt-8">
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 bg-copper hover:bg-copper-light text-white font-semibold px-7 py-3.5 rounded-full transition-colors"
          >
            Book demo
          </Link>
        </div>
      </div>
    </section>
  )
}
