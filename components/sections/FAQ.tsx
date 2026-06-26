'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Faut-il avoir de l\'expérience immobilière ?',
    a: 'Non, absolument pas. Notre formation est conçue aussi bien pour les débutants complets que pour les professionnels. Nous vous transmettons toutes les compétences nécessaires pour exercer le métier d\'agent immobilier au Maroc, de la prospection à la signature.',
  },
  {
    q: 'Puis-je venir en famille ?',
    a: 'Oui, c\'est tout à fait possible selon votre projet personnel. Nous vous accompagnons dans la préparation de votre installation familiale au Maroc : logement, scolarité, démarches administratives. Chaque situation est étudiée individuellement lors de la présentation du projet.',
  },
  {
    q: 'Dois-je parler arabe ?',
    a: 'Non, ce n\'est pas obligatoire. Le français est largement utilisé dans les transactions immobilières au Maroc, notamment avec la clientèle internationale et européenne que vous ciblerez. Toutefois, quelques bases d\'arabe dialectal peuvent être un atout supplémentaire.',
  },
  {
    q: 'Combien coûte l\'intégration ?',
    a: 'Le montant du pack est communiqué lors de la présentation personnalisée du projet. Il couvre la création de votre société, le premier mois de logement et de véhicule, l\'assistance juridique et administrative, la formation complète et l\'intégration au réseau. Remplissez le formulaire de candidature pour recevoir tous les détails.',
  },
  {
    q: 'Combien de temps prend le processus d\'intégration ?',
    a: 'De la candidature au démarrage effectif de votre activité, le processus prend généralement entre 6 et 10 semaines selon votre situation personnelle et administrative. Nous optimisons chaque étape pour que vous puissiez commencer à travailler le plus rapidement possible.',
  },
  {
    q: 'Ai-je un territoire exclusif ?',
    a: 'Oui, chaque franchisé bénéficie d\'un secteur géographique dédié pour exercer son activité. Cette exclusivité territoriale vous protège et vous permet de développer votre portefeuille clients sans concurrence interne au réseau.',
  },
  {
    q: 'Que se passe-t-il si ça ne fonctionne pas ?',
    a: 'Notre accompagnement continu est précisément là pour maximiser vos chances de succès. Si vous rencontrez des difficultés, votre référent réseau intervient rapidement pour analyser la situation et mettre en place des solutions. Nous investissons dans votre réussite parce qu\'elle est aussi la nôtre.',
  },
]

function FAQItem({ faq, index, isInView }: { faq: typeof faqs[0]; index: number; isInView: boolean }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.07 }}
      className="rounded-2xl overflow-hidden"
      style={{ border: '1px solid rgba(6,115,61,0.10)', background: open ? 'rgba(6,115,61,0.03)' : 'rgba(255,255,255,0.9)' }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left transition-colors duration-200 hover:bg-green-primary/5"
      >
        <span className="font-semibold text-anthracite text-base leading-snug pr-4">{faq.q}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
          style={{ background: open ? 'linear-gradient(135deg, #06733D, #0AAE3D)' : 'rgba(6,115,61,0.08)' }}
        >
          <ChevronDown size={16} className={open ? 'text-white' : 'text-green-medium'} />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-0">
              <div className="h-px bg-green-primary/8 mb-4" />
              <p className="text-anthracite/65 leading-relaxed">{faq.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section-padding bg-beige" ref={ref}>
      <div className="container-custom">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-5"
          >
            <span className="badge-green">Vos questions</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="heading-lg text-green-primary mb-5"
          >
            Questions{' '}
            <span className="text-gradient-gold">fréquentes</span>
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
            className="text-anthracite/60 text-lg max-w-xl mx-auto"
          >
            Tout ce que vous devez savoir avant de franchir le pas.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} isInView={isInView} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-anthracite/50 text-sm mb-4">Vous avez d'autres questions ?</p>
          <a href="#candidature" className="btn-green">
            Contactez-nous directement
          </a>
        </motion.div>
      </div>
    </section>
  )
}
