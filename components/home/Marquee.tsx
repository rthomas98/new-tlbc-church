function Star() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="#7EC0DC" aria-hidden="true" style={{ flexShrink: 0, opacity: 0.92 }}>
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
        background: '#A02319', color: 'var(--tlbc-cream, #F4F1EC)', padding: '20px 0',
        overflow: 'hidden', position: 'relative',
        borderTop: '1px solid rgba(244,241,236,0.18)',
        borderBottom: '1px solid rgba(244,241,236,0.18)',
        WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 9%, #000 91%, transparent)',
        maskImage: 'linear-gradient(90deg, transparent, #000 9%, #000 91%, transparent)',
      }}
    >
      <div style={{
        display: 'flex', gap: '56px',
        animation: 'marqueeScroll 38s linear infinite',
        fontFamily: 'var(--font-display)', fontWeight: 700,
        fontSize: 'clamp(24px, 3.4vw, 42px)',
        letterSpacing: '0.005em',
        whiteSpace: 'nowrap',
      }}>
        <Phrase/><Phrase/><Phrase/><Phrase/>
      </div>
    </section>
  );
}
