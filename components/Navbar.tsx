'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

const NAV_LINKS = [
  { href: '/skills', label: 'Skills' },
  { href: '/experience', label: 'Experience' },
  { href: '/clients', label: 'Clients' },
  { href: '/research', label: 'Research' },
  { href: '/books', label: 'Books' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  return (
    <>
      {/* Top social bar */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1001, background: '#04070f', padding: '0.35rem 5%', display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
        {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
          <a key={i} href="#" style={{ color: 'rgba(255,255,255,0.55)', display: 'flex' }}>
            <Icon size={13} />
          </a>
        ))}
      </div>

      <nav
        style={{
          position: 'fixed',
          top: 28,
          left: 0,
          right: 0,
          zIndex: 1000,
          height: 75,
          display: 'flex',
          alignItems: 'center',
          background: scrolled ? 'rgba(6,10,20,0.85)' : 'rgba(6,10,20,0.55)',
          backdropFilter: 'blur(14px)',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
          transition: 'background 0.3s, border-color 0.3s',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 5%', width: '100%', display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://frankyussa.com/wp-content/uploads/2025/11/unnamed__14_-removebg-preview-e1763479295956.png" alt="Frank Yussa" style={{ height: 48, width: 'auto' }} />
          </Link>

          <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', flex: 1 }}>
            <NavLink href="/" label="Home" active={pathname === '/'} />

            <div style={{ position: 'relative' }} onMouseEnter={() => setAboutOpen(true)} onMouseLeave={() => setAboutOpen(false)}>
              <button className="nav-link" style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.3rem', padding: '0.5rem 1rem' }}>
                About <ChevronDown size={13} />
              </button>
              <AnimatePresence>
                {aboutOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.18 }}
                    style={{ position: 'absolute', top: '100%', left: 0, background: '#0d1b3e', minWidth: 170, zIndex: 100, boxShadow: '0 12px 30px rgba(0,0,0,0.4)', borderRadius: 8, overflow: 'hidden' }}
                  >
                    <Link href="/skills" style={{ display: 'block', padding: '0.75rem 1rem', color: 'white', fontFamily: 'Montserrat, sans-serif', fontSize: '0.8rem', fontWeight: 600, background: 'var(--accent)' }}>Skills</Link>
                    <Link href="/experience" style={{ display: 'block', padding: '0.75rem 1rem', color: 'white', fontFamily: 'Montserrat, sans-serif', fontSize: '0.8rem', fontWeight: 600 }}>Experience</Link>
                    <Link href="/research" style={{ display: 'block', padding: '0.75rem 1rem', color: 'white', fontFamily: 'Montserrat, sans-serif', fontSize: '0.8rem', fontWeight: 600 }}>Research</Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {NAV_LINKS.map((l) => (
              <NavLink key={l.href} href={l.href} label={l.label} active={pathname === l.href} />
            ))}
            <NavLink href="/contact" label="Contacts" active={pathname === '/contact'} />
          </div>

          <Link href="/contact" className="qualified-btn desktop-nav">Qualified specialist</Link>

          <button className="mobile-toggle" onClick={() => setOpen(!open)} style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', marginLeft: 'auto', color: 'white' }}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            style={{ position: 'fixed', top: 103, left: 0, right: 0, background: '#0d1b3e', zIndex: 999, padding: '0.5rem 5% 1rem', overflow: 'hidden' }}
          >
            {[['/', 'Home'], ['/skills', 'Skills'], ['/experience', 'Experience'], ['/clients', 'Clients'], ['/research', 'Research'], ['/books', 'Books'], ['/contact', 'Contacts']].map(([h, l]) => (
              <Link key={h} href={h} style={{ display: 'block', padding: '0.65rem 0', color: 'white', fontFamily: 'Montserrat, sans-serif', fontSize: '0.85rem', fontWeight: 600, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>{l}</Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function NavLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link href={href} className="nav-link" style={{ position: 'relative', padding: '0.5rem 1rem' }}>
      {label}
      {active && (
        <motion.div
          layoutId="nav-active-pill"
          transition={{ type: 'spring', stiffness: 380, damping: 32 }}
          style={{ position: 'absolute', inset: '4px 6px', background: 'var(--accent)', opacity: 0.18, borderRadius: 6, zIndex: -1 }}
        />
      )}
    </Link>
  )
}
