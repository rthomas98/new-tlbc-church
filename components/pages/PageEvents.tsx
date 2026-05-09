'use client';
import Link from 'next/link';
import { Calendar, Utensils, ClipboardList, Egg, Music, Star, ArrowUpRight, CalendarPlus, Hand } from 'lucide-react';
import { Photo } from '@/components/photos/PhotoPlaceholders';

const upcomingEvents = [
  ['Nov', '12', 'Wed', 'Family Thanksgiving Dinner',  '6:30 p.m. · Fellowship Hall', 'Free · No RSVP needed', <Utensils size={20} />],
  ['Nov', '17', 'Mon', 'Membership Class',             '7 p.m. · Room 204',           'Required for new members', <ClipboardList size={20} />],
  ['Nov', '22', 'Sat', "Men's Breakfast",              '7 a.m. · Fellowship Hall',    '$5 · All men welcome', <Egg size={20} />],
  ['Dec', '06', 'Sat', 'Christmas Choir Rehearsal',   '9 a.m. · Sanctuary',          'Open rehearsal', <Music size={20} />],
  ['Dec', '14', 'Sun', "Children's Christmas Pageant", '5 p.m. · Sanctuary',          'Reception to follow', <Star size={20} />],
  ['Dec', '24', 'Wed', 'Christmas Eve Candlelight',   '5 & 7 p.m. · Sanctuary',      'Childcare for under 4', <Star size={20} />],
];

const weeklyRhythm = [
  ['Sunday',    '10:00 a.m.', 'Worship Service',   'Sanctuary · Childcare provided'],
  ['Sunday',    '9:00 a.m.',  'Sunday School',      'All ages · 9 classes'],
  ['Wednesday', '6:30 p.m.',  'Mid-Week Service',   'Sanctuary · Youth meet upstairs'],
  ['Wednesday', '7:30 p.m.',  'Choir Rehearsal',    'Choir loft'],
  ['Thursday',  '9:30 a.m.',  'Women in the Word',  'Room 204'],
  ['Friday',    '11:00 a.m.', 'Senior Saints Lunch','Fellowship Hall'],
];

const dates = ['Nov 12 · Thanksgiving Dinner','Nov 17 · Membership Class','Nov 22 · Men\'s Breakfast','Dec 06 · Choir Rehearsal','Dec 14 · Children\'s Pageant','Dec 24 · Christmas Eve Candlelight'];

export default function PageEvents() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: '#F4F1EC', position: 'relative', overflow: 'hidden', paddingBottom: '0' }}>
        <div style={{
          position: 'absolute', top: '-20px', left: '-20px',
          fontFamily: 'var(--font-display)', fontWeight: 800,
          fontSize: 'clamp(120px, 22vw, 280px)',
          color: '#1E1E1E', opacity: 0.06, lineHeight: 1,
          userSelect: 'none', pointerEvents: 'none',
        }}>NOV<br/>2025</div>
        <div className="tl-container" style={{ position: 'relative', zIndex: 2, paddingTop: '72px', paddingBottom: '72px' }}>
          <p className="crumb" style={{ color: '#6B6B6B' }}><Link href="/" style={{ color: '#6B6B6B' }}>Home</Link><span>›</span>Events</p>
          <p className="eyebrow" style={{ marginBottom: '16px' }}>Events &amp; Calendar</p>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontWeight: 800,
            fontSize: 'clamp(44px,5.4vw,72px)', lineHeight: 1.02,
            color: '#1E1E1E', margin: '0 0 20px',
          }}>
            Gather. Grow. <em style={{ fontStyle: 'italic', color: '#A02319' }}>Go.</em>
          </h1>
          <p style={{ fontSize: '17px', maxWidth: '560px', color: '#3A3A3A', lineHeight: 1.6, margin: '0 0 40px' }}>
            Sunday is where it begins — but the life of the church is woven through every meal,
            midweek service, and mission. Here&apos;s what&apos;s next.
          </p>
        </div>
        {/* Ticker */}
        <div style={{ background: '#A02319', overflow: 'hidden', padding: '14px 0' }}>
          <div style={{
            display: 'flex', gap: '40px', whiteSpace: 'nowrap',
            animation: 'ticker 40s linear infinite',
            color: '#fff', fontSize: '14px', fontWeight: 600,
          }}>
            {[...dates, ...dates].map((d, i) => (
              <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '12px' }}>
                <Calendar size={14} />{d}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="section section--cream" style={{ paddingTop: '88px' }}>
        <div className="tl-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }} className="featured-grid">
            <div style={{ borderRadius: '18px', overflow: 'hidden', aspectRatio: '17/14', boxShadow: '0 18px 40px rgba(30,30,30,0.14)' }}>
              <Photo theme="warm" w={680} h={560} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <p className="eyebrow">Featured this month</p>
              <h2 className="display" style={{ fontSize: '56px' }}>Family Thanksgiving Dinner</h2>
              <p className="prose">
                A free, all-church meal the Wednesday before Thanksgiving. Bring a friend, bring a neighbor,
                bring an empty seat to your table — we&apos;ll fill it. Our deacons are cooking.
              </p>
              <dl style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px' }}>
                {[['WHEN','Wednesday, Nov 12 · 6:30 p.m.'],['WHERE','Fellowship Hall'],['COST','Free — no RSVP needed']].map(([k,v]) => (
                  <div key={k} style={{ display: 'flex', gap: '16px' }}>
                    <dt style={{ fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#6B6B6B', minWidth: '60px', fontSize: '11px', paddingTop: '2px' }}>{k}</dt>
                    <dd style={{ margin: 0, color: '#1E1E1E' }}>{v}</dd>
                  </div>
                ))}
              </dl>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link href="#" className="btn btn--red">Add to calendar <CalendarPlus size={16} /></Link>
                <Link href="/connect" className="btn btn--ghost-dark">I want to help <Hand size={16} /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar */}
      <section className="section section--white">
        <div className="tl-container">
          <div className="section-head section-head--row" style={{ marginBottom: '40px' }}>
            <div className="section-head__copy">
              <p className="eyebrow eyebrow--blue">Upcoming</p>
              <h2 className="display" style={{ fontSize: '42px' }}>The next sixty days.</h2>
            </div>
            <Link href="#" className="btn btn--ghost-dark btn--sm">View full calendar</Link>
          </div>
          <ul style={{ listStyle: 'none', padding: 0, borderTop: '1px solid rgba(30,30,30,0.10)' }}>
            {upcomingEvents.map(([m, d, dow, title, when, note, icon]) => (
              <li key={String(title)} style={{
                display: 'grid',
                gridTemplateColumns: '88px 56px 1.6fr 1fr 40px',
                gap: '24px', alignItems: 'center',
                padding: '20px 0',
                borderBottom: '1px solid rgba(30,30,30,0.08)',
              }} className="cal-row">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: '#A02319' }}>{m}</span>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '36px', lineHeight: 1 }}>{d}</span>
                  <span style={{ fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', color: '#6B6B6B', letterSpacing: '0.1em' }}>{dow}</span>
                </div>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '12px',
                  background: '#F4F1EC', color: '#1E1E1E',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>{icon}</div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '20px', margin: '0 0 4px' }}>{title}</h3>
                  <p style={{ fontSize: '13px', color: '#6B6B6B', margin: 0 }}>{when}</p>
                </div>
                <div style={{ fontSize: '13px', color: '#6B6B6B' }} className="cal-note">{note}</div>
                <Link href="#" style={{
                  width: '40px', height: '40px', borderRadius: '50%',
                  background: '#F4F1EC', color: '#A02319',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <ArrowUpRight size={16} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Weekly rhythm */}
      <section className="section section--tight section--maroon">
        <div className="tl-container">
          <div className="section-head section-head--center" style={{ marginBottom: '40px' }}>
            <p className="eyebrow eyebrow--cream">Every Week</p>
            <h2 className="display" style={{ fontSize: '40px', color: '#fff' }}>Our weekly rhythm.</h2>
          </div>
          <div style={{ background: 'rgba(244,241,236,0.06)', borderRadius: '18px', padding: '8px 24px' }}>
            {weeklyRhythm.map(([day, time, title, where]) => (
              <div key={day + time} style={{
                display: 'grid', gridTemplateColumns: '120px 100px 1fr 1.2fr',
                gap: '24px', alignItems: 'center',
                padding: '18px 0',
                borderBottom: '1px solid rgba(244,241,236,0.08)',
              }} className="rhythm-row">
                <span style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', color: '#B6D8E6', letterSpacing: '0.05em' }}>{day}</span>
                <span style={{ fontFamily: 'ui-monospace, monospace', fontSize: '14px', color: 'rgba(244,241,236,0.78)' }}>{time}</span>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '18px', color: '#fff' }}>{title}</span>
                <span style={{ fontSize: '13px', color: 'rgba(244,241,236,0.62)' }}>{where}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .featured-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        .cal-note { display: none; }
        .rhythm-row { grid-template-columns: 1fr !important; gap: 4px !important; padding: 14px 0 !important; }
        @media (min-width: 1024px) {
          .featured-grid { grid-template-columns: 1fr 1fr !important; }
          .cal-note { display: block; }
          .rhythm-row { grid-template-columns: 120px 100px 1fr 1.2fr !important; gap: 24px !important; padding: 18px 0 !important; }
        }
        @media (max-width: 640px) {
          .cal-row { grid-template-columns: 64px 1fr 32px !important; gap: 16px !important; }
        }
      `}</style>
    </>
  );
}
