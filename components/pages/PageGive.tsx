'use client';
import Link from 'next/link';
import { Globe, Phone, Hand, Mail, FileText, ArrowRight } from 'lucide-react';

const funds = [
  { title: 'General Fund',    desc: 'Sunday worship, staff, building, programs — the day-to-day life of the church.', color: '#A02319', pct: 64 },
  { title: 'Missions',        desc: 'Local outreach in Baton Rouge plus partner work in Haiti, Kenya, and Honduras.',   color: '#4FA1C6', pct: 22 },
  { title: 'Building & Repair', desc: "The brick sanctuary turns 70 next year. We're saving for the roof and HVAC.",   color: '#1E1E1E', pct: 14 },
];

const ways = [
  { icon: <Globe size={20} />,    title: 'Online',        desc: 'One-time or recurring · debit, credit, ACH' },
  { icon: <Phone size={20} />,    title: 'Text',          desc: 'Text GIVE to (225) 555-4483' },
  { icon: <Hand size={20} />,     title: 'In Person',     desc: 'Offering plate · Sunday at 10 a.m.' },
  { icon: <Mail size={20} />,     title: 'By Mail',       desc: 'TLBC · 4928 Government St · Baton Rouge, LA 70806' },
  { icon: <FileText size={20} />, title: 'Planned Giving', desc: 'Bequests, stock, IRA distributions — talk to our finance team' },
];

export default function PageGive() {
  return (
    <>
      {/* Hero */}
      <section style={{
        background: '#7A1A16', color: '#F4F1EC',
        position: 'relative', overflow: 'hidden', padding: '96px 0',
      }}>
        <div style={{
          position: 'absolute', top: '-100px', right: '-100px',
          width: '500px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(160,35,25,0.35) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div className="tl-container" style={{ position: 'relative', zIndex: 2 }}>
          <p className="eyebrow eyebrow--cream" style={{ marginBottom: '24px' }}>Stewardship at True Light</p>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '32px', flexWrap: 'wrap' }}>
            <span style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(160px, 22vw, 320px)', lineHeight: 0.85, color: '#fff',
              letterSpacing: '-0.04em',
            }}>
              100<small style={{ fontSize: '0.4em', verticalAlign: 'top', marginTop: '0.25em', display: 'inline-block' }}>%</small>
            </span>
            <div style={{ paddingTop: '32px' }}>
              <span style={{ fontSize: '18px', color: 'rgba(244,241,236,0.75)', display: 'block' }}>of every dollar</span>
              <em style={{
                fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 700,
                fontSize: '42px', color: '#fff', display: 'block', lineHeight: 1.05,
              }}>to ministry.</em>
            </div>
          </div>
          <p style={{ fontSize: '17px', maxWidth: '560px', color: 'rgba(244,241,236,0.86)', lineHeight: 1.6, marginTop: '32px' }}>
            Zero overhead taken from the offering. Every gift goes where God is moving —
            Sunday-by-Sunday, here at home, and across the world.
          </p>
          <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', marginTop: '40px' }}>
            {[['84','years of giving'],['3','funds open'],['4','countries served'],['$1.2M','in 2024']].map(([n,l]) => (
              <div key={l}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '28px', color: '#fff', display: 'block' }}>{n}</span>
                <span style={{ fontSize: '13px', color: 'rgba(244,241,236,0.65)' }}>{l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fund allocation */}
      <section className="section section--cream" style={{ paddingTop: '88px' }}>
        <div className="tl-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px' }} className="funds-grid">
            {funds.map(f => (
              <article key={f.title} style={{
                background: '#fff', borderRadius: '18px', padding: '32px',
                border: '1px solid rgba(30,30,30,0.08)',
                display: 'flex', flexDirection: 'column', gap: '16px',
              }}>
                {/* Donut */}
                <div style={{ position: 'relative', width: '80px', height: '80px' }}>
                  <svg viewBox="0 0 100 100" width="80" height="80">
                    <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(30,30,30,0.10)" strokeWidth="10"/>
                    <circle cx="50" cy="50" r="42" fill="none" stroke={f.color} strokeWidth="10"
                      strokeDasharray={`${f.pct * 2.64} 264`}
                      transform="rotate(-90 50 50)" strokeLinecap="round"/>
                  </svg>
                  <span style={{
                    position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '18px',
                  }}>{f.pct}%</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '24px', margin: 0 }}>{f.title}</h3>
                <p style={{ fontSize: '14px', color: '#6B6B6B', lineHeight: 1.6, margin: 0, flex: 1 }}>{f.desc}</p>
                <Link href="#" className="btn btn--ghost-dark btn--sm" style={{ alignSelf: 'flex-start' }}>
                  Give to {f.title.split(' ')[0]} <ArrowRight size={13} />
                </Link>
              </article>
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: '12px', fontSize: '13px', color: '#6B6B6B' }}>
            Allocation of every dollar given in 2024 · 100% goes to ministry, 0% to overhead.
          </p>
        </div>
      </section>

      {/* Ways to give */}
      <section className="section section--white">
        <div className="tl-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '64px', alignItems: 'start' }} className="ways-grid">
            <div>
              <p className="eyebrow eyebrow--blue">Ways to Give</p>
              <h2 className="display" style={{ fontSize: '42px', marginTop: '14px' }}>Five ways. Same heart.</h2>
              <p className="prose" style={{ marginTop: '16px' }}>
                All giving is tax-deductible. You&apos;ll receive an annual statement in January for your records.
              </p>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, borderTop: '1px solid rgba(30,30,30,0.10)' }}>
              {ways.map(w => (
                <li key={w.title} style={{
                  display: 'grid', gridTemplateColumns: '56px 1fr', gap: '18px',
                  alignItems: 'start', padding: '20px 0',
                  borderBottom: '1px solid rgba(30,30,30,0.08)',
                }}>
                  <div style={{
                    width: '48px', height: '48px', borderRadius: '12px',
                    background: '#F4F1EC', color: '#A02319',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>{w.icon}</div>
                  <div>
                    <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '18px', margin: '0 0 4px' }}>{w.title}</h4>
                    <p style={{ fontSize: '14px', color: '#6B6B6B', margin: 0 }}>{w.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Scripture */}
      <section className="section section--tight section--maroon">
        <div className="tl-container">
          <blockquote style={{ maxWidth: '760px', margin: '0 auto', padding: '0 32px', textAlign: 'center' }}>
            <p style={{
              fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 600,
              fontSize: '28px', color: '#fff', lineHeight: 1.45, margin: '0 0 20px',
              textWrap: 'balance',
            }}>
              &ldquo;Each of you should give what you have decided in your heart to give, not reluctantly
              or under compulsion, for God loves a cheerful giver.&rdquo;
            </p>
            <cite style={{
              fontSize: '13px', fontStyle: 'normal', fontWeight: 600, letterSpacing: '0.18em',
              textTransform: 'uppercase', color: '#B6D8E6',
            }}>2 Corinthians 9:7</cite>
          </blockquote>
        </div>
      </section>

      <style jsx>{`
        .funds-grid { grid-template-columns: 1fr !important; }
        .ways-grid  { grid-template-columns: 1fr !important; gap: 40px !important; }
        @media (min-width: 640px) {
          .funds-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (min-width: 1024px) {
          .funds-grid { grid-template-columns: repeat(3,1fr) !important; }
          .ways-grid  { grid-template-columns: 1fr 1.4fr !important; gap: 64px !important; }
        }
      `}</style>
    </>
  );
}
