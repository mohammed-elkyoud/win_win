'use client'

import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react'

const cities = [
  { name: 'Marrakech', phase: 'Phase 1', img: '/images/winwin/marrakech.jpeg', desc: 'Ville impériale, hub touristique et immobilier premium' },
  { name: 'Casablanca', phase: 'Phase 2', img: '/images/winwin/casablanca.jpg', desc: 'Capitale économique, centre des affaires du Maghreb' },
  { name: 'Rabat', phase: 'Phase 2', img: '/images/winwin/rabat.webp', desc: 'Capitale administrative, marché résidentiel en pleine expansion' },
  { name: 'Tanger', phase: 'Phase 2', img: '/images/winwin/tanger.jpg', desc: 'Porte de l\'Europe, ville en plein développement' },
  { name: 'Agadir', phase: 'Phase 2', img: '/images/winwin/agadire.jpg', desc: 'Station balnéaire prisée, fort potentiel locatif' },
]

export default function WhyMorocco() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setCurrent(c => (c + 1) % cities.length), 4000)
    return () => clearInterval(timer)
  }, [])

  const prev = () => setCurrent(c => (c - 1 + cities.length) % cities.length)
  const next = () => setCurrent(c => (c + 1) % cities.length)

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

          {/* Right: carousel villes */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            {/* Carte carousel */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ height: 400 }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={cities[current].img}
                    alt={cities[current].name}
                    fill
                    className="object-cover object-center"
                    quality={85}
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, rgba(2,15,5,0.92) 0%, rgba(2,15,5,0.3) 50%, transparent 100%)' }}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Badge Phase */}
              <div className="absolute top-5 left-5 z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider"
                  style={{ background: cities[current].phase === 'Phase 1' ? 'rgba(165,210,50,0.90)' : 'rgba(201,169,110,0.85)', color: '#020f05' }}>
                  {cities[current].phase}
                </span>
              </div>

              {/* Contenu bas */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`text-${current}`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.45 }}
                  className="absolute bottom-0 left-0 right-0 z-10 p-7"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin size={14} className="text-gold" />
                    <span className="text-gold text-xs font-medium uppercase tracking-widest">Maroc</span>
                  </div>
                  <h3 className="font-playfair text-3xl font-bold text-white mb-2">{cities[current].name}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{cities[current].desc}</p>
                </motion.div>
              </AnimatePresence>

              {/* Boutons navigation */}
              <button onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center border border-white/20 hover:border-gold/60 transition-all duration-200"
                style={{ background: 'rgba(2,15,5,0.55)', backdropFilter: 'blur(8px)' }}>
                <ChevronLeft size={18} className="text-white" />
              </button>
              <button onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center border border-white/20 hover:border-gold/60 transition-all duration-200"
                style={{ background: 'rgba(2,15,5,0.55)', backdropFilter: 'blur(8px)' }}>
                <ChevronRight size={18} className="text-white" />
              </button>
            </div>

            {/* Dots + noms */}
            <div className="flex items-center justify-center gap-3 mt-5">
              {cities.map((c, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="flex flex-col items-center gap-1.5 group"
                >
                  <span className={`text-[11px] font-medium transition-colors duration-200 ${i === current ? 'text-gold' : 'text-anthracite/40 group-hover:text-anthracite/70'}`}>
                    {c.name}
                  </span>
                  <span className={`block h-0.5 rounded-full transition-all duration-300 ${i === current ? 'w-8 bg-gold' : 'w-3 bg-anthracite/20 group-hover:bg-anthracite/40'}`} />
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
