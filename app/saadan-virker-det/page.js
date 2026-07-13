import Link from 'next/link'
import FinalCta from '@/components/FinalCta'
import DashboardMockup from '@/components/DashboardMockup'
import CalendarMockup from '@/components/CalendarMockup'

export const metadata = {
  title: 'Sådan virker det – Skemalagt',
  description:
    'Se hvordan Skemalagt automatiserer planlægning og ruteoptimering for jeres virksomhed, trin for trin.',
}

const audience = ['Rengøring', 'VVS', 'Elektrikere', 'Facility management', 'Field service']

const steps = [
  {
    n: '1',
    title: 'Vi forbinder jeres ERP',
    body: 'Skemalagt kobler sig op på jeres eksisterende system, f.eks. Ordrestyring. I skal ikke bruge teknisk viden, det klarer vi for jer.',
  },
  {
    n: '2',
    title: 'Algoritmen analyserer drift',
    body: 'Skemalagt analyserer opgaver, medarbejdere og geografi for at forstå jeres drift.',
  },
  {
    n: '3',
    title: 'Automatisk planlægning',
    body: 'Opgaver og skemaer allokeres automatisk ud fra medarbejdernes kompetencer, tilgængelighed og lokation.',
  },
  {
    n: '4',
    title: 'Skemaet tilbage i jeres ERP',
    body: 'Det færdige skema sendes automatisk tilbage til jeres eksisterende system, så medarbejderne ser det der hvor de plejer, uden en ny app at holde styr på.',
  },
  {
    n: '5',
    title: 'Følg resultater i dashboard',
    body: 'I følger effektivitet, ruter og udnyttelse i ét samlet overblik.',
  },
]

const benefits = [
  'Spar 5-11 timer ugentligt',
  'Mere effektive teknikere',
  'Mindre brændstofforbrug',
  'Bedre udnyttelse',
  'Hurtigere svartid',
  'Fuld synlighed',
]

export default function SaadanVirkerDetPage() {
  return (
    <>
      <section className="bg-teal-900 text-cream">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">Sådan virker det</h1>
          <p className="mt-5 text-lg text-cream/80 max-w-2xl mx-auto">
            Skemalagt er en dansk platform der automatiserer vagtplanlægning og ruteoptimering for
            service- og håndværksvirksomheder. Systemet forbinder sig til jeres eksisterende ERP,
            analyserer opgaver og medarbejdere, og planlægger derefter både skema og ruter, så I
            bruger mindre tid på administration og mere tid på kunderne.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {audience.map((a) => (
              <span
                key={a}
                className="bg-cream/10 border border-cream/20 text-cream font-medium px-4 py-2 rounded-full text-sm"
              >
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-teal-900 text-cream border-t border-cream/10">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-2xl sm:text-3xl font-bold">Sådan kommer I i gang</h2>
          <div className="mt-10 space-y-8">
            {steps.map((s) => (
              <div key={s.n} className="flex gap-5">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-copper text-white font-bold flex items-center justify-center">
                  {s.n}
                </div>
                <div>
                  <h3 className="text-lg font-bold">{s.title}</h3>
                  <p className="mt-1 text-cream/70 leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ruteoptimering vist i praksis - genbruger hero-mockuppen fra forsiden */}
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-teal-900">
              Ruteoptimering i praksis
            </h2>
            <p className="mt-4 text-teal-900/75 leading-relaxed">
              Hver morgen samler Skemalagt dagens opgaver og fordeler dem mellem teknikerne ud fra
              kompetencer, tilgængelighed, lokation og myldretid. Hver rute starter og slutter
              samme sted, så ingen kører unødvendige omveje.
            </p>
            <p className="mt-4 text-teal-900/75 leading-relaxed">
              Herunder ser du et eksempel: tre teknikere med otte opgaver bliver til tre
              optimerede ruter, automatisk.
            </p>
          </div>
          <div>
            <DashboardMockup />
          </div>
        </div>
      </section>

      {/* ugeplan vist i praksis - genbruger kalender-mockuppen fra forsiden */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-teal-900">
            Jeres uge, samlet ét sted
          </h2>
          <p className="mt-4 text-teal-900/75 leading-relaxed">
            I stedet for at stykke skemaet sammen dag for dag, ser I hele ugen på én gang.
            Herunder er et eksempel med tre teknikere og en fyldt uge, opgaver hele vejen igennem,
            ingen huller.
          </p>
        </div>
        <div className="mx-auto max-w-4xl px-6 pb-16">
          <CalendarMockup />
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-teal-900">
            Hvad får I konkret ud af det
          </h2>
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {benefits.map((b) => (
              <div
                key={b}
                className="flex items-center gap-3 bg-white border border-teal-900/10 rounded-lg px-5 py-4"
              >
                <span className="w-2 h-2 rounded-full bg-copper flex-shrink-0" />
                <span className="text-teal-900 font-medium">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-teal-900">Integration med ERP</h2>
          <p className="mt-4 text-teal-900/75 leading-relaxed">
            I dag integrerer Skemalagt med Ordrestyring. Flere integrationer er på vej – kører I et
            system, vi ikke nævner, så{' '}
            <Link href="/kontakt" className="text-copper font-semibold hover:text-copper-light">
              kontakt os
            </Link>
            , og vi ser på jeres opsætning.
          </p>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-teal-900">Sikkerhed og data</h2>
          <p className="mt-4 text-teal-900/75 leading-relaxed">
            Skemalagt overholder GDPR og hoster al data inden for EU. I ejer altid jeres egne data,
            og de bruges udelukkende til at drive jeres egen planlægning.
          </p>
        </div>
      </section>

      <FinalCta />
    </>
  )
}
