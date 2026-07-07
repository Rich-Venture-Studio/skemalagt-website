import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Skemalagt – Planlægning og ruteoptimering for håndværkere',
  description:
    'Automatisk planlægning og ruteoptimering til danske håndværks- og servicevirksomheder. Book en gratis demo.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body className="bg-cream text-teal-900 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
