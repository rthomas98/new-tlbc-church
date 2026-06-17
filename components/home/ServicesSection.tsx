'use client';
import { MapPin } from 'lucide-react';
import ChurchPhoto from '@/components/shared/ChurchPhoto';
import type { Service } from '@/lib/db/schema';

export default function ServicesSection({ services }: { services: Service[] }) {
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
              boxShadow: '0 1px 2px rgba(30,30,30,0.05), 0 8px 24px -12px rgba(30,30,30,0.14)',
              transition: 'transform 320ms cubic-bezier(0.22,0.61,0.36,1), box-shadow 320ms cubic-bezier(0.22,0.61,0.36,1)',
              border: '1px solid rgba(30,30,30,0.06)',
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-5px)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 4px rgba(30,30,30,0.06), 0 22px 44px -20px rgba(122,26,22,0.30)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 1px 2px rgba(30,30,30,0.05), 0 8px 24px -12px rgba(30,30,30,0.14)';
              }}
            >
              {/* Cover */}
              <div style={{
                height: '200px', background: '#7A1A16', position: 'relative', overflow: 'hidden',
              }}>
                <ChurchPhoto photo={s.photo} sizes="(max-width: 1024px) 50vw, 33vw" />
                <div aria-hidden style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(30,30,30,0.22), rgba(30,30,30,0) 45%)',
                  pointerEvents: 'none',
                }} />
                <span style={{
                  position: 'absolute', top: '16px', left: '16px',
                  background: '#fff', borderRadius: '999px', padding: '5px 14px',
                  fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em',
                  textTransform: 'uppercase', color: '#A02319',
                  boxShadow: '0 2px 8px rgba(30,30,30,0.18)',
                }}>{s.tag}</span>
              </div>
              {/* Body */}
              <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
                <p style={{
                  fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '34px',
                  color: '#A02319', margin: 0, lineHeight: 1, letterSpacing: '-0.01em',
                }}>{s.time}</p>
                <h3 style={{
                  fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '22px',
                  margin: '2px 0 0', lineHeight: 1.15,
                }}>{s.name}</h3>
                <p style={{ fontSize: '15px', lineHeight: 1.6, color: '#3A3A3A', margin: '4px 0 0', flex: 1 }}>{s.description}</p>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  fontSize: '12px', color: '#6B6B6B', paddingTop: '16px', marginTop: '4px',
                  borderTop: '1px solid rgba(30,30,30,0.08)',
                  letterSpacing: '0.02em',
                }}>
                  <MapPin size={14} color="#A02319" style={{ flexShrink: 0 }} /> 3836 North Street, Baton Rouge
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
