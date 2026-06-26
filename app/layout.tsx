import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Win Win Immo by Immozen — Votre nouvelle vie commence à Marrakech',
  description:
    'Devenez Agent Immobilier Franchisé Exclusif au Maroc. Formation complète, installation et accompagnement personnalisé inclus. ImmoZen Groupe Suisse.',
  keywords:
    'immobilier maroc, franchise immobilière, marrakech, agent immobilier, expatriation maroc, winwin immo, immozen',
  openGraph: {
    title: 'Win Win Immo by Immozen',
    description: 'Lancez votre activité immobilière franchisée au Maroc avec accompagnement complet.',
    type: 'website',
    locale: 'fr_FR',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=Inter:wght@300;400;500;600;700&family=Nunito:wght@700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
