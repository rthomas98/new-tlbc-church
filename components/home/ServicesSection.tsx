'use client';
import { MapPin } from 'lucide-react';
import { PhotoWorship, PhotoBible, PhotoPrayer } from '@/components/photos/PhotoPlaceholders';

const services = [
  {
    tag: 'Sunday', time: '10:00 a.m.', name: 'Morning Worship',
    desc: "Spirit-led praise, scripture-rooted teaching, and the Lord's table together.",
    cover: <PhotoWorship />,
  },
  {
    tag: 'Sunday', time: '9:00 a.m.', name: 'Bible Study',
    desc: "Verse-by-verse study for all ages — adult, youth, and children's classes.",
    cover: <PhotoBible />,
  },
  {
    tag: 'Wednesday', time: '6:30 p.m.', name: 'Prayer & Teaching',
    desc: 'Mid-week gathering for prayer, intercession, and a short word from the pastor.',
    cover: <PhotoPrayer />,
  },
];

export default function ServicesSection() {
  return (
    <section className="section section--white">
      <div className="tl-container">
        <div className="section-head section-head--row" style={{ marginBottom: '56px' }}>
          <div className="section-head__copy">
            <p className="eyebrow">Gather With Us</p>
            <h2 className="h1" style={{ marginTop: '14px' }}>
              Three times a week, around{' '}
              <em style={{ fontStyle: 'italic', color: '#A02319' }}>the same Word.</em>
            </h2>
            <hr className="divider-3" style={{ marginTop: '24px' }} />
          </div>
          <p className="lead" style={{ maxWidth: '340px' }}>
            We&apos;ve kept the same rhythm for eight decades — Sunday for worship,
            mid-week for prayer. Join us in the sanctuary at 3836 North Street.
          </p>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px',
        }} className="svc-grid">
          {services.map(s => (
            <article key={s.name} style={{
              background: '#fff', borderRadius: '22px', overflow: 'hidden',
              display: 'flex', flexDirection: 'column',
              boxShadow: '0 2px 6px rgba(30,30,30,0.08)',
              transition: 'transform 220ms cubic-bezier(0.22,0.61,0.36,1), box-shadow 220ms cubic-bezier(0.22,0.61,0.36,1)',
              border: '1px solid rgba(30,30,30,0.06)',
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 18px rgba(30,30,30,0.10)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 6px rgba(30,30,30,0.08)';
              }}
            >
              {/* Cover */}
              <div style={{
                height: '200px', background: '#7A1A16', position: 'relative', overflow: 'hidden',
              }}>
                {s.cover}
                <span style={{
                  position: 'absolute', top: '16px', left: '16px',
                  background: '#fff', borderRadius: '999px', padding: '5px 14px',
                  fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em',
                  textTransform: 'uppercase', color: '#A02319',
                }}>{s.tag}</span>
              </div>
              {/* Body */}
              <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '32px', color: '#A02319', margin: 0, lineHeight: 1 }}>{s.time}</p>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '22px', margin: 0 }}>{s.name}</h3>
                <p style={{ fontSize: '15px', lineHeight: 1.55, color: '#3A3A3A', margin: 0, flex: 1 }}>{s.desc}</p>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  fontSize: '13px', color: '#6B6B6B', paddingTop: '14px',
                  borderTop: '1px solid rgba(30,30,30,0.08)',
                }}>
                  <MapPin size={14} /> 3836 North Street, Baton Rouge
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) { .svc-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 640px)  { .svc-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
