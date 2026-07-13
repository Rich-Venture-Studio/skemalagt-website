// to buede pile, én hver vej - viser at det er tovejs-kommunikation mellem ERP og Skemalagt,
// ikke et lineært forløb gennem tre kasser. Ren SVG, ingen unicode/font-glyphs.

export default function SyncArrows({ className = '' }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <marker
          id="syncArrowHead"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          markerUnits="userSpaceOnUse"
          orient="auto-start-reverse"
        >
          <path d="M0,0 L10,5 L0,10 z" fill="currentColor" />
        </marker>
      </defs>
      {/* frem: ERP -> Skemalagt */}
      <line
        x1="6"
        y1="24"
        x2="58"
        y2="24"
        stroke="currentColor"
        strokeWidth="3"
        markerEnd="url(#syncArrowHead)"
      />
      {/* retur: Skemalagt -> ERP */}
      <line
        x1="58"
        y1="42"
        x2="6"
        y2="42"
        stroke="currentColor"
        strokeWidth="3"
        markerEnd="url(#syncArrowHead)"
      />
    </svg>
  )
}
