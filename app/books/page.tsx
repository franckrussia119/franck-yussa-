import type { Metadata } from 'next'
import { BookOpen, Clock } from 'lucide-react'
import PageHeader from '@/components/PageHeader'
import SectionReveal from '@/components/SectionReveal'

export const metadata: Metadata = { title: 'Books - Frank Valere Yussa' }

export default function Books() {
  return (
    <>
      <PageHeader title="Books" subtitle="Forthcoming publications" image="/images/frank-office-blue-suit.jpg" />
      <section style={{ padding: '6rem 5%', background: 'white' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <SectionReveal>
            <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--accent-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', transition: 'background 0.3s' }}>
              <BookOpen size={28} color="var(--accent)" style={{ transition: 'color 0.3s' }} />
            </div>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', color: '#0d1b3e', marginBottom: '1.5rem' }}>Publications Coming Soon</h2>
            <p style={{ color: '#6b7a8a', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: '2rem' }}>
              Frank Valere Yussa is currently working on publications covering international corporate law, cross-border transactions, and economic development in emerging markets.
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent)', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.82rem', letterSpacing: '0.05em', textTransform: 'uppercase', transition: 'color 0.3s' }}>
              <Clock size={16} /> In Progress
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  )
}
