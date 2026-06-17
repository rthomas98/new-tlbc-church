'use client';
import Link from 'next/link';
import {
  Calendar, Utensils, Music, Star, ArrowUpRight, CalendarPlus, Hand,
  BookOpen, Users, Tent, GraduationCap, HeartHandshake, Gift, type LucideIcon,
} from 'lucide-react';
import ChurchPhoto from '@/components/shared/ChurchPhoto';
import Prose from '@/components/shared/Prose';
import type { Event } from '@/lib/db/schema';

// Static weekly schedule — the recurring rhythm of the church (not dated events).
const weeklyRhythm = [
  ['Sunday',    '10:00 a.m.', 'Worship Service',   'Sanctuary · Childcare provided'],
  ['Sunday',    '9:00 a.m.',  'Sunday School',      'All ages · 9 classes'],
  ['Wednesday', '6:30 p.m.',  'Mid-Week Service',   'Sanctuary · Youth meet upstairs'],
  ['Wednesday', '7:30 p.m.',  'Choir Rehearsal',    'Choir loft'],
  ['Thursday',  '9:30 a.m.',  'Women in the Word',  'Room 204'],
  ['Friday',    '6:00 a.m.',  'Faithful Fridays',   'Weekly prayer with Pastor P.'],
  ['Friday',    '11:00 a.m.', 'Senior Saints Lunch','Fellowship Hall'],
];

// Map an event category to a fitting icon (falls back to a calendar).
const CATEGORY_ICONS: Record<string, LucideIcon> = {
  youth: Star,
  'black history': BookOpen,
  leadership: Users,
  summit: Star,
  fellowship: Users,
  vbs: BookOpen,
  camp: Tent,
  conference: GraduationCap,
  outreach: HeartHandshake,
  community: Utensils,
  revival: Music,
  giving: Gift,
};
function iconFor(category: string): LucideIcon {
  return CATEGORY_ICONS[category.trim().toLowerCase()] ?? Calendar;
}

function dowOf(date: Event['date']): string {
  if (!date) return '';
  return new Date(date).toLocaleDateString('en-US', { weekday: 'short' });
}

function fullDate(date: Event['date']): string {
  if (!date) return '';
  return new Date(date).toLocaleDateString('en-US', {
    weekday: 'long', month: 'long', day: 'numeric',
  });
}

export default function PageEvents({ events }: { events: Event[] }) {
  const first = events[0];
  const heroMonth = (first?.month || 'Upcoming').toUpperCase();
  const heroYear = first?.date ? new Date(first.date).getFullYear() : new Date().getFullYear();
  const featured = events.find((e) => e.featured) ?? first;
  const ticker = events.map((e) => `${e.month} ${e.day} · ${e.title}`);

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
        }}>{heroMonth}<br/>{heroYear}</div>
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
        {ticker.length > 0 && (
          <div style={{ background: '#A02319', overflow: 'hidden', padding: '14px 0' }}>
            <div style={{
              display: 'flex', gap: '40px', whiteSpace: 'nowrap',
              animation: 'ticker 40s linear infinite',
              color: '#fff', fontSize: '14px', fontWeight: 600,
            }}>
              {[...ticker, ...ticker].map((d, i) => (
                <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '12px' }}>
                  <Calendar size={14} />{d}
                </span>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Featured */}
      {featured && (
        <section className="section section--cream" style={{ paddingTop: '88px' }}>
          <div className="tl-container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }} className="featured-grid">
              <div className="featured-img" style={{ borderRadius: '18px', overflow: 'hidden', aspectRatio: '17/14', boxShadow: '0 1px 2px rgba(30,30,30,0.06), 0 12px 28px rgba(30,30,30,0.10), 0 28px 56px rgba(122,26,22,0.10)' }}>
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                  <ChurchPhoto photo={featured.photo || 'youth'} sizes="(max-width: 1024px) 100vw, 50vw" />
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <p className="eyebrow">Featured · {featured.category || 'Upcoming'}</p>
                <h2 className="display" style={{ fontSize: '56px' }}>{featured.title}</h2>
                {featured.description && (
                  <Prose html={featured.description} className="prose" />
                )}
                <dl style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px' }}>
                  {[
                    ['WHEN', [fullDate(featured.date), featured.time].filter(Boolean).join(' · ')],
                    ['WHERE', featured.location],
                  ].filter(([, v]) => v).map(([k, v]) => (
                    <div key={k} style={{ display: 'flex', gap: '16px' }}>
                      <dt style={{ fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#6B6B6B', minWidth: '60px', fontSize: '11px', paddingTop: '2px' }}>{k}</dt>
                      <dd style={{ margin: 0, color: '#1E1E1E' }}>{v}</dd>
                    </div>
                  ))}
                </dl>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <Link href="/connect" className="btn btn--red">I want to join <CalendarPlus size={16} /></Link>
                  <Link href="/connect" className="btn btn--ghost-dark">Ask a question <Hand size={16} /></Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Calendar */}
      <section className="section section--white">
        <div className="tl-container">
          <div className="section-head section-head--row" style={{ marginBottom: '40px' }}>
            <div className="section-head__copy">
              <p className="eyebrow eyebrow--blue">Upcoming</p>
              <h2 className="display" style={{ fontSize: '42px' }}>What&apos;s coming up.</h2>
            </div>
            <Link href="/connect" className="btn btn--ghost-dark btn--sm">Get involved</Link>
          </div>
          {events.length === 0 ? (
            <p className="prose" style={{ color: '#6B6B6B' }}>
              No upcoming events on the calendar right now — check back soon, or {' '}
              <Link href="/connect" style={{ color: '#A02319' }}>reach out</Link> to plan a visit.
            </p>
          ) : (
            <ul style={{ listStyle: 'none', padding: 0, borderTop: '1px solid rgba(30,30,30,0.10)' }}>
              {events.map((e) => {
                const Icon = iconFor(e.category);
                const when = [e.time, e.location].filter(Boolean).join(' · ');
                return (
                  <li key={e.id} style={{
                    display: 'grid',
                    gridTemplateColumns: '88px 56px 1.6fr 1fr 40px',
                    gap: '24px', alignItems: 'center',
                    padding: '20px 0',
                    borderBottom: '1px solid rgba(30,30,30,0.08)',
                  }} className="cal-row">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                      <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: '#A02319', letterSpacing: '0.08em' }}>{e.month}</span>
                      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '36px', lineHeight: 1, color: '#1E1E1E' }}>{e.day}</span>
                      <span style={{ fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', color: '#6B6B6B', letterSpacing: '0.1em' }}>{dowOf(e.date)}</span>
                    </div>
                    <div className="cal-icon" style={{
                      width: '48px', height: '48px', borderRadius: '12px',
                      background: '#F4F1EC', color: '#1E1E1E',
                      border: '1px solid rgba(30,30,30,0.06)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}><Icon size={20} /></div>
                    <div>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '20px', margin: '0 0 4px' }}>{e.title}</h3>
                      {when && <p style={{ fontSize: '13px', color: '#6B6B6B', margin: 0 }}>{when}</p>}
                    </div>
                    <div style={{ fontSize: '13px', color: '#6B6B6B' }} className="cal-note">
                      {e.category && (
                        <span style={{ display: 'inline-block', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#4FA1C6' }}>{e.category}</span>
                      )}
                    </div>
                    <Link href="/connect" aria-label={`Get involved with ${e.title}`} className="cal-link" style={{
                      width: '40px', height: '40px', borderRadius: '50%',
                      background: '#F4F1EC', color: '#A02319',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <ArrowUpRight size={16} />
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </section>

      {/* Weekly rhythm */}
      <section className="section section--tight section--maroon">
        <div className="tl-container">
          <div className="section-head section-head--center" style={{ marginBottom: '40px' }}>
            <p className="eyebrow eyebrow--cream">Every Week</p>
            <h2 className="display" style={{ fontSize: '40px', color: '#fff' }}>Our weekly rhythm.</h2>
          </div>
          <div style={{ background: 'rgba(244,241,236,0.06)', borderRadius: '18px', padding: '8px 24px', border: '1px solid rgba(244,241,236,0.08)', boxShadow: 'inset 0 1px 0 rgba(244,241,236,0.06)' }}>
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

        .cal-row {
          position: relative;
          transition: background 0.4s cubic-bezier(0.22,0.61,0.36,1);
        }
        .cal-row::before {
          content: '';
          position: absolute;
          left: 0; top: 14px; bottom: 14px;
          width: 2px;
          background: #A02319;
          transform: scaleY(0);
          transform-origin: center;
          transition: transform 0.4s cubic-bezier(0.22,0.61,0.36,1);
        }
        .cal-row:hover {
          background: linear-gradient(90deg, rgba(160,35,25,0.035), rgba(160,35,25,0));
        }
        .cal-row:hover::before { transform: scaleY(1); }
        .cal-icon {
          transition: background 0.4s cubic-bezier(0.22,0.61,0.36,1), color 0.4s cubic-bezier(0.22,0.61,0.36,1), border-color 0.4s cubic-bezier(0.22,0.61,0.36,1);
        }
        .cal-row:hover .cal-icon {
          background: #A02319;
          color: #F4F1EC;
          border-color: #A02319;
        }
        .cal-link {
          transition: background 0.35s cubic-bezier(0.22,0.61,0.36,1), color 0.35s cubic-bezier(0.22,0.61,0.36,1), transform 0.35s cubic-bezier(0.22,0.61,0.36,1);
        }
        .cal-link:hover {
          background: #A02319;
          color: #F4F1EC;
          transform: translate(2px, -2px);
        }

        .rhythm-row {
          grid-template-columns: 1fr !important; gap: 4px !important; padding: 14px 0 !important;
          transition: background 0.4s cubic-bezier(0.22,0.61,0.36,1);
          border-radius: 10px;
          margin: 0 -12px;
          padding-left: 12px !important;
          padding-right: 12px !important;
        }
        .rhythm-row:hover { background: rgba(244,241,236,0.05); }
        .rhythm-row:last-child { border-bottom: none !important; }

        .featured-img :global(img) {
          transition: transform 0.8s cubic-bezier(0.22,0.61,0.36,1);
        }
        .featured-img:hover :global(img) { transform: scale(1.04); }
        @media (min-width: 1024px) {
          .featured-grid { grid-template-columns: 1fr 1fr !important; }
          .cal-note { display: block; }
          .rhythm-row { grid-template-columns: 120px 100px 1fr 1.2fr !important; gap: 24px !important; padding: 18px 12px !important; }
        }
        @media (max-width: 640px) {
          .cal-row { grid-template-columns: 64px 1fr 32px !important; gap: 16px !important; }
        }
      `}</style>
    </>
  );
}
