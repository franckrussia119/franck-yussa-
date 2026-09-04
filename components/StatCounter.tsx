'use client'
import { useEffect, useRef } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'

export default function StatCounter({ value, suffix = '', label }: { value: number; suffix?: string; label: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const motionVal = useMotionValue(0)
  const spring = useSpring(motionVal, { duration: 1200, bounce: 0 })

  useEffect(() => {
    if (inView) motionVal.set(value)
  }, [inView, value, motionVal])

  useEffect(() => {
    return spring.on('change', (latest) => {
      if (ref.current) ref.current.textContent = Math.round(latest).toString()
    })
  }, [spring])

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: 'white' }}>
        <span ref={ref}>0</span>
        {suffix}
      </div>
      <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', letterSpacing: '0.05em', textTransform: 'uppercase', marginTop: '0.4rem' }}>{label}</p>
    </div>
  )
}
