'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { CheckCircle2, ArrowRight } from 'lucide-react'

const points = [
  'Un réseau d\'agents immobiliers exclusifs',
  'Un concept développé par ImmoZen Groupe Suisse',
  'Accessible sans expérience immobilière',
  'Formation professionnelle complète incluse',
  'Accompagnement à l\'installation au Maroc',
  'Une marque forte et un réseau structuré',
]

export default function AboutWinWin() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="concept" className="section-padding" style={{ background: '#FAFAF8' }} ref={ref}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div
              className="rounded-3xl overflow-hidden text-center relative"
              style={{ minHeight: '500px' }}
            >
              {/* Premium riad image */}
              <Image
                src="/images/winwin/sultana.webp"
                alt="La Sultana — Riad de luxe Marrakech"
                fill
                className="object-cover object-center"
                quality={85}
              />
              {/* Dark gradient overlay */}
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(145deg, rgba(2,15,5,0.88) 0%, rgba(6,115,61,0.80) 55%, rgba(10,174,61,0.68) 100%)' }}
              />
              <div className="absolute inset-0 moroccan-pattern opacity-20" />
              <div className="relative z-10 p-10">
                {/* Logo transparent */}
                <div className="flex justify-center mb-6">
                  <div className="relative h-10 w-44">
                    <Image
                      src="/images/winwin/immozen-transparent.png"
                      alt="ImmoZen Groupe Suisse"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <p className="text-gold text-sm font-medium tracking-widest uppercase mb-8">by ImmoZen · Groupe Suisse</p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { val: 'Sur demande', label: 'Pack de départ' },
                    { val: '100%', label: 'Accompagné' },
                    { val: '0', label: 'Expérience requise' },
                    { val: '9', label: 'Étapes pour démarrer' },
                  ].map((s, i) => (
                    <div key={i} className="glass-dark rounded-xl p-4">
                      <div className="font-playfair text-2xl font-bold text-gradient-gold">{s.val}</div>
                      <div className="text-white/55 text-xs mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 glass-light rounded-2xl px-5 py-3 shadow-xl"
            >
              <span className="text-green-primary font-bold text-sm">Franchise Exclusive</span>
              <div className="text-anthracite/50 text-xs">Maroc · Europe</div>
            </motion.div>
          </motion.div>

          {/* Right: text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-5"
            >
              <span className="badge-green">Qu'est-ce que Win Win Immo ?</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="heading-lg text-green-primary mb-5"
            >
              Changez de vie et devenez{' '}
              <span className="text-gradient-gold">votre propre patron</span>
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
              className="text-anthracite/65 text-lg leading-relaxed mb-8"
            >
              Win Win Immo est une franchise d'agents immobiliers exclusifs développée par ImmoZen Groupe Suisse. Nous recherchons des personnes <strong className="text-green-primary font-semibold">motivées souhaitant développer leur propre activité immobilière</strong> au Maroc, même sans expérience préalable.
            </motion.p>

            <div className="space-y-3.5 mb-10">
              {points.map((pt, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.07 }}
                  className="flex items-center gap-3.5"
                >
                  <div className="check-green">
                    <CheckCircle2 size={12} className="text-white" />
                  </div>
                  <span className="text-anthracite/75 font-medium">{pt}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              <a href="#pack" className="btn-green gap-2">
                Voir notre offre complète
                <ArrowRight size={15} />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
