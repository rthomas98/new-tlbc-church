'use client';
import Link from 'next/link';
import { BookOpen } from 'lucide-react';
import ChurchPhoto from '@/components/shared/ChurchPhoto';

export default function PastorSection() {
  return (
    <section className="section section--cream">
      <div className="tl-container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '0.95fr 1.05fr',
          gap: '80px',
          alignItems: 'center',
        }} className="pastor-grid">

          {/* Photo */}
          <div style={{ position: 'relative' }}>
            <div style={{
              aspectRatio: '4/5', borderRadius: '22px', overflow: 'hidden',
              boxShadow: '0 18px 40px rgba(30,30,30,0.14)',
              position: 'relative',
            }}>
              <ChurchPhoto photo="pastor" sizes="(max-width: 1024px) 100vw, 45vw" />
            </div>
            {/* Badge */}
            <div style={{
              position: 'absolute', bottom: '24px', left: '24px',
              background: 'rgba(255,255,255,0.96)', backdropFilter: 'blur(6px)',
              borderRadius: '14px', padding: '16px 22px',
              display: 'flex', alignItems: 'center', gap: '14px',
              boxShadow: '0 6px 18px rgba(30,30,30,0.10)',
            }}>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '18px' }}>
                  Pastor Dennis R. Hebert Sr.
                </div>
                <div style={{
                  fontSize: '11px', fontWeight: 600, letterSpacing: '0.18em',
                  textTransform: 'uppercase', color: '#A02319', marginTop: '2px',
                }}>
                  Senior Pastor
                </div>
              </div>
              <div style={{
                marginLeft: 'auto', paddingLeft: '14px',
                borderLeft: '1px solid rgba(30,30,30,0.12)',
                fontFamily: 'var(--font-display)', fontWeight: 700,
                fontSize: '22px', color: '#A02319',
              }}>
                2014
              </div>
            </div>
          </div>

          {/* Copy */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <p className="eyebrow">A Welcome From Our Pastor</p>
            <blockquote style={{
              fontFamily: 'var(--font-display)', fontStyle: 'italic',
              fontWeight: 500, fontSize: '36px', lineHeight: 1.18,
              color: '#1E1E1E', margin: 0,
              position: 'relative',
            }}>
              You&apos;re welcome here — whether you&apos;re walking in for the first time
              or returning home after a long while.
            </blockquote>
            <p className="prose">
              Our doors are open for one reason: to lift up the name of Jesus Christ together,
              and to be the hands and feet of His love in Baton Rouge. We believe the Gospel
              changes everything — families, neighborhoods, futures.
            </p>
            <p className="prose">
              If you&apos;ve never set foot in a church before, come as you are. If you&apos;ve walked with
              the Lord for decades, come and worship. We&apos;ll save you a seat.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '18px', marginTop: '8px' }}>
              <Link href="/about" className="btn btn--red">
                <BookOpen size={18} />Read His Story
              </Link>
              <span style={{ flex: 1, height: '1px', background: 'rgba(30,30,30,0.14)' }} />
              <span style={{ fontSize: '13px', color: '#6B6B6B' }}>Psalm 86 · Our guiding scripture</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .pastor-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
