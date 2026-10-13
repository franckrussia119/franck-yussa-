'use client'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import NdopPattern from '@/components/NdopPattern'

const ease = [0.22, 1, 0.36, 1] as const

export default function Hero() {
  const reduce = useReducedMotion()
  const rise = (delay: number) =>
    reduce ? {} : { initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay, ease } }

  return (
    <section className="bg-indigo hero" style={{ paddingTop: 'var(--nav-h)', position: 'relative', overflow: 'hidden' }}>
      <div className="container hero-grid">
        <div className="hero-copy">
          <motion.p {...rise(0.05)} className="t-label" style={{ color: 'var(--brass)' }}>
            Corporate lawyer and economist
          </motion.p>
          <motion.h1 {...rise(0.15)} className="t-display" style={{ color: '#fff', marginTop: '1rem' }}>
            Dr. Frank-Valere Yussa
          </motion.h1>
          <motion.p {...rise(0.3)} className="t-lead" style={{ marginTop: '1.5rem', maxWidth: '40ch' }}>
            Cross-border legal and financial counsel for companies, investors and governments doing business between Africa, Russia, Europe and Latin America.
          </motion.p>
          <motion.div {...rise(0.42)} className="btn-row" style={{ marginTop: '2.25rem' }}>
            <Link href="/contact" className="btn btn--brass">Book a consultation</Link>
            <Link href="#practice" className="btn btn--ghost">See practice areas</Link>
          </motion.div>
          <motion.dl {...rise(0.55)} className="hero-facts">
            <div><dt>Founding Partner</dt><dd>The Noub&apos;s Law &amp; Advisory</dd></div>
            <div><dt>PhD, World Economy</dt><dd>RUDN University, Moscow</dd></div>
          </motion.dl>
        </div>

        <div className="hero-visual">
          <div className="hero-ndop" aria-hidden>
            <NdopPattern width={150} height={900} seed={11} />
          </div>
          <motion.div
            className="photo hero-photo"
            initial={reduce ? false : { clipPath: 'inset(100% 0 0 0)' }}
            animate={reduce ? undefined : { clipPath: 'inset(0% 0 0 0)' }}
            transition={{ duration: 1.1, delay: 0.2, ease }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/frank-portrait-lounge.jpg" alt="Dr. Frank-Valere Yussa in a blue ndop-print suit" style={{ objectPosition: 'center 22%' }} fetchPriority="high" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
