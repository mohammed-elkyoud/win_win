'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Send, FileSearch, PhoneCall, Presentation, CheckSquare, PenLine, BookOpen, MapPin, Rocket } from 'lucide-react'

const steps = [
  { num: '01', icon: Send, title: 'Dépôt de candidature', desc: 'Remplissez le formulaire en ligne avec vos informations personnelles et professionnelles.' },
  { num: '02', icon: FileSearch, title: 'Étude du dossier', desc: 'Notre équipe analyse votre profil et votre motivation dans les 48h.' },
  { num: '03', icon: PhoneCall, title: 'Appel de qualification', desc: 'Un entretien téléphonique pour mieux vous connaître et répondre à vos questions.' },
  { num: '04', icon: Presentation, title: 'Présentation du projet', desc: 'Présentation détaillée du concept Win Win Immo, du pack et des modalités.' },
  { num: '05', icon: CheckSquare, title: 'Validation', desc: 'Confirmation de votre candidature et des conditions d\'intégration.' },
  { num: '06', icon: PenLine, title: 'Signature', desc: 'Signature du contrat de franchise exclusif et du pack d\'intégration.' },
  { num: '07', icon: BookOpen, title: 'Formation', desc: 'Suivi de la formation professionnelle Win Win Immo complète.' },
  { num: '08', icon: MapPin, title: 'Installation au Maroc', desc: 'Arrivée à Marrakech, logement, véhicule, administratif : tout est prêt.' },
  { num: '09', icon: Rocket, title: 'Démarrage de l\'activité', desc: 'Lancement officiel de votre activité au sein du réseau Win Win Immo.' },
]

export default function RecruitmentProcess() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="processus" className="section-padding" style={{ background: '#FAFAF8' }} ref={ref}>
      <div className="container-custom">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-5"
          >
            <span className="badge-green">Processus de recrutement</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="heading-lg text-green-primary mb-5"
          >
            9 étapes pour{' '}
            <span className="text-gradient-gold">commencer une nouvelle vie</span>
          </motion.h2>
          <motion.span
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="divider-gold mx-auto mb-6 block"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-anthracite/60 text-lg max-w-xl mx-auto"
          >
            Un parcours clair, structuré et accompagné, de votre candidature à l'ouverture de votre activité au Maroc.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.08 }}
              className={`card-premium p-6 group relative overflow-hidden ${
                i === 8 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Step number watermark */}
              <div
                className="absolute top-4 right-4 font-playfair text-6xl font-bold leading-none pointer-events-none select-none"
                style={{ color: 'rgba(6,115,61,0.05)' }}
              >
                {step.num}
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: i === 8
                        ? 'linear-gradient(135deg, #A5D232, #C5DC50)'
                        : 'linear-gradient(135deg, #06733D, #0AAE3D)',
                    }}
                  >
                    <step.icon size={16} className="text-white" />
                  </div>
                  <span
                    className="text-xs font-bold tracking-widest uppercase"
                    style={{ color: i === 8 ? '#A5D232' : 'rgba(6,115,61,0.45)' }}
                  >
                    Étape {step.num}
                  </span>
                </div>
                <h4 className="font-playfair font-bold text-green-primary text-base mb-2">{step.title}</h4>
                <p className="text-anthracite/60 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="text-center mt-12"
        >
          <a href="/candidature" className="btn-gold">
            Déposer ma candidature
          </a>
        </motion.div>
      </div>
    </section>
  )
}
