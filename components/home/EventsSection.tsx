'use client';
import Link from 'next/link';
import { CalendarDays, MapPin, Clock, ArrowRight } from 'lucide-react';
import ChurchPhoto from '@/components/shared/ChurchPhoto';
import Prose from '@/components/shared/Prose';
import type { Event } from '@/lib/db/schema';

export default function EventsSection({ events }: { events: Event[] }) {
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
              border: '1px solid rgba(30,30,30,0.07)',
              boxShadow: '0 1px 2px rgba(30,30,30,0.04), 0 10px 28px -16px rgba(30,30,30,0.16)',
              transition: 'transform 320ms cubic-bezier(0.22,0.61,0.36,1), box-shadow 320ms cubic-bezier(0.22,0.61,0.36,1), border-color 320ms cubic-bezier(0.22,0.61,0.36,1)',
            }}
              className="event-card"
            >
              {/* Cover */}
              <div style={{
                position: 'relative',
                aspectRatio: e.featured ? '16/11' : '16/9',
                overflow: 'hidden',
              }}>
                <ChurchPhoto photo={e.photo} sizes="(max-width: 1024px) 100vw, 33vw" />
                {/* Subtle scrim for badge legibility */}
                <div aria-hidden style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(135deg, rgba(30,30,30,0.18) 0%, rgba(30,30,30,0) 42%)',
                  pointerEvents: 'none',
                }} />
                {/* Date badge */}
                <div style={{
                  position: 'absolute', top: '18px', left: '18px',
                  background: '#fff', borderRadius: '14px',
                  padding: '11px 15px 10px', textAlign: 'center', minWidth: '64px',
                  boxShadow: '0 2px 4px rgba(30,30,30,0.06), 0 10px 24px -8px rgba(30,30,30,0.28)',
                  borderTop: '3px solid #A02319',
                }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '26px', color: '#A02319', lineHeight: 1 }}>{e.day}</div>
                  <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#1E1E1E', marginTop: '3px' }}>{e.month}</div>
                </div>
              </div>
              {/* Body */}
              <div style={{ padding: '24px 26px 28px', display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '11px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#4FA1C6' }}>
                  <span aria-hidden style={{ width: '18px', height: '2px', background: '#4FA1C6', borderRadius: '2px' }} />
                  {e.category}
                </span>
                <h3 style={{
                  fontFamily: 'var(--font-display)', fontWeight: 700,
                  fontSize: e.featured ? '30px' : '22px', margin: 0, lineHeight: 1.15,
                }}>{e.title}</h3>
                <Prose html={e.description} style={{ fontSize: '15px', lineHeight: 1.55, color: '#3A3A3A', flex: 1 }} />
                {(e.location || e.time) && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 16px', fontSize: '13px', color: '#6B6B6B', marginTop: '12px', paddingTop: '14px', borderTop: '1px solid rgba(30,30,30,0.07)' }}>
                    {e.location && <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><MapPin size={13} color="#A02319" />{e.location}</span>}
                    {e.time && <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Clock size={13} color="#A02319" />{e.time}</span>}
                  </div>
                )}
                <Link href="/events" className="btn btn--red btn--sm" style={{ alignSelf: 'flex-start', marginTop: '8px' }}>
                  RSVP <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .event-card:hover { transform: translateY(-4px); border-color: rgba(160,35,25,0.16); box-shadow: 0 2px 4px rgba(30,30,30,0.05), 0 22px 44px -22px rgba(30,30,30,0.32); }
        @media (max-width: 1024px) { .events-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
