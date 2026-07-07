import { NextResponse } from 'next/server'

export async function POST(request) {
  const data = await request.json()

  // TODO: kobl til en rigtig email-udbyder (f.eks. Resend) i stedet for console.log
  console.log('Ny kontakt-henvendelse:', data)

  return NextResponse.json({ success: true })
}
