'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Building2 } from 'lucide-react'

export default function AboutTabs({ tabs }: { tabs: { label: string; body: string }[] }) {
  const [tab, setTab] = useState(0)

  return (
    <>
      <div style={{ display: 'flex', gap: 0, marginBottom: '1.5rem', border: '1px solid #e0e0e0', borderRadius: 8, overflow: 'hidden' }}>
        {tabs.map((t, i) => (
          <button key={i} onClick={() => setTab(i)} style={{ flex: 1, padding: '1rem 0.5rem', textAlign: 'center', background: tab === i ? 'white' : '#f4f4f4', border: 'none', borderBottom: tab === i ? '2px solid var(--accent)' : '2px solid transparent', cursor: 'pointer', transition: 'border-color 0.3s' }}>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.78rem', color: tab === i ? 'var(--accent)' : '#6b7a8a', transition: 'color 0.3s' }}>{t.label}</p>
          </button>
        ))}
      </div>

      <motion.div key={tab} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem', minHeight: 90 }}>
        <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--accent-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'background 0.3s' }}>
          <Building2 size={22} color="var(--accent)" style={{ transition: 'color 0.3s' }} />
        </div>
        <p style={{ color: '#4a5568', fontSize: '0.9rem', lineHeight: 1.7 }}>{tabs[tab].body}</p>
      </motion.div>
    </>
  )
}
