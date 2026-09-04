'use client'
import { motion } from 'framer-motion'

export default function PageHeader({
  title,
  subtitle,
  image,
}: {
  title: string
  subtitle?: string
  image?: string
}) {
  return (
    <div style={{ paddingTop: '103px', position: 'relative', overflow: 'hidden', minHeight: '320px', display: 'flex', alignItems: 'flex-end' }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: image ? `url(${image})` : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          background: image ? undefined : 'linear-gradient(135deg, #060b17 0%, #0d1b3e 100%)',
        }}
      />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(6,10,20,0.55) 0%, rgba(6,10,20,0.8) 100%)' }} />
      {/* accent wash that morphs with the page theme */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(120deg, var(--accent-soft) 0%, transparent 55%)', transition: 'background 0.3s' }} />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{ position: 'relative', zIndex: 1, padding: '3.5rem 5%', maxWidth: '1280px', margin: '0 auto', width: '100%' }}
      >
        <div style={{ width: 44, height: 3, background: 'var(--accent)', marginBottom: '1.25rem', transition: 'background 0.3s' }} />
        <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'white', letterSpacing: '-0.01em' }}>{title}</h1>
        {subtitle && <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.95rem', marginTop: '0.75rem', maxWidth: 560 }}>{subtitle}</p>}
      </motion.div>
    </div>
  )
}
