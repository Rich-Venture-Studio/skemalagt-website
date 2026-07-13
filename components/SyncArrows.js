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
      <path
        d="M6 24 Q 32 4 58 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        markerEnd="url(#syncArrowHead)"
      />
      {/* retur: Skemalagt -> ERP */}
      <path
        d="M58 40 Q 32 60 6 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        markerEnd="url(#syncArrowHead)"
      />
    </svg>
  )
}
