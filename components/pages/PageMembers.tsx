'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LogIn, Users, Calendar, FileText, BookOpen, MessageCircle, Bell } from 'lucide-react';
import ChurchPhoto from '@/components/shared/ChurchPhoto';

const perks = [
  { icon: <Users size={18} />,        text: 'Member directory · 620 families' },
  { icon: <Calendar size={18} />,     text: 'Personal calendar & RSVPs' },
  { icon: <FileText size={18} />,     text: 'Giving history & statements' },
  { icon: <BookOpen size={18} />,     text: 'Bible study notes & ministry resources' },
  { icon: <MessageCircle size={18} />, text: 'Small-group messaging' },
  { icon: <Bell size={18} />,         text: 'Prayer-chain notifications' },
];

export default function PageMembers() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #7A1A16 0%, #5C120F 60%, #3A0E0B 100%)',
        color: '#F4F1EC', padding: '0',
      }}>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: '64px', minHeight: '400px', flexWrap: 'wrap',
          padding: '72px 0',
        }}>
          <div className="tl-container members-hero" style={{
            display: 'grid', gridTemplateColumns: '1fr auto', gap: '64px', alignItems: 'center', width: '100%',
          }} >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <p className="eyebrow eyebrow--cream">Members Portal · v3</p>
              <h1 style={{
                fontFamily: 'var(--font-display)', fontWeight: 800,
                fontSize: 'clamp(44px,5vw,72px)', lineHeight: 1.02, color: '#fff', margin: 0,
              }}>
                Welcome back,<br/><em style={{ color: '#B6D8E6' }}>family.</em>
              </h1>
              <p style={{ fontSize: '17px', color: 'rgba(244,241,236,0.86)', lineHeight: 1.6, maxWidth: '480px', margin: 0 }}>
                Sign in for the directory, RSVPs, giving history, Bible study notes, and small-group
                threads — everything in one place.
              </p>
            </div>

            {/* ID Card */}
            <div className="member-id-card" style={{
              background: 'linear-gradient(135deg, #A02319 0%, #5C120F 100%)',
              borderRadius: '18px', padding: '28px', minWidth: '280px', maxWidth: '320px',
              transform: 'rotate(2.5deg)',
              boxShadow: '0 2px 4px rgba(0,0,0,0.20), 0 18px 40px rgba(0,0,0,0.32), 0 36px 72px rgba(0,0,0,0.22)',
              border: '1px solid rgba(244,241,236,0.10)',
              position: 'relative', overflow: 'hidden',
              flexShrink: 0,
            }}>
              <div style={{
                position: 'absolute', top: '-40px', right: '-40px',
                width: '120px', height: '120px', borderRadius: '50%',
                background: 'rgba(244,241,236,0.06)',
              }} />
              <div style={{
                position: 'absolute', bottom: '-60px', left: '-50px',
                width: '150px', height: '150px', borderRadius: '50%',
                background: 'rgba(0,0,0,0.10)',
              }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                <Image src="/assets/logo-icon-real.svg" alt="" width={32} height={32} />
                <span style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(244,241,236,0.55)' }}>MEMBER · SINCE 2019</span>
              </div>
              <div style={{ fontFamily: 'ui-monospace, monospace', fontSize: '15px', color: 'rgba(244,241,236,0.55)', letterSpacing: '0.1em', marginBottom: '8px' }}>
                04 · 928 · 1941
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '20px', color: '#fff', letterSpacing: '0.05em', marginBottom: '20px' }}>
                JESSE ADKINS
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '8px', fontSize: '10px' }}>
                {[['GROUP','Mid-City'],['BAPTIZED','2020'],['SERVING','Hospitality']].map(([k,v]) => (
                  <div key={k}>
                    <div style={{ color: 'rgba(244,241,236,0.45)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '2px' }}>{k}</div>
                    <div style={{ color: '#fff', fontWeight: 600 }}>{v}</div>
                  </div>
                ))}
              </div>
              <div style={{ height: '6px', background: '#B6D8E6', borderRadius: '3px', marginTop: '20px' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Login + perks */}
      <section className="section section--cream" style={{ paddingTop: '88px' }}>
        <div className="tl-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '56px', alignItems: 'start' }} className="member-grid">
            {/* Login form */}
            <div style={{
              background: '#fff', borderRadius: '22px', padding: '40px',
              boxShadow: '0 1px 2px rgba(30,30,30,0.04), 0 10px 28px rgba(30,30,30,0.07), 0 24px 56px rgba(122,26,22,0.05)',
              border: '1px solid rgba(30,30,30,0.05)',
            }}>
              <h2 className="display" style={{ fontSize: '32px', marginBottom: '8px' }}>Sign in</h2>
              <div className="divider-3" style={{ marginBottom: '28px' }} />
              {!submitted ? (
                <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div className="form-field">
                    <label className="form-label-text">Email</label>
                    <input className="form-input" type="email" placeholder="you@example.com" />
                  </div>
                  <div className="form-field">
                    <label className="form-label-text">Password</label>
                    <input className="form-input" type="password" placeholder="••••••••" />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', cursor: 'pointer' }}>
                      <input type="checkbox" style={{ accentColor: '#A02319', width: '16px', height: '16px' }} />
                      Remember me
                    </label>
                    <a href="mailto:info@truelightbaptist.org?subject=Member%20portal%20password%20help" style={{ fontSize: '13px', color: '#A02319', fontWeight: 600 }}>Forgot password?</a>
                  </div>
                  <button type="submit" className="btn btn--red btn--lg" style={{ justifyContent: 'center', marginTop: '8px' }}>
                    Sign in <LogIn size={18} />
                  </button>
                </form>
              ) : (
                <div style={{ textAlign: 'center', padding: '24px 0' }}>
                  <div style={{ fontSize: '40px', marginBottom: '16px' }}>👋</div>
                  <h3 className="h3" style={{ marginBottom: '12px' }}>Welcome back!</h3>
                  <p className="prose">You&apos;re signed in. Redirecting to your dashboard…</p>
                </div>
              )}
              <p style={{ marginTop: '18px', fontSize: '14px', color: '#6B6B6B' }}>
                New member?{' '}
                <Link href="/connect" style={{ color: '#A02319', fontWeight: 600 }}>Request an account</Link>
              </p>
            </div>

            {/* Perks */}
            <aside>
              <div className="min-card" style={{
                position: 'relative',
                aspectRatio: '16/10',
                borderRadius: '18px',
                overflow: 'hidden',
                marginBottom: '24px',
                boxShadow: '0 2px 6px rgba(30,30,30,0.06), 0 16px 36px rgba(30,30,30,0.12)',
                border: '1px solid rgba(30,30,30,0.06)',
              }}>
                <ChurchPhoto photo="members" sizes="(max-width: 1024px) 100vw, 36vw" />
              </div>
              <p className="eyebrow eyebrow--blue" style={{ marginBottom: '20px' }}>Once you&apos;re in</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {perks.map(p => (
                  <li key={p.text} className="perk-item" style={{
                    display: 'flex', alignItems: 'center', gap: '14px',
                    padding: '14px 18px', background: '#fff', borderRadius: '12px',
                    fontSize: '15px',
                    border: '1px solid rgba(30,30,30,0.08)',
                  }}>
                    <span className="perk-icon" style={{ color: '#4FA1C6', flexShrink: 0, display: 'inline-flex' }}>{p.icon}</span>
                    {p.text}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* Help */}
      <section className="section section--tight section--white">
        <div className="tl-container">
          <div className="section-head section-head--center">
            <p className="eyebrow">Need help?</p>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '28px', color: '#1E1E1E', margin: '16px 0' }}>
              The church office is here.
            </h3>
            <p className="prose" style={{ maxWidth: '520px' }}>
              Account locked? Email us at{' '}
              <Link href="mailto:info@truelightbaptist.org" style={{ color: '#A02319' }}>info@truelightbaptist.org</Link>
              {' '}or call (225) 555-0140 during office hours.
            </p>
          </div>
        </div>
      </section>

      <style jsx>{`
        .member-id-card {
          transition: transform 0.5s cubic-bezier(0.22,0.61,0.36,1), box-shadow 0.5s cubic-bezier(0.22,0.61,0.36,1);
        }
        .member-id-card:hover {
          transform: rotate(1deg) translateY(-6px);
          box-shadow: 0 4px 8px rgba(0,0,0,0.22), 0 28px 56px rgba(0,0,0,0.36), 0 48px 90px rgba(0,0,0,0.24);
        }
        .perk-item {
          transition: transform 0.35s cubic-bezier(0.22,0.61,0.36,1), box-shadow 0.35s cubic-bezier(0.22,0.61,0.36,1), border-color 0.35s cubic-bezier(0.22,0.61,0.36,1);
        }
        .perk-item:hover {
          transform: translateX(4px);
          border-color: rgba(79,161,198,0.45);
          box-shadow: 0 1px 2px rgba(30,30,30,0.04), 0 8px 20px rgba(30,30,30,0.07);
        }
        .perk-item .perk-icon {
          transition: transform 0.35s cubic-bezier(0.22,0.61,0.36,1);
        }
        .perk-item:hover .perk-icon {
          transform: scale(1.12);
        }
        .member-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        .members-hero { grid-template-columns: 1fr !important; gap: 40px !important; justify-items: start; }
        .members-hero :global(.member-card-preview) { width: 100%; max-width: 360px; }
        @media (min-width: 1024px) {
          .member-grid { grid-template-columns: 1.2fr 1fr !important; gap: 56px !important; }
          .members-hero { grid-template-columns: 1fr auto !important; gap: 64px !important; justify-items: stretch; }
        }
      `}</style>
    </>
  );
}
