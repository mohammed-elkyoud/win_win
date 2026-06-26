'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Plane, MapPin, BookOpen, Rocket, TrendingUp, CheckCircle2 } from 'lucide-react'

const steps = [
  { icon: Plane, phase: 'Avant votre départ', desc: 'Préparation administrative, juridique et logistique depuis votre pays de résidence. Nous gérons tout à l\'avance.', pistachio: true },
  { icon: MapPin, phase: 'À votre arrivée au Maroc', desc: 'Accueil sur place, logement prêt, véhicule disponible. Vous posez les pieds au Maroc sans vous soucier du reste.', pistachio: false },
  { icon: BookOpen, phase: 'Pendant votre formation', desc: 'Encadrement professionnel, méthodes Win Win Immo, outils numériques. Une formation intensive et opérationnelle.', pistachio: true },
  { icon: Rocket, phase: 'Au lancement de votre activité', desc: 'Accompagnement commercial, premiers mandats, intégration au réseau. Vous n\'êtes jamais seul face au marché.', pistachio: false },
  { icon: TrendingUp, phase: 'Dans le développement de votre portefeuille', desc: 'Suivi continu, coaching personnalisé, accès aux ressources réseau pour accélérer votre croissance.', pistachio: true },
]

export default function Support() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section-padding" style={{ background: '#FAFAF8' }} ref={ref}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-5"
            >
              <span className="badge-green">Accompagnement 360°</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="heading-lg text-green-primary mb-5"
            >
              Vous n'êtes{' '}
              <span className="text-gradient-gold">jamais seul</span>
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
              Le réseau Win Win Immo vous accompagne à chaque étape de votre parcours, du premier jour en Europe jusqu'au développement avancé de votre portefeuille immobilier au Maroc.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="p-6 rounded-2xl"
              style={{ background: 'linear-gradient(135deg, rgba(6,115,61,0.06), rgba(165,210,50,0.06))' }}
            >
              {[
                'Un interlocuteur dédié à chaque étape',
                'Support juridique et administratif inclus',
                'Réseau national et ressources partagées',
                'Coaching continu après installation',
              ].map((pt, i) => (
                <div key={i} className="flex items-center gap-3 mb-3 last:mb-0">
                  <CheckCircle2 size={16} className="text-gold flex-shrink-0" />
                  <span className="text-anthracite/75 text-sm font-medium">{pt}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              className="absolute left-6 top-6 bottom-6 w-0.5 origin-top rounded-full"
              style={{ background: 'linear-gradient(180deg, #A5D232, rgba(165,210,50,0.1))' }}
            />

            <div className="space-y-6 relative z-10">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.25 + i * 0.12 }}
                  className="flex gap-6 group"
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 relative z-10"
                    style={{
                      background: step.pistachio
                        ? 'linear-gradient(135deg, #A5D232, #C5DC50)'
                        : 'linear-gradient(135deg, #06733D, #0AAE3D)',
                      boxShadow: step.pistachio
                        ? '0 4px 20px rgba(165,210,50,0.30)'
                        : '0 4px 20px rgba(6,115,61,0.30)',
                    }}
                  >
                    <step.icon size={18} className="text-white" />
                  </div>
                  <div className="card-premium p-5 flex-1">
                    <h4 className="font-semibold text-green-primary mb-1.5 text-sm">{step.phase}</h4>
                    <p className="text-anthracite/60 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
