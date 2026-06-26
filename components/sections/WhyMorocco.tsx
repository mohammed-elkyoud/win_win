'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Globe, Users, Briefcase, TrendingUp, Building2, Clock } from 'lucide-react'

const profiles = [
  { icon: Globe, label: 'Investisseurs internationaux', color: 'from-green-medium to-green-light' },
  { icon: Users, label: 'Retraités européens', color: 'from-gold-dark to-gold' },
  { icon: Briefcase, label: 'Entrepreneurs', color: 'from-green-medium to-green-light' },
  { icon: TrendingUp, label: 'Expatriés', color: 'from-gold-dark to-gold' },
  { icon: Building2, label: 'Acheteurs immobiliers', color: 'from-green-medium to-green-light' },
  { icon: Clock, label: 'Locataires longue durée', color: 'from-gold-dark to-gold' },
]

export default function WhyMorocco() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="maroc" className="section-padding bg-beige" ref={ref}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-5"
            >
              <span className="badge-green">Opportunité de marché</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="heading-lg text-green-primary mb-5"
            >
              Pourquoi le <span className="text-gradient-gold">Maroc</span> ?
            </motion.h2>

            <motion.span
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="divider-gold mb-8 block origin-left"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-anthracite/65 text-lg leading-relaxed mb-6"
            >
              Chaque année, des milliers d'Européens rêvent de vivre sous le soleil du Maroc.{' '}
              <strong className="text-green-primary font-semibold">Win Win Immo</strong> vous permet de transformer ce projet en réalité grâce à un concept immobilier structuré développé par ImmoZen Groupe Suisse.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-anthracite/65 text-lg leading-relaxed mb-8"
            >
              Le marché immobilier marocain offre de <strong className="text-green-primary font-semibold">nombreuses opportunités</strong> dans les principales villes du Royaume, portées par une clientèle internationale en forte croissance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.45 }}
            >
              <div className="p-5 rounded-2xl border-l-4 border-gold" style={{ background: 'rgba(201,169,110,0.08)' }}>
                <p className="text-green-primary font-semibold text-sm uppercase tracking-wider mb-2">Notre objectif</p>
                <p className="text-anthracite/70 leading-relaxed">
                  Vous accompagner dans la création de votre activité immobilière tout en facilitant votre installation au Maroc.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right: profile cards */}
          <div>
            {/* Titre section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-3 mb-3">
                <span className="w-8 h-px bg-gold" />
                <span className="text-gold text-xs font-semibold uppercase tracking-[0.2em]">Clientèle cible</span>
                <span className="w-8 h-px bg-gold" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-green-primary leading-tight">
                Le Maroc attire<br />
                <span className="text-gradient-gold italic">aujourd'hui</span>
              </h3>
            </motion.div>

            {/* Cards */}
            <div className="flex flex-col gap-3">
              {profiles.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.09 }}
                  className="group flex items-center gap-4 px-5 py-4 rounded-2xl border border-green-primary/10 hover:border-gold/40 hover:shadow-lg transition-all duration-300 cursor-default"
                  style={{ background: 'linear-gradient(135deg, rgba(6,115,61,0.06) 0%, rgba(201,169,110,0.05) 100%)' }}
                >
                  {/* Numéro */}
                  <span className="text-gold/40 font-playfair font-bold text-lg w-6 text-center flex-shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  {/* Icône */}
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${p.color} shadow-md transition-transform duration-300 group-hover:scale-110`}
                  >
                    <p.icon size={17} className="text-white" />
                  </div>

                  {/* Label */}
                  <span className="text-anthracite font-semibold text-sm leading-snug flex-1">{p.label}</span>

                  {/* Flèche hover */}
                  <span className="text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg">→</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
