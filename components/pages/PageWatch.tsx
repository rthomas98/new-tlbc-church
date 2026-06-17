'use client';
import Link from 'next/link';
import { Bell, BookOpen, CalendarDays, Clock, MapPin, Play, Radio } from 'lucide-react';
import ChurchPhoto from '@/components/shared/ChurchPhoto';
import Icon from '@/components/shared/Icon';
import { FACEBOOK_PAGE_URL, YOUTUBE_CHANNEL_URL } from '@/components/shared/churchLinks';
import YouTubeLive from '@/components/shared/YouTubeLive';
import type { Sermon } from '@/lib/db/schema';

export default function PageWatch({ sermons }: { sermons: Sermon[] }) {
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
            LIVE ON YOUTUBE &amp; FACEBOOK
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
            True Light Baptist Church streams live on YouTube and Facebook every Sunday for worship
            and every Wednesday for Bible Study — watch right here on the page.
          </p>
          <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', fontSize: '14px', color: 'rgba(244,241,236,0.75)' }}>
            <span><strong style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '22px' }}>Sun</strong> worship live</span>
            <span style={{ color: 'rgba(244,241,236,0.30)' }}>—</span>
            <span><strong style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '22px' }}>Wed</strong> Bible Study live</span>
            <span style={{ color: 'rgba(244,241,236,0.30)' }}>—</span>
            <span><strong style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '22px' }}>▶</strong> YouTube &amp; Facebook</span>
          </div>
        </div>
      </section>

      {/* Watch Live */}
      <section className="section section--cream" style={{ paddingTop: '88px' }}>
        <div className="tl-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '56px', alignItems: 'center' }} className="watch-live-grid">
            <YouTubeLive title="True Light Baptist Church — Live on YouTube" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <p className="eyebrow">Watch Live</p>
              <h2 className="display" style={{ fontSize: '40px' }}>Worship with us live.</h2>
              <p className="prose">
                Join Pastor Dennis R. Hebert Sr. and the church family for Sunday worship and Wednesday
                Bible Study — streaming live on YouTube above, and on Facebook. When we&apos;re live, the
                stream plays right here; otherwise it shows our latest broadcast.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: '#6B6B6B' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Clock size={15} />Sunday worship · 10:00 a.m. CT</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><BookOpen size={15} />Wednesday Bible Study · live online</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><MapPin size={15} />3836 North Street</span>
              </div>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a href={YOUTUBE_CHANNEL_URL} target="_blank" rel="noopener noreferrer" className="btn btn--red">Watch on YouTube <Play size={16} fill="currentColor" /></a>
                <a href={FACEBOOK_PAGE_URL} target="_blank" rel="noopener noreferrer" className="btn btn--ghost-dark">Watch on Facebook <Radio size={16} /></a>
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
            <a href={YOUTUBE_CHANNEL_URL} target="_blank" rel="noopener noreferrer" className="btn btn--ghost-dark btn--sm">Open YouTube</a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '28px' }} className="live-grid">
            {sermons.map((s) => (
              <article key={s.id} style={{
                border: '1px solid rgba(30,30,30,0.08)', borderRadius: '16px', padding: '28px',
                background: '#FAF7F1', display: 'flex', flexDirection: 'column', gap: '18px',
              }}>
                <span style={{
                  width: '52px', height: '52px', borderRadius: '50%', background: '#A02319',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff',
                }}>
                  <Icon name={s.icon} size={22} />
                </span>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '26px', margin: '0 0 6px', lineHeight: 1.15 }}>{s.title}</h3>
                  <p style={{ fontSize: '13px', color: '#4FA1C6', fontWeight: 700, margin: 0, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{s.schedule}</p>
                </div>
                <p className="prose">{s.description}</p>
                <a href={s.url || YOUTUBE_CHANNEL_URL} target="_blank" rel="noopener noreferrer" className="btn btn--ghost-dark btn--sm" style={{ alignSelf: 'flex-start' }}>
                  Watch live
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
              <p className="eyebrow eyebrow--cream">Miss a service?</p>
              <h2 className="display" style={{ fontSize: '36px', color: '#fff', marginTop: '8px' }}>Catch the replay.</h2>
              <p style={{ color: 'rgba(244,241,236,0.78)', maxWidth: '480px', marginTop: '12px', fontSize: '15px', lineHeight: 1.6 }}>
                Past worship services and Bible studies stay on our YouTube channel, so you can catch up
                anytime. Subscribe to get notified the moment we go live each Sunday and Wednesday.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a href={YOUTUBE_CHANNEL_URL} target="_blank" rel="noopener noreferrer" className="btn btn--white"><Play size={16} fill="currentColor" />Subscribe on YouTube</a>
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
