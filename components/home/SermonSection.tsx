'use client';
import Link from 'next/link';
import { BookOpen, CalendarDays, Clock, PlayCircle, Radio } from 'lucide-react';
import ChurchPhoto from '@/components/shared/ChurchPhoto';
import { FACEBOOK_PAGE_URL } from '@/components/shared/churchLinks';

export default function SermonSection() {
  return (
    <section className="section section--cream">
      <div className="tl-container">
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center',
        }} className="sermon-grid">

          {/* Copy */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <p className="eyebrow">Facebook Live · Sundays & Wednesdays</p>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '56px',
              lineHeight: 1.04, letterSpacing: '-0.022em', margin: 0, textWrap: 'balance',
            }}>
              Worship and Bible Study live each week.
            </h2>
            <p className="prose" style={{ maxWidth: '480px' }}>
              True Light does not currently offer recorded sermons on the site. Join
              Pastor Dennis R. Hebert Sr. and the church family live on Facebook for
              Sunday worship and Wednesday Bible Study.
            </p>
            <div style={{ display: 'flex', gap: '28px', fontSize: '13px', color: '#6B6B6B', flexWrap: 'wrap' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}><CalendarDays size={14} />Sundays · 10:00 a.m.</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}><BookOpen size={14} />Wednesday Bible Study</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}><Radio size={14} />Facebook Live</span>
            </div>
            <blockquote style={{
              padding: '22px 24px', background: '#FAF7F1',
              borderLeft: '3px solid #A02319', borderRadius: '0 10px 10px 0',
              fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '17px', lineHeight: 1.5, margin: 0,
            }}>
              &ldquo;Bow down thine ear, O Lord, hear me: for I am poor and needy.&rdquo;
              <span style={{
                display: 'block', marginTop: '10px',
                fontSize: '11px', fontWeight: 700, fontStyle: 'normal',
                letterSpacing: '0.18em', textTransform: 'uppercase', color: '#A02319',
              }}>Psalm 86:1 — KJV</span>
            </blockquote>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Link href="/watch" className="btn btn--red btn--lg">
                <PlayCircle size={18} />Watch Live
              </Link>
              <Link href="/events" className="btn btn--ghost-dark btn--lg">
                <Clock size={18} />View Schedule
              </Link>
              <a href={FACEBOOK_PAGE_URL} target="_blank" rel="noopener noreferrer" className="btn btn--ghost-dark btn--lg">Open Facebook Live</a>
            </div>
          </div>

          {/* Player */}
          <div style={{
            aspectRatio: '4/5', borderRadius: '22px', overflow: 'hidden', position: 'relative',
            background: 'linear-gradient(to bottom, #7A1A16, #18130F)',
            boxShadow: '0 28px 70px rgba(30,30,30,0.40)',
          }}>
            <ChurchPhoto photo="worship" sizes="(max-width: 1024px) 100vw, 50vw" />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to bottom, rgba(30,15,12,0) 30%, rgba(30,15,12,0.88) 100%)',
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              padding: '28px',
            }}>
              <div>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  background: '#A02319', borderRadius: '999px',
                  fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em',
                  textTransform: 'uppercase', color: '#fff', padding: '6px 14px',
                }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#fff', animation: 'pulseDot 1.6s ease-in-out infinite' }} />
                  Facebook Live
                </span>
              </div>
              <div>
                <a href={FACEBOOK_PAGE_URL} target="_blank" rel="noopener noreferrer" className="btn btn--play" style={{ margin: '0 auto 32px' }} aria-label="Open True Light Baptist Church on Facebook">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M8 5 L20 12 L8 19 Z"/></svg>
                </a>
                <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#B6D8E6', margin: '0 0 6px' }}>
                  Sunday Worship · Wednesday Bible Study
                </p>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '28px', lineHeight: 1.15, color: '#fff', margin: '0 0 16px' }}>
                  Join us live<br/>on Facebook.
                </h3>
                <p style={{ fontSize: '13px', color: 'rgba(244,241,236,0.78)', lineHeight: 1.5, margin: 0 }}>
                  No recorded sermon archive is available right now.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) { .sermon-grid { grid-template-columns: 1fr !important; gap: 48px !important; } }
      `}</style>
    </section>
  );
}
