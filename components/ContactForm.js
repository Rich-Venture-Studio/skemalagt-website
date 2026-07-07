'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Fejl ved afsendelse')
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="bg-white border border-teal-900/10 rounded-xl p-8">
        <p className="text-teal-900 font-semibold">
          Tak for din besked. Vi vender tilbage hurtigst muligt.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-teal-900/10 rounded-xl p-8 space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-teal-900 mb-1.5">
          Navn
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          className="w-full rounded-lg border border-teal-900/15 px-4 py-2.5 text-teal-900 focus:outline-none focus:ring-2 focus:ring-copper"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-teal-900 mb-1.5">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          className="w-full rounded-lg border border-teal-900/15 px-4 py-2.5 text-teal-900 focus:outline-none focus:ring-2 focus:ring-copper"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-teal-900 mb-1.5">
          Besked
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={form.message}
          onChange={handleChange}
          className="w-full rounded-lg border border-teal-900/15 px-4 py-2.5 text-teal-900 focus:outline-none focus:ring-2 focus:ring-copper"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-copper hover:bg-copper-light disabled:opacity-60 text-white font-semibold px-6 py-3 rounded-full transition-colors"
      >
        {status === 'sending' ? 'Sender...' : 'Send besked'}
      </button>

      {status === 'error' && (
        <p className="text-sm text-red-600">
          Der skete en fejl. Prøv igen, eller skriv direkte til kontakt@skemalagt.dk.
        </p>
      )}
    </form>
  )
}
