'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { Send, CheckCircle2, User, Phone, Mail, MapPin, Car, Globe2, Wallet } from 'lucide-react'

type FormData = {
  prenom: string
  nom: string
  telephone: string
  email: string
  pays: string
  ville: string
  age: string
  permis: string
  langues: string
  budget: string
  message: string
}

const budgetOptions = [
  'Moins de 10 000€',
  '10 000€ - 15 000€',
  '15 000€ - 20 000€',
  '20 000€ et plus',
]

const permisOptions = ['Oui', 'Non', 'En cours']

export default function ApplicationForm() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState<FormData>({
    prenom: '', nom: '', telephone: '', email: '', pays: '',
    ville: '', age: '', permis: '', langues: '', budget: '', message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1500))
    setLoading(false)
    setSent(true)
  }

  return (
    <section id="candidature" className="section-padding" style={{ background: '#FAFAF8' }} ref={ref}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-5 gap-14 items-start">
          {/* Left info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-5"
            >
              <span className="badge-green">Candidature</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="heading-lg text-green-primary mb-5"
            >
              Déposez votre{' '}
              <span className="text-gradient-gold">candidature</span>
            </motion.h2>

            <motion.span
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="divider-gold mb-7 block origin-left"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-anthracite/65 text-lg leading-relaxed mb-10"
            >
              Remplissez ce formulaire et notre équipe vous contactera sous 48h pour un premier échange sans engagement.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="space-y-5"
            >
              {[
                { icon: CheckCircle2, text: 'Réponse garantie sous 48h' },
                { icon: CheckCircle2, text: 'Entretien sans engagement' },
                { icon: CheckCircle2, text: 'Confidentialité assurée' },
                { icon: CheckCircle2, text: 'Accompagnement personnalisé' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <item.icon size={18} className="text-green-light flex-shrink-0" />
                  <span className="text-anthracite/70 font-medium">{item.text}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-10 rounded-2xl overflow-hidden relative"
              style={{ minHeight: 220 }}
            >
              <Image
                src="/images/winwin/koutobia.jpg"
                alt="Mosquée Koutoubia — Marrakech"
                fill
                className="object-cover object-center"
                quality={80}
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(145deg, rgba(2,15,5,0.88) 0%, rgba(6,115,61,0.78) 100%)' }}
              />
              <div className="relative z-10 p-6">
                <p className="font-playfair text-xl font-bold text-white mb-3">
                  Win Win Immo
                  <span className="text-gradient-gold"> by Immozen</span>
                </p>
                <p className="text-white/55 text-sm leading-relaxed">
                  Changez de vie. Nous vous accompagnons pour construire la vôtre au Maroc.
                </p>
                <div className="mt-4 pt-4 border-t border-white/15">
                  <p className="text-gold text-xs font-medium">ImmoZen Groupe Suisse</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3"
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="card-premium p-12 text-center"
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ background: 'linear-gradient(135deg, #06733D, #0AAE3D)' }}
                >
                  <CheckCircle2 size={36} className="text-white" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-green-primary mb-4">
                  Candidature envoyée !
                </h3>
                <p className="text-anthracite/65 leading-relaxed mb-8">
                  Merci pour votre intérêt. Notre équipe examinera votre dossier et vous contactera sous <strong>48 heures</strong> pour un premier échange.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="btn-outline-gold text-sm"
                >
                  Envoyer une autre candidature
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="card-premium p-8 rounded-3xl"
              >
                <h3 className="font-playfair text-xl font-bold text-green-primary mb-7">
                  Vos informations personnelles
                </h3>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-semibold text-anthracite/60 uppercase tracking-wider mb-2">Prénom *</label>
                    <div className="relative">
                      <User size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-anthracite/30" />
                      <input name="prenom" value={form.prenom} onChange={handleChange} required placeholder="Jean" className="input-premium pl-11" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-anthracite/60 uppercase tracking-wider mb-2">Nom *</label>
                    <div className="relative">
                      <User size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-anthracite/30" />
                      <input name="nom" value={form.nom} onChange={handleChange} required placeholder="Dupont" className="input-premium pl-11" />
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-semibold text-anthracite/60 uppercase tracking-wider mb-2">Téléphone *</label>
                    <div className="relative">
                      <Phone size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-anthracite/30" />
                      <input name="telephone" value={form.telephone} onChange={handleChange} required placeholder="+33 6 00 00 00 00" className="input-premium pl-11" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-anthracite/60 uppercase tracking-wider mb-2">Email *</label>
                    <div className="relative">
                      <Mail size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-anthracite/30" />
                      <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="jean@email.com" className="input-premium pl-11" />
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-semibold text-anthracite/60 uppercase tracking-wider mb-2">Pays de résidence *</label>
                    <div className="relative">
                      <Globe2 size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-anthracite/30" />
                      <input name="pays" value={form.pays} onChange={handleChange} required placeholder="France" className="input-premium pl-11" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-anthracite/60 uppercase tracking-wider mb-2">Ville *</label>
                    <div className="relative">
                      <MapPin size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-anthracite/30" />
                      <input name="ville" value={form.ville} onChange={handleChange} required placeholder="Paris" className="input-premium pl-11" />
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-semibold text-anthracite/60 uppercase tracking-wider mb-2">Âge *</label>
                    <input name="age" type="number" min="21" max="60" value={form.age} onChange={handleChange} required placeholder="35" className="input-premium" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-anthracite/60 uppercase tracking-wider mb-2">Permis de conduire</label>
                    <div className="relative">
                      <Car size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-anthracite/30" />
                      <select name="permis" value={form.permis} onChange={handleChange} className="input-premium pl-11 appearance-none cursor-pointer">
                        <option value="">— Choisir</option>
                        {permisOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-anthracite/60 uppercase tracking-wider mb-2">Budget disponible</label>
                    <div className="relative">
                      <Wallet size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-anthracite/30" />
                      <select name="budget" value={form.budget} onChange={handleChange} className="input-premium pl-11 appearance-none cursor-pointer">
                        <option value="">— Choisir</option>
                        {budgetOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-xs font-semibold text-anthracite/60 uppercase tracking-wider mb-2">Langues parlées</label>
                  <input name="langues" value={form.langues} onChange={handleChange} placeholder="Français, Anglais, Arabe..." className="input-premium" />
                </div>

                <div className="mb-8">
                  <label className="block text-xs font-semibold text-anthracite/60 uppercase tracking-wider mb-2">Votre motivation (optionnel)</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Dites-nous en quelques mots ce qui vous attire dans ce projet..."
                    className="input-premium resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-gold w-full justify-center text-sm animate-pulse-gold gap-3 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {loading ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      Je souhaite être contacté(e)
                      <Send size={15} />
                    </>
                  )}
                </button>

                <p className="text-anthracite/35 text-xs text-center mt-4">
                  Vos données sont traitées de manière confidentielle et ne seront jamais partagées avec des tiers.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
