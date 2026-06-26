'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Crown, Handshake, Globe, TrendingUp, Play, X } from 'lucide-react'

const features = [
  { icon: Crown,      label: 'Une marque puissante' },
  { icon: Handshake,  label: 'Un accompagnement de A à Z' },
  { icon: Globe,      label: 'Un réseau international' },
  { icon: TrendingUp, label: 'Un avenir à haute valeur' },
]

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
}
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">

      {/* Image plein écran en arrière-plan */}
      <div className="absolute inset-0">
        <Image
          src="/images/winwin/marrakech.jpeg"
          alt="Mosquée Koutoubia au coucher du soleil — Marrakech"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Gradient gauche→droite : vert opaque à gauche, transparent à droite */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(2,15,5,0.97) 0%, rgba(6,115,61,0.92) 30%, rgba(6,115,61,0.55) 52%, transparent 68%)',
          }}
        />
        {/* Vignette bas */}
        <div
          className="absolute inset-x-0 bottom-0 h-1/4"
          style={{ background: 'linear-gradient(to top, rgba(2,15,5,0.70), transparent)' }}
        />
      </div>

      {/* Pattern marocain côté gauche */}
      <div className="absolute inset-y-0 left-0 w-1/2 moroccan-pattern opacity-15 pointer-events-none" />

{/* Contenu — moitié gauche */}
      <div className="relative z-10 flex flex-col justify-center w-full lg:w-1/2 pt-40 pb-32 px-6 sm:px-10 lg:px-16 flex-1">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-xl text-left"
        >
          {/* Titre principal */}
          <motion.h1 variants={item} className="font-playfair font-bold tracking-tight leading-tight text-3xl sm:text-4xl lg:text-5xl text-white mb-7">
            Et si votre nouvelle vie
            <br />
            commençait à{' '}
            <span className="text-gradient-gold italic">Marrakech</span>&nbsp;?
          </motion.h1>

          {/* Sous-titre */}
          <motion.p variants={item} className="text-white/75 text-base md:text-lg leading-relaxed mb-8">
            ImmoZen Groupe lance en exclusivité {' '}
            <strong className="text-white font-semibold">Win Win Immo</strong>, un programme d'accompagnement unique destiné aux Européens souhaitant créer leur propre activité immobilière au Maroc. De la formation à votre installation, nous vous guidons à chaque étape de votre nouvelle aventure.
          </motion.p>

          {/* Cards features */}
          <motion.div variants={item} className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            {features.map((f, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-2 py-4 px-2 rounded-xl text-center border border-white/10"
                style={{ background: 'rgba(2,15,5,0.55)', backdropFilter: 'blur(8px)' }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ background: 'rgba(165,210,50,0.18)' }}
                >
                  <f.icon size={16} className="text-gold" />
                </div>
                <span className="text-white/80 text-[11px] font-medium leading-snug uppercase tracking-wide">{f.label}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 mb-6">
            <Link href="/candidature" className="btn-gold animate-pulse-gold text-sm">
              Je veux changer de vie
              <ArrowRight size={15} />
            </Link>
            <a href="#pack" className="btn-outline-gold text-sm">
              Découvrir le Pack
            </a>
          </motion.div>

        </motion.div>
      </div>

      {/* Découvrez Win Win Immo — positionné à droite */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 1.2 }}
        className="absolute bottom-6 right-4 sm:right-6 lg:right-8 z-20 flex"
      >
        <div
          onClick={() => setVideoOpen(true)}
          className="inline-flex items-center gap-5 px-7 py-5 rounded-2xl border border-gold/30 cursor-pointer hover:border-gold/60 hover:scale-105 transition-all duration-300"
          style={{ background: 'rgba(2,15,5,0.65)', backdropFilter: 'blur(10px)' }}
        >
          <div
            className="w-16 h-16 rounded-full border-2 border-gold flex items-center justify-center flex-shrink-0"
            style={{ background: 'rgba(165,130,30,0.20)' }}
          >
            <Play size={22} className="text-gold ml-1" fill="currentColor" />
          </div>
          <div className="text-left">
            <p className="text-white font-semibold text-base uppercase tracking-wide">Découvrez Win Win Immo</p>
            <p className="text-gold text-sm italic">en 2 minutes · Regardez la vidéo</p>
          </div>
        </div>
      </motion.div>

      {/* Modal vidéo */}
      <AnimatePresence>
        {videoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            style={{ background: 'rgba(0,0,0,0.88)' }}
            onClick={() => setVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setVideoOpen(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                style={{ background: 'rgba(0,0,0,0.50)' }}
              >
                <X size={20} />
              </button>
              <video
                src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/images/winwin/winwin.mp4`}
                controls
                autoPlay
                className="w-full aspect-video"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}
