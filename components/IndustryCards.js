const industries = [
  { title: 'Rengøring', body: 'Optimér ruter og vagtplaner for rengøringsteams.' },
  { title: 'VVS', body: 'Automatisk planlægning af serviceopgaver.' },
  { title: 'Elektriker', body: 'Effektiv opgavedeling og ruteoptimering.' },
  { title: 'Facility management', body: 'Fuld kontrol over drift og bemanding.' },
]

export default function IndustryCards() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-teal-900 text-center">
          Bygget til servicevirksomheder
        </h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {industries.map((i) => (
            <div
              key={i.title}
              className="flex flex-col h-full bg-white border border-teal-900/10 rounded-xl p-6 shadow-sm"
            >
              <h3 className="text-lg font-bold text-teal-900 mb-2">{i.title}</h3>
              <p className="text-teal-900/70 text-sm leading-relaxed">{i.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
