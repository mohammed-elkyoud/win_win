'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { Megaphone, LineChart, Eye, Handshake, Network, ArrowRight } from 'lucide-react'

const advantages = [
  {
    icon: Megaphone,
    title: 'La communication',
    desc: 'Campagnes de communication nationale et digitale portées par le réseau pour booster votre visibilité locale.',
  },
  {
    icon: LineChart,
    title: 'Le marketing',
    desc: 'Outils marketing professionnels, templates, supports de vente et stratégies prêts à l\'emploi.',
  },
  {
    icon: Eye,
    title: 'La visibilité de la marque',
    desc: 'Bénéficiez de la notoriété et de la crédibilité de la marque Win Win Immo sur tout le territoire.',
  },
  {
    icon: Handshake,
    title: 'L\'accompagnement commercial',
    desc: 'Coaching, suivi des performances et support commercial continu pour maximiser vos résultats.',
  },
  {
    icon: Network,
    title: 'Le développement du réseau',
    desc: 'Accès à un réseau d\'agents, de partenaires et d\'opportunités qui s\'enrichit continuellement.',
  },
]

export default function NetworkAdvantages() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section-padding bg-beige" ref={ref}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: advantages */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-5"
            >
              <span className="badge-green">Mutualisation des forces</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="heading-lg text-green-primary mb-5"
            >
              Les avantages{' '}
              <span className="text-gradient-gold">du réseau</span>
            </motion.h2>

            <motion.span
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="divider-gold mb-7 block origin-left"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-anthracite/65 text-lg leading-relaxed mb-10"
            >
              Contrairement à une agence traditionnelle, Win Win Immo mutualise de nombreux services du réseau. Vous pouvez ainsi vous concentrer sur vos <strong className="text-green-primary font-semibold">clients et votre activité</strong>.
            </motion.p>

            <div className="space-y-4">
              {advantages.map((adv, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.55, delay: 0.3 + i * 0.1 }}
                  className="flex gap-4 group"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: 'linear-gradient(135deg, #06733D, #0AAE3D)' }}
                  >
                    <adv.icon size={17} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-primary mb-1">{adv.title}</h4>
                    <p className="text-anthracite/60 text-sm leading-relaxed">{adv.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="order-first lg:order-last"
          >
            <div
              className="rounded-3xl overflow-hidden relative p-8"
              style={{ minHeight: 500 }}
            >
              {/* Premium interior image */}
              <Image
                src="/images/winwin/hero.jpg"
                alt="Chambre de luxe riad Marrakech"
                fill
                className="object-cover object-center"
                quality={85}
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(145deg, rgba(2,15,5,0.88) 0%, rgba(6,115,61,0.80) 60%, rgba(10,174,61,0.72) 100%)' }}
              />
              <div className="absolute inset-0 moroccan-pattern opacity-20" />
              <div className="relative z-10">
                <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-8">Le réseau Win Win Immo</p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { num: '40', label: 'Agents objectif 2026' },
                    { num: '300', label: 'Vision nationale finale' },
                    { num: '200', label: 'Master Franchisés objectif' },
                    { num: '5', label: 'Villes prioritaires' },
                  ].map((s, i) => (
                    <div key={i} className="glass-dark rounded-xl p-4 text-center">
                      <div className="font-playfair text-3xl font-bold text-gradient-gold mb-1">{s.num}</div>
                      <div className="text-white/50 text-xs leading-tight">{s.label}</div>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  {['Marrakech', 'Casablanca', 'Rabat', 'Tanger', 'Agadir'].map((city, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                      <span className="text-white/70 text-sm">{city}</span>
                      {i === 0 && (
                        <span
                          className="ml-auto text-xs px-2 py-0.5 rounded-full text-green-accent"
                          style={{ background: 'rgba(10,174,61,0.15)', border: '1px solid rgba(10,174,61,0.3)' }}
                        >
                          Phase 1
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 text-center">
                  <a href="/candidature" className="btn-gold w-full justify-center text-xs">
                    Rejoindre le réseau
                    <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
