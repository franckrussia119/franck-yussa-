import Link from 'next/link'
import type { Metadata } from 'next'
import { Scale, Landmark, Globe2, ArrowRight, CheckCircle2, GraduationCap, Award, BookOpen } from 'lucide-react'
import HeroSlider from '@/components/HeroSlider'
import HeroTextBlock from './_components/hero-text-block'
import ScrollHint from './_components/scroll-hint'
import AboutTabs from './_components/about-tabs'
import SectionReveal from '@/components/SectionReveal'
import StatCounter from '@/components/StatCounter'

export const metadata: Metadata = { title: 'Frank Valere Yussa - Corporate Lawyer & Investment Banker' }

const HERO_SLIDES = [
  { src: '/images/frank-hero-moscow.jpg', alt: 'Frank Valere Yussa in Moscow' },
  { src: '/images/frank-office-blue-suit.jpg', alt: 'Frank Valere Yussa in his office' },
  { src: '/images/frank-handshake-bench.jpg', alt: 'Frank Valere Yussa with a colleague' },
]

const practiceAreas = [
  { img: 'https://frankyussa.com/wp-content/uploads/2025/11/unnamed-20.jpg', title: 'Cross-Border Mergers & Acquisitions', desc: 'Structuring and executing M&A transactions across multiple jurisdictions, with particular expertise in LATAM-Europe-Africa corridors. From due diligence to deal closure, ensuring regulatory compliance and optimal deal structure.' },
  { img: 'https://frankyussa.com/wp-content/uploads/2025/11/unnamed-21.jpg', title: 'Corporate Finance & Banking Law', desc: 'Advising on corporate financing structures, banking regulations, IPOs, and leveraged buyouts. Bridging the gap between legal requirements and financial objectives.' },
  { img: 'https://frankyussa.com/wp-content/uploads/2025/11/unnamed-22.jpg', title: 'International Contract Negotiation', desc: 'Leading high-stakes negotiations for international partnerships, joint ventures, and commercial agreements. Expertise in multi-party, multi-jurisdictional deal structuring.' },
  { img: 'https://frankyussa.com/wp-content/uploads/2016/09/unnamed-10.jpg', title: 'Regulatory Compliance & Due Diligence', desc: 'Comprehensive legal and financial due diligence for cross-border investments. Navigating complex regulatory landscapes across emerging and developed markets.' },
  { img: 'https://frankyussa.com/wp-content/uploads/2025/11/unnamed-23.jpg', title: 'Embassy & Diplomatic Legal Advisory', desc: 'Specialized counsel for diplomatic missions, covering commercial law, bilateral agreements, and international trade matters.' },
]

const ABOUT_TABS = [
  { label: 'Founding Partner', body: 'Founding Partner at The Noub\'s Law & Advisory, leading international negotiations and corporate structuring across LATAM, Africa, and Europe.' },
  { label: 'Legal Consultant', body: 'Legal consultant to multiple embassies in Russia, advising on commercial law, bilateral agreements, and cross-border regulatory matters.' },
  { label: 'Former Teaching', body: 'Former Teaching Assistant at Peoples\' Friendship University of Russia, lecturing on Institutional Economy and Finance for BBA students.' },
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'flex-end', paddingTop: 103 }}>
        <HeroSlider slides={HERO_SLIDES} />
        <HeroTextBlock />
        <ScrollHint />
      </section>

      {/* STATS BAND */}
      <section style={{ background: '#04070f', padding: '3rem 5%' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '2rem' }}>
          <StatCounter value={10} suffix="+" label="Years Experience" />
          <StatCounter value={3} label="Continents" />
          <StatCounter value={5} label="Languages" />
          <StatCounter value={2} label="Advanced Degrees" />
        </div>
      </section>

      {/* KEY FACTS */}
      <section style={{ background: '#f5f4ef', padding: '5rem 5%' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <SectionReveal>
            <p style={{ color: '#4a5568', fontSize: '0.98rem', lineHeight: 1.85 }}>
              Bridging legal frameworks across LATAM, Africa, and Europe to deliver seamless cross-border transactions. Combining corporate law expertise with advanced financial analysis to structure deals that work.
            </p>
          </SectionReveal>
          <SectionReveal delay={0.1} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {[
              { icon: Scale, text: 'Multi-jurisdictional expertise across 3 continents' },
              { icon: Landmark, text: 'Dual specialization: Corporate Law + Banking & Finance (MBA + LLM)' },
              { icon: Globe2, text: 'Fluent legal counsel in 5 languages (English, French, Russian, Spanish, Arabic)' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', paddingBottom: '1.25rem', borderBottom: '1px solid #d8d6cc' }}>
                <item.icon size={20} color="var(--accent)" style={{ flexShrink: 0, marginTop: 2, transition: 'color 0.3s' }} />
                <p style={{ color: '#2d3748', fontSize: '0.92rem', lineHeight: 1.6 }}>{item.text}</p>
              </div>
            ))}
          </SectionReveal>
        </div>
      </section>

      {/* FORGED IN COMPLEXITY */}
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 600 }}>
        <div style={{ background: '#0d1b3e', padding: '5rem 4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <SectionReveal>
            <p style={{ color: 'var(--accent)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1.5rem', transition: 'color 0.3s' }}>Forged in complexity. Driven by clarity.</p>
            <p style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.85, fontSize: '0.92rem', marginBottom: '1.5rem' }}>
              In an era where business operates at the intersection of multiple disciplines — law, economics, technology, and geopolitics — success demands more than specialized knowledge. It requires the ability to synthesize complex systems, anticipate cascading consequences, and architect solutions that endure.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.85, fontSize: '0.92rem', marginBottom: '1.5rem' }}>
              Frank-Valere Yussa has spent over a decade mastering this synthesis. As an economist, he understands that every legal decision carries economic implications that ripple through markets, supply chains, and stakeholder relationships.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.85, fontSize: '0.92rem' }}>
              As founder and CEO of THE NOUB&apos;S, Frank-Valere has built more than a law firm — he has created an institution that embodies a philosophy: that legal counsel divorced from economic reality is incomplete, and economic strategy without legal rigor is unsustainable.
            </p>
          </SectionReveal>
        </div>
        <div className="img-zoom" style={{ overflow: 'hidden' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/frank-office-blue-suit.jpg" alt="Frank Yussa in his office" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </section>

      {/* ABOUT FRANK */}
      <section style={{ padding: '6rem 5%', background: '#f8f8f6' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
          <SectionReveal style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', top: '2rem', left: '-1rem', width: 80, height: '80%', background: 'var(--accent-soft)', borderRadius: '50%', zIndex: 0, transition: 'background 0.3s' }} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://frankyussa.com/wp-content/uploads/2025/11/unnamed-30.jpg" alt="Frank in Traditional Attire" style={{ width: '85%', height: 550, objectFit: 'cover', position: 'relative', zIndex: 1, borderRadius: 8 }} />
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', fontWeight: 700, color: '#0d1b3e', marginBottom: '0.5rem' }}>About Frank</h2>
            <div style={{ width: 60, height: 3, background: 'var(--accent)', marginBottom: '0.75rem', transition: 'background 0.3s' }} />
            <p style={{ color: '#6b7a8a', fontSize: '0.9rem', marginBottom: '2rem', fontStyle: 'italic' }}>Where Legal Precision Meets Financial Strategy</p>
            <AboutTabs tabs={ABOUT_TABS} />
          </SectionReveal>
        </div>
      </section>

      {/* EXPERIENCE TIMELINE */}
      <section style={{ padding: '6rem 5%', background: 'white' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionReveal>
            <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '2rem', color: '#0d1b3e', textAlign: 'center', marginBottom: '4rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Experience Timeline</h2>
          </SectionReveal>

          {[
            { icon: Scale, year: '2024 – Present · Founding Partner', org: "The Noub's Law & Advisory", items: ['Leading cross-border negotiations across LATAM, Africa, and Europe', 'Legal consultant to multiple embassies in Russia', 'Coordinating complex corporate obligations across multiple jurisdictions'] },
            { icon: GraduationCap, year: '2022 – 2023 · Teaching Assistant', org: "Peoples' Friendship University of Russia", items: ['Institutional Economy and Finance (BBA students)', 'General Economy with pharmaceutical focus (Medical students)'] },
            { icon: Landmark, year: '2022 · Market Research Analyst & Area Sales Manager', org: 'Smart Group pl sp. z o.o.', items: ['Market analysis and strategic positioning across Central and Eastern Europe', 'High-profile client acquisition and relationship management', 'International representation at major industry events (SEAL Paris, ANUGA Germany)'] },
          ].map((item, i) => (
            <SectionReveal key={i} delay={i * 0.08} style={{ display: 'flex', gap: '1.5rem', marginBottom: '3rem', position: 'relative' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'background 0.3s' }}>
                  <item.icon size={20} color="#04070f" />
                </div>
                {i < 2 && <div style={{ width: 2, flexGrow: 1, background: 'var(--accent-soft)', marginTop: '0.5rem', minHeight: 60, transition: 'background 0.3s' }} />}
              </div>
              <div className="hover-lift" style={{ background: i === 1 ? '#f7f5ee' : 'white', padding: '1.5rem 2rem', flex: 1, borderRadius: 8, border: '1px solid #eee' }}>
                <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '1.05rem', color: '#0d1b3e', marginBottom: '0.35rem' }}>{item.year}</h3>
                <p style={{ color: 'var(--accent)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.75rem', transition: 'color 0.3s' }}>{item.org}</p>
                <ul style={{ listStyle: 'disc', paddingLeft: '1.25rem', color: '#6b7a8a', fontSize: '0.88rem', lineHeight: 1.9 }}>
                  {item.items.map((li, j) => <li key={j}>{li}</li>)}
                </ul>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section style={{ padding: '5rem 5%', background: '#f8f8f6' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
            <SectionReveal>
              <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '1.6rem', color: '#0d1b3e', marginBottom: '0.5rem' }}>Education Excellence</h2>
              <div style={{ width: 50, height: 3, background: 'var(--accent)', marginBottom: '2rem', transition: 'background 0.3s' }} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://frankyussa.com/wp-content/uploads/2025/11/content-2-e1763732924620.jpeg" alt="Frank Yussa Academic" style={{ width: '85%', height: 320, objectFit: 'cover', borderRadius: 8 }} />
            </SectionReveal>
            <SectionReveal delay={0.1} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { icon: Scale, title: 'Master Of Laws (LLM) In Corporate Law, Banking & Finance', sub: 'Graduated with Honours' },
                { icon: Award, title: 'Master of Business Administration (MBA) in International Finance & Banking', sub: 'Best Graduate, RUDN Business School' },
                { icon: BookOpen, title: 'Currently pursuing dual PhDs in Private International Law and World Economics & Finance', sub: 'Current' },
              ].map((edu, i) => (
                <div key={i} className="hover-lift" style={{ background: 'white', padding: '1.5rem', borderRadius: 8, display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <edu.icon size={20} color="var(--accent)" style={{ flexShrink: 0, marginTop: 2, transition: 'color 0.3s' }} />
                  <div>
                    <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#0d1b3e', marginBottom: '0.25rem' }}>{edu.title}</h3>
                    <p style={{ color: '#6b7a8a', fontSize: '0.85rem' }}>{edu.sub}</p>
                  </div>
                </div>
              ))}
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* PRACTICE AREAS */}
      <section id="practice-areas" style={{ padding: '6rem 5%', background: 'white' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <SectionReveal>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.2rem', fontWeight: 700, color: '#0d1b3e', textAlign: 'center', marginBottom: '3rem' }}>Practice Areas</h2>
          </SectionReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
            {practiceAreas.map((area, i) => (
              <SectionReveal key={i} delay={i * 0.06}>
                <div className="img-zoom" style={{ borderRadius: 8, marginBottom: '1rem', height: 180 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={area.img} alt={area.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.95rem', color: '#0d1b3e', marginBottom: '0.75rem', lineHeight: 1.4 }}>{area.title}</h3>
                <p style={{ color: '#6b7a8a', fontSize: '0.82rem', lineHeight: 1.6 }}>{area.desc}</p>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERTISE 3 COLUMNS */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', minHeight: 500 }}>
        {[
          { num: '01', title: 'Legal Expertise', img: 'https://frankyussa.com/wp-content/uploads/2025/11/content-2-e1763732924620.jpeg', items: ['Mergers & Acquisitions (M&A)', 'Corporate Finance Law', 'Banking & Financial Regulation', 'Due Diligence', 'Contract Negotiation', 'Private International Law'] },
          { num: '02', title: 'Financial Acumen', img: '/images/frank-office-blue-suit.jpg', items: ['Investment Banking', 'Initial Public Offerings (IPO)', 'Leveraged Buyouts (LBO)', 'Financial Analysis', 'Corporate Valuation'] },
          { num: '03', title: 'Languages', img: '/images/frank-handshake-bench.jpg', items: ['English (Native)', 'French (C1)', 'Russian (C2)', 'Spanish (C1)', 'Arabic (A2)'] },
        ].map((col, i) => (
          <div key={i} className="img-zoom" style={{ position: 'relative', overflow: 'hidden', minHeight: 500 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={col.img} alt={col.title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.62)' }} />
            <SectionReveal delay={i * 0.08} style={{ position: 'relative', zIndex: 1, padding: '3rem 2rem', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '3rem', fontWeight: 800, color: 'var(--accent)', lineHeight: 1, transition: 'color 0.3s' }}>{col.num}</p>
              <div style={{ width: '100%', height: 1, background: 'rgba(255,255,255,0.3)', margin: '0.75rem 0' }} />
              <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '1rem', color: 'white', marginBottom: '0.75rem' }}>{col.title}</h3>
              <ul style={{ listStyle: 'disc', paddingLeft: '1.25rem', color: 'rgba(255,255,255,0.85)', fontSize: '0.82rem', lineHeight: 1.9 }}>
                {col.items.map((item, j) => <li key={j}>{item}</li>)}
              </ul>
            </SectionReveal>
          </div>
        ))}
      </section>

      {/* SOFT SKILLS / CLOSING BAND */}
      <section style={{ background: '#04070f', padding: '5rem 5%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
        <SectionReveal className="img-zoom" style={{ borderRadius: 8 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://frankyussa.com/wp-content/uploads/2025/11/unnamed-30.jpg" alt="Frank" style={{ width: '100%', height: 400, objectFit: 'cover', borderRadius: 8 }} />
        </SectionReveal>
        <SectionReveal delay={0.1}>
          <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)', marginBottom: '1rem' }}>Soft Skills</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2rem' }}>
            {['Strategic Leadership', 'Cross-Cultural Communication', 'Problem Solving', 'Team Building'].map((s, i) => (
              <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', border: '1px solid var(--accent-soft)', color: 'rgba(255,255,255,0.85)', fontSize: '0.82rem', padding: '0.5rem 1rem', borderRadius: 999, transition: 'border-color 0.3s' }}>
                <CheckCircle2 size={14} color="var(--accent)" style={{ transition: 'color 0.3s' }} /> {s}
              </span>
            ))}
          </div>
          <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent)', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.85rem', transition: 'color 0.3s' }}>
            Get in touch <ArrowRight size={16} />
          </Link>
        </SectionReveal>
      </section>
    </>
  )
}
