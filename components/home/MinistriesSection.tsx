'use client';

import { useState } from 'react';
import { ArrowUpRight, Calendar } from 'lucide-react';
import ChurchPhoto from '@/components/shared/ChurchPhoto';
import type { Ministry } from '@/lib/db/schema';

const filters = ['All', 'Adults', 'Youth & Kids', 'Outreach', 'Worship'];

export default function MinistriesSection({ ministries }: { ministries: Ministry[] }) {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? ministries : ministries.filter(m => m.groupName === active);

  return (
    <section className="section section--white">
      <div className="tl-container">
        <div className="section-head section-head--row" style={{ marginBottom: '0' }}>
          <div className="section-head__copy">
            <p className="eyebrow">Grow Together</p>
            <h2 className="h1" style={{ marginTop: '14px' }}>There&apos;s a place<br/>for you here.</h2>
            <hr className="divider-3" style={{ marginTop: '24px' }} />
          </div>
          <p className="lead" style={{ maxWidth: '380px' }}>
            From Sunday morning to mid-week, our ministries are where the True Light
            family lives out its faith — together, across generations.
          </p>
        </div>

        {/* Filter chips */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '36px', alignItems: 'center' }}>
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className="min-chip"
              style={{
                background: active === f ? '#A02319' : 'transparent',
                color: active === f ? '#fff' : '#1E1E1E',
                border: active === f ? '1px solid #A02319' : '1px solid rgba(30,30,30,0.18)',
                borderRadius: '999px', padding: '10px 20px',
                fontSize: '13px', fontWeight: 600, letterSpacing: '0.05em',
                textTransform: 'uppercase', cursor: 'pointer',
                boxShadow: active === f ? '0 6px 16px rgba(160,35,25,0.22)' : 'none',
                transition: 'background 240ms cubic-bezier(0.22,0.61,0.36,1), color 240ms cubic-bezier(0.22,0.61,0.36,1), border-color 240ms cubic-bezier(0.22,0.61,0.36,1), box-shadow 240ms cubic-bezier(0.22,0.61,0.36,1)',
              }}
            >{f}</button>
          ))}
          <span className="caption" style={{ marginLeft: 'auto', fontSize: '12px', color: '#6B6B6B', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600 }}>
            {filtered.length} Ministries
          </span>
        </div>

        {/* Card grid */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '20px', marginTop: '36px',
        }} className="min-grid">
          {filtered.map(m => (
            <article key={m.name} style={{
              position: 'relative', aspectRatio: '3/4', borderRadius: '20px',
              overflow: 'hidden', background: '#7A1A16',
              boxShadow: '0 1px 2px rgba(30,30,30,0.10), 0 8px 22px rgba(30,30,30,0.10)',
              transition: 'transform 280ms cubic-bezier(0.22,0.61,0.36,1), box-shadow 280ms cubic-bezier(0.22,0.61,0.36,1)',
              cursor: 'pointer',
            }}
              className="min-card"
            >
              <div className="min-card-photo" style={{ position: 'absolute', inset: 0, transition: 'transform 600ms cubic-bezier(0.22,0.61,0.36,1)' }}>
                <ChurchPhoto photo={m.photo} sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw" />
              </div>
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(20,12,10,0.90) 0%, rgba(20,12,10,0.10) 60%)',
                display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                padding: '22px', color: '#fff',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <span style={{
                    background: m.tagBlue ? '#4FA1C6' : '#fff',
                    color: m.tagBlue ? '#fff' : '#A02319',
                    borderRadius: '999px', padding: '5px 14px',
                    fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase',
                    boxShadow: '0 2px 8px rgba(20,12,10,0.20)',
                  }}>{m.tag}</span>
                  <div style={{
                    width: '38px', height: '38px', borderRadius: '50%',
                    background: '#fff', color: '#1E1E1E',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'background 220ms, color 220ms, transform 220ms',
                  }} className="min-card-arrow">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <h3 style={{
                    fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '26px',
                    textTransform: 'uppercase', margin: 0, lineHeight: 1.05, letterSpacing: '0.01em',
                  }}>{m.name}</h3>
                  <div style={{
                    display: 'flex', justifyContent: 'space-between', gap: '10px',
                    fontSize: '11px', letterSpacing: '0.06em', paddingTop: '12px',
                    color: 'rgba(244,241,236,0.82)',
                    borderTop: '1px solid rgba(244,241,236,0.20)',
                  }}>
                    <span>{m.size}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Calendar size={12} />{m.day}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .min-card:hover { transform: translateY(-6px); box-shadow: 0 4px 10px rgba(30,30,30,0.12), 0 22px 44px rgba(30,30,30,0.20); }
        .min-card:hover .min-card-photo { transform: scale(1.06); }
        .min-card:hover .min-card-arrow { background: #A02319; color: #fff; transform: rotate(-45deg); }
        .min-chip:hover { border-color: rgba(160,35,25,0.45); }
        @media (max-width: 1024px) { .min-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 640px)  { .min-grid { grid-template-columns: repeat(2,1fr) !important; } }
      `}</style>
    </section>
  );
}
