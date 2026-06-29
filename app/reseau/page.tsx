'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Globe, Network, Users, MapPin, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const cities = [
  { name: 'Marrakech', status: 'Phase 1 — Active', image: '/images/winwin/marrakech.jpeg' },
  { name: 'Casablanca', status: 'Phase 2 — En cours', image: '/images/winwin/casablanca.jpg' },
  { name: 'Rabat', status: 'Phase 2', image: '/images/winwin/rabat.webp' },
  { name: 'Tanger', status: 'Phase 3', image: '/images/winwin/tanger.jpg' },
  { name: 'Agadir', status: 'Phase 3', image: '/images/winwin/agadire.jpg' },
]

const stats = [
  { num: '40', label: 'Agents objectif 2026' },
  { num: '200', label: 'Master Franchisés visés' },
  { num: '300', label: 'Vision nationale finale' },
  { num: '5', label: 'Villes prioritaires' },
]

const benefits = [
  { icon: Users, title: 'Agents & partenaires', desc: 'Un réseau d\'agents actifs partageant leads, contacts et opportunités sur l\'ensemble du territoire marocain.' },
  { icon: Network, title: 'Partenaires internationaux', desc: 'Connexions avec des promoteurs, investisseurs et agences européennes pour des transactions cross-border.' },
  { icon: Globe, title: 'Présence digitale mutualisée', desc: 'Portails immobiliers, réseaux sociaux et SEO gérés au niveau du réseau pour maximiser votre visibilité.' },
  { icon: MapPin, title: 'Ancrage local fort', desc: 'Des équipes sur le terrain dans chaque ville pour un accompagnement client de proximité et réactif.' },
]

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function ReseauPage() {
  return (
    <>
      <Navbar invertScroll />
      <main className="min-h-screen flex flex-col pt-20">
        <div className="flex flex-col lg:flex-row flex-1">

          {/* Panneau gauche */}
          <div className="relative lg:w-2/5 xl:w-1/3 min-h-[340px] lg:min-h-screen flex-shrink-0">
            <Image
              src="/images/winwin/hero.jpg"
              alt="Réseau Win Win Immo"
              fill
              className="object-cover object-center"
              quality={90}
              priority
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(160deg, rgba(2,15,5,0.95) 0%, rgba(6,115,61,0.85) 50%, rgba(2,15,5,0.80) 100%)' }}
            />
            <div className="absolute inset-0 moroccan-pattern opacity-15" />

            <div className="relative z-10 flex flex-col justify-between h-full p-8 lg:p-12">
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="py-12"
              >
                <motion.div variants={item} className="mb-6">
                  <span className="badge-gold text-[10px] tracking-[0.2em]">Présence internationale</span>
                </motion.div>
                <motion.div variants={item} className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'rgba(165,130,30,0.20)', border: '1px solid rgba(165,130,30,0.3)' }}>
                  <Globe size={26} className="text-gold" />
                </motion.div>
                <motion.h1 variants={item} className="font-playfair text-3xl xl:text-4xl font-bold text-white leading-tight mb-5">
                  Un réseau<br />
                  <span className="text-gradient-gold italic">international</span>
                </motion.h1>
                <motion.p variants={item} className="text-white/65 text-base leading-relaxed mb-8">
                  Intégrez un réseau en pleine expansion qui relie agents, investisseurs européens et partenaires marocains sur l'ensemble du territoire.
                </motion.p>

                {/* Stats */}
                <motion.div variants={item} className="grid grid-cols-2 gap-3 mb-8">
                  {stats.map((s, i) => (
                    <div key={i} className="glass-dark rounded-xl p-4 text-center">
                      <div className="font-playfair text-2xl font-bold text-gradient-gold mb-1">{s.num}</div>
                      <div className="text-white/50 text-xs leading-tight">{s.label}</div>
                    </div>
                  ))}
                </motion.div>

                <motion.div variants={item}>
                  <Link href="/candidature" className="btn-gold text-sm">
                    Rejoindre le réseau
                    <ArrowRight size={15} />
                  </Link>
                </motion.div>
              </motion.div>

              <div className="border-t border-white/15 pt-6">
                <Link href="/" className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 text-xs transition-colors">
                  <ArrowLeft size={13} />
                  Retour à l'accueil
                </Link>
              </div>
            </div>
          </div>

          {/* Panneau droit */}
          <div className="flex-1 bg-[#FAFAF8] overflow-y-auto">
            <div className="max-w-2xl mx-auto px-6 sm:px-10 py-14">
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
              >
                <motion.div variants={item} className="mb-8">
                  <h2 className="font-playfair text-2xl font-bold text-green-primary mb-2">
                    La puissance du collectif
                  </h2>
                  <p className="text-anthracite/50 text-sm mb-4">
                    Win Win Immo mutualise les forces de ses agents pour une efficacité commerciale bien supérieure à une agence indépendante.
                  </p>
                  <span className="divider-gold block" />
                </motion.div>

                {/* Avantages réseau */}
                <motion.div variants={item} className="grid sm:grid-cols-2 gap-5 mb-10">
                  {benefits.map((b, i) => (
                    <div key={i} className="card-premium p-5">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                        style={{ background: 'linear-gradient(135deg, #06733D, #0AAE3D)' }}
                      >
                        <b.icon size={18} className="text-white" />
                      </div>
                      <h4 className="font-semibold text-green-primary mb-2 text-sm">{b.title}</h4>
                      <p className="text-anthracite/60 text-sm leading-relaxed">{b.desc}</p>
                    </div>
                  ))}
                </motion.div>

                {/* Villes */}
                <motion.div variants={item} className="rounded-2xl p-6 mb-8" style={{ background: 'linear-gradient(135deg, rgba(6,115,61,0.06), rgba(165,210,50,0.06))' }}>
                  <h3 className="font-playfair font-bold text-green-primary text-lg mb-4">Déploiement national par phases</h3>
                  <div className="space-y-3">
                    {cities.map((city, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                          <span className="text-anthracite/80 text-sm font-medium">{city.name}</span>
                        </div>
                        <span
                          className="text-xs px-2.5 py-1 rounded-full"
                          style={{
                            background: i === 0 ? 'rgba(10,174,61,0.12)' : 'rgba(165,130,30,0.10)',
                            border: `1px solid ${i === 0 ? 'rgba(10,174,61,0.3)' : 'rgba(165,130,30,0.25)'}`,
                            color: i === 0 ? '#0AAE3D' : '#8B7A35',
                          }}
                        >
                          {city.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Checklist */}
                <motion.div variants={item} className="mb-8">
                  <h3 className="font-semibold text-green-primary mb-4">Ce que vous gagnez en rejoignant le réseau</h3>
                  <div className="space-y-3">
                    {[
                      'Accès à un portefeuille commun de biens et de clients',
                      'Partage de leads entre agents du réseau',
                      'Outils technologiques mutualisés (CRM, portails, communication)',
                      'Formation continue et partage des meilleures pratiques',
                      'Opportunités de co-mandats avec des agents dans d\'autres villes',
                    ].map((pt, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 size={16} className="text-green-light flex-shrink-0" />
                        <span className="text-anthracite/70 text-sm">{pt}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
                  <Link href="/candidature" className="btn-gold text-sm">
                    Déposer ma candidature
                    <ArrowRight size={15} />
                  </Link>
                  <Link href="/#pack" className="btn-outline-gold text-sm">
                    Voir le Pack complet
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
