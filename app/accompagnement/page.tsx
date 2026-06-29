'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Handshake, Plane, MapPin, BookOpen, Rocket, TrendingUp, ArrowRight, ArrowLeft } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const steps = [
  { icon: Plane, num: '01', phase: 'Avant votre départ', desc: 'Préparation administrative, juridique et logistique depuis votre pays de résidence. Votre dossier est bouclé avant même que vous atterrissiez.' },
  { icon: MapPin, num: '02', phase: 'À votre arrivée au Maroc', desc: 'Accueil personnalisé sur place, logement prêt, véhicule disponible. Vous posez les pieds à Marrakech sans vous soucier du reste.' },
  { icon: BookOpen, num: '03', phase: 'Pendant votre formation', desc: 'Encadrement professionnel intensif, méthodes Win Win Immo, outils numériques. Une immersion opérationnelle de plusieurs semaines.' },
  { icon: Rocket, num: '04', phase: 'Au lancement de votre activité', desc: 'Accompagnement commercial, premiers mandats, intégration au réseau d\'agents. Vous n\'êtes jamais seul face au marché.' },
  { icon: TrendingUp, num: '05', phase: 'Dans votre développement', desc: 'Suivi continu, coaching personnalisé, accès aux ressources réseau pour accélérer votre croissance et développer votre portefeuille.' },
]

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function AccompagnementPage() {
  return (
    <>
      <Navbar invertScroll />
      <main className="min-h-screen flex flex-col pt-20">
        <div className="flex flex-col lg:flex-row flex-1">

          {/* Panneau gauche */}
          <div className="relative lg:w-2/5 xl:w-1/3 min-h-[340px] lg:min-h-screen flex-shrink-0">
            <Image
              src="/images/winwin/formation.png"
              alt="Formation Win Win Immo"
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
                  <span className="badge-gold text-[10px] tracking-[0.2em]">Accompagnement 360°</span>
                </motion.div>
                <motion.div variants={item} className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'rgba(165,130,30,0.20)', border: '1px solid rgba(165,130,30,0.3)' }}>
                  <Handshake size={26} className="text-gold" />
                </motion.div>
                <motion.h1 variants={item} className="font-playfair text-3xl xl:text-4xl font-bold text-white leading-tight mb-5">
                  Un accompagnement<br />
                  <span className="text-gradient-gold italic">de A à Z</span>
                </motion.h1>
                <motion.p variants={item} className="text-white/65 text-base leading-relaxed mb-8">
                  De votre premier appel depuis l'Europe jusqu'au développement avancé de votre portefeuille à Marrakech, nous sommes à vos côtés à chaque étape.
                </motion.p>
                <motion.div variants={item}>
                  <Link href="/candidature" className="btn-gold text-sm">
                    Être accompagné(e)
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
                    Votre parcours, étape par étape
                  </h2>
                  <p className="text-anthracite/50 text-sm mb-4">
                    Win Win Immo prend en charge chaque aspect de votre transition : administratif, logistique, formation et développement commercial.
                  </p>
                  <span className="divider-gold block" />
                </motion.div>

                <motion.div variants={item} className="relative mb-10">
                  <div
                    className="absolute left-6 top-0 bottom-0 w-0.5 rounded-full"
                    style={{ background: 'linear-gradient(180deg, #A5D232, rgba(165,210,50,0.1))' }}
                  />
                  <div className="space-y-5 relative z-10">
                    {steps.map((step, i) => (
                      <div key={i} className="flex gap-5">
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 relative z-10"
                          style={{ background: i % 2 === 0 ? 'linear-gradient(135deg, #A5D232, #C5DC50)' : 'linear-gradient(135deg, #06733D, #0AAE3D)' }}
                        >
                          <step.icon size={18} className="text-white" />
                        </div>
                        <div className="card-premium p-5 flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-gold text-xs font-bold">{step.num}</span>
                            <h4 className="font-semibold text-green-primary text-sm">{step.phase}</h4>
                          </div>
                          <p className="text-anthracite/60 text-sm leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div variants={item} className="rounded-2xl p-6 mb-8" style={{ background: 'linear-gradient(135deg, rgba(6,115,61,0.06), rgba(165,210,50,0.06))' }}>
                  <h3 className="font-playfair font-bold text-green-primary text-lg mb-3">Ce qui est inclus dans l'accompagnement</h3>
                  <ul className="space-y-2">
                    {[
                      'Un interlocuteur dédié à chaque étape de votre parcours',
                      'Support juridique et administratif complet (résidence, société)',
                      'Aide à la recherche de logement et de bureaux',
                      'Formation immobilière intensive certifiante',
                      'Coaching commercial et suivi des performances',
                      'Accès aux ressources et outils du réseau national',
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
