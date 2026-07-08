// anden mockup, placeret ved "Sådan virker det" - stil inspireret af hvordan kladdekaj.dk
// viser et fyldt app-skærmbillede: mørk browser-chrome header med fake adresselinje.
//
// v3: hver dags-celle kan nu rumme 1-3 opgaver stablet oven på hinanden (efter hinanden,
// aldrig overlappende), i stedet for præcis én stor blok pr. dag. Giver et mere realistisk
// "fyldt uge"-udtryk uden at gå på kompromis med læsbarheden.

import { Fragment } from 'react'

const days = [
  { label: 'Man', date: '6.' },
  { label: 'Tir', date: '7.' },
  { label: 'Ons', date: '8.' },
  { label: 'Tor', date: '9.' },
  { label: 'Fre', date: '10.' },
]

const technicians = [
  {
    name: 'Frank',
    dot: 'bg-copper',
    block: 'bg-copper text-white',
    week: [
      ['Kedelservice'],
      ['Vinduer', 'Eftersyn'],
      ['Kedelservice', 'Fejlsøgning', 'Installation'],
      ['Service'],
      ['Kedelservice', 'Tagrende'],
    ],
  },
  {
    name: 'Anders',
    dot: 'bg-teal-900',
    block: 'bg-teal-900 text-white',
    week: [
      ['Fejlsøgning', 'Eftersyn'],
      ['Eftersyn'],
      ['Tagrende', 'Installation', 'Service'],
      ['Fejlsøgning'],
      ['Eftersyn', 'Vinduer'],
    ],
  },
  {
    name: 'Michael',
    dot: 'bg-copper-light',
    block: 'bg-copper-light text-teal-950',
    week: [
      ['Tagrende', 'Vinduer'],
      ['Installation'],
      ['Vinduer', 'Kedelservice'],
      ['Tagrende', 'Service', 'Eftersyn'],
      ['Kedelservice'],
    ],
  },
]

const totalTasks = technicians.reduce(
  (sum, t) => sum + t.week.reduce((s, day) => s + day.length, 0),
  0
)

export default function CalendarMockup() {
  return (
    <div className="rounded-xl overflow-hidden border border-teal-900/10 shadow-2xl bg-white">
      {/* browser-chrome header med fake adresselinje */}
      <div className="bg-teal-950 px-4 py-3 flex items-center gap-3">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
        </div>
        <span className="text-cream/50 text-xs">app.skemalagt.dk</span>
      </div>

      {/* uge-header */}
      <div className="px-5 sm:px-6 pt-5 pb-4 flex items-center justify-between">
        <span className="font-semibold text-teal-900">Ugeplan · 6.–10. juli 2026</span>
        <span className="text-xs text-teal-900/50 hidden sm:inline">
          3 teknikere · {totalTasks} opgaver
        </span>
      </div>

      {/* svømmebane-grid: én række pr. tekniker, én kolonne pr. dag. hver celle kan have
          1-3 opgaver stablet efter hinanden - aldrig overlappende */}
      <div className="px-3 sm:px-6 pb-6">
        <div className="grid grid-cols-[64px_repeat(5,1fr)] sm:grid-cols-[110px_repeat(5,1fr)] gap-1.5 sm:gap-2 items-start">
          <div />
          {days.map((d) => (
            <div key={d.label} className="text-center">
              <p className="text-[11px] sm:text-xs font-semibold text-teal-900">{d.label}</p>
              <p className="text-[10px] text-teal-900/40">{d.date}</p>
            </div>
          ))}

          {technicians.map((t) => (
            <Fragment key={t.name}>
              <div className="flex items-center gap-1.5 sm:gap-2 min-w-0 pt-1.5">
                <span className={`w-2 h-2 rounded-full flex-shrink-0 ${t.dot}`} />
                <span className="text-[11px] sm:text-xs font-semibold text-teal-900 truncate">
                  {t.name}
                </span>
              </div>
              {t.week.map((dayTasks, i) => (
                <div key={i} className="flex flex-col gap-1">
                  {dayTasks.map((task, j) => (
                    <div
                      key={j}
                      className={`${t.block} rounded-md px-1 sm:px-2 py-1.5 flex items-center justify-center text-center`}
                    >
                      <span className="text-[8px] sm:text-[9px] font-semibold leading-tight truncate">
                        {task}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}
