'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Home, TrendingUp, Info } from 'lucide-react'

export default function Remuneration() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(160deg, #031a0c, #06733D 60%, #0AAE3D)' }}
      />
      <div className="absolute inset-0 moroccan-pattern opacity-25" />

      <div className="relative z-10 container-custom">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-5"
          >
            <span className="badge-gold">Modèle économique</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="heading-lg text-white mb-5"
          >
            Votre{' '}
            <span className="text-gradient-gold">rémunération</span>
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
            Un modèle transparent et attractif, conçu pour maximiser vos revenus dès le début de votre activité.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Location card — pistachio */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-3xl p-8 text-center group hover:-translate-y-2 transition-transform duration-300"
            style={{
              background: 'linear-gradient(145deg, rgba(165,210,50,0.14), rgba(165,210,50,0.04))',
              border: '1px solid rgba(165,210,50,0.28)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-110"
              style={{ background: 'linear-gradient(135deg, #A5D232, #C5DC50)', boxShadow: '0 8px 30px rgba(165,210,50,0.40)' }}
            >
              <Home size={26} className="text-green-primary" />
            </div>
            <div className="font-playfair text-7xl font-bold text-white mb-1">
              50<span className="text-4xl text-gold">%</span>
            </div>
            <div className="text-gold font-semibold text-lg mb-3">Des honoraires de location</div>
            <p className="text-white/50 text-sm leading-relaxed">
              Percevez la moitié des honoraires sur chaque transaction locative conclue.
            </p>
          </motion.div>

          {/* Vente card — bright green */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="rounded-3xl p-8 text-center group hover:-translate-y-2 transition-transform duration-300"
            style={{
              background: 'linear-gradient(145deg, rgba(10,174,61,0.14), rgba(10,174,61,0.04))',
              border: '1px solid rgba(10,174,61,0.22)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-110"
              style={{ background: 'linear-gradient(135deg, #06733D, #0AAE3D)', boxShadow: '0 8px 30px rgba(6,115,61,0.40)' }}
            >
              <TrendingUp size={26} className="text-white" />
            </div>
            <div className="font-playfair text-7xl font-bold text-white mb-1">
              1,75<span className="text-4xl text-green-accent">%</span>
            </div>
            <div className="text-green-accent font-semibold text-lg mb-3">Sur les ventes immobilières</div>
            <p className="text-white/50 text-sm leading-relaxed">
              Un taux de commission compétitif sur chaque vente finalisée dans votre portefeuille.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="flex items-start gap-3 max-w-xl mx-auto mt-10 p-4 rounded-xl"
          style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          <Info size={16} className="text-white/40 flex-shrink-0 mt-0.5" />
          <p className="text-white/40 text-xs leading-relaxed">
            Rémunération selon les modalités du réseau en vigueur. Le modèle est conçu pour évoluer avec votre expérience et votre portefeuille clients. Des détails complets vous seront communiqués lors de la présentation du projet.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
