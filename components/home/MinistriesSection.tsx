'use client';

import { useState } from 'react';
import { ArrowUpRight, Calendar } from 'lucide-react';
import ChurchPhoto, { type ChurchPhotoKey } from '@/components/shared/ChurchPhoto';

type Ministry = {
  name: string; group: string; size: string; day: string;
  photo: ChurchPhotoKey; tag: string; tagBlue?: boolean;
};

const all: Ministry[] = [
  { name: "Children's", group: 'Youth & Kids', size: 'Ages 4–10',       day: 'Sundays',    photo: 'familyCommunity', tag: 'Sunday School' },
  { name: 'Youth',       group: 'Youth & Kids', size: 'Grades 6–12',     day: 'Sundays',    photo: 'youth',    tag: 'Bible Study',   tagBlue: true },
  { name: "Women's",     group: 'Adults',       size: 'All ages',         day: 'Monthly',    photo: 'women',    tag: 'Fellowship' },
  { name: "Men's",       group: 'Adults',       size: 'All ages',         day: 'Saturdays',  photo: 'men',      tag: 'Breakfast',     tagBlue: true },
  { name: 'Music & Worship', group: 'Worship',  size: 'Choir & Praise',   day: 'Wednesdays', photo: 'worship',  tag: 'Choir' },
  { name: 'Prayer Team', group: 'Adults',       size: 'Daily prayer',     day: 'Daily',      photo: 'women',    tag: 'Intercession',  tagBlue: true },
  { name: 'Community Care', group: 'Outreach',  size: 'Visitation',       day: 'Weekly',     photo: 'outreach', tag: 'Outreach' },
  { name: 'Outreach',    group: 'Outreach',     size: 'Baton Rouge',      day: 'Monthly',    photo: 'communityYouth', tag: 'Service', tagBlue: true },
];

const filters = ['All', 'Adults', 'Youth & Kids', 'Outreach', 'Worship'];

export default function MinistriesSection() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? all : all.filter(m => m.group === active);

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
              style={{
                background: active === f ? '#A02319' : 'transparent',
                color: active === f ? '#fff' : '#1E1E1E',
                border: active === f ? '1px solid #A02319' : '1px solid rgba(30,30,30,0.18)',
                borderRadius: '999px', padding: '10px 20px',
                fontSize: '13px', fontWeight: 600, letterSpacing: '0.05em',
                textTransform: 'uppercase', cursor: 'pointer',
                transition: 'all 180ms',
              }}
            >{f}</button>
          ))}
          <span style={{ marginLeft: 'auto', fontSize: '13px', color: '#6B6B6B' }}>
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
              transition: 'transform 280ms cubic-bezier(0.22,0.61,0.36,1), box-shadow 280ms cubic-bezier(0.22,0.61,0.36,1)',
              cursor: 'pointer',
            }}
              className="min-card"
            >
              <div style={{ position: 'absolute', inset: 0 }}>
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
                    fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase',
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
                    textTransform: 'uppercase', margin: 0,
                  }}>{m.name}</h3>
                  <div style={{
                    display: 'flex', justifyContent: 'space-between', gap: '10px',
                    fontSize: '11px', paddingTop: '12px',
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
        .min-card:hover { transform: translateY(-4px); box-shadow: 0 18px 40px rgba(30,30,30,0.22); }
        .min-card:hover .min-card-arrow { background: #A02319; color: #fff; transform: rotate(-45deg); }
        @media (max-width: 1024px) { .min-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 640px)  { .min-grid { grid-template-columns: repeat(2,1fr) !important; } }
      `}</style>
    </section>
  );
}
