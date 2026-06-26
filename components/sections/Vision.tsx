'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { MapPin, Target, Crown } from 'lucide-react'

const cities = ['Marrakech', 'Casablanca', 'Rabat', 'Tanger', 'Agadir']

export default function Vision() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      {/* Marrakech city background */}
      <div className="absolute inset-0">
        <Image
          src="/images/winwin/jame3-lfna.jpg"
          alt="Place Djemaa el-Fna — Marrakech"
          fill
          className="object-cover object-center"
          quality={80}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(160deg, rgba(2,15,5,0.97) 0%, rgba(6,115,61,0.93) 45%, rgba(10,174,61,0.88) 100%)' }}
        />
      </div>
      <div className="absolute inset-0 moroccan-pattern opacity-25" />
      {/* Pistachio glow center */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(165,210,50,0.07) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 container-custom">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-5"
          >
            <span className="badge-gold">Développement national</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="heading-lg text-white mb-5"
          >
            Notre vision &{' '}
            <span className="text-gradient-gold">nos ambitions</span>
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
            className="text-white/60 text-lg max-w-xl mx-auto"
          >
            Un plan de développement structuré pour couvrir l'ensemble du territoire marocain avec des objectifs clairs.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Phase card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="card-dark p-8 text-center group"
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-110"
              style={{ background: 'linear-gradient(135deg, #A5D232, #C5DC50)' }}
            >
              <Target size={24} className="text-green-primary" />
            </div>
            <div className="text-gold text-xs font-bold uppercase tracking-widest mb-4">Phase de développement</div>
            <div className="font-playfair text-8xl font-bold text-white mb-2">40</div>
            <div className="text-gold font-semibold text-lg mb-3">Agents Immobiliers Franchisés Exclusifs</div>
            <div className="text-white/40 text-sm mb-6">Objectif 2026</div>
            <div className="space-y-2">
              {cities.map((city, i) => (
                <div key={i} className="flex items-center gap-2.5 justify-center">
                  <MapPin size={12} className="text-gold" />
                  <span className="text-white/65 text-sm">{city}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Vision nationale */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="rounded-3xl p-8 text-center group hover:-translate-y-2 transition-transform duration-300"
            style={{
              background: 'linear-gradient(145deg, rgba(165,210,50,0.14), rgba(165,210,50,0.04))',
              border: '1px solid rgba(165,210,50,0.30)',
            }}
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-110"
              style={{ background: 'linear-gradient(135deg, #A5D232, #C5DC50)', boxShadow: '0 8px 30px rgba(165,210,50,0.4)' }}
            >
              <Crown size={24} className="text-green-primary" />
            </div>
            <div className="text-gold text-xs font-bold uppercase tracking-widest mb-4">Vision nationale</div>
            <div className="font-playfair text-8xl font-bold text-gradient-gold mb-2">300</div>
            <div className="text-white font-semibold text-lg mb-3">Agents Immobiliers Franchisés Exclusifs</div>
            <div className="text-white/40 text-sm">Déploiement national · Objectif final</div>
          </motion.div>

          {/* Master franchisés */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="card-dark p-8 text-center group"
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-110"
              style={{ background: 'linear-gradient(135deg, #06733D, #0AAE3D)' }}
            >
              <Crown size={24} className="text-white" />
            </div>
            <div className="text-green-accent text-xs font-bold uppercase tracking-widest mb-4">Objectif final</div>
            <div className="font-playfair text-8xl font-bold text-white mb-2">200</div>
            <div className="text-green-accent font-semibold text-lg mb-3">Master Franchisés</div>
            <div className="text-white/40 text-sm">Déploiement sur l'ensemble du territoire marocain</div>
          </motion.div>
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="rounded-3xl p-10 text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(165,210,50,0.10), rgba(165,210,50,0.04))',
            border: '1px solid rgba(165,210,50,0.20)',
          }}
        >
          <p className="font-playfair text-2xl md:text-3xl font-bold text-white mb-4">
            Faites partie des <span className="text-gradient-gold">pionniers</span> du réseau
          </p>
          <p className="text-white/55 text-lg mb-8 max-w-lg mx-auto">
            Les premières places sont limitées. Rejoignez les agents qui écrivent l'histoire de Win Win Immo au Maroc.
          </p>
          <a href="#candidature" className="btn-gold animate-pulse-gold">
            Postuler maintenant — Places limitées
          </a>
        </motion.div>
      </div>
    </section>
  )
}
