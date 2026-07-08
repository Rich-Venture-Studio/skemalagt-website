// dashboard-mockup til hero - ægte JSX, ingen billeder/emojis/unicode-piktogrammer.
// v3: kort-liste over 3 teknikere/8 opgaver + et VRP-inspireret rute-diagram (depot i midten,
// tre farvede ruter der grener ud), i stil med det klassiske "vehicle routing"-diagram.
// Ren SVG med markers til pile - ingen ekstern kort-tjeneste.

const techs = [
  { name: 'Frank', role: 'VVS-tekniker', jobs: '3 opgaver', from: 'fra 08:30', color: 'bg-copper' },
  { name: 'Anders', role: 'Elektriker', jobs: '3 opgaver', from: 'fra 09:00', color: 'bg-cream' },
  { name: 'Michael', role: 'Tømrer', jobs: '2 opgaver', from: 'fra 10:00', color: 'bg-copper-light' },
]

const filters = ['Alle teknikere', 'I dag', 'Alle typer']

// tre ruter ud fra ét depot, otte stop i alt - matcher techs-listen ovenfor
const routes = [
  { color: '#C6743A', markerId: 'arrowCopper', stops: [[140, 55], [82, 42], [46, 92]], nums: [1, 2, 3] },
  { color: '#0D3B44', markerId: 'arrowTeal', stops: [[292, 66], [347, 102], [368, 164]], nums: [4, 5, 6] },
  { color: '#E3986A', markerId: 'arrowCopperLight', stops: [[152, 198], [232, 214]], nums: [7, 8] },
]
const depot = [200, 122]

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

      {/* teknikere - farvet prik matcher rute-farven i kortet nedenfor */}
      <div className="px-4 pb-3 flex flex-col gap-2">
        {techs.map((t) => (
          <div key={t.name} className="flex items-center gap-2.5 text-sm">
            <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${t.color}`} />
            <span className="text-cream font-semibold">{t.name}</span>
            <span className="text-cream/50">— {t.role}</span>
            <span className="text-cream/50 ml-auto text-xs">
              {t.jobs} · {t.from}
            </span>
          </div>
        ))}
      </div>

      {/* rute-diagram: depot i midten, tre farvede ruter grener ud til i alt 8 stop */}
      <div className="mx-4 mb-4 rounded-lg overflow-hidden bg-[#F1ECE2] h-48">
        <svg viewBox="0 0 400 240" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
          <defs>
            {routes.map((r) => (
              <marker
                key={r.markerId}
                id={r.markerId}
                viewBox="0 0 10 10"
                refX="8"
                refY="5"
                markerWidth="5"
                markerHeight="5"
                orient="auto-start-reverse"
              >
                <path d="M0,0 L10,5 L0,10 z" fill={r.color} />
              </marker>
            ))}
          </defs>

          {routes.map((r) => {
            const points = [depot, ...r.stops]
            return (
              <g key={r.markerId}>
                {points.slice(0, -1).map((p, i) => {
                  const next = points[i + 1]
                  return (
                    <line
                      key={i}
                      x1={p[0]}
                      y1={p[1]}
                      x2={next[0]}
                      y2={next[1]}
                      stroke={r.color}
                      strokeWidth="2.5"
                      markerEnd={`url(#${r.markerId})`}
                    />
                  )
                })}
                {r.stops.map((s, i) => (
                  <g key={i}>
                    <circle cx={s[0]} cy={s[1]} r="10" fill={r.color} stroke="#F1ECE2" strokeWidth="2.5" />
                    <text
                      x={s[0]}
                      y={s[1] + 4}
                      textAnchor="middle"
                      fontSize="10"
                      fontWeight="700"
                      fill="#FFFFFF"
                    >
                      {r.nums[i]}
                    </text>
                  </g>
                ))}
              </g>
            )
          })}

          {/* depot */}
          <circle cx={depot[0]} cy={depot[1]} r="16" fill="#F1ECE2" stroke="#C6743A" strokeWidth="3" />
          <text x={depot[0]} y={depot[1] + 5} textAnchor="middle" fontSize="13" fontWeight="700" fill="#0D3B44">
            D
          </text>
        </svg>
      </div>

      {/* footer-statistik */}
      <div className="bg-teal-950 px-4 py-3 flex flex-wrap gap-x-6 gap-y-1 text-xs">
        <span className="text-cream/70">3 ruter i dag</span>
        <span className="text-cream/70">8 opgaver</span>
        <span className="text-copper font-semibold">94% effektivitet</span>
      </div>
    </div>
  )
}
