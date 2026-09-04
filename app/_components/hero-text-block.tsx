'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function HeroTextBlock() {
  return (
    <div style={{ position: 'relative', zIndex: 1, maxWidth: 1280, margin: '0 auto', padding: '0 5% 6rem', width: '100%' }}>
      <motion.p
        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        style={{ color: 'var(--accent)', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem', transition: 'color 0.3s' }}
      >
        Investment Banker · Lawyer · Aircraft Specialist
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
        style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(2rem, 5vw, 3.6rem)', fontWeight: 800, color: 'white', lineHeight: 1.15, maxWidth: 760, marginBottom: '1.5rem' }}
      >
        Corporate Lawyer with traceable Banking and Corporate Finance experience
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
        style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.92rem', fontStyle: 'italic', lineHeight: 1.7, maxWidth: 540, marginBottom: '2.5rem' }}
      >
        &ldquo;So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.&rdquo; <strong style={{ color: 'rgba(255,255,255,0.95)' }}>Isaiah 41:10</strong>
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}
        style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
      >
        <Link href="#practice-areas" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--accent)', color: '#04070f', padding: '0.9rem 1.8rem', borderRadius: 999, fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.85rem', transition: 'background 0.3s' }}>
          View Practice Areas <ArrowRight size={16} />
        </Link>
        <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', border: '1.5px solid rgba(255,255,255,0.4)', color: 'white', padding: '0.9rem 1.8rem', borderRadius: 999, fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.85rem' }}>
          Book a Consultation
        </Link>
      </motion.div>
    </div>
  )
}
