'use client'
import { useEffect, useState, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export type Slide = { src: string; alt: string }

export default function HeroSlider({ slides, interval = 5500 }: { slides: Slide[]; interval?: number }) {
  const [index, setIndex] = useState(0)

  const next = useCallback(() => setIndex((i) => (i + 1) % slides.length), [slides.length])
  const prev = useCallback(() => setIndex((i) => (i - 1 + slides.length) % slides.length), [slides.length])

  useEffect(() => {
    const id = setInterval(next, interval)
    return () => clearInterval(id)
  }, [next, interval])

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.1, ease: 'easeInOut' }, scale: { duration: interval / 1000 + 1, ease: 'linear' } }}
          style={{ position: 'absolute', inset: 0 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={slides[index].src}
            alt={slides[index].alt}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }}
          />
        </motion.div>
      </AnimatePresence>

      {/* dark gradient for text legibility */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(6,10,20,0.55) 0%, rgba(6,10,20,0.35) 45%, rgba(6,10,20,0.85) 100%)' }} />

      {/* controls */}
      <div style={{ position: 'absolute', bottom: '2rem', left: 0, right: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', zIndex: 2 }}>
        <button
          aria-label="Previous slide"
          onClick={prev}
          style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '50%', width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', backdropFilter: 'blur(6px)' }}
        >
          <ChevronLeft size={18} color="white" />
        </button>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              style={{
                width: i === index ? 24 : 8,
                height: 8,
                borderRadius: 999,
                border: 'none',
                cursor: 'pointer',
                background: i === index ? 'var(--accent)' : 'rgba(255,255,255,0.4)',
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </div>
        <button
          aria-label="Next slide"
          onClick={next}
          style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '50%', width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', backdropFilter: 'blur(6px)' }}
        >
          <ChevronRight size={18} color="white" />
        </button>
      </div>
    </div>
  )
}
