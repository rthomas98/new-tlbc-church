'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Send, HandHelping, MapPin, Phone, UserPlus, Droplet, Users, Heart, ArrowRight, Radio } from 'lucide-react';
import dynamic from 'next/dynamic';
import ChurchPhoto from '@/components/shared/ChurchPhoto';
import { FACEBOOK_PAGE_URL } from '@/components/shared/churchLinks';

const MapboxMap = dynamic(() => import('@/components/shared/MapboxMap'), { ssr: false });

export default function PageConnect() {
  const [submitted, setSubmitted] = useState(false);

  const paths = [
    { icon: <UserPlus size={24} />, title: 'Membership',  desc: 'A 4-week class on what it means to belong here. Next cohort: Jun 14.' },
    { icon: <Droplet size={24} />,  title: 'Baptism',     desc: 'Public confession of saving faith. Quarterly services. Next: Jun 28.' },
    { icon: <Users size={24} />,    title: 'Small Groups', desc: '12 groups across the city — meet weekly in homes. Find one near you.' },
    { icon: <Heart size={24} />,    title: 'Volunteer',   desc: "Children, hospitality, tech, missions. There's a place for your gifts." },
  ];

  return (
    <>
      {/* Hero */}
      <section style={{ background: '#F4F1EC', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '480px' }} className="connect-hero-grid">
          <div className="tl-container" style={{ paddingTop: '72px', paddingBottom: '72px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <p className="crumb" style={{ color: '#6B6B6B' }}><Link href="/" style={{ color: '#6B6B6B' }}>Home</Link><span>›</span>Connect</p>
            <p className="eyebrow" style={{ marginBottom: '16px' }}>Hi — we&apos;re glad you&apos;re here.</p>
            <h1 style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(40px,4.8vw,68px)', lineHeight: 1.05,
              color: '#1E1E1E', margin: '0 0 20px',
            }}>
              Come as you are.<br/><em style={{ fontStyle: 'italic', color: '#A02319' }}>We&apos;ll meet you there.</em>
            </h1>
            <p style={{ fontSize: '17px', maxWidth: '480px', color: '#3A3A3A', lineHeight: 1.6, margin: '0 0 32px' }}>
              Brand new, returning, or ready for the next step — start anywhere on this page.
              A pastor will reply within 48 hours.
            </p>
            <dl style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[['Sunday','10 a.m. · Coffee from 9:30'],['Address','3836 North Street · Baton Rouge, LA 70806'],['Phone','(225) 555-0149 · Mon–Thu, 9–4']].map(([k,v]) => (
                <div key={k} style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: '12px', fontSize: '14px' }}>
                  <dt style={{ fontWeight: 700, color: '#6B6B6B', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em', paddingTop: '2px' }}>{k}</dt>
                  <dd style={{ margin: 0, color: '#1E1E1E' }}>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          {/* Mapbox map */}
          <div style={{ overflow: 'hidden', minHeight: '480px' }}>
            <MapboxMap />
          </div>
        </div>
      </section>

      {/* Contact form + sidebar */}
      <section className="section section--cream" style={{ paddingTop: '88px' }}>
        <div className="tl-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '56px', alignItems: 'start' }} className="connect-form-grid">
            {/* Form */}
            <div>
              <p className="eyebrow">New here?</p>
              <h2 className="display" style={{ fontSize: '40px', marginTop: '8px' }}>Tell us about yourself.</h2>
              <p className="prose" style={{ marginTop: '16px', marginBottom: '28px' }}>
                Fill this out and one of our pastors will be in touch within 48 hours. Nothing pushy —
                just a hello, an invitation, and a parking pass for your first Sunday.
              </p>
              {!submitted ? (
                <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div className="form-field">
                    <label className="form-label-text">Full name</label>
                    <input className="form-input" type="text" placeholder="Your name" />
                  </div>
                  <div className="form-field">
                    <label className="form-label-text">Email</label>
                    <input className="form-input" type="email" placeholder="you@example.com" />
                  </div>
                  <div className="form-field">
                    <label className="form-label-text">Phone (optional)</label>
                    <input className="form-input" type="tel" placeholder="(225) 555-0100" />
                  </div>
                  <div className="form-field">
                    <label className="form-label-text">Tell us a bit about you</label>
                    <textarea className="form-input" rows={4} placeholder="Family, what brought you here, anything you'd like us to pray for…" style={{ resize: 'vertical' }} />
                  </div>
                  <fieldset style={{ border: 0, padding: 0, margin: 0 }}>
                    <legend style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#A02319', marginBottom: '12px' }}>I&apos;m interested in…</legend>
                    {['Visiting on Sunday','Joining a small group','Membership','Baptism'].map(opt => (
                      <label key={opt} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', cursor: 'pointer', marginBottom: '10px' }}>
                        <input type="checkbox" style={{ accentColor: '#A02319', width: '16px', height: '16px' }} />
                        {opt}
                      </label>
                    ))}
                  </fieldset>
                  <button type="submit" className="btn btn--red btn--lg" style={{ justifyContent: 'center' }}>
                    Send to a pastor <Send size={18} />
                  </button>
                </form>
              ) : (
                <div style={{ background: '#fff', borderRadius: '16px', padding: '40px', textAlign: 'center', boxShadow: '0 2px 6px rgba(30,30,30,0.08)' }}>
                  <div style={{ fontSize: '40px', marginBottom: '16px' }}>🙏</div>
                  <h3 className="h3" style={{ marginBottom: '12px' }}>We&apos;ll be in touch!</h3>
                  <p className="prose">Thank you for reaching out. A pastor will reply within 48 hours.</p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{
                position: 'relative',
                aspectRatio: '16/11',
                borderRadius: '18px',
                overflow: 'hidden',
                boxShadow: '0 16px 36px rgba(30,30,30,0.12)',
              }}>
                <ChurchPhoto photo="visitor" sizes="(max-width: 1024px) 100vw, 36vw" />
              </div>
              {[
                { icon: <HandHelping size={28} />, title: 'Need prayer?', body: 'Submit a request — confidential, read only by our pastoral care team. Prayed over within the day.', cta: 'Submit a request', href: '/connect', blue: false },
                { icon: <MapPin size={28} />,      title: 'Visit Sunday',  body: '3836 North Street · Baton Rouge.\nService at 10 a.m. · Coffee from 9:30. Reserved parking for guests.', cta: 'Get directions', href: 'https://maps.google.com/?q=3836+North+Street+Baton+Rouge+LA+70806', blue: true },
                { icon: <Radio size={28} />,       title: 'Watch live', body: 'Sunday worship and Wednesday Bible Study stream live on the church Facebook page.', cta: 'Open Facebook Live', href: FACEBOOK_PAGE_URL, blue: false },
                { icon: <Phone size={28} />,       title: 'Talk to a pastor', body: '(225) 555-0140 · Mon–Thu, 9 a.m.–4 p.m.\nAfter hours, leave a message and we\'ll call back.', cta: '', href: '', blue: false },
              ].map(c => {
                const isExternal = c.href.startsWith('http');

                return (
                  <div key={c.title} style={{
                    background: c.blue ? '#4FA1C6' : '#fff',
                    color: c.blue ? '#fff' : '#1E1E1E',
                    borderRadius: '18px', padding: '28px',
                    border: c.blue ? 'none' : '1px solid rgba(30,30,30,0.08)',
                  }}>
                    <div style={{ color: c.blue ? '#fff' : '#A02319', marginBottom: '16px' }}>{c.icon}</div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '22px', margin: '0 0 10px' }}>{c.title}</h3>
                    <p style={{ fontSize: '14px', lineHeight: 1.6, margin: '0 0 16px', opacity: c.blue ? 0.9 : 1, color: c.blue ? '#fff' : '#3A3A3A' }}>
                      {c.body}
                    </p>
                    {c.cta && isExternal && (
                      <a href={c.href} target="_blank" rel="noopener noreferrer" className={`btn btn--sm ${c.blue ? 'btn--white' : 'btn--ghost-dark'}`}>
                        {c.cta} <ArrowRight size={14} />
                      </a>
                    )}
                    {c.cta && !isExternal && (
                      <Link href={c.href} className={`btn btn--sm ${c.blue ? 'btn--white' : 'btn--ghost-dark'}`}>
                        {c.cta} <ArrowRight size={14} />
                      </Link>
                    )}
                  </div>
                );
              })}
            </aside>
          </div>
        </div>
      </section>

      {/* Pathways */}
      <section className="section section--white">
        <div className="tl-container">
          <div className="section-head section-head--center" style={{ marginBottom: '48px' }}>
            <p className="eyebrow eyebrow--blue">Next Steps</p>
            <h2 className="display" style={{ fontSize: '42px' }}>Pathways forward.</h2>
            <p className="prose" style={{ maxWidth: '620px', marginTop: '16px' }}>
              Following Jesus is a journey, not a moment. These are the next-step on-ramps we point
              people toward most often.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '24px' }} className="paths-grid">
            {paths.map(p => (
              <article key={p.title} style={{
                padding: '28px', background: '#F4F1EC', borderRadius: '18px',
                display: 'flex', flexDirection: 'column', gap: '12px',
              }}>
                <div style={{ color: '#A02319' }}>{p.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '22px', margin: 0 }}>{p.title}</h3>
                <p style={{ fontSize: '14px', color: '#6B6B6B', lineHeight: 1.6, margin: 0, flex: 1 }}>{p.desc}</p>
                <Link href="/connect" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 600, color: '#A02319' }}>
                  Learn more <ArrowRight size={13} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .connect-hero-grid { grid-template-columns: 1fr !important; }
        .connect-form-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        .paths-grid { grid-template-columns: repeat(2,1fr) !important; }
        @media (min-width: 1024px) {
          .connect-hero-grid { grid-template-columns: 1fr 1fr !important; }
          .connect-form-grid { grid-template-columns: 1.4fr 1fr !important; gap: 56px !important; }
          .paths-grid { grid-template-columns: repeat(4,1fr) !important; }
        }
        @media (max-width: 640px) {
          .paths-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
