import { ClockIcon, MailIcon, BalanceIcon } from './ValuePropIcons'

const cards = [
  {
    title: '1,5 time spildt pr. dag',
    body: 'Estimatet er baseret på en tekniker med 3-4 besøg om dagen, der typisk bruger halvanden time bag rattet mellem opgaverne – tid der kan hentes tilbage med smartere ruter.',
    Icon: ClockIcon,
  },
  {
    title: 'Automatisk kundekommunikation',
    body: 'Kunden får en mail og vælger selv det tidspunkt der passer bedst. I slipper for at ringe rundt for at aftale tider.',
    Icon: MailIcon,
  },
  {
    title: 'Bedre balance i vagtplanen',
    body: 'Fuldt overblik sikrer at ingen medarbejdere bliver over- eller underbelastet.',
    Icon: BalanceIcon,
  },
]

export default function ValuePropCards() {
  return (
    <section className="bg-teal-900 text-cream">
      <div className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-3 gap-6">
        {cards.map((c) => (
          <div key={c.title} className="bg-teal-800 rounded-xl p-8 border border-cream/10">
            <div className="w-12 h-12 rounded-full bg-copper/15 flex items-center justify-center mb-5">
              <c.Icon className="w-6 h-6 text-copper" />
            </div>
            <h3 className="text-xl font-bold text-copper-light mb-3">{c.title}</h3>
            <p className="text-cream/75 leading-relaxed">{c.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
