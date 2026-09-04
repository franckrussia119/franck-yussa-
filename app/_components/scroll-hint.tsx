'use client'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

export default function ScrollHint() {
  return (
    <motion.div
      animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      style={{ position: 'absolute', bottom: '1.25rem', left: '50%', transform: 'translateX(-50%)', zIndex: 1, color: 'rgba(255,255,255,0.5)' }}
    >
      <ArrowDown size={20} />
    </motion.div>
  )
}
