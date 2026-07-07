export default function Footer() {
  return (
    <footer className="bg-teal-900 text-cream">
      <div className="mx-auto max-w-7xl px-6 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="text-2xl font-bold">
          <span className="text-cream">Skema</span>
          <span className="text-copper">lagt</span>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-8 text-cream/80">
          <a href="mailto:kontakt@skemalagt.dk" className="hover:text-cream transition-colors">
            kontakt@skemalagt.dk
          </a>
          <a href="tel:+4560700366" className="hover:text-cream transition-colors">
            +45 60 70 03 66
          </a>
        </div>
      </div>
      <div className="border-t border-cream/10 py-4 text-center text-sm text-cream/50">
        © {new Date().getFullYear()} Skemalagt. Alle rettigheder forbeholdes.
      </div>
    </footer>
  )
}
