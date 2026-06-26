'use client'

import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Mail, Linkedin, ArrowUp } from 'lucide-react'

const links = {
  'Concept': [
    { label: 'Win Win Immo', href: '#concept' },
    { label: 'Pourquoi le Maroc', href: '#maroc' },
    { label: 'Pourquoi Marrakech', href: '#maroc' },
    { label: 'Notre équipe', href: '#concept' },
  ],
  'Programme': [
    { label: 'Notre Pack', href: '#pack' },
    { label: 'Formation complète', href: '#formation' },
    { label: 'Accompagnement', href: '#concept' },
    { label: 'Rémunération', href: '#concept' },
  ],
  'Rejoindre': [
    { label: 'Profil recherché', href: '#candidature' },
    { label: 'Processus de recrutement', href: '#processus' },
    { label: 'Postuler', href: '#candidature' },
    { label: 'FAQ', href: '#concept' },
  ],
}

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative overflow-hidden">
      {/* Premium pool/spa background */}
      <div className="absolute inset-0">
        <Image
          src="/images/winwin/grand-riad.jpg"
          alt="Piscine de luxe Marrakech — Win Win Immo"
          fill
          className="object-cover object-center"
          quality={75}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(160deg, rgba(2,15,5,0.97) 0%, rgba(6,115,61,0.94) 45%, rgba(10,174,61,0.92) 100%)' }}
        />
      </div>
      <div className="absolute inset-0 moroccan-pattern opacity-15" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(165,210,50,0.07) 0%, transparent 70%)' }}
      />

      <div className="relative z-10">
        <div className="container-custom pt-16 pb-10">
          <div className="grid lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="relative h-10 w-40 mb-5">
                <Image
                  src="/images/winwin/immozen-transparent.png"
                  alt="ImmoZen Groupe Suisse"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <div className="text-[10px] text-white/40 tracking-widest uppercase mb-4">by Immozen · Groupe Suisse</div>

              <p className="text-white/50 text-sm leading-relaxed mb-6">
                Devenez Agent Immobilier Franchisé Exclusif au Maroc. Un concept clé en main développé par ImmoZen Groupe Suisse.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-white/45 text-sm">
                  <MapPin size={14} className="text-gold flex-shrink-0" />
                  <span>Marrakech, Maroc · Europe</span>
                </div>
                <div className="flex items-center gap-3 text-white/45 text-sm">
                  <Mail size={14} className="text-gold flex-shrink-0" />
                  <span>contact@winwinimmo.com</span>
                </div>
              </div>
            </div>

            {/* Links */}
            {Object.entries(links).map(([title, items]) => (
              <div key={title}>
                <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">{title}</h4>
                <ul className="space-y-3">
                  {items.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-white/45 hover:text-gold text-sm transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA bar */}
          <div
            className="rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 mb-12"
            style={{ background: 'rgba(165,210,50,0.10)', border: '1px solid rgba(165,210,50,0.20)' }}
          >
            <div>
              <p className="font-playfair text-xl font-bold text-white mb-1">
                Prêt à changer de vie ?
              </p>
              <p className="text-white/50 text-sm">Votre nouvelle vie à Marrakech commence maintenant.</p>
            </div>
            <Link href="/candidature" className="btn-gold flex-shrink-0">
              Postuler maintenant
            </Link>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
            <div className="text-white/30 text-xs text-center sm:text-left">
              © {new Date().getFullYear()} Win Win Immo by ImmoZen Groupe Suisse. Tous droits réservés.
            </div>

            {/* Social */}
            <div className="flex items-center gap-3">
              {[
                {
                  href: '#', label: 'Instagram',
                  svg: <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4.5"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg>,
                },
                {
                  href: '#', label: 'LinkedIn',
                  svg: <Linkedin size={14} />,
                },
                {
                  href: '#', label: 'Facebook',
                  svg: <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
                },
              ].map(({ href, label, svg }, i) => (
                <a
                  key={i}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 hover:-translate-y-1 text-white/50 hover:text-gold"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  {svg}
                </a>
              ))}

              <button
                onClick={scrollToTop}
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 hover:-translate-y-1 ml-2"
                style={{ background: 'linear-gradient(135deg, #A5D232, #C5DC50)' }}
                aria-label="Retour en haut"
              >
                <ArrowUp size={14} className="text-green-primary" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
