'use client';
import Link from 'next/link';
import CtaBanner from '@/components/shared/CtaBanner';
import { Clock, ArrowRight, Baby, Users, Coffee, Briefcase, BookOpen, Sun, Music, Globe, Heart } from 'lucide-react';

const tiles = [
  { icon: <Baby size={20} />,      name: 'Children',    color: '#A02319' },
  { icon: <Users size={20} />,     name: 'Youth',       color: '#28486B' },
  { icon: <Coffee size={20} />,    name: 'Young Adults', color: '#7A1A16' },
  { icon: <Briefcase size={20} />, name: 'Men',         color: '#1E1E1E' },
  { icon: <BookOpen size={20} />,  name: 'Women',       color: '#A02319' },
  { icon: <Sun size={20} />,       name: 'Seniors',     color: '#28486B' },
  { icon: <Music size={20} />,     name: 'Music',       color: '#7A1A16' },
  { icon: <Globe size={20} />,     name: 'Missions',    color: '#1E1E1E' },
  { icon: <Heart size={20} />,     name: 'Care',        color: '#A02319' },
];

const groups = [
  { tag: 'Family', items: [
    ['Children', 'Birth – 5th grade', 'Sunday 9 a.m. & 10 a.m.', <Baby size={22} />],
    ['Youth', '6th – 12th grade', 'Wednesday 6:30 p.m.', <Users size={22} />],
    ['Young Adults', 'College & 20s', 'Tuesday 7 p.m.', <Coffee size={22} />],
  ]},
  { tag: 'Discipleship', items: [
    ['Men of True Light', 'All ages', 'Saturday 7 a.m. (1st & 3rd)', <Briefcase size={22} />],
    ['Women in the Word', 'All ages', 'Thursday 9:30 a.m.', <BookOpen size={22} />],
    ['Senior Saints', '55+', 'Friday 11 a.m.', <Sun size={22} />],
  ]},
  { tag: 'Worship & Witness', items: [
    ['Choir & Praise Team', 'All voices welcome', 'Wednesday 7:30 p.m.', <Music size={22} />],
    ['Missions', 'Local & abroad', 'Monthly · 2nd Sunday', <Globe size={22} />],
    ['Care & Counseling', 'Free, confidential', 'By appointment', <Heart size={22} />],
  ]},
];

export default function PageMinistries() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: '#7A1A16', color: '#F4F1EC', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '480px' }} className="min-hero-grid">
          <div className="tl-container" style={{ paddingTop: '72px', paddingBottom: '72px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <p className="crumb"><Link href="/">Home</Link><span>›</span>Ministries</p>
            <p className="eyebrow eyebrow--cream" style={{ marginBottom: '16px' }}>Ministries · Find your people</p>
            <h1 style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(44px,5.4vw,72px)', lineHeight: 1.02, color: '#fff', margin: '0 0 20px',
            }}>
              Nine on-ramps.<br/><em style={{ color: '#B6D8E6' }}>One family.</em>
            </h1>
            <p style={{ fontSize: '17px', maxWidth: '520px', color: 'rgba(244,241,236,0.86)', lineHeight: 1.6, margin: '0 0 32px' }}>
              A ministry for every season — childhood through retirement, single or married,
              quiet listener or front-row leader.
            </p>
            <Link href="#groups" className="btn btn--ghost-light" style={{ alignSelf: 'flex-start' }}>
              Browse all
            </Link>
          </div>
          {/* Mosaic */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '2px' }}>
            {tiles.map(t => (
              <div key={t.name} style={{
                background: t.color, minHeight: '180px',
                display: 'flex', flexDirection: 'column',
                justifyContent: 'space-between', padding: '20px',
                color: '#fff', transition: 'filter 220ms',
              }}>
                {t.icon}
                <span style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ministry groups */}
      {groups.map((g, gi) => (
        <section key={g.tag} id={gi === 0 ? 'groups' : undefined}
          className={`section ${gi % 2 === 0 ? 'section--cream' : 'section--white'}`}
          style={{ paddingTop: gi === 0 ? '88px' : '56px', paddingBottom: '56px' }}
        >
          <div className="tl-container">
            <p className="eyebrow" style={{ marginBottom: '28px' }}>{g.tag}</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px' }} className="min-card-grid">
              {g.items.map(([name, who, when, icon]) => (
                <article key={String(name)} style={{
                  background: '#fff', borderRadius: '18px', padding: '28px',
                  border: '1px solid rgba(30,30,30,0.08)',
                  boxShadow: '0 1px 2px rgba(30,30,30,0.06)',
                  display: 'flex', flexDirection: 'column', gap: '12px',
                }}>
                  <div style={{
                    width: '48px', height: '48px', borderRadius: '12px',
                    background: '#A02319', color: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>{icon}</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '22px', margin: 0 }}>{name}</h3>
                  <p style={{ fontSize: '13px', color: '#4FA1C6', fontWeight: 600, margin: 0 }}>{who}</p>
                  <p style={{ fontSize: '13px', color: '#6B6B6B', margin: 0, display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Clock size={13} />{when}
                  </p>
                  <Link href="/connect" style={{
                    fontSize: '13px', fontWeight: 600, color: '#A02319',
                    display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: '4px',
                  }}>
                    Get connected <ArrowRight size={14} />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CtaBanner />

      <style jsx>{`
        .min-hero-grid { grid-template-columns: 1fr !important; }
        .min-card-grid { grid-template-columns: 1fr !important; }
        @media (min-width: 1024px) {
          .min-hero-grid { grid-template-columns: 1fr 1fr !important; }
          .min-card-grid { grid-template-columns: repeat(3,1fr) !important; }
        }
        @media (min-width: 640px) {
          .min-card-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
    </>
  );
}
