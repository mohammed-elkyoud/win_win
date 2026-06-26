'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { Search, FileCheck, Calculator, Eye, MessageSquare, TrendingUp, Home, Headphones, Monitor, Award } from 'lucide-react'

const modules = [
  { icon: Search, title: 'Prospection', desc: 'Techniques de recherche et qualification de biens et clients.' },
  { icon: FileCheck, title: 'Mandats', desc: 'Rédaction, signature et gestion des mandats exclusifs.' },
  { icon: Calculator, title: 'Estimation des biens', desc: 'Méthodes d\'évaluation et analyse du marché local.' },
  { icon: Eye, title: 'Visites & Présentation', desc: 'Techniques de visite professionnelle et valorisation des biens.' },
  { icon: MessageSquare, title: 'Négociation', desc: 'Stratégies de négociation et techniques de closing.' },
  { icon: TrendingUp, title: 'Vente', desc: 'Process de vente, compromis et finalisation des transactions.' },
  { icon: Home, title: 'Location', desc: 'Gestion locative, bail et relation propriétaire-locataire.' },
  { icon: Headphones, title: 'Relation client', desc: 'Fidélisation, suivi et développement du portefeuille.' },
  { icon: Monitor, title: 'Outils numériques', desc: 'CRM, portails immobiliers, réseaux sociaux et marketing digital.' },
  { icon: Award, title: 'Méthodes Win Win Immo', desc: 'Les process exclusifs et bonnes pratiques de notre réseau.' },
]

export default function Training() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="formation" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <Image
          src="/images/winwin/marrakech.jpeg"
          alt="Programme pédagogique"
          fill
          className="object-cover object-center"
          quality={85}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(150deg, rgba(2,15,5,0.55) 0%, rgba(6,115,61,0.45) 50%, rgba(10,174,61,0.35) 100%)' }}
        />
      </div>
      <div className="absolute inset-0 moroccan-pattern opacity-30" />
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(circle at 80% 80%, rgba(165,210,50,0.10) 0%, transparent 60%)' }}
      />

      <div className="relative z-10 container-custom">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-5"
          >
            <span className="badge-gold">Programme pédagogique</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="heading-lg text-white mb-5"
          >
            Une formation{' '}
            <span className="text-gradient-gold">complète & opérationnelle</span>
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
            className="text-white/60 text-lg max-w-lg mx-auto"
          >
            Notre programme couvre tous les aspects du métier d'agent immobilier pour vous rendre opérationnel dès le premier jour.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {modules.map((mod, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.07 }}
              className="card-dark p-5 group cursor-default"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                style={{
                  background: i % 2 === 0
                    ? 'linear-gradient(135deg, #A5D232, #C5DC50)'
                    : 'linear-gradient(135deg, #06733D, #0AAE3D)',
                }}
              >
                <mod.icon size={18} className="text-white" />
              </div>
              <h4 className="text-white font-semibold text-sm mb-2">{mod.title}</h4>
              <p className="text-white/45 text-xs leading-relaxed">{mod.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="text-center mt-12"
        >
          <Link href="/candidature" className="btn-gold">
            Rejoindre la formation
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
