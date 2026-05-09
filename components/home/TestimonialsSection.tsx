'use client';
const stories = [
  {
    quote: "True Light has been our home for 22 years. Pastor Williams baptized our children — and now they're being baptized by him too. This is family.",
    name: 'The Hayes Family', role: 'Members since 2003', initials: 'TH',
  },
  {
    quote: "I came in broken and was met with prayer, scripture, and grace. The Lord did the rest. I haven't missed a Sunday since.",
    name: 'Marcus J.', role: 'Saved at True Light, 2022', initials: 'MJ',
  },
  {
    quote: "The youth ministry gave my son a place to belong, to ask hard questions, and to know Jesus for himself. Worth every Sunday morning.",
    name: 'Pastor Denise W.', role: 'Mom of two · Volunteer', initials: 'DW',
  },
];

const Star = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="#A02319" aria-hidden="true">
    <path d="M12 2 L14.6 9.4 L22 12 L14.6 14.6 L12 22 L9.4 14.6 L2 12 L9.4 9.4 Z"/>
  </svg>
);

export default function TestimonialsSection() {
  return (
    <section className="section section--cream">
      <div className="tl-container">
        <div className="section-head section-head--center" style={{ marginBottom: '56px' }}>
          <p className="eyebrow">Stories From Our Family</p>
          <h2 className="h1" style={{ marginTop: '14px' }}>What God is doing<br/>at True Light.</h2>
          <hr className="divider-3" style={{ marginTop: '24px' }} />
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px',
        }} className="testi-grid">
          {stories.map((t, i) => (
            <article key={i} style={{
              background: '#fff', borderRadius: '20px', padding: '32px',
              border: '1px solid rgba(30,30,30,0.08)',
              display: 'flex', flexDirection: 'column', gap: '24px',
            }}>
              <div style={{ display: 'flex', gap: '4px' }}>
                {[0,1,2,3,4].map(j => <Star key={j} />)}
              </div>
              <p style={{
                fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 500,
                fontSize: '19px', lineHeight: 1.5, flex: 1, margin: 0,
              }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div style={{
                display: 'flex', alignItems: 'center', gap: '14px',
                paddingTop: '20px', borderTop: '1px solid rgba(30,30,30,0.08)',
              }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '50%',
                  background: '#F4F1EC', color: '#A02319', flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '18px',
                }}>
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '16px' }}>{t.name}</div>
                  <div style={{ fontSize: '12px', color: '#6B6B6B', marginTop: '2px' }}>{t.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) { .testi-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 640px)  { .testi-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
