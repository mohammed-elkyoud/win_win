'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { Briefcase, ShoppingBag, Building, Users, UserCheck, RefreshCcw, CheckCircle2, ArrowRight } from 'lucide-react'

const profiles = [
  { icon: Briefcase, label: 'Salarié en reconversion' },
  { icon: ShoppingBag, label: 'Commercial & vendeur' },
  { icon: Building, label: 'Entrepreneur & chef d\'entreprise' },
  { icon: Users, label: 'Commerçant' },
  { icon: UserCheck, label: 'Indépendant & freelance' },
  { icon: RefreshCcw, label: 'En reconversion professionnelle' },
]

const criteria = [
  'Vous avez entre 21 et 60 ans',
  'Vous êtes motivé(e) et ambitieux(se)',
  'Vous avez le permis de conduire',
  'Vous disposez d\'un budget de départ (détails sur candidature)',
  'Vous souhaitez vous installer au Maroc',
  'Aucune expérience immobilière n\'est requise',
]

export default function Profile() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section-padding bg-beige" ref={ref}>
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
              <span className="badge-green">Profil recherché</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="heading-lg text-green-primary mb-5"
            >
              Qui recherchons-<span className="text-gradient-gold">nous</span> ?
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
              className="text-anthracite/65 text-lg leading-relaxed mb-3"
            >
              Nous recherchons avant tout des <strong className="text-green-primary font-semibold">personnes motivées</strong> entre 21 et 60 ans, peu importe leur parcours professionnel.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mb-8 p-4 rounded-xl text-sm"
              style={{ background: 'rgba(165,210,50,0.08)', border: '1px solid rgba(165,210,50,0.18)' }}
            >
              <span className="text-gold font-semibold">Aucune expérience immobilière obligatoire</span>
              <span className="text-anthracite/65"> — notre formation vous donne toutes les clés du métier.</span>
            </motion.div>

            <div className="space-y-3 mb-10">
              {criteria.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.35 + i * 0.07 }}
                  className="flex items-center gap-3"
                >
                  <div className="check-green">
                    <CheckCircle2 size={12} className="text-white" />
                  </div>
                  <span className="text-anthracite/75 font-medium text-sm">{c}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              <Link href="/candidature" className="btn-green gap-2">
                Je corresponds à ce profil
                <ArrowRight size={15} />
              </Link>
            </motion.div>
          </div>

          {/* Right: profile grid */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-anthracite/50 text-xs font-semibold uppercase tracking-widest mb-6"
            >
              Vous êtes peut-être...
            </motion.p>
            <div className="grid grid-cols-2 gap-4">
              {profiles.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.55, delay: 0.2 + i * 0.09 }}
                  className="card-premium p-6 text-center group"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: i % 2 === 0
                        ? 'linear-gradient(135deg, #06733D, #0AAE3D)'
                        : 'linear-gradient(135deg, #A5D232, #C5DC50)',
                    }}
                  >
                    <p.icon size={22} className="text-white" />
                  </div>
                  <span className="text-anthracite font-semibold text-sm">{p.label}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.75 }}
              className="mt-6 card-premium p-5 text-center"
              style={{ border: '2px dashed rgba(165,210,50,0.30)' }}
            >
              <p className="text-anthracite/70 text-sm">
                Cette opportunité peut vous correspondre,{' '}
                <strong className="text-green-primary">quelle que soit votre situation actuelle</strong>.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
