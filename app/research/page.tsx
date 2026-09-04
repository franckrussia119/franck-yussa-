import type { Metadata } from 'next'
import { FileText } from 'lucide-react'
import PageHeader from '@/components/PageHeader'
import SectionReveal from '@/components/SectionReveal'

export const metadata: Metadata = { title: 'Research & Publications - Frank Valere Yussa' }

const PUBLICATIONS = [
  { title: 'PhD Research: Private International Law', period: '2025 – 2027' },
  { title: 'PhD Research: World Economics and Finance', period: '2023 – 2026' },
  { title: 'LLM Thesis: Corporate Law, Banking & Finance', period: 'Graduated with Honours' },
  { title: 'MBA Thesis: International Finance & Banking', period: 'Best Graduate, RUDN Business School' },
]

export default function Research() {
  return (
    <>
      <PageHeader title="Research & Publications" subtitle="Academic work at the intersection of law and economics" image="/images/jurisdiction.jpg" />
      <section style={{ padding: '5rem 5%', background: 'white' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <SectionReveal>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', color: '#0d1b3e', marginBottom: '1.25rem' }}>Academic Research</h2>
            <p style={{ color: '#6b7a8a', lineHeight: 1.8, marginBottom: '3rem', fontSize: '0.95rem' }}>
              As a dual PhD candidate in Private International Law and World Economics & Finance, Frank Valere Yussa is engaged in cutting-edge research at the intersection of law and economics — examining how cross-border legal frameworks shape, and are shaped by, global capital flows.
            </p>
          </SectionReveal>
          {PUBLICATIONS.map((pub, i) => (
            <SectionReveal key={i} delay={i * 0.08} className="hover-lift" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.5rem', borderLeft: '3px solid var(--accent)', marginBottom: '1.25rem', background: '#f8f8f6', borderRadius: '0 8px 8px 0', transition: 'border-color 0.3s' }}>
              <FileText size={20} color="var(--accent)" style={{ flexShrink: 0, transition: 'color 0.3s' }} />
              <div>
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, color: '#0d1b3e', fontSize: '0.92rem' }}>{pub.title}</p>
                <p style={{ color: '#6b7a8a', fontSize: '0.8rem', marginTop: '0.2rem' }}>{pub.period}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>
    </>
  )
}
