// anden mockup, placeret ved "Sådan virker det" - stil inspireret af hvordan kladdekaj.dk
// viser et fyldt app-skærmbillede: mørk browser-chrome header med fake adresselinje.
//
// v2: bygget som rækker pr. medarbejder (svømmebaner) i stedet for blandede blokke pr. dag.
// Det gamle layout blandede alle tre teknikere sammen under hver dag, hvilket så ud som om
// de skiftedes til at arbejde. Nu har hver tekniker sin egen række med en opgave hver dag
// hele ugen, så det er tydeligt at alle tre har fyldte skemaer.

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
    tasks: ['Kedelservice', 'Vinduer', 'Kedelservice', 'Service', 'Kedelservice'],
  },
  {
    name: 'Anders',
    dot: 'bg-teal-900',
    block: 'bg-teal-900 text-white',
    tasks: ['Fejlsøgning', 'Eftersyn', 'Tagrende', 'Fejlsøgning', 'Eftersyn'],
  },
  {
    name: 'Michael',
    dot: 'bg-copper-light',
    block: 'bg-copper-light text-teal-950',
    tasks: ['Tagrende', 'Installation', 'Vinduer', 'Tagrende', 'Kedelservice'],
  },
]

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
        <span className="text-xs text-teal-900/50 hidden sm:inline">3 teknikere · 15 opgaver</span>
      </div>

      {/* svømmebane-grid: én række pr. tekniker, én kolonne pr. dag - alle celler udfyldt */}
      <div className="px-3 sm:px-6 pb-6">
        <div className="grid grid-cols-[64px_repeat(5,1fr)] sm:grid-cols-[110px_repeat(5,1fr)] gap-1.5 sm:gap-2">
          <div />
          {days.map((d) => (
            <div key={d.label} className="text-center">
              <p className="text-[11px] sm:text-xs font-semibold text-teal-900">{d.label}</p>
              <p className="text-[10px] text-teal-900/40">{d.date}</p>
            </div>
          ))}

          {technicians.map((t) => (
            <Fragment key={t.name}>
              <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                <span className={`w-2 h-2 rounded-full flex-shrink-0 ${t.dot}`} />
                <span className="text-[11px] sm:text-xs font-semibold text-teal-900 truncate">
                  {t.name}
                </span>
              </div>
              {t.tasks.map((task, i) => (
                <div
                  key={i}
                  className={`${t.block} rounded-md px-1 sm:px-2 py-2.5 min-h-[46px] flex items-center justify-center text-center`}
                >
                  <span className="text-[9px] sm:text-[10px] font-semibold leading-tight">
                    {task}
                  </span>
                </div>
              ))}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}
