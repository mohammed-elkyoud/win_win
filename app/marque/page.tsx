'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Crown, Star, ShieldCheck, Eye, TrendingUp, ArrowRight, ArrowLeft } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const pillars = [
  { icon: ShieldCheck, title: 'Identité forte & reconnue', desc: 'Un nom, un logo, une charte graphique cohérente qui inspire confiance dès le premier contact avec vos clients.' },
  { icon: Eye, title: 'Visibilité nationale', desc: 'Campagnes de communication portées par le réseau sur tous les canaux : digital, print, événementiel.' },
  { icon: Star, title: 'Positionnement premium', desc: 'Win Win Immo se positionne sur le segment haut de gamme de l\'immobilier marocain, attirant une clientèle internationale exigeante.' },
  { icon: TrendingUp, title: 'Notoriété en croissance', desc: 'La marque s\'inscrit dans une dynamique d\'expansion nationale avec une présence dans 5 villes prioritaires.' },
]

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function MarquePage() {
  return (
    <>
      <Navbar invertScroll />
      <main className="min-h-screen flex flex-col pt-20">
        <div className="flex flex-col lg:flex-row flex-1">

          {/* Panneau gauche */}
          <div className="relative lg:w-2/5 xl:w-1/3 min-h-[340px] lg:min-h-screen flex-shrink-0">
            <Image
              src="/images/winwin/koutobia.jpg"
              alt="Koutoubia Marrakech"
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
                  <span className="badge-gold text-[10px] tracking-[0.2em]">Identité & Positionnement</span>
                </motion.div>
                <motion.div variants={item} className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'rgba(165,130,30,0.20)', border: '1px solid rgba(165,130,30,0.3)' }}>
                  <Crown size={26} className="text-gold" />
                </motion.div>
                <motion.h1 variants={item} className="font-playfair text-3xl xl:text-4xl font-bold text-white leading-tight mb-5">
                  Une marque<br />
                  <span className="text-gradient-gold italic">puissante</span>
                </motion.h1>
                <motion.p variants={item} className="text-white/65 text-base leading-relaxed mb-8">
                  Rejoindre Win Win Immo, c'est opérer sous une enseigne reconnue qui porte votre crédibilité et amplifie chaque action commerciale.
                </motion.p>
                <motion.div variants={item}>
                  <Link href="/candidature" className="btn-gold text-sm">
                    Rejoindre la marque
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
                    La force d'une marque reconnue
                  </h2>
                  <p className="text-anthracite/50 text-sm mb-4">
                    Win Win Immo est bien plus qu'un nom — c'est une promesse de qualité et de confiance que vos clients ressentent dès le premier contact.
                  </p>
                  <span className="divider-gold block" />
                </motion.div>

                <motion.div variants={item} className="grid sm:grid-cols-2 gap-5 mb-10">
                  {pillars.map((p, i) => (
                    <div key={i} className="card-premium p-5">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                        style={{ background: 'linear-gradient(135deg, #06733D, #0AAE3D)' }}
                      >
                        <p.icon size={18} className="text-white" />
                      </div>
                      <h4 className="font-semibold text-green-primary mb-2 text-sm">{p.title}</h4>
                      <p className="text-anthracite/60 text-sm leading-relaxed">{p.desc}</p>
                    </div>
                  ))}
                </motion.div>

                <motion.div variants={item} className="rounded-2xl p-6 mb-8" style={{ background: 'linear-gradient(135deg, rgba(6,115,61,0.06), rgba(165,210,50,0.06))' }}>
                  <h3 className="font-playfair font-bold text-green-primary text-lg mb-4">Ce que la marque vous apporte concrètement</h3>
                  <ul className="space-y-3">
                    {[
                      'Kit de démarrage complet : logo, cartes de visite, supports imprimés',
                      'Accès à la plateforme digitale et aux outils CRM Win Win Immo',
                      'Signalétique agence aux couleurs de la marque',
                      'Présence sur les portails immobiliers nationaux sous la marque réseau',
                      'Formation aux argumentaires et à la communication de la marque',
                    ].map((pt, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                        <span className="text-anthracite/70 text-sm">{pt}</span>
                      </li>
                    ))}
                  </ul>
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
