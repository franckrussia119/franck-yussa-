import type { Metadata } from 'next'
import { Building2, Rocket, Landmark, TrendingUp, Building, Cpu, Quote } from 'lucide-react'
import PageHeader from '@/components/PageHeader'
import SectionReveal from '@/components/SectionReveal'

export const metadata: Metadata = { title: 'Clients - Frank Valere Yussa' }

const CLIENT_TYPES = [
  { icon: Building2, text: 'Corporations navigating international expansion' },
  { icon: Rocket, text: 'Entrepreneurs building scalable ventures' },
  { icon: Landmark, text: 'Embassies and diplomatic missions' },
  { icon: TrendingUp, text: 'Investment funds and private equity' },
  { icon: Building, text: 'Government and public institutions' },
  { icon: Cpu, text: 'Technology and innovation companies' },
]

export default function Clients() {
  return (
    <>
      <PageHeader title="Clients" subtitle="Trusted by leaders across industries and continents" image="/images/frank-handshake-bench.jpg" />

      <section style={{ padding: '5rem 5%', background: 'white' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center' }}>
          <SectionReveal>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', color: '#0d1b3e', marginBottom: '1.5rem' }}>Trusted by Leaders Across Industries</h2>
            <p style={{ color: '#6b7a8a', lineHeight: 1.8, marginBottom: '3rem', fontSize: '0.95rem' }}>
              Frank Valere Yussa has advised corporations, embassies, and entrepreneurs across LATAM, Africa, and Europe. His clients range from multinational corporations to government institutions seeking specialized legal and financial counsel.
            </p>
          </SectionReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {CLIENT_TYPES.map((client, i) => (
              <SectionReveal key={i} delay={i * 0.06} className="hover-lift" style={{ background: '#f8f8f6', padding: '2rem 1.5rem', borderRadius: 12, border: '1px solid #e8e8e8', textAlign: 'center' }}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--accent-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', transition: 'background 0.3s' }}>
                  <client.icon size={22} color="var(--accent)" style={{ transition: 'color 0.3s' }} />
                </div>
                <p style={{ color: '#0d1b3e', fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.88rem', lineHeight: 1.5 }}>{client.text}</p>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section style={{ padding: '5rem 5%', background: '#0d1b3e' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center' }}>
          <SectionReveal>
            <Quote size={32} color="var(--accent)" style={{ margin: '0 auto 1.5rem', display: 'block', transition: 'color 0.3s' }} />
            <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', color: 'white', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              &ldquo;Every engagement begins with the same principle: legal counsel divorced from economic reality is incomplete. My clients don&apos;t just get a lawyer — they get a partner who understands the financial architecture behind every legal decision.&rdquo;
            </p>
            <p style={{ color: 'var(--accent)', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.85rem', transition: 'color 0.3s' }}>Frank Valere Yussa</p>
          </SectionReveal>
        </div>
      </section>

      {/* Regions served */}
      <section style={{ padding: '5rem 5%', background: '#f8f8f6' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <SectionReveal style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '1.6rem', color: '#0d1b3e' }}>Where Clients Are Served</h2>
          </SectionReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            {['Latin America', 'Africa', 'Europe', 'Russia & CIS'].map((region, i) => (
              <SectionReveal key={i} delay={i * 0.06} className="hover-lift" style={{ background: 'white', padding: '1.75rem', borderRadius: 8, textAlign: 'center', border: '1px solid #e8e8e8' }}>
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, color: '#0d1b3e', fontSize: '0.95rem' }}>{region}</p>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
