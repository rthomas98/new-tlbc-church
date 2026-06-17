'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Mail } from 'lucide-react';
import { FACEBOOK_PAGE_URL } from '@/components/shared/churchLinks';

const footerLinks = {
  connect: [
    { label: 'Plan Your Visit',       href: '/connect' },
    { label: 'Submit Prayer Request', href: '/connect' },
    { label: 'Watch Live',            href: '/watch' },
    { label: 'Give Online',           href: '/give' },
    { label: 'Volunteer',             href: '/connect' },
    { label: 'Contact Us',            href: '/connect' },
  ],
  ministries: [
    { label: 'Children & Youth',    href: '/ministries' },
    { label: 'Men\'s Fellowship',   href: '/ministries' },
    { label: 'Women\'s Ministry',   href: '/ministries' },
    { label: 'Music & Worship',     href: '/ministries' },
    { label: 'Prayer Team',         href: '/ministries' },
    { label: 'Community Outreach',  href: '/ministries' },
  ],
};

export default function Footer() {
  return (
    <footer style={{ background: '#7A1A16', color: '#F4F1EC' }}>
      <div className="tl-container" style={{ paddingTop: '96px', paddingBottom: '56px' }}>

        {/* CTA row */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr auto',
          gap: '48px', alignItems: 'flex-end',
          paddingBottom: '56px',
          borderBottom: '1px solid rgba(244,241,236,0.15)',
          marginBottom: '56px',
        }} className="ftr-cta-grid">
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 800,
            fontSize: 'clamp(40px, 5vw, 72px)', lineHeight: 0.98,
            color: '#fff', margin: 0, textWrap: 'balance',
          }}>
            We can&apos;t wait<br/>to meet you this Sunday.
          </h2>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
            <Link href="/connect" className="btn btn--cream btn--lg">
              Plan Your Visit
            </Link>
            <Link href="/watch" className="btn btn--ghost-light btn--lg">
              Watch Live
            </Link>
          </div>
        </div>

        {/* Grid: brand | visit | connect | ministries */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
          gap: '56px',
          paddingBottom: '56px',
        }} className="ftr-main-grid">

          {/* Brand */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <span style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: '72px', height: '72px', borderRadius: '50%',
              background: 'rgba(244,241,236,0.10)',
              flexShrink: 0,
            }}>
              <Image
                src="/assets/logo-icon-real.svg"
                alt="True Light Baptist Church"
                width={48}
                height={48}
              />
            </span>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '22px' }}>
              True Light Baptist Church
            </div>
            <p style={{
              fontSize: '13px', color: 'rgba(244,241,236,0.75)',
              lineHeight: 1.55, maxWidth: '280px', margin: 0,
            }}>
              Christ-Centered. Hope-Filled. Community-Rooted.
              Sharing the light of Christ in Baton Rouge since 1941.
            </p>
            {/* Social */}
            <div style={{ display: 'flex', gap: '10px', marginTop: '4px' }}>
              {/* Facebook */}
              <a href={FACEBOOK_PAGE_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{
                width: '38px', height: '38px', borderRadius: '50%',
                background: 'rgba(244,241,236,0.10)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#F4F1EC', transition: 'background 220ms',
              }}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.7c0-.9.3-1.6 1.6-1.6h1.7V4.2c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1v2.6H7.7V14h2.7v8h3.1z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="/connect" aria-label="Instagram" style={{
                width: '38px', height: '38px', borderRadius: '50%',
                background: 'rgba(244,241,236,0.10)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#F4F1EC', transition: 'background 220ms',
              }}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              {/* YouTube */}
              <a href="/watch" aria-label="Watch live" style={{
                width: '38px', height: '38px', borderRadius: '50%',
                background: 'rgba(244,241,236,0.10)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#F4F1EC', transition: 'background 220ms',
              }}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M21.6 7.2c-.2-1-1-1.7-2-2C17.7 4.8 12 4.8 12 4.8s-5.7 0-7.6.4c-1 .3-1.8 1-2 2C2 9.1 2 12 2 12s0 2.9.4 4.8c.2 1 1 1.7 2 2 1.9.4 7.6.4 7.6.4s5.7 0 7.6-.4c1-.3 1.8-1 2-2 .4-1.9.4-4.8.4-4.8s0-2.9-.4-4.8zM10 15.2V8.8l5.2 3.2-5.2 3.2z"/>
                </svg>
              </a>
              {/* Email */}
              <a href="mailto:info@truelightbaptist.org" aria-label="Email" style={{
                width: '38px', height: '38px', borderRadius: '50%',
                background: 'rgba(244,241,236,0.10)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#F4F1EC', transition: 'background 220ms',
              }}>
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Visit */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            <p style={{
              fontSize: '11px', fontWeight: 600, letterSpacing: '0.22em',
              textTransform: 'uppercase', color: '#4FA1C6',
              margin: '0 0 18px',
            }}>Visit</p>
            <p style={{ fontSize: '14px', color: 'rgba(244,241,236,0.86)', lineHeight: 1.65, margin: '0 0 18px' }}>
              3836 North Street<br/>
              Baton Rouge, LA 70806
            </p>
            <p style={{ fontSize: '14px', color: 'rgba(244,241,236,0.86)', lineHeight: 1.65, margin: '0 0 18px' }}>
              Sundays · 10:00 a.m.<br/>
              Wednesdays · 6:30 p.m.
            </p>
            <p style={{ fontSize: '14px', color: 'rgba(244,241,236,0.86)', lineHeight: 1.65, margin: 0 }}>
              (225) 555-0149<br/>
              info@truelightbaptist.org
            </p>
          </div>

          {/* Connect */}
          <div>
            <p style={{
              fontSize: '11px', fontWeight: 600, letterSpacing: '0.22em',
              textTransform: 'uppercase', color: '#4FA1C6', margin: '0 0 18px',
            }}>Connect</p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {footerLinks.connect.map(l => (
                <li key={l.label}>
                  <Link href={l.href} style={{
                    fontSize: '14px', color: 'rgba(244,241,236,0.86)',
                    transition: 'color 180ms',
                  }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ministries */}
          <div>
            <p style={{
              fontSize: '11px', fontWeight: 600, letterSpacing: '0.22em',
              textTransform: 'uppercase', color: '#4FA1C6', margin: '0 0 18px',
            }}>Ministries</p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {footerLinks.ministries.map(l => (
                <li key={l.label}>
                  <Link href={l.href} style={{
                    fontSize: '14px', color: 'rgba(244,241,236,0.86)',
                    transition: 'color 180ms',
                  }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(244,241,236,0.12)', paddingTop: '22px',
          display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px',
        }}>
          <span style={{
            fontFamily: 'var(--font-display)', fontStyle: 'italic',
            fontSize: '13px', color: 'rgba(244,241,236,0.82)',
          }}>
            &ldquo;Seeking God&apos;s guidance and deliverance through prayer.&rdquo; — Psalm 86
          </span>
          <div style={{
            display: 'flex', gap: '20px', flexWrap: 'wrap',
            fontSize: '12px', color: 'rgba(244,241,236,0.65)',
          }}>
            <span>© 2026 True Light Baptist Church</span>
            <span>·</span>
            <Link href="/privacy" style={{ color: 'rgba(244,241,236,0.65)' }}>Privacy</Link>
            <span>·</span>
            <Link href="/members" style={{ color: 'rgba(244,241,236,0.65)' }}>Member Login</Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .ftr-main-grid { grid-template-columns: 1fr 1fr !important; gap: 40px !important; }
          .ftr-cta-grid  { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .ftr-main-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </footer>
  );
}
