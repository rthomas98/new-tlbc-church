'use client';
import type { Testimonial } from '@/lib/db/schema';

const Star = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="#A02319" aria-hidden="true">
    <path d="M12 2 L14.6 9.4 L22 12 L14.6 14.6 L12 22 L9.4 14.6 L2 12 L9.4 9.4 Z"/>
  </svg>
);

export default function TestimonialsSection({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <section className="section section--cream">
      <div className="tl-container">
        <div className="section-head section-head--center" style={{ marginBottom: '56px' }}>
          <p className="eyebrow">Stories From Our Family</p>
          <h2 className="h1" style={{ marginTop: '14px' }}>What God is doing<br/>at True Light.</h2>
          <hr className="divider-3" style={{ marginTop: '24px' }} />
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '28px',
        }} className="testi-grid">
          {testimonials.map((t, i) => (
            <article key={i} className="testi-card" style={{
              position: 'relative',
              background: '#fff', borderRadius: '20px', padding: '36px 32px 32px',
              border: '1px solid rgba(30,30,30,0.07)',
              boxShadow: '0 1px 2px rgba(30,30,30,0.04), 0 12px 28px -18px rgba(30,30,30,0.18)',
              display: 'flex', flexDirection: 'column', gap: '22px',
              transition: 'transform 320ms cubic-bezier(0.22,0.61,0.36,1), box-shadow 320ms cubic-bezier(0.22,0.61,0.36,1), border-color 320ms cubic-bezier(0.22,0.61,0.36,1)',
            }}>
              <span aria-hidden="true" style={{
                position: 'absolute', top: '10px', right: '28px',
                fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 700,
                fontSize: '72px', lineHeight: 1, color: 'rgba(160,35,25,0.07)',
                pointerEvents: 'none', userSelect: 'none',
              }}>&rdquo;</span>
              <div style={{ display: 'flex', gap: '5px', position: 'relative' }}>
                {[0,1,2,3,4].map(j => <Star key={j} />)}
              </div>
              <p style={{
                fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 500,
                fontSize: '19px', lineHeight: 1.55, flex: 1, margin: 0,
                color: '#3A3A3A', position: 'relative',
              }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div style={{
                display: 'flex', alignItems: 'center', gap: '14px',
                paddingTop: '22px', borderTop: '1px solid rgba(30,30,30,0.08)',
              }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '50%',
                  background: '#F4F1EC', color: '#A02319', flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '18px',
                  boxShadow: 'inset 0 0 0 1px rgba(160,35,25,0.16)',
                }}>
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '16px', color: '#1E1E1E' }}>{t.name}</div>
                  <div style={{
                    fontFamily: 'var(--font-body)', fontSize: '11px', color: '#6B6B6B',
                    marginTop: '3px', textTransform: 'uppercase', letterSpacing: '0.1em',
                  }}>{t.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .testi-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 2px 4px rgba(30,30,30,0.05), 0 22px 44px -22px rgba(30,30,30,0.26);
          border-color: rgba(160,35,25,0.18);
        }
        @media (max-width: 1024px) { .testi-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 640px)  { .testi-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
