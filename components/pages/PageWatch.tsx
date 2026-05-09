'use client';
import Link from 'next/link';
import { Play, Clock, MapPin, Bell, FileText, Podcast, Music, Rss } from 'lucide-react';
import { Photo } from '@/components/photos/PhotoPlaceholders';

const sermons = [
  ['Anchored: Hope That Holds',   'Pastor James Whitaker', 'Hebrews 6:13–20', 'Nov 3',  '42 min'],
  ['The Cost of Following',       'Pastor James Whitaker', 'Luke 14:25–33',   'Oct 27', '38 min'],
  ["Prayer When You're Tired",    'Marcus Trent',          'Psalm 42',         'Oct 20', '34 min'],
  ['A Living Hope',               'Pastor James Whitaker', '1 Peter 1:3–9',   'Oct 13', '41 min'],
  ['Built Together',              'Marcus Trent',          'Ephesians 2:19–22','Oct 6',  '36 min'],
  ['Be Still',                    'Pastor James Whitaker', 'Psalm 46',         'Sep 29', '39 min'],
];

export default function PageWatch() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: '#1E1E1E', position: 'relative', minHeight: '480px', display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <Photo theme="dark" w={1920} h={900} />
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 100%)' }} />
        <div className="tl-container" style={{ position: 'relative', zIndex: 2, paddingBottom: '72px', paddingTop: '72px' }}>
          <p className="crumb"><Link href="/">Home</Link><span>›</span>Watch</p>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '24px',
            background: '#A02319', borderRadius: '999px', padding: '8px 18px',
            fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#fff',
          }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#fff', animation: 'pulseDot 1.6s ease-in-out infinite' }} />
            ON AIR · SUNDAY · 10 a.m. CT
          </span>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontWeight: 800,
            fontSize: 'clamp(64px, 8vw, 120px)', lineHeight: 0.95, color: '#fff',
            margin: '0 0 24px', letterSpacing: '-0.028em',
          }}>
            <span style={{ display: 'block' }}>Anchored.</span>
            <em style={{ fontStyle: 'italic', color: '#B6D8E6' }}>Live every Sunday.</em>
          </h1>
          <p style={{ fontSize: '17px', maxWidth: '580px', color: 'rgba(244,241,236,0.86)', lineHeight: 1.6, margin: '0 0 40px' }}>
            Worship streamed from the brick sanctuary on Government Street — and a five-year
            archive that travels with you.
          </p>
          <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', fontSize: '14px', color: 'rgba(244,241,236,0.75)' }}>
            <span><strong style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '22px' }}>247</strong> sermons archived</span>
            <span style={{ color: 'rgba(244,241,236,0.30)' }}>—</span>
            <span><strong style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '22px' }}>5 yrs</strong> continuous broadcast</span>
            <span style={{ color: 'rgba(244,241,236,0.30)' }}>—</span>
            <span><strong style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '22px' }}>42 min</strong> avg service length</span>
          </div>
        </div>
      </section>

      {/* Watch Live */}
      <section className="section section--cream" style={{ paddingTop: '88px' }}>
        <div className="tl-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '56px', alignItems: 'center' }} className="watch-live-grid">
            <div style={{ position: 'relative', borderRadius: '22px', aspectRatio: '16/9', overflow: 'hidden', boxShadow: '0 18px 40px rgba(30,30,30,0.14)' }}>
              <Photo theme="warm" w={960} h={540} />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to bottom, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.55) 100%)',
                display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '24px',
              }}>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  background: '#A02319', borderRadius: '999px', padding: '6px 14px',
                  fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', color: '#fff', alignSelf: 'flex-start',
                }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#fff', animation: 'pulseDot 1.6s ease-in-out infinite' }} />
                  LIVE Sunday at 10 a.m. CT
                </span>
                <button className="btn btn--play" style={{ alignSelf: 'center' }} aria-label="Play">
                  <Play size={22} fill="currentColor" />
                </button>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <p className="eyebrow">This Sunday</p>
              <h2 className="display" style={{ fontSize: '40px' }}>Anchored: A Hope That Holds</h2>
              <p className="prose">
                Pastor James continues our series in Hebrews with a word for the weary and the wavering.
                Service includes communion.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: '#6B6B6B' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Clock size={15} />Doors 9:30 · Service 10:00</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><MapPin size={15} />4928 Government St</span>
              </div>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link href="#" className="btn btn--red">Set a reminder <Bell size={16} /></Link>
                <Link href="#" className="btn btn--ghost-dark">Order of service <FileText size={16} /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Archive */}
      <section className="section section--white">
        <div className="tl-container">
          <div className="section-head section-head--row" style={{ marginBottom: '40px' }}>
            <div className="section-head__copy">
              <p className="eyebrow eyebrow--blue">Sermon Archive</p>
              <h2 className="display" style={{ fontSize: '42px' }}>Recent messages.</h2>
            </div>
            <Link href="#" className="btn btn--ghost-dark btn--sm">Browse all 247 sermons <ArrowRight size={14} /></Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '28px' }} className="archive-grid">
            {sermons.map(([title, pastor, ref, date, len]) => (
              <article key={String(title)} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{
                  borderRadius: '14px', aspectRatio: '5/3', overflow: 'hidden', position: 'relative',
                  boxShadow: '0 6px 18px rgba(30,30,30,0.10)',
                }}>
                  <Photo theme="dark" w={400} h={240} />
                  <span style={{
                    position: 'absolute', bottom: '12px', right: '12px',
                    background: 'rgba(0,0,0,0.70)', color: '#fff', borderRadius: '6px',
                    padding: '3px 8px', fontSize: '11px', fontFamily: 'ui-monospace, monospace',
                  }}>{len}</span>
                  <button style={{
                    position: 'absolute', inset: 0, display: 'flex', alignItems: 'center',
                    justifyContent: 'center', background: 'transparent', border: 0, cursor: 'pointer',
                  }} aria-label={`Play ${title}`}>
                    <span style={{
                      width: '52px', height: '52px', borderRadius: '50%',
                      background: 'rgba(255,255,255,0.95)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#A02319',
                    }}>
                      <Play size={18} fill="currentColor" />
                    </span>
                  </button>
                </div>
                <div style={{ display: 'flex', gap: '8px', fontSize: '12px', color: '#6B6B6B' }}>
                  <span>{date}</span><span>·</span><span>{ref}</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '20px', margin: 0, lineHeight: 1.2 }}>{title}</h3>
                <p style={{ fontSize: '13px', color: '#4FA1C6', fontWeight: 600, margin: 0 }}>{pastor}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Podcast */}
      <section className="section section--tight section--charcoal">
        <div className="tl-container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '40px', flexWrap: 'wrap' }}>
            <div>
              <p className="eyebrow eyebrow--cream">Listen on the go</p>
              <h2 className="display" style={{ fontSize: '36px', color: '#fff', marginTop: '8px' }}>The True Light Podcast</h2>
              <p style={{ color: 'rgba(244,241,236,0.78)', maxWidth: '480px', marginTop: '12px', fontSize: '15px', lineHeight: 1.6 }}>
                Every Sunday&apos;s sermon, plus mid-week conversations with our pastoral team. New episodes Mondays.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Link href="#" className="btn btn--white"><Podcast size={16} />Apple Podcasts</Link>
              <Link href="#" className="btn btn--white"><Music size={16} />Spotify</Link>
              <Link href="#" className="btn btn--ghost-light"><Rss size={16} />RSS</Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .watch-live-grid { grid-template-columns: 1fr !important; }
        .archive-grid    { grid-template-columns: 1fr !important; }
        @media (min-width: 1024px) {
          .watch-live-grid { grid-template-columns: 1.4fr 1fr !important; }
          .archive-grid    { grid-template-columns: repeat(3,1fr) !important; }
        }
        @media (min-width: 640px) {
          .archive-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
    </>
  );
}

function ArrowRight({ size }: { size: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>;
}
