import type { Metadata } from 'next'
import { CheckCircle2 } from 'lucide-react'
import PageHeader from '@/components/PageHeader'
import SectionReveal from '@/components/SectionReveal'

export const metadata: Metadata = { title: 'Skills - Frank Valere Yussa' }

const CORE_SKILLS = [
  { title: 'Mergers & Acquisitions (M&A)', desc: 'Expert structuring and execution of cross-border M&A transactions. Comprehensive support from initial due diligence through deal closure, ensuring regulatory compliance across multiple jurisdictions while optimizing transaction structures for client objectives.' },
  { title: 'Corporate Finance Law', desc: 'Specialized counsel on corporate financing structures, capital raising strategies, and financial regulatory compliance. Advising on complex corporate finance transactions including equity offerings, debt financing, and hybrid instruments.' },
  { title: 'Banking & Financial Regulation', desc: 'Deep expertise in banking law and financial services regulation across international markets. Navigating complex regulatory frameworks to ensure compliance while enabling business growth and innovation.' },
  { title: 'Due Diligence', desc: 'Comprehensive legal and financial due diligence for cross-border investments and acquisitions. Identifying risks, uncovering opportunities, and providing actionable insights for informed decision-making.' },
  { title: 'Private International Law', desc: 'Specialized knowledge in conflict of laws, international jurisdiction, and cross-border legal frameworks. Resolving complex multi-jurisdictional legal challenges with precision and strategic foresight.' },
  { title: 'Contract Negotiation & Drafting', desc: 'Expert negotiation and drafting of complex international commercial agreements, joint ventures, partnership agreements, and multi-party contracts. Protecting client interests while facilitating successful business relationships.' },
]

const GEO = [
  { img: 'https://frankyussa.com/wp-content/uploads/2025/11/unnamed-27.jpg', region: 'Latin America (LATAM)', items: ['Cross-border transaction structuring', 'Market entry strategies', 'Regulatory navigation', 'Partnership and joint venture agreements'] },
  { img: 'https://frankyussa.com/wp-content/uploads/2025/11/unnamed-25.jpg', region: 'Africa', items: ['Emerging market investments', 'Infrastructure and development projects', 'Multi-jurisdictional compliance', 'International trade agreements'] },
  { img: 'https://frankyussa.com/wp-content/uploads/2025/11/unnamed-26.jpg', region: 'Europe', items: ['EU regulatory compliance', 'Pan-European transactions', 'Eastern European market expertise', 'Russia-Europe business corridors'] },
  { img: '/images/frank-hero-moscow.jpg', region: 'Industry Experience', items: ['Financial Services & Banking', 'Pharmaceutical & Healthcare', 'International Trade & Commerce', 'Diplomatic & Government Relations', 'Technology & Innovation', 'Real Estate & Infrastructure'] },
]

function SolutionBlock({ tag, title, desc, points, img, reverse }: { tag: string; title: string; desc: string; points: string[]; img: string; reverse?: boolean }) {
  return (
    <section style={{ padding: '5rem 5%', background: 'white' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
        <SectionReveal className="img-zoom" style={{ order: reverse ? 2 : 1, borderRadius: 8 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={img} alt={title} style={{ width: '100%', height: 480, objectFit: 'cover', borderRadius: 8 }} />
        </SectionReveal>
        <SectionReveal delay={0.1} style={{ order: reverse ? 1 : 2 }}>
          <span style={{ background: 'var(--accent-soft)', padding: '0.3rem 0.75rem', fontSize: '0.78rem', fontFamily: 'Montserrat, sans-serif', fontWeight: 600, color: 'var(--accent)', borderRadius: 4, display: 'inline-block', marginBottom: '1.5rem', transition: 'background 0.3s, color 0.3s' }}>{tag}</span>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '2rem', color: '#0d1b3e', marginBottom: '1.5rem', lineHeight: 1.3 }}>{title}</h2>
          <p style={{ color: '#6b7a8a', lineHeight: 1.8, marginBottom: '2rem', fontSize: '0.92rem' }}>{desc}</p>
          <div style={{ borderTop: '1px solid #e8e8e8', paddingTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {points.map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <CheckCircle2 size={18} color="var(--accent)" style={{ flexShrink: 0, marginTop: 2, transition: 'color 0.3s' }} />
                <p style={{ color: '#4a5568', fontSize: '0.88rem', lineHeight: 1.6 }}><strong style={{ color: '#0d1b3e' }}>{item.split(' - ')[0]}</strong> - {item.split(' - ')[1]}</p>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}

export default function Skills() {
  return (
    <>
      <PageHeader title="Core Competencies" subtitle="Skills Expertise" image="https://frankyussa.com/wp-content/uploads/2025/11/content-2-e1763732924620.jpeg" />

      <section style={{ padding: '5rem 5%', background: '#0d1b3e' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {CORE_SKILLS.map((skill, i) => (
            <SectionReveal key={i} delay={i * 0.06} className="hover-lift" style={{ background: 'white', borderRadius: 12, padding: '2rem', boxShadow: '0 2px 20px rgba(0,0,0,0.2)', textAlign: 'center' }}>
              <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#0d1b3e', marginBottom: '1rem' }}>{skill.title}</h3>
              <p style={{ color: '#6b7a8a', fontSize: '0.85rem', lineHeight: 1.7 }}>{skill.desc}</p>
            </SectionReveal>
          ))}
        </div>
      </section>

      <SolutionBlock
        tag="Best solutions"
        title="Investment Banking Initial Public Offerings (IPO)"
        desc="Advising companies through the IPO process, from pre-IPO structuring to regulatory compliance and listing requirements. Coordinating legal and financial aspects to ensure successful public market entry."
        points={['Pre-IPO Corporate Restructuring - Optimizing corporate structure, governance frameworks', 'Regulatory Compliance & Documentation - Preparing and reviewing prospectuses, registration', 'Underwriter Coordination & Deal Structuring - Negotiating underwriting agreements', 'Post-IPO Governance & Compliance - Establishing ongoing reporting obligations']}
        img="https://frankyussa.com/wp-content/uploads/2016/09/unnamed-7-e1763474742486.jpg"
      />

      <SolutionBlock
        tag="Best solutions"
        title="Leveraged Buyouts (LBO)"
        desc="Structuring and executing leveraged buyout transactions, including financing arrangements, security structures, and regulatory compliance across multiple jurisdictions."
        points={['Transaction Structuring & Financing Architecture - Designing optimal capital structures combining senior debt', 'Security Documentation & Collateral Arrangements - Drafting and negotiating security agreements', 'Due Diligence & Risk Assessment - Conducting comprehensive legal and financial due diligence', 'Acquisition Agreement Negotiation - Structuring purchase agreements, representations and warranties']}
        img="/images/frank-office-blue-suit.jpg"
        reverse
      />

      {/* Geographic Expertise */}
      <section style={{ padding: '5rem 5%', background: '#0a1a12' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <SectionReveal style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: '0.5rem' }}>Geographic & Industry Expertise</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>Regional Specialization</p>
          </SectionReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
            {GEO.map((geo, i) => (
              <SectionReveal key={i} delay={i * 0.08} style={{ textAlign: 'center' }}>
                <div className="img-zoom" style={{ borderRadius: 4, marginBottom: '1rem' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={geo.img} alt={geo.region} style={{ width: '100%', height: 220, objectFit: 'cover' }} />
                </div>
                <p style={{ color: 'var(--accent)', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.75rem', transition: 'color 0.3s' }}>{geo.region}</p>
                <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: 'rgba(255,255,255,0.7)', fontSize: '0.82rem', lineHeight: 1.9, textAlign: 'left', display: 'inline-block' }}>
                  {geo.items.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
