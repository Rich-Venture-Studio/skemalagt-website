// dashboard-mockup til hero - ægte JSX, ingen billeder/emojis/unicode-piktogrammer.
// v4: rettet to ting fra sidste runde:
// 1) pilene endte inde i destinations-cirklerne fordi linjerne gik helt til centrum og
//    marker-størrelsen skalerede med streg-tykkelsen - linjer trimmes nu til at stoppe ved
//    cirklens kant, og pile har en fast absolut størrelse (markerUnits="userSpaceOnUse").
// 2) kortet blev stukket skævt for at fylde boksen ud - boksen har nu samme billedformat
//    som SVG'ens viewBox (aspect-ratio i stedet for fast højde), så den altid passer uden
//    at skulle strække eller beskære noget.

const techs = [
  { name: 'Frank', role: 'VVS-tekniker', jobs: '3 opgaver', from: 'fra 08:30', color: 'bg-copper' },
  { name: 'Anders', role: 'Elektriker', jobs: '3 opgaver', from: 'fra 09:00', color: 'bg-teal-900 border border-cream/50' },
  { name: 'Michael', role: 'Tømrer', jobs: '2 opgaver', from: 'fra 10:00', color: 'bg-copper-light' },
]

const filters = ['Alle teknikere', 'I dag', 'Alle typer']

// tre ruter ud fra ét depot, otte stop i alt - matcher techs-listen ovenfor
const routes = [
  { color: '#C6743A', markerId: 'arrowCopper', stops: [[140, 55], [82, 42], [46, 92]], nums: [1, 2, 3] },
  { color: '#0D3B44', markerId: 'arrowTeal', stops: [[292, 66], [347, 102], [368, 164]], nums: [1, 2, 3] },
  { color: '#E3986A', markerId: 'arrowCopperLight', stops: [[152, 198], [232, 214]], nums: [1, 2] },
]
const depot = [200, 122]
const STOP_R = 11
const DEPOT_R = 16

// trimmer linjens slutpunkt så den stopper lige uden for målcirklens kant, i stedet for
// at gå helt ind til centrum (det er det der fik pilene til at forsvinde ind i cirklerne)
function trimToEdge(from, to, radius, gap = 1.5) {
  const dx = to[0] - from[0]
  const dy = to[1] - from[1]
  const dist = Math.sqrt(dx * dx + dy * dy) || 1
  const t = (dist - radius - gap) / dist
  return [from[0] + dx * t, from[1] + dy * t]
}

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

      {/* rute-diagram: depot i midten, tre farvede ruter grener ud til i alt 8 stop.
          aspect-[5/3] matcher viewBox 400x240 nøjagtigt, så kortet altid fylder boksen
          uden at skulle strækkes eller beskæres */}
      <div className="mx-4 mb-4 rounded-lg overflow-hidden bg-[#F1ECE2] aspect-[5/3]">
        <svg viewBox="0 0 400 240" className="block w-full h-full">
          <defs>
            {routes.map((r) => (
              <marker
                key={r.markerId}
                id={r.markerId}
                viewBox="0 0 10 10"
                refX="8.5"
                refY="5"
                markerWidth="8"
                markerHeight="8"
                markerUnits="userSpaceOnUse"
                orient="auto-start-reverse"
              >
                <path d="M0,0 L10,5 L0,10 z" fill={r.color} />
              </marker>
            ))}
          </defs>

          {/* fuld baggrund - kortets "grund" */}
          <rect x="0" y="0" width="400" height="240" fill="#F1ECE2" />

          {/* kort-baggrund: park, vand og et par lyse "veje" så ruterne ser ud til at ligge på et kort */}
          <rect x="8" y="8" width="95" height="55" rx="10" fill="#CFE0C6" opacity="0.8" />
          <path d="M330 0 L400 25 L400 90 L350 60 Z" fill="#C7DCE8" opacity="0.8" />
          <rect x="300" y="175" width="100" height="65" rx="10" fill="#CFE0C6" opacity="0.6" />
          <line x1="0" y1="30" x2="400" y2="30" stroke="#FFFFFF" strokeWidth="3" opacity="0.6" />
          <line x1="0" y1="180" x2="400" y2="190" stroke="#FFFFFF" strokeWidth="3" opacity="0.6" />
          <line x1="130" y1="0" x2="115" y2="240" stroke="#FFFFFF" strokeWidth="3" opacity="0.6" />
          <line x1="270" y1="0" x2="285" y2="240" stroke="#FFFFFF" strokeWidth="3" opacity="0.6" />
          <line x1="0" y1="110" x2="400" y2="115" stroke="#FFFFFF" strokeWidth="2" opacity="0.4" />

          {routes.map((r) => {
            const points = [depot, ...r.stops]
            const last = r.stops[r.stops.length - 1]
            return (
              <g key={r.markerId}>
                {points.slice(0, -1).map((p, i) => {
                  const next = points[i + 1]
                  const end = trimToEdge(p, next, STOP_R)
                  return (
                    <line
                      key={i}
                      x1={p[0]}
                      y1={p[1]}
                      x2={end[0]}
                      y2={end[1]}
                      stroke={r.color}
                      strokeWidth="2.5"
                      markerEnd={`url(#${r.markerId})`}
                    />
                  )
                })}
                {/* retur til depot - samme streg-stil, pilen viser retningen hjem */}
                {(() => {
                  const end = trimToEdge(last, depot, DEPOT_R)
                  return (
                    <line
                      x1={last[0]}
                      y1={last[1]}
                      x2={end[0]}
                      y2={end[1]}
                      stroke={r.color}
                      strokeWidth="2.5"
                      markerEnd={`url(#${r.markerId})`}
                    />
                  )
                })()}
                {r.stops.map((s, i) => (
                  <g key={i}>
                    <circle cx={s[0]} cy={s[1]} r={STOP_R} fill={r.color} stroke="#F1ECE2" strokeWidth="2.5" />
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

          {/* depot - tegnes sidst så den dækker pænt over alle rute-starter */}
          <circle cx={depot[0]} cy={depot[1]} r={DEPOT_R} fill="#F1ECE2" stroke="#C6743A" strokeWidth="3" />
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
