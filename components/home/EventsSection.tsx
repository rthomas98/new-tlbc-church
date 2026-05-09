'use client';
import Link from 'next/link';
import { CalendarDays, MapPin, Clock, ArrowRight } from 'lucide-react';
import { PhotoEvent } from '@/components/photos/PhotoPlaceholders';

const events = [
  {
    day: '17', month: 'May', cat: 'Revival',
    title: 'Spring Revival · Three Nights of Worship',
    desc: 'A three-night revival with guest preaching from Rev. James Carter, special music, and prayer ministry each evening.',
    where: 'Sanctuary', time: '7:00 p.m.', tone: 'maroon' as const, feature: true,
  },
  {
    day: '24', month: 'May', cat: 'Community',
    title: 'Community Food Drive',
    desc: 'Partner with our outreach team to serve neighbors in North Baton Rouge.',
    where: 'Fellowship Hall', time: '9:00 a.m.', tone: 'amber' as const,
  },
  {
    day: '07', month: 'Jun', cat: 'Youth',
    title: 'Youth Summer Kickoff',
    desc: 'Pizza, Bible games, and worship for grades 6–12. Bring a friend.',
    where: 'Youth Wing', time: '6:30 p.m.', tone: 'blue' as const,
  },
];

export default function EventsSection() {
  return (
    <section className="section section--cream">
      <div className="tl-container">
        <div className="section-head section-head--row" style={{ marginBottom: '48px' }}>
          <div className="section-head__copy">
            <p className="eyebrow">On The Calendar</p>
            <h2 className="h1" style={{ marginTop: '14px' }}>Upcoming events &amp; gatherings.</h2>
            <hr className="divider-3" style={{ marginTop: '24px' }} />
          </div>
          <Link href="/events" className="btn btn--ghost-dark btn--lg">
            <CalendarDays size={18} />View Full Calendar
          </Link>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: '24px',
        }} className="events-grid">
          {events.map((e, i) => (
            <article key={i} style={{
              background: '#fff', borderRadius: '22px',
              overflow: 'hidden', display: 'flex', flexDirection: 'column',
              border: '1px solid rgba(30,30,30,0.08)',
              transition: 'transform 220ms cubic-bezier(0.22,0.61,0.36,1), box-shadow 220ms',
            }}
              className="event-card"
            >
              {/* Cover */}
              <div style={{
                position: 'relative',
                aspectRatio: e.feature ? '16/11' : '16/9',
                overflow: 'hidden',
              }}>
                <PhotoEvent tone={e.tone} />
                {/* Date badge */}
                <div style={{
                  position: 'absolute', top: '18px', left: '18px',
                  background: '#fff', borderRadius: '12px',
                  padding: '10px 14px', textAlign: 'center', minWidth: '64px',
                  boxShadow: '0 6px 18px rgba(30,30,30,0.10)',
                }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '26px', color: '#A02319', lineHeight: 1 }}>{e.day}</div>
                  <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.20em', textTransform: 'uppercase', color: '#1E1E1E', marginTop: '2px' }}>{e.month}</div>
                </div>
              </div>
              {/* Body */}
              <div style={{ padding: '24px 26px 28px', display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
                <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.20em', textTransform: 'uppercase', color: '#4FA1C6' }}>{e.cat}</span>
                <h3 style={{
                  fontFamily: 'var(--font-display)', fontWeight: 700,
                  fontSize: e.feature ? '30px' : '22px', margin: 0, lineHeight: 1.15,
                }}>{e.title}</h3>
                <p style={{ fontSize: '15px', lineHeight: 1.55, color: '#3A3A3A', margin: 0, flex: 1 }}>{e.desc}</p>
                <div style={{ display: 'flex', gap: '16px', fontSize: '13px', color: '#6B6B6B', marginTop: '8px' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><MapPin size={13} />{e.where}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Clock size={13} />{e.time}</span>
                </div>
                <Link href="/events" className="btn btn--red btn--sm" style={{ alignSelf: 'flex-start', marginTop: '8px' }}>
                  RSVP <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .event-card:hover { transform: translateY(-3px); box-shadow: 0 12px 30px rgba(30,30,30,0.12); }
        @media (max-width: 1024px) { .events-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
