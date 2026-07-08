// anden mockup, placeret længere nede på siden (ved "Sådan virker det") - stil inspireret
// af hvordan kladdekaj.dk viser et fyldt app-skærmbillede: mørk browser-chrome header med
// fake adresselinje, lyst indhold under. Ren JSX, ingen billeder.

const days = [
  {
    label: 'Man',
    date: '6.',
    blocks: [
      { name: 'Frank', task: 'Kedelservice', color: 'bg-copper text-white', height: 'h-16' },
      { name: 'Anders', task: 'Fejlsøgning', color: 'bg-teal-900 text-white', height: 'h-24' },
    ],
  },
  {
    label: 'Tir',
    date: '7.',
    blocks: [
      { name: 'Michael', task: 'Tagrende', color: 'bg-copper-light text-teal-950', height: 'h-20' },
      { name: 'Frank', task: 'Vinduer', color: 'bg-copper text-white', height: 'h-16' },
      { name: 'Anders', task: 'Eftersyn', color: 'bg-teal-900 text-white', height: 'h-12' },
    ],
  },
  {
    label: 'Ons',
    date: '8.',
    blocks: [
      { name: 'Frank', task: 'Kedelservice', color: 'bg-copper text-white', height: 'h-24' },
      { name: 'Michael', task: 'Installation', color: 'bg-copper-light text-teal-950', height: 'h-16' },
    ],
  },
  {
    label: 'Tor',
    date: '9.',
    blocks: [
      { name: 'Anders', task: 'Fejlsøgning', color: 'bg-teal-900 text-white', height: 'h-16' },
      { name: 'Michael', task: 'Tagrende', color: 'bg-copper-light text-teal-950', height: 'h-20' },
      { name: 'Frank', task: 'Service', color: 'bg-copper text-white', height: 'h-12' },
    ],
  },
  {
    label: 'Fre',
    date: '10.',
    blocks: [
      { name: 'Frank', task: 'Kedelservice', color: 'bg-copper text-white', height: 'h-20' },
      { name: 'Anders', task: 'Eftersyn', color: 'bg-teal-900 text-white', height: 'h-16' },
      { name: 'Michael', task: 'Vinduer', color: 'bg-copper-light text-teal-950', height: 'h-14' },
    ],
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
      <div className="px-5 sm:px-6 pt-5 pb-3 flex items-center justify-between">
        <span className="font-semibold text-teal-900">Ugeplan · 6.–10. juli 2026</span>
        <span className="text-xs text-teal-900/50 hidden sm:inline">6 teknikere · 33 opgaver</span>
      </div>

      {/* ugekalender - 5 dage, blokke i forskellig højde for at ligne en fyldt uge */}
      <div className="px-3 sm:px-6 pb-6 grid grid-cols-5 gap-2 sm:gap-3">
        {days.map((d) => (
          <div key={d.label} className="min-w-0">
            <div className="text-center mb-2">
              <p className="text-[11px] sm:text-xs font-semibold text-teal-900">{d.label}</p>
              <p className="text-[10px] text-teal-900/40">{d.date}</p>
            </div>
            <div className="flex flex-col gap-1.5">
              {d.blocks.map((b, i) => (
                <div
                  key={i}
                  className={`${b.color} ${b.height} rounded-md px-1.5 sm:px-2 py-1 flex flex-col justify-center overflow-hidden`}
                >
                  <p className="text-[10px] sm:text-[11px] font-semibold truncate">{b.name}</p>
                  <p className="text-[9px] sm:text-[10px] opacity-90 truncate">{b.task}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
