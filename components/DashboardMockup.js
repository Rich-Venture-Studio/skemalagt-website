// dashboard-mockup til hero - ægte JSX, ingen billeder/emojis/unicode-piktogrammer.
// v2: kombination af rute-liste + stiliseret kort, inspireret af rigtige app-skærmbilleder
// (Ruter-siden og kalenderen). Alt stablet lodret ved alle skærmbredder med det samme
// for at undgå den overflow/klip-fejl vi ramte sidst med en bred tabel i et fast kort.

const stops = [
  {
    n: '1',
    dotClass: 'bg-cream text-teal-900',
    name: 'Frank',
    role: 'VVS-tekniker',
    time: '09:00–10:15',
    task: 'Kedelservice',
    address: 'Lindevej 12, Hansen VVS ApS',
  },
  {
    n: '2',
    dotClass: 'bg-copper text-white',
    name: 'Anders',
    role: 'Elektriker',
    time: '13:00–14:00',
    task: 'Fejlsøgning',
    address: 'Havnegade 5, El-Centrum A/S',
  },
]

const filters = ['Alle teknikere', 'I dag', 'Alle typer']

export default function DashboardMockup() {
  return (
    <div className="rounded-xl overflow-hidden border border-cream/10 shadow-2xl bg-teal-800">
      {/* header bar med status-dots som farvede divs */}
      <div className="bg-teal-950 px-4 py-3 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
        </div>
        <span className="ml-2 text-cream/70 text-xs font-medium">Skemalagt Dashboard</span>
      </div>

      {/* filter-chips */}
      <div className="flex gap-2 px-4 pt-4 pb-3 flex-wrap">
        {filters.map((f) => (
          <span
            key={f}
            className="text-[11px] text-cream/70 bg-cream/5 border border-cream/10 rounded-full px-3 py-1"
          >
            {f} ⌄
          </span>
        ))}
      </div>

      {/* kompakt rute-liste - to stop, matcher rigtige rute-navne/adresser fra resten af sitet */}
      <div className="px-4 pb-4 space-y-3">
        {stops.map((s) => (
          <div key={s.n} className="flex items-start gap-3">
            <span
              className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${s.dotClass}`}
            >
              {s.n}
            </span>
            <div className="min-w-0">
              <p className="text-cream text-sm font-semibold truncate">
                {s.name} <span className="text-cream/50 font-normal">— {s.role}</span>
              </p>
              <p className="text-cream/70 text-xs mt-0.5">
                {s.time} · {s.task}
              </p>
              <p className="text-cream/50 text-xs truncate">{s.address}</p>
            </div>
          </div>
        ))}
      </div>

      {/* stiliseret "kort" med rute mellem de to stop - ren SVG, ingen ekstern map-tjeneste */}
      <div className="mx-4 mb-4 rounded-lg overflow-hidden h-44">
        <svg viewBox="0 0 400 220" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <rect width="400" height="220" fill="#E8E2D6" />
          {/* park */}
          <rect x="40" y="28" width="80" height="58" rx="12" fill="#CFE0C6" />
          {/* vand */}
          <path d="M280 0 L400 35 L400 100 L300 55 Z" fill="#C7DCE8" />
          {/* små veje */}
          <line x1="0" y1="70" x2="400" y2="70" stroke="#FFFFFF" strokeWidth="3" opacity="0.7" />
          <line x1="0" y1="140" x2="400" y2="150" stroke="#FFFFFF" strokeWidth="3" opacity="0.7" />
          <line x1="120" y1="0" x2="100" y2="220" stroke="#FFFFFF" strokeWidth="3" opacity="0.7" />
          <line x1="260" y1="0" x2="280" y2="220" stroke="#FFFFFF" strokeWidth="3" opacity="0.7" />
          {/* optimeret rute */}
          <path
            d="M60 158 C 120 118, 150 190, 210 130 S 320 70, 355 95"
            fill="none"
            stroke="#C6743A"
            strokeWidth="4"
            strokeLinecap="round"
          />
          {/* stop-markører */}
          <circle cx="60" cy="158" r="9" fill="#0D3B44" stroke="#FFFFFF" strokeWidth="2.5" />
          <text x="60" y="162" textAnchor="middle" fontSize="10" fontWeight="700" fill="#F4F1EC">
            1
          </text>
          <circle cx="355" cy="95" r="9" fill="#C6743A" stroke="#FFFFFF" strokeWidth="2.5" />
          <text x="355" y="99" textAnchor="middle" fontSize="10" fontWeight="700" fill="#FFFFFF">
            2
          </text>
        </svg>
      </div>

      {/* footer-statistik */}
      <div className="bg-teal-950 px-4 py-3 flex flex-wrap gap-x-6 gap-y-1 text-xs">
        <span className="text-cream/70">12 ruter i dag</span>
        <span className="text-cream/70">8 medarbejdere</span>
        <span className="text-copper font-semibold">94% effektivitet</span>
      </div>
    </div>
  )
}
