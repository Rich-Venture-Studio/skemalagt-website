export default function IntegrationsStrip() {
  return (
    <section className="bg-cream border-b border-teal-900/10">
      <div className="mx-auto max-w-7xl px-6 py-12 text-center">
        <p className="text-sm font-semibold text-teal-900/60 tracking-wide uppercase">
          Integrerer med førende systemer
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {/* logo-fil skal ligge i /public/ordrestyring-logo.png */}
          <img
            src="/ordrestyring-logo.png"
            alt="Ordrestyring"
            className="h-28 sm:h-32 w-auto object-contain"
          />
        </div>
        <p className="mt-6 text-sm text-teal-900/60">
          Og mange flere på sigt – vi kan integrere med jeres system
        </p>
      </div>
    </section>
  )
}
