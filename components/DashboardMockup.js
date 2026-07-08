// dashboard-mockup til hero - ægte JSX, ingen billeder/emojis/unicode-piktogrammer

const rows = [
  {
    customer: 'Lindevej 12, Hansen VVS ApS',
    tech: 'Frank',
    type: 'Kedelservice',
    status: 'Bekræftet',
    time: '09:00',
  },
  {
    customer: 'Søndergade 8, Berg Byg',
    tech: 'Michael',
    type: 'Tagrende',
    status: 'Afventer',
    time: '10:30',
  },
  {
    customer: 'Birkeallé 23, Lund Tømrer',
    tech: 'Frank',
    type: 'Vinduer',
    status: 'Igangværende',
    time: '11:00',
  },
  {
    customer: 'Havnegade 5, El-Centrum A/S',
    tech: 'Anders',
    type: 'Fejlsøgning',
    status: 'Bekræftet',
    time: '13:00',
  },
]

const filters = ['Alle teknikere', 'I dag', 'Alle typer']

export default function DashboardMockup() {
  return (
    <div className="rounded-xl overflow-hidden border border-cream/10 shadow-2xl bg-teal-800">
      {/* header bar med status-dots som farvede divs */}
      <div className="bg-teal-950 px-4 lg:px-6 py-3 lg:py-4 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
        </div>
        <span className="ml-2 text-cream/70 text-xs lg:text-sm font-medium">Skemalagt Dashboard</span>
      </div>

      {/* filter-chips */}
      <div className="flex gap-2 px-4 lg:px-6 pt-4 lg:pt-5 pb-2 flex-wrap">
        {filters.map((f) => (
          <span
            key={f}
            className="text-[11px] lg:text-xs text-cream/70 bg-cream/5 border border-cream/10 rounded-full px-3 py-1 lg:px-3.5 lg:py-1.5"
          >
            {f} ⌄
          </span>
        ))}
      </div>

      {/* opgave-tabel - "Type" skjules på små skærme, kunde-navn trunkeres i stedet for
          at tvinge sidescroll, så kortet altid fylder inden for skærmbredden */}
      <div className="px-4 lg:px-6 pb-4 lg:pb-6">
        <table className="w-full text-left text-xs sm:text-sm lg:text-base table-fixed sm:table-auto">
          <thead>
            <tr className="text-cream/50 border-b border-cream/10">
              <th className="py-2 lg:py-3 pr-2 sm:pr-4 font-medium w-[38%] sm:w-auto">Kunde</th>
              <th className="py-2 lg:py-3 pr-2 sm:pr-4 font-medium">Tekniker</th>
              <th className="py-2 lg:py-3 pr-2 sm:pr-4 font-medium hidden sm:table-cell">Type</th>
              <th className="py-2 lg:py-3 pr-2 sm:pr-4 font-medium">Status</th>
              <th className="py-2 lg:py-3 font-medium">Tid</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.customer} className="border-b border-cream/5 last:border-0 text-cream/90">
                <td className="py-2.5 lg:py-3.5 pr-2 sm:pr-4 truncate">{r.customer}</td>
                <td className="py-2.5 lg:py-3.5 pr-2 sm:pr-4 truncate">{r.tech}</td>
                <td className="py-2.5 lg:py-3.5 pr-4 hidden sm:table-cell">{r.type}</td>
                <td className="py-2.5 lg:py-3.5 pr-2 sm:pr-4">
                  {r.status === 'Bekræftet' ? (
                    <span className="inline-block bg-copper text-white text-[11px] lg:text-xs font-semibold px-2 sm:px-2.5 lg:px-3 py-0.5 lg:py-1 rounded-full whitespace-nowrap">
                      {r.status}
                    </span>
                  ) : (
                    <span className="text-cream/70 whitespace-nowrap">{r.status}</span>
                  )}
                </td>
                <td className="py-2.5 lg:py-3.5 whitespace-nowrap">{r.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* footer-statistik */}
      <div className="bg-teal-950 px-4 lg:px-6 py-3 lg:py-4 flex flex-wrap gap-x-6 gap-y-1 text-xs lg:text-sm">
        <span className="text-cream/70">12 ruter i dag</span>
        <span className="text-cream/70">8 medarbejdere</span>
        <span className="text-copper font-semibold">94% effektivitet</span>
      </div>
    </div>
  )
}
