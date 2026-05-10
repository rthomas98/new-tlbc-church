'use client';
import Link from 'next/link';
import { Bell, BookOpen, CalendarDays, Clock, MapPin, Play, Radio, Users } from 'lucide-react';
import ChurchPhoto from '@/components/shared/ChurchPhoto';
import { FACEBOOK_PAGE_URL } from '@/components/shared/churchLinks';

const liveServices = [
  {
    title: 'Sunday Worship',
    time: 'Sundays · 10:00 a.m. CT',
    body: 'Join the sanctuary gathering live on Facebook for worship, prayer, preaching, and fellowship.',
    icon: CalendarDays,
  },
  {
    title: 'Wednesday Bible Study',
    time: 'Wednesdays · Bible Study',
    body: 'Follow along live on Facebook as the church gathers midweek for Bible teaching and prayer.',
    icon: BookOpen,
  },
];

export default function PageWatch() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: '#1E1E1E', position: 'relative', minHeight: '480px', display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <ChurchPhoto photo="worship" priority sizes="100vw" />
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
            LIVE ON FACEBOOK
          </span>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontWeight: 800,
            fontSize: 'clamp(64px, 8vw, 120px)', lineHeight: 0.95, color: '#fff',
            margin: '0 0 24px', letterSpacing: '-0.028em',
          }}>
            <span style={{ display: 'block' }}>Worship live.</span>
            <em style={{ fontStyle: 'italic', color: '#B6D8E6' }}>Sundays and Wednesdays.</em>
          </h1>
          <p style={{ fontSize: '17px', maxWidth: '580px', color: 'rgba(244,241,236,0.86)', lineHeight: 1.6, margin: '0 0 40px' }}>
            True Light Baptist Church streams live on Facebook every Sunday for worship and every
            Wednesday for Bible Study. We do not currently offer a recorded sermon archive.
          </p>
          <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', fontSize: '14px', color: 'rgba(244,241,236,0.75)' }}>
            <span><strong style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '22px' }}>Sun</strong> worship live</span>
            <span style={{ color: 'rgba(244,241,236,0.30)' }}>—</span>
            <span><strong style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '22px' }}>Wed</strong> Bible Study live</span>
            <span style={{ color: 'rgba(244,241,236,0.30)' }}>—</span>
            <span><strong style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '22px' }}>FB</strong> Facebook stream</span>
          </div>
        </div>
      </section>

      {/* Watch Live */}
      <section className="section section--cream" style={{ paddingTop: '88px' }}>
        <div className="tl-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '56px', alignItems: 'center' }} className="watch-live-grid">
            <div style={{ position: 'relative', borderRadius: '22px', aspectRatio: '16/9', overflow: 'hidden', boxShadow: '0 18px 40px rgba(30,30,30,0.14)' }}>
              <ChurchPhoto photo="worship" sizes="(max-width: 1024px) 100vw, 60vw" />
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
                  Facebook Live
                </span>
                <a href={FACEBOOK_PAGE_URL} target="_blank" rel="noopener noreferrer" className="btn btn--play" style={{ alignSelf: 'center' }} aria-label="Open True Light Baptist Church on Facebook">
                  <Play size={22} fill="currentColor" />
                </a>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <p className="eyebrow">Watch Live</p>
              <h2 className="display" style={{ fontSize: '40px' }}>Join us on Facebook.</h2>
              <p className="prose">
                True Light does not currently maintain recorded sermons on this site. Join Pastor Dennis R. Hebert Sr.
                and the church family live on Facebook for Sunday worship and Wednesday Bible Study.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: '#6B6B6B' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Clock size={15} />Sunday worship · 10:00 a.m. CT</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><BookOpen size={15} />Wednesday Bible Study · live on Facebook</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><MapPin size={15} />3836 North Street</span>
              </div>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a href={FACEBOOK_PAGE_URL} target="_blank" rel="noopener noreferrer" className="btn btn--red">Watch on Facebook <Radio size={16} /></a>
                <Link href="/events" className="btn btn--ghost-dark">View schedule <Bell size={16} /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Schedule */}
      <section className="section section--white">
        <div className="tl-container">
          <div className="section-head section-head--row" style={{ marginBottom: '40px' }}>
            <div className="section-head__copy">
              <p className="eyebrow eyebrow--blue">Live Schedule</p>
              <h2 className="display" style={{ fontSize: '42px' }}>Gather with us live.</h2>
            </div>
            <a href={FACEBOOK_PAGE_URL} target="_blank" rel="noopener noreferrer" className="btn btn--ghost-dark btn--sm">Open Facebook Live</a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '28px' }} className="live-grid">
            {liveServices.map(({ title, time, body, icon: Icon }) => (
              <article key={title} style={{
                border: '1px solid rgba(30,30,30,0.08)', borderRadius: '16px', padding: '28px',
                background: '#FAF7F1', display: 'flex', flexDirection: 'column', gap: '18px',
              }}>
                <span style={{
                  width: '52px', height: '52px', borderRadius: '50%', background: '#A02319',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff',
                }}>
                  <Icon size={22} />
                </span>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '26px', margin: '0 0 6px', lineHeight: 1.15 }}>{title}</h3>
                  <p style={{ fontSize: '13px', color: '#4FA1C6', fontWeight: 700, margin: 0, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{time}</p>
                </div>
                <p className="prose">{body}</p>
                <a href={FACEBOOK_PAGE_URL} target="_blank" rel="noopener noreferrer" className="btn btn--ghost-dark btn--sm" style={{ alignSelf: 'flex-start' }}>
                  Watch on Facebook
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* No Archive */}
      <section className="section section--tight section--charcoal">
        <div className="tl-container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '40px', flexWrap: 'wrap' }}>
            <div>
              <p className="eyebrow eyebrow--cream">Current Media Note</p>
              <h2 className="display" style={{ fontSize: '36px', color: '#fff', marginTop: '8px' }}>Live only right now.</h2>
              <p style={{ color: 'rgba(244,241,236,0.78)', maxWidth: '480px', marginTop: '12px', fontSize: '15px', lineHeight: 1.6 }}>
                Recorded sermons and podcast feeds are not available at this time. The way to worship
                with True Light online is through Facebook Live on Sundays and Wednesdays.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a href={FACEBOOK_PAGE_URL} target="_blank" rel="noopener noreferrer" className="btn btn--white"><Users size={16} />Open Facebook</a>
              <Link href="/events" className="btn btn--ghost-light"><CalendarDays size={16} />View events</Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .watch-live-grid { grid-template-columns: 1fr !important; }
        .live-grid        { grid-template-columns: 1fr !important; }
        @media (min-width: 1024px) {
          .watch-live-grid { grid-template-columns: 1.4fr 1fr !important; }
          .live-grid        { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
    </>
  );
}
