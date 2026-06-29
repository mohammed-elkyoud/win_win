'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { TrendingUp, DollarSign, BarChart3, Home, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const pillars = [
  { icon: DollarSign, title: 'Revenus à fort potentiel', desc: 'Un marché immobilier en croissance constante avec des marges supérieures à la moyenne européenne. Les commissions reflètent la valeur des biens.' },
  { icon: Home, title: 'Marché porteur & dynamique', desc: 'Marrakech attire chaque année des milliers d\'acquéreurs européens. La demande dépasse l\'offre sur les segments haut de gamme et résidentiel.' },
  { icon: BarChart3, title: 'Modèle économique scalable', desc: 'Possibilité d\'évoluer vers le statut de Master Franchisé et de développer votre propre réseau d\'agents sous la marque Win Win Immo.' },
  { icon: TrendingUp, title: 'Croissance de carrière réelle', desc: 'Un parcours structuré : agent, senior, team leader, master franchisé. Chaque étape est accompagnée par le réseau.' },
]

const projections = [
  { label: 'Agent débutant (an 1)', fourchette: '2 000 — 4 000 €/mois', note: 'Phase de démarrage et montée en compétence' },
  { label: 'Agent confirmé (an 2)', fourchette: '4 000 — 8 000 €/mois', note: 'Portefeuille établi et clients récurrents' },
  { label: 'Team Leader', fourchette: '8 000 — 15 000 €/mois', note: 'Commissions propres + overrides équipe' },
  { label: 'Master Franchisé', fourchette: '15 000 €+ /mois', note: 'Redevances réseau + activité personnelle' },
]

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function AvenirPage() {
  return (
    <>
      <Navbar invertScroll />
      <main className="min-h-screen flex flex-col pt-20">
        <div className="flex flex-col lg:flex-row flex-1">

          {/* Panneau gauche */}
          <div className="relative lg:w-2/5 xl:w-1/3 min-h-[340px] lg:min-h-screen flex-shrink-0">
            <Image
              src="/images/winwin/grand-riad.jpg"
              alt="Grand Riad de luxe Marrakech"
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
                  <span className="badge-gold text-[10px] tracking-[0.2em]">Vision & Ambition</span>
                </motion.div>
                <motion.div variants={item} className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'rgba(165,130,30,0.20)', border: '1px solid rgba(165,130,30,0.3)' }}>
                  <TrendingUp size={26} className="text-gold" />
                </motion.div>
                <motion.h1 variants={item} className="font-playfair text-3xl xl:text-4xl font-bold text-white leading-tight mb-5">
                  Un avenir à<br />
                  <span className="text-gradient-gold italic">haute valeur</span>
                </motion.h1>
                <motion.p variants={item} className="text-white/65 text-base leading-relaxed mb-8">
                  L'immobilier marocain offre des perspectives de revenus et de croissance que peu de marchés européens peuvent égaler aujourd'hui.
                </motion.p>
                <motion.div variants={item}>
                  <Link href="/candidature" className="btn-gold text-sm">
                    Construire mon avenir
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
                    Un marché à fort potentiel de revenus
                  </h2>
                  <p className="text-anthracite/50 text-sm mb-4">
                    Marrakech concentre une demande immobilière internationale croissante. Positionnez-vous dès maintenant sur ce marché en expansion.
                  </p>
                  <span className="divider-gold block" />
                </motion.div>

                {/* Piliers */}
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

                {/* Projections de revenus */}
                <motion.div variants={item} className="rounded-2xl p-6 mb-8" style={{ background: 'linear-gradient(135deg, rgba(6,115,61,0.06), rgba(165,210,50,0.06))' }}>
                  <h3 className="font-playfair font-bold text-green-primary text-lg mb-1">Projections de revenus</h3>
                  <p className="text-anthracite/40 text-xs mb-5">Estimations indicatives basées sur les performances du réseau</p>
                  <div className="space-y-4">
                    {projections.map((proj, i) => (
                      <div key={i} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 pb-4 border-b border-anthracite/8 last:border-0 last:pb-0">
                        <div>
                          <div className="font-semibold text-green-primary text-sm">{proj.label}</div>
                          <div className="text-anthracite/45 text-xs">{proj.note}</div>
                        </div>
                        <div
                          className="text-sm font-bold px-3 py-1.5 rounded-lg whitespace-nowrap"
                          style={{ background: 'rgba(165,130,30,0.10)', color: '#8B7A35', border: '1px solid rgba(165,130,30,0.2)' }}
                        >
                          {proj.fourchette}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Atouts */}
                <motion.div variants={item} className="mb-8">
                  <h3 className="font-semibold text-green-primary mb-4">Pourquoi Marrakech est un choix stratégique</h3>
                  <div className="space-y-3">
                    {[
                      'Prix immobiliers inférieurs de 30 à 50 % à des marchés européens équivalents',
                      'Fiscalité avantageuse pour les résidents et investisseurs étrangers',
                      'Flux touristique record : +15 millions de visiteurs par an',
                      'Projets d\'infrastructure majeurs et essor économique continu',
                      'Forte demande de biens premium de la part d\'acquéreurs européens',
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
