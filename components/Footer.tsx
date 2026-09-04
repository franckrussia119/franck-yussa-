import Link from 'next/link'
import { Mail, Facebook, Twitter, Instagram, Youtube, ArrowRight } from 'lucide-react'

const LINKS: [string, string][] = [['/', 'Home'], ['/skills', 'Skills'], ['/experience', 'Experience'], ['/clients', 'Clients'], ['/research', 'Research'], ['/books', 'Books'], ['/contact', 'Contacts']]

export default function Footer() {
  return (
    <footer style={{ background: '#04070f', color: 'rgba(255,255,255,0.55)', padding: '4rem 5% 2rem', borderTop: '1px solid var(--accent)', transition: 'border-color 0.3s' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* CTA band */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem', paddingBottom: '2.5rem', marginBottom: '2.5rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <div>
            <h3 style={{ color: 'white', fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', marginBottom: '0.4rem' }}>Let&apos;s work together</h3>
            <p style={{ fontSize: '0.88rem' }}>Cross-border legal & financial counsel, wherever your business takes you.</p>
          </div>
          <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--accent)', color: '#04070f', padding: '0.8rem 1.6rem', borderRadius: 999, fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.85rem', transition: 'background 0.3s' }}>
            Book a consultation <ArrowRight size={16} />
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://frankyussa.com/wp-content/uploads/2025/11/unnamed__14_-removebg-preview-e1763479295956.png" alt="Frank Yussa" style={{ height: 56, marginBottom: '1rem' }} />
            <p style={{ fontSize: '0.85rem', lineHeight: 1.7 }}>Economist and Lawyer. Investment Banker, Lawyer, Aircraft Specialist.</p>
            <div style={{ display: 'flex', gap: '0.9rem', marginTop: '1.25rem' }}>
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" style={{ color: 'rgba(255,255,255,0.5)' }}><Icon size={16} /></a>
              ))}
            </div>
          </div>
          <div>
            <h4 style={{ color: 'white', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>Navigation</h4>
            {LINKS.map(([h, l]) => (
              <Link key={h} href={h} style={{ display: 'block', color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', lineHeight: 2 }}>{l}</Link>
            ))}
          </div>
          <div>
            <h4 style={{ color: 'white', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>Soft Skills</h4>
            <p style={{ fontSize: '0.85rem', lineHeight: 1.8 }}>Strategic Leadership · Cross-Cultural Communication · Problem Solving · Team Building</p>
          </div>
          <div>
            <h4 style={{ color: 'white', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>Contact</h4>
            <a href="mailto:franckrussia119@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>
              <Mail size={15} /> franckrussia119@gmail.com
            </a>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.5rem', textAlign: 'center' }}>
          <p style={{ fontSize: '0.82rem' }}>© 2025 – 2026 Frank Valere Yussa</p>
        </div>
      </div>
    </footer>
  )
}
