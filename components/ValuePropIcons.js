// simple stroke-baserede ikoner til value-prop kortene, samme stil som ChevronArrow.js
// bygget af rene SVG-primitiver (circle/rect/line/polyline) - ingen paths, for at undgå fejl

export function ClockIcon({ className = '' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <polyline points="12 7 12 12 15.5 14" />
    </svg>
  )
}

export function MailIcon({ className = '' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <polyline points="3 7 12 13 21 7" />
    </svg>
  )
}

export function BalanceIcon({ className = '' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <line x1="5" y1="21" x2="5" y2="10" />
      <line x1="5" y1="7" x2="5" y2="3" />
      <line x1="12" y1="21" x2="12" y2="6" />
      <line x1="12" y1="3" x2="12" y2="4" />
      <line x1="19" y1="21" x2="19" y2="14" />
      <line x1="19" y1="11" x2="19" y2="3" />
      <line x1="2" y1="10" x2="8" y2="10" />
      <line x1="9" y1="6" x2="15" y2="6" />
      <line x1="16" y1="14" x2="22" y2="14" />
    </svg>
  )
}
