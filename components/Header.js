'use client'

import Link from 'next/link'
import { useState } from 'react'

const links = [
  { href: '/', label: 'Forside' },
  { href: '/kontakt', label: 'Kontakt' },
  { href: '/saadan-virker-det', label: 'Sådan virker det' },
]

export default function Header() {
  // mobil-menu åben/lukket
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur border-b border-teal-900/10">
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-20">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          <span className="text-teal-900">Skema</span>
          <span className="text-copper">lagt</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-teal-900/80 hover:text-teal-900 font-medium transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/kontakt"
            className="inline-flex items-center bg-copper hover:bg-copper-light text-white font-semibold px-5 py-2.5 rounded-full transition-colors"
          >
            Book demo
          </Link>
        </div>

        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label="Åbn menu"
          aria-expanded={open}
        >
          <span className="block w-6 h-0.5 bg-teal-900 mb-1.5" />
          <span className="block w-6 h-0.5 bg-teal-900 mb-1.5" />
          <span className="block w-6 h-0.5 bg-teal-900" />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-teal-900/10 px-6 py-4 flex flex-col gap-4 bg-cream">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-teal-900 font-medium"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/kontakt"
            onClick={() => setOpen(false)}
            className="inline-flex justify-center bg-copper text-white font-semibold px-5 py-2.5 rounded-full"
          >
            Book demo
          </Link>
        </div>
      )}
    </header>
  )
}
