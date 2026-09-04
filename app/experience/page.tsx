import type { Metadata } from 'next'
import { Scale, GraduationCap, Landmark } from 'lucide-react'
import PageHeader from '@/components/PageHeader'
import SectionReveal from '@/components/SectionReveal'

export const metadata: Metadata = { title: 'Experience - Frank Valere Yussa' }

const TIMELINE = [
  { icon: Scale, year: '2024 – Present · Founding Partner', org: "The Noub's Law & Advisory", items: ['Leading cross-border negotiations across LATAM, Africa, and Europe', 'Legal consultant to multiple embassies in Russia', 'Coordinating complex corporate obligations across multiple jurisdictions'] },
  { icon: GraduationCap, year: '2022 – 2023 · Teaching Assistant', org: "Peoples' Friendship University of Russia", items: ['Institutional Economy and Finance (BBA students)', 'General Economy with pharmaceutical focus (Medical students)'] },
  { icon: Landmark, year: '2022 · Market Research Analyst & Area Sales Manager', org: 'Smart Group pl sp. z o.o.', items: ['Market analysis and strategic positioning across Central and Eastern Europe', 'High-profile client acquisition and relationship management', 'International representation at major industry events (SEAL Paris, ANUGA Germany)'] },
]

export default function Experience() {
  return (
    <>
      <PageHeader title="Experience" subtitle="A decade at the intersection of law, finance, and diplomacy" image="/images/frank-hero-moscow.jpg" />
      <section style={{ padding: '5rem 5%', background: 'white' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          {TIMELINE.map((item, i) => (
            <SectionReveal key={i} delay={i * 0.08} style={{ display: 'flex', gap: '1.5rem', marginBottom: '3rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.3s' }}>
                  <item.icon size={20} color="#04070f" />
                </div>
                {i < TIMELINE.length - 1 && <div style={{ width: 2, flexGrow: 1, background: 'var(--accent-soft)', marginTop: '0.5rem', minHeight: 80, transition: 'background 0.3s' }} />}
              </div>
              <div className="hover-lift" style={{ background: i % 2 === 1 ? '#eff6ff' : 'white', padding: '1.5rem 2rem', flex: 1, borderRadius: 8, border: '1px solid #e8e8e8' }}>
                <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '1.1rem', color: '#0d1b3e', marginBottom: '0.35rem' }}>{item.year}</h3>
                <p style={{ color: 'var(--accent)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.75rem', transition: 'color 0.3s' }}>{item.org}</p>
                <ul style={{ listStyle: 'disc', paddingLeft: '1.25rem', color: '#6b7a8a', fontSize: '0.88rem', lineHeight: 1.9 }}>
                  {item.items.map((li, j) => <li key={j}>{li}</li>)}
                </ul>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>
    </>
  )
}
