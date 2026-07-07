const stats = [
  { value: '115.000 kr', label: 'sparet / medarbejder / år' },
  { value: '20%', label: 'mindre kørsel' },
  { value: '60%', label: 'mindre administration' },
]

export default function ResultsStats() {
  return (
    <section className="bg-teal-900 text-cream">
      <div className="mx-auto max-w-7xl px-6 py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">Resultater der tæller</h2>
        <div className="mt-12 grid sm:grid-cols-3 gap-8">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-4xl sm:text-5xl font-bold text-copper">{s.value}</div>
              <div className="mt-2 text-cream/70">{s.label}</div>
            </div>
          ))}
        </div>
        <p className="mt-10 text-xs text-cream/40">
          Baseret på gennemsnitlige resultater hos vores nuværende kunder.
        </p>
      </div>
    </section>
  )
}
