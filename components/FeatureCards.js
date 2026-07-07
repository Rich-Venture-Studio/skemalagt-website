// 4 kort - skal holdes til én sætning hver så grid-rækken bliver lige høj

const features = [
  {
    title: 'Arbejdsplan',
    body: 'Automatisk vagtplan der tager højde for kompetencer, tilgængelighed og individuelle ønsker om arbejdstider.',
  },
  {
    title: 'Ruteoptimering',
    body: 'Algoritmisk optimerede ruter der sparer tid og brændstof hele dagen.',
  },
  {
    title: 'Kundeportal',
    body: 'Kunder booker og ændrer tider selv, og telefonerne ringer markant mindre.',
  },
  {
    title: 'Fuldt overblik',
    body: 'Se opgaver, medarbejdere og kunder samlet i ét dashboard.',
  },
]

export default function FeatureCards() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-teal-900 text-center">
          Én platform. Fuld kontrol.
        </h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex flex-col h-full bg-white rounded-xl p-6 border border-teal-900/10 shadow-sm"
            >
              <h3 className="text-lg font-bold text-teal-900 mb-2">{f.title}</h3>
              <p className="text-teal-900/70 text-sm leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
