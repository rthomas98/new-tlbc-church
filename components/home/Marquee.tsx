function Star() {
  return (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="#B6D8E6" aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M12 2 L14.6 9.4 L22 12 L14.6 14.6 L12 22 L9.4 14.6 L2 12 L9.4 9.4 Z"/>
    </svg>
  );
}

function Phrase() {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '56px', whiteSpace: 'nowrap' }}>
      Christ-Centered <Star/> Hope-Filled <Star/> Community-Rooted <Star/> Sharing the Light Since 1941 <Star/>
    </span>
  );
}

export default function Marquee() {
  return (
    <section
      aria-hidden="true"
      style={{
        background: '#A02319', color: '#fff', padding: '18px 0',
        overflow: 'hidden',
        borderTop: '1px solid rgba(244,241,236,0.18)',
        borderBottom: '1px solid rgba(244,241,236,0.18)',
      }}
    >
      <div style={{
        display: 'flex', gap: '56px',
        animation: 'marqueeScroll 38s linear infinite',
        fontFamily: 'var(--font-display)', fontWeight: 700,
        fontSize: 'clamp(24px, 3.4vw, 42px)',
        whiteSpace: 'nowrap',
      }}>
        <Phrase/><Phrase/><Phrase/><Phrase/>
      </div>
    </section>
  );
}
