'use client';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, Clock, MapPin, Users, CheckCircle2, HandHeart } from 'lucide-react';
import type { MinistryPage } from '@/lib/db/schema';

export default function PageMinistryDetail({
  ministry,
  others,
}: {
  ministry: MinistryPage;
  others: MinistryPage[];
}) {

  return (
    <>
      {/* ── Hero ── */}
      <section style={{ background: '#1E1E1E', color: '#F4F1EC', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <Image
            src={ministry.hero}
            alt={ministry.name}
            fill
            priority
            style={{ objectFit: 'cover', opacity: 0.4 }}
            sizes="100vw"
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(180deg, rgba(30,15,12,0.55) 0%, rgba(30,15,12,0.85) 80%)',
          }} />
        </div>
        <div className="tl-container" style={{ position: 'relative', zIndex: 2, paddingTop: '80px', paddingBottom: '80px' }}>
          <p className="crumb">
            <Link href="/">Home</Link><span>›</span>
            <Link href="/ministries">Ministries</Link><span>›</span>
            {ministry.name}
          </p>
          <p className="eyebrow eyebrow--cream" style={{ marginBottom: '20px' }}>{ministry.sub}</p>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontWeight: 800,
            fontSize: 'clamp(44px,5.4vw,76px)', lineHeight: 1.02,
            color: '#fff', margin: '0 0 24px', maxWidth: '720px',
          }}>
            {ministry.name}
          </h1>
          <p style={{
            fontFamily: 'var(--font-display)', fontStyle: 'italic',
            fontSize: 'clamp(22px,2.4vw,30px)', lineHeight: 1.3,
            color: '#B6D8E6', maxWidth: '640px', margin: '0 0 40px',
          }}>
            {ministry.tagline}
          </p>

          {/* Quick facts row */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px',
            paddingTop: '32px', borderTop: '1px solid rgba(244,241,236,0.18)', maxWidth: '720px',
          }} className="facts-grid">
            <Fact icon={<Users size={18} />}   label="Who"   value={ministry.ages} />
            <Fact icon={<Clock size={18} />}   label="When"  value={ministry.schedule} />
            <Fact icon={<MapPin size={18} />}  label="Where" value={ministry.location} />
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section className="section section--cream">
        <div className="tl-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start' }} className="about-grid">
            <div>
              <p className="eyebrow">About this ministry</p>
              <h2 className="h1" style={{ marginTop: '14px' }}>
                There&apos;s a place for you here.
              </h2>
              <hr className="divider-3" style={{ marginTop: '20px', marginBottom: '32px' }} />
              {ministry.description.map((p, i) => (
                <p key={i} className="prose" style={{ marginBottom: '20px', fontSize: '17px' }}>{p}</p>
              ))}
            </div>

            {/* Leader card + scripture */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{
                background: '#fff', borderRadius: '20px', padding: '32px',
                border: '1px solid rgba(30,30,30,0.08)',
                boxShadow: '0 6px 18px rgba(30,30,30,0.08)',
              }}>
                <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#A02319', margin: '0 0 16px' }}>
                  Ministry Leader
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{
                    width: '64px', height: '64px', borderRadius: '50%',
                    background: '#7A1A16', color: '#fff', flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '22px',
                  }}>
                    {initials(ministry.leader)}
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '20px' }}>{ministry.leader}</div>
                    <div style={{ fontSize: '13px', color: '#4FA1C6', fontWeight: 600, marginTop: '2px' }}>{ministry.leaderRole}</div>
                  </div>
                </div>
              </div>

              <blockquote style={{
                background: '#7A1A16', color: '#F4F1EC', borderRadius: '20px',
                padding: '36px 32px', margin: 0, position: 'relative', overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute', top: '-10px', left: '20px',
                  fontFamily: 'var(--font-display)', fontSize: '120px', lineHeight: 1,
                  color: 'rgba(244,241,236,0.10)', userSelect: 'none', pointerEvents: 'none',
                }}>&ldquo;</div>
                <p style={{
                  fontFamily: 'var(--font-display)', fontStyle: 'italic',
                  fontSize: '20px', lineHeight: 1.4, margin: '0 0 20px',
                  position: 'relative', zIndex: 1,
                }}>
                  &ldquo;{ministry.scripture.quote}&rdquo;
                </p>
                <cite style={{
                  fontSize: '12px', fontStyle: 'normal', fontWeight: 700, letterSpacing: '0.18em',
                  textTransform: 'uppercase', color: '#B6D8E6', position: 'relative', zIndex: 1,
                }}>
                  {ministry.scripture.ref}
                </cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ── What to expect ── */}
      <section className="section section--white">
        <div className="tl-container">
          <div className="section-head section-head--center" style={{ marginBottom: '56px' }}>
            <p className="eyebrow eyebrow--blue">What to Expect</p>
            <h2 className="h1" style={{ marginTop: '14px' }}>Your first visit, made simple.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '24px' }} className="expect-grid">
            {ministry.expectations.map((e, i) => (
              <div key={i} style={{
                display: 'flex', gap: '20px', padding: '28px',
                background: '#F4F1EC', borderRadius: '18px',
              }}>
                <div style={{
                  width: '40px', height: '40px', borderRadius: '50%',
                  background: '#A02319', color: '#fff', flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '20px', margin: '0 0 8px' }}>
                    {e.title}
                  </h3>
                  <p style={{ fontSize: '15px', lineHeight: 1.6, color: '#3A3A3A', margin: 0 }}>{e.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Get involved CTA ── */}
      <section className="section section--maroon">
        <div className="tl-container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '48px', flexWrap: 'wrap' }}>
            <div>
              <p className="eyebrow eyebrow--cream">Ready?</p>
              <h2 style={{
                fontFamily: 'var(--font-display)', fontWeight: 800,
                fontSize: 'clamp(36px,4vw,52px)', lineHeight: 1.05,
                color: '#fff', margin: '14px 0 16px', maxWidth: '600px',
              }}>
                Come and see — we&apos;ll save you a seat.
              </h2>
              <p style={{ fontSize: '17px', color: 'rgba(244,241,236,0.85)', lineHeight: 1.6, maxWidth: '520px', margin: 0 }}>
                Show up once, no commitment. We&apos;ll meet you at the door and help you find your way in.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Link href="/connect" className="btn btn--white btn--lg">
                <HandHeart size={18} />Get Connected
              </Link>
              <Link href="/connect" className="btn btn--ghost-light btn--lg">
                Ask a Question
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Other ministries ── */}
      <section className="section section--cream">
        <div className="tl-container">
          <div className="section-head section-head--row" style={{ marginBottom: '40px' }}>
            <div className="section-head__copy">
              <p className="eyebrow">Keep exploring</p>
              <h2 className="h1" style={{ marginTop: '14px', fontSize: '40px' }}>Other ways to get involved.</h2>
            </div>
            <Link href="/ministries" className="btn btn--ghost-dark">
              <ArrowLeft size={16} />All Ministries
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px' }} className="other-grid">
            {others.map(m => (
              <Link key={m.slug} href={`/ministries/${m.slug}`} style={{
                position: 'relative', aspectRatio: '4/5', borderRadius: '20px',
                overflow: 'hidden', display: 'block',
              }} className="other-card">
                <Image src={m.hero} alt={m.name} fill style={{ objectFit: 'cover' }} sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,33vw" />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to bottom, rgba(0,0,0,0.20) 0%, rgba(0,0,0,0.05) 45%, rgba(0,0,0,0.75) 100%)',
                }} />
                <div style={{
                  position: 'absolute', inset: 0, padding: '24px',
                  display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: '#fff',
                }}>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '24px', margin: 0, textShadow: '0 1px 4px rgba(0,0,0,0.4)' }}>
                      {m.name}
                    </h3>
                    <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.78)', margin: '6px 0 0' }}>{m.sub}</p>
                  </div>
                  <span style={{
                    fontSize: '14px', fontWeight: 600,
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                    borderBottom: '1px solid rgba(255,255,255,0.55)', paddingBottom: '2px',
                    alignSelf: 'flex-start',
                  }}>
                    Learn more <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .facts-grid  { grid-template-columns: 1fr !important; gap: 16px !important; }
        .about-grid  { grid-template-columns: 1fr !important; gap: 48px !important; }
        .expect-grid { grid-template-columns: 1fr !important; }
        .other-grid  { grid-template-columns: 1fr !important; }
        @media (min-width: 640px) {
          .facts-grid  { grid-template-columns: repeat(3,1fr) !important; }
          .expect-grid { grid-template-columns: repeat(2,1fr) !important; }
          .other-grid  { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (min-width: 1024px) {
          .about-grid  { grid-template-columns: 1.4fr 1fr !important; gap: 64px !important; }
          .other-grid  { grid-template-columns: repeat(3,1fr) !important; }
        }
        .other-card { transition: transform 280ms cubic-bezier(0.22,0.61,0.36,1), box-shadow 280ms; }
        .other-card:hover { transform: translateY(-4px); box-shadow: 0 20px 48px rgba(30,30,30,0.22); }
      `}</style>
    </>
  );
}

function Fact({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
      <span style={{
        width: '40px', height: '40px', borderRadius: '50%',
        background: 'rgba(244,241,236,0.10)', color: '#B6D8E6',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
      }}>
        {icon}
      </span>
      <div>
        <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(244,241,236,0.55)' }}>
          {label}
        </div>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '16px', color: '#fff', marginTop: '4px' }}>
          {value}
        </div>
      </div>
    </div>
  );
}

function initials(name: string) {
  return name.split(/\s+/).filter(Boolean).slice(0, 2).map(s => s[0]).join('').toUpperCase();
}
