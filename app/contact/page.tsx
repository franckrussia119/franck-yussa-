'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Briefcase, Globe2, Languages, CheckCircle2 } from 'lucide-react'
import PageHeader from '@/components/PageHeader'
import SectionReveal from '@/components/SectionReveal'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      setStatus(res.ok ? 'sent' : 'error')
      if (res.ok) setForm({ name: '', email: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <PageHeader title="Contacts" subtitle="Let's discuss how I can help with your cross-border matter" image="/images/frank-hero-moscow.jpg" />

      <section style={{ padding: '5rem 5%', background: 'white' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '5rem' }}>
          <SectionReveal>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', color: '#0d1b3e', marginBottom: '0.5rem' }}>Get in Touch</h2>
            <div style={{ width: 50, height: 3, background: 'var(--accent)', marginBottom: '2rem', transition: 'background 0.3s' }} />
            {status === 'sent' ? (
              <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} style={{ background: 'var(--accent-soft)', border: '1px solid var(--accent)', padding: '2rem', textAlign: 'center', borderRadius: 8, transition: 'background 0.3s, border-color 0.3s' }}>
                <CheckCircle2 size={28} color="var(--accent)" style={{ margin: '0 auto 0.75rem', display: 'block', transition: 'color 0.3s' }} />
                <p style={{ color: 'var(--accent)', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, transition: 'color 0.3s' }}>Message sent! I will get back to you shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem', color: '#0d1b3e' }}>Name</label>
                  <input type="text" className="form-input" placeholder="Your full name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem', color: '#0d1b3e' }}>Email</label>
                  <input type="email" className="form-input" placeholder="your@email.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem', color: '#0d1b3e' }}>Subject</label>
                  <input type="text" className="form-input" placeholder="How can I help?" value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem', color: '#0d1b3e' }}>Message</label>
                  <textarea className="form-input" rows={6} placeholder="Your message..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} style={{ resize: 'vertical' }} />
                </div>
                <div>
                  <button type="submit" disabled={status === 'sending'} style={{ background: 'var(--accent)', color: '#04070f', padding: '0.9rem 2.5rem', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.82rem', letterSpacing: '0.1em', textTransform: 'uppercase', border: 'none', cursor: 'pointer', borderRadius: 999, transition: 'background 0.3s' }}>
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>
                  {status === 'error' && <p style={{ color: '#e53e3e', fontSize: '0.85rem', marginTop: '0.5rem' }}>Something went wrong. Please email directly.</p>}
                </div>
              </form>
            )}
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', color: '#0d1b3e', marginBottom: '2rem' }}>Contact Information</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              {[
                { icon: Mail, title: 'Email', body: <a href="mailto:franckrussia119@gmail.com" style={{ color: 'var(--accent)', fontSize: '0.92rem', transition: 'color 0.3s' }}>franckrussia119@gmail.com</a> },
                { icon: Briefcase, title: 'Practice Areas', body: <p style={{ color: '#6b7a8a', fontSize: '0.9rem', lineHeight: 1.7 }}>Corporate Law · Investment Banking · International Transactions · Embassy Advisory</p> },
                { icon: Globe2, title: 'Regions', body: <p style={{ color: '#6b7a8a', fontSize: '0.9rem', lineHeight: 1.7 }}>LATAM · Africa · Europe · Russia</p> },
                { icon: Languages, title: 'Languages', body: <p style={{ color: '#6b7a8a', fontSize: '0.9rem', lineHeight: 1.7 }}>English · French · Russian · Spanish · Arabic</p> },
              ].map((row, i) => (
                <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <row.icon size={20} color="var(--accent)" style={{ flexShrink: 0, marginTop: 2, transition: 'color 0.3s' }} />
                  <div>
                    <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, color: '#0d1b3e', marginBottom: '0.4rem', fontSize: '0.95rem' }}>{row.title}</h3>
                    {row.body}
                  </div>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  )
}
