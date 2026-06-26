'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { TrendingUp, Plane, HomeIcon, Star, Globe } from 'lucide-react'

const advantages = [
  { icon: TrendingUp, title: 'Marché immobilier dynamique', desc: 'Croissance soutenue portée par une demande locale et internationale en hausse constante.' },
  { icon: Globe, title: 'Tourisme international permanent', desc: 'Des millions de visiteurs chaque année maintiennent un flux locatif touristique exceptionnel.' },
  { icon: HomeIcon, title: 'Forte demande locative', desc: 'Une pression locative élevée garantit un portefeuille client actif et récurrent.' },
  { icon: Star, title: 'Cadre de vie exceptionnel', desc: 'Médinas historiques, riads, palmiers, montagne et soleil : un art de vivre incomparable.' },
  { icon: Plane, title: 'Proximité avec l\'Europe', desc: 'Moins de 3h de vol depuis Paris, Madrid ou Genève. Idéal pour les franco-marocains et expatriés.' },
]

export default function WhyMarrakech() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <Image
          src="/images/winwin/pourquoi.png"
          alt="Pourquoi Marrakech"
          fill
          className="object-cover object-center"
          quality={85}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(150deg, rgba(2,15,5,0.55) 0%, rgba(6,115,61,0.45) 50%, rgba(10,174,61,0.35) 100%)' }}
        />
      </div>
      <div className="absolute inset-0 moroccan-pattern opacity-25" />
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(circle at 80% 20%, rgba(165,210,50,0.10) 0%, transparent 60%)', transform: 'translate(20%,-20%)' }}
      />

      <div className="relative z-10 container-custom">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-5"
          >
            <span className="badge-gold">Destination phare</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="heading-lg text-white mb-5"
          >
            Pourquoi <span className="text-gradient-gold">Marrakech</span> ?
          </motion.h2>
          <motion.span
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="divider-gold mb-6 mx-auto block origin-left"
            style={{ marginLeft: 'auto', marginRight: 'auto' }}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-white/70 text-lg max-w-xl mx-auto"
          >
            Marrakech est l'une des villes les plus attractives d'Afrique, conjuguant dynamisme économique et qualité de vie unique.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {advantages.map((adv, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              className={`card-dark p-6 group ${i === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              style={{ background: 'rgba(3,26,12,0.65)', backdropFilter: 'blur(12px)' }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ background: 'rgba(165,210,50,0.18)' }}
              >
                <adv.icon size={20} className="text-gold" />
              </div>
              <h3 className="heading-sm text-white mb-3">{adv.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{adv.desc}</p>
            </motion.div>
          ))}

          {/* Stats card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="p-6 rounded-2xl flex flex-col justify-center items-center text-center"
            style={{
              background: 'rgba(165,210,50,0.12)',
              border: '1px solid rgba(165,210,50,0.28)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <div className="font-playfair text-5xl font-bold text-gradient-gold mb-2">N°1</div>
            <div className="text-white/90 font-semibold mb-1">Destination touristique</div>
            <div className="text-white/50 text-sm">d'Afrique subsaharienne et du Maghreb</div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
