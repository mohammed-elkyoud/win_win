'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Send, CheckCircle2, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

type FormData = {
  prenom: string
  nom: string
  telephone: string
  email: string
  pays: string
  ville: string
  age: string
  budget: string
  langues: string
}

const INITIAL_FORM: FormData = {
  prenom: '', nom: '', telephone: '', email: '',
  pays: '', ville: '', age: '', budget: '', langues: '',
}

const guarantees = [
  { icon: CheckCircle2, text: 'Réponse garantie sous 48h' },
  { icon: CheckCircle2, text: 'Entretien sans engagement' },
  { icon: CheckCircle2, text: 'Confidentialité assurée' },
  { icon: CheckCircle2, text: 'Accompagnement personnalisé' },
]

const PAYS_OPTIONS = [
  'France', 'Belgique', 'Suisse', 'Luxembourg', 'Canada', 'Espagne',
  'Italie', 'Allemagne', 'Pays-Bas', 'Portugal', 'Royaume-Uni', 'Autre',
]

const BUDGET_OPTIONS = [
  'Moins de 10 000 €', '10 000 – 20 000 €', '20 000 – 30 000 €',
  '30 000 – 50 000 €', 'Plus de 50 000 €',
]

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function CandidaturePage() {
  const [sent, setSent]       = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError]     = useState<string | null>(null)
  const [form, setForm]       = useState<FormData>(INITIAL_FORM)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/candidatures`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        },
      )

      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body?.message ?? 'Erreur serveur')
      }

      setSent(true)
      setForm(INITIAL_FORM)
    } catch (err: unknown) {
      setError(
        err instanceof Error
          ? err.message
          : 'Une erreur est survenue. Veuillez réessayer.',
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Navbar invertScroll />
      <main className="min-h-screen flex flex-col pt-20">
        <div className="flex flex-col lg:flex-row flex-1">

          {/* ── Panneau gauche ── */}
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

            <div className="relative z-10 flex flex-col justify-center h-full p-8 lg:p-12">
              <motion.div variants={container} initial="hidden" animate="show" className="py-12">
                <motion.div variants={item} className="mb-6">
                  <span className="badge-gold text-[10px] tracking-[0.2em]">Rejoignez le réseau</span>
                </motion.div>
                <motion.h1 variants={item} className="font-playfair text-3xl xl:text-4xl font-bold text-white leading-tight mb-5">
                  Déposez votre<br />
                  <span className="text-gradient-gold italic">candidature</span>
                </motion.h1>
                <motion.p variants={item} className="text-white/65 text-base leading-relaxed mb-10">
                  Remplissez ce formulaire et notre équipe vous contactera sous{' '}
                  <strong className="text-white/90">48h</strong> pour un premier échange sans engagement.
                </motion.p>
                <motion.div variants={item} className="space-y-4">
                  {guarantees.map((g, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <g.icon size={17} className="text-green-light flex-shrink-0" />
                      <span className="text-white/75 text-sm font-medium">{g.text}</span>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
              <div className="border-t border-white/15 pt-6">
                <p className="text-white/40 text-xs">© 2025 Win Win Immo · ImmoZen Groupe Suisse</p>
              </div>
            </div>
          </div>

          {/* ── Panneau droit — formulaire ── */}
          <div className="flex-1 bg-[#FAFAF8] overflow-y-auto">
            <div className="max-w-2xl mx-auto px-6 sm:px-10 py-14">

              {sent ? (
                /* ── Confirmation ── */
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center min-h-[60vh] text-center"
                >
                  <div
                    className="w-24 h-24 rounded-full flex items-center justify-center mb-8 shadow-xl"
                    style={{ background: 'linear-gradient(135deg, #06733D, #0AAE3D)' }}
                  >
                    <CheckCircle2 size={44} className="text-white" />
                  </div>
                  <h2 className="font-playfair text-3xl font-bold text-green-primary mb-4">
                    Candidature envoyée !
                  </h2>
                  <p className="text-anthracite/60 text-lg leading-relaxed mb-10 max-w-md">
                    Merci pour votre intérêt. Notre équipe examinera votre dossier et vous contactera sous{' '}
                    <strong className="text-green-primary">48 heures</strong>.
                  </p>
                  <div className="flex gap-4 flex-wrap justify-center">
                    <button onClick={() => setSent(false)} className="btn-outline-gold text-sm">
                      Envoyer une autre candidature
                    </button>
                    <Link href="/" className="btn-gold text-sm">
                      Retour à l'accueil
                      <ArrowLeft size={15} className="rotate-180" />
                    </Link>
                  </div>
                </motion.div>
              ) : (
                /* ── Formulaire ── */
                <motion.form variants={container} initial="hidden" animate="show" onSubmit={handleSubmit}>

                  <motion.div variants={item} className="mb-8">
                    <h2 className="font-playfair text-2xl font-bold text-green-primary mb-2">
                      Vos informations
                    </h2>
                    <p className="text-anthracite/50 text-sm">Tous les champs marqués * sont obligatoires</p>
                    <span className="divider-gold mt-4 block" />
                  </motion.div>

                  {/* Prénom / Nom */}
                  <motion.div variants={item} className="grid sm:grid-cols-2 gap-4 mb-5">
                    <div>
                      <label className="label-form">Prénom *</label>
                      <input name="prenom" value={form.prenom} onChange={handleChange} required placeholder="Jean" className="input-premium" />
                    </div>
                    <div>
                      <label className="label-form">Nom *</label>
                      <input name="nom" value={form.nom} onChange={handleChange} required placeholder="Dupont" className="input-premium" />
                    </div>
                  </motion.div>

                  {/* Téléphone / Email */}
                  <motion.div variants={item} className="grid sm:grid-cols-2 gap-4 mb-5">
                    <div>
                      <label className="label-form">Téléphone *</label>
                      <input name="telephone" value={form.telephone} onChange={handleChange} required placeholder="+33 6 00 00 00 00" className="input-premium" />
                    </div>
                    <div>
                      <label className="label-form">Email *</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="jean@email.com" className="input-premium" />
                    </div>
                  </motion.div>

                  {/* Pays / Ville */}
                  <motion.div variants={item} className="grid sm:grid-cols-2 gap-4 mb-5">
                    <div>
                      <label className="label-form">Pays de résidence</label>
                      <select name="pays" value={form.pays} onChange={handleChange} className="input-premium">
                        <option value="">Sélectionner…</option>
                        {PAYS_OPTIONS.map((p) => (
                          <option key={p} value={p}>{p}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="label-form">Ville</label>
                      <input name="ville" value={form.ville} onChange={handleChange} placeholder="Paris" className="input-premium" />
                    </div>
                  </motion.div>

                  {/* Âge / Budget */}
                  <motion.div variants={item} className="grid sm:grid-cols-2 gap-4 mb-5">
                    <div>
                      <label className="label-form">Âge</label>
                      <input name="age" value={form.age} onChange={handleChange} placeholder="35" type="number" min="18" max="75" className="input-premium" />
                    </div>
                    <div>
                      <label className="label-form">Budget d'investissement</label>
                      <select name="budget" value={form.budget} onChange={handleChange} className="input-premium">
                        <option value="">Sélectionner…</option>
                        {BUDGET_OPTIONS.map((b) => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                    </div>
                  </motion.div>

                  {/* Langues */}
                  <motion.div variants={item} className="mb-7">
                    <label className="label-form">Langues parlées</label>
                    <input
                      name="langues"
                      value={form.langues}
                      onChange={handleChange}
                      placeholder="Français, Anglais, Arabe…"
                      className="input-premium"
                    />
                  </motion.div>

                  {/* Erreur */}
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-5 px-4 py-3 rounded-xl text-sm text-red-600 border border-red-200 bg-red-50"
                    >
                      {error}
                    </motion.div>
                  )}

                  {/* Submit */}
                  <motion.div variants={item}>
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
                          Envoi en cours…
                        </>
                      ) : (
                        <>Je souhaite être contacté(e) <Send size={15} /></>
                      )}
                    </button>
                    <p className="text-anthracite/35 text-xs text-center mt-4">
                      Vos données sont traitées de manière confidentielle.
                    </p>
                  </motion.div>

                </motion.form>
              )}
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
