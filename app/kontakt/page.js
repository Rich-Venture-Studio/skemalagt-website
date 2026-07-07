import ContactForm from '@/components/ContactForm'

export const metadata = {
  title: 'Kontakt – Skemalagt',
  description: 'Book en gratis demo eller kontakt Skemalagt.',
}

export default function KontaktPage() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <h1 className="text-4xl sm:text-5xl font-bold text-teal-900">Lad os tage en snak</h1>
          <p className="mt-4 text-lg text-teal-900/70 max-w-xl">
            Book en gratis demo, spørg ind til priser, eller fortæl os om jeres setup. Vi svarer
            typisk inden for én arbejdsdag.
          </p>
          <div className="mt-10">
            <ContactForm />
          </div>
        </div>

        <div>
          <div className="bg-teal-900 text-cream rounded-xl p-8 space-y-6">
            <div>
              <p className="text-xs uppercase tracking-wide text-cream/50 mb-1">Email</p>
              <a
                href="mailto:kontakt@skemalagt.dk"
                className="font-semibold hover:text-copper-light transition-colors"
              >
                kontakt@skemalagt.dk
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-cream/50 mb-1">Telefon</p>
              <a
                href="tel:+4560700366"
                className="font-semibold hover:text-copper-light transition-colors"
              >
                +45 60 70 03 66
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-cream/50 mb-1">Åbningstider</p>
              <p className="font-semibold">Man–fre: 08.00–17.00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
