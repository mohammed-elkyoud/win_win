'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'

const navLinks = [
  { href: '#concept', label: 'Concept' },
  { href: '#maroc', label: 'Le Maroc' },
  { href: '#pack', label: 'Notre Pack' },
  { href: '#formation', label: 'Formation' },
  { href: '#processus', label: 'Processus' },
]

export default function Navbar({ invertScroll = false }: { invertScroll?: boolean }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const hasBg = invertScroll ? !scrolled : scrolled
  const bgStyle = invertScroll
    ? { background: 'rgba(6,115,61,0.96)' }
    : { background: 'rgba(3,26,12,0.96)' }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        hasBg ? 'backdrop-blur-xl shadow-2xl shadow-black/20' : 'bg-transparent'
      }`}
      style={hasBg ? bgStyle : {}}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="group transition-transform duration-300 hover:scale-105">
            <div className="relative h-14 w-52">
              <Image
                src="/images/winwin/immozen-transparent.png"
                alt="ImmoZen Groupe Suisse"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={isHome ? link.href : `/${link.href}`}
                className="relative text-white/75 hover:text-white text-sm font-medium tracking-wide transition-all duration-200 group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full rounded-full" />
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link href="/candidature" className="btn-gold text-xs px-6 py-3 gap-2">
              Postuler maintenant
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-green-forest/98 backdrop-blur-xl border-t border-gold/10"
          >
            <div className="container-custom py-5 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={isHome ? link.href : `/${link.href}`}
                  className="text-white/80 hover:text-gold py-2.5 px-3 rounded-lg text-base font-medium transition-all hover:bg-white/5"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 border-t border-white/10 mt-1">
                <Link href="/candidature" className="btn-gold w-full justify-center" onClick={() => setMenuOpen(false)}>
                  Postuler maintenant <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
