import Link from 'next/link';
import { CalendarDays, Play } from 'lucide-react';

export default function CtaBanner() {
  return (
    <section className="section section--tight section--charcoal">
      <div className="tl-container">
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: '56px', flexWrap: 'wrap',
        }}>
          <div style={{ maxWidth: '34ch' }}>
            <p className="eyebrow eyebrow--cream">Plan your visit</p>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(32px, 4vw, 44px)', lineHeight: 1.12,
              letterSpacing: '-0.01em', color: '#fff', margin: '14px 0 0',
            }}>
              Sunday at 10 a.m.<br/>
              <span style={{ fontStyle: 'italic', fontWeight: 600 }}>We&apos;ll save you a seat.</span>
            </h2>
          </div>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
            <Link href="/connect" className="btn btn--red btn--lg">
              Plan your visit <CalendarDays size={18} />
            </Link>
            <Link href="/watch" className="btn btn--ghost-light btn--lg">
              Watch first <Play size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
