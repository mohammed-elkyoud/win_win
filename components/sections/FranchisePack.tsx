'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { Building2, Home, Car, FileText, Scale, CreditCard, GraduationCap, Network, Users2, CheckCircle2, ArrowRight } from 'lucide-react'

const packItems = [
  { icon: Building2, label: 'Création de votre société au Maroc' },
  { icon: Home, label: 'Appartement meublé (1er mois de loyer + caution inclus)' },
  { icon: Car, label: 'Véhicule de fonction (1er mois inclus)' },
  { icon: FileText, label: 'Accompagnement administratif complet' },
  { icon: Scale, label: 'Assistance juridique' },
  { icon: CreditCard, label: 'Accompagnement carte de résident' },
  { icon: GraduationCap, label: 'Formation professionnelle Win Win Immo' },
  { icon: Network, label: 'Intégration au réseau national' },
  { icon: Users2, label: 'Accompagnement personnalisé dédié' },
]

export default function FranchisePack() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="pack" className="section-padding bg-beige" ref={ref}>
      <div className="container-custom">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-5"
          >
            <span className="badge-green">Offre d'intégration</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="heading-lg text-green-primary mb-5"
          >
            Le Pack Agent Immobilier{' '}
            <span className="text-gradient-gold">Franchisé Exclusif</span>
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
            Tout ce dont vous avez besoin pour lancer votre activité est inclus dans un pack clé en main, avec l'installation au Maroc comprise.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Price card */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-2 rounded-3xl overflow-hidden sticky top-28"
            style={{ background: 'linear-gradient(145deg, #020f05 0%, #031a0c 40%, #06733D 100%)' }}
          >
            {/* Image premium */}
            <div className="relative h-52 w-full overflow-hidden">
              <Image
                src="/images/winwin/jame3-lfna.jpg"
                alt="Place Djemaa el-Fna — Marrakech"
                fill
                className="object-cover object-center"
                quality={80}
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(180deg, rgba(2,15,5,0.3) 0%, rgba(2,15,5,0.95) 100%)' }}
              />
              {/* Badge superposé */}
              <div className="absolute bottom-4 left-0 right-0 text-center">
                <span className="badge-gold text-[10px]">Installation au Maroc comprise*</span>
              </div>
            </div>
            <div className="relative z-10 p-8 text-center">
              <div className="font-playfair text-3xl font-bold text-white mb-2 leading-tight mt-2">
                Pack clé en main
              </div>
              <div className="text-gold text-sm font-medium mb-1">Tarif communiqué sur candidature</div>
              <div className="text-white/40 text-xs mb-8">Remplissez le formulaire pour recevoir tous les détails</div>

              <div
                className="rounded-2xl p-5 mb-8 text-left"
                style={{ background: 'rgba(165,210,50,0.10)', border: '1px solid rgba(165,210,50,0.20)' }}
              >
                <p className="text-gold text-sm font-semibold mb-3 uppercase tracking-wider">Ce pack comprend :</p>
                <div className="space-y-2">
                  {['Création de société', 'Logement 1er mois', 'Véhicule 1er mois', 'Formation complète', 'Intégration réseau'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <CheckCircle2 size={13} className="text-gold flex-shrink-0" />
                      <span className="text-white/75 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a href="/candidature" className="btn-gold w-full justify-center animate-pulse-gold">
                Je veux ce pack
                <ArrowRight size={14} />
              </a>
              <p className="text-white/30 text-xs mt-4">*Sous conditions d'éligibilité au programme</p>
            </div>
          </motion.div>

          {/* Items grid */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {packItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.2 + i * 0.07 }}
                className="card-premium p-5 flex items-start gap-4 group"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{ background: 'linear-gradient(135deg, #06733D, #0AAE3D)' }}
                >
                  <item.icon size={16} className="text-white" />
                </div>
                <div>
                  <span className="text-anthracite font-medium text-sm leading-snug">{item.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
