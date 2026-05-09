import Link from 'next/link';
import { CalendarDays, Play } from 'lucide-react';

export default function CtaBanner() {
  return (
    <section className="section section--tight section--charcoal">
      <div className="tl-container">
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: '48px', flexWrap: 'wrap',
        }}>
          <div>
            <p className="eyebrow eyebrow--cream">Plan your visit</p>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: '40px', color: '#fff', marginTop: '8px', margin: 0,
            }}>
              Sunday at 10 a.m.<br/>We&apos;ll save you a seat.
            </h2>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
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
