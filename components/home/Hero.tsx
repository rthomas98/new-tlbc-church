import Link from 'next/link';
import Image from 'next/image';
import { MapPin, PlayCircle, Sun, BookOpen, HandHeart, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section style={{ padding: '28px 32px 28px', background: '#F4F1EC' }}>
      <div style={{
        position: 'relative', borderRadius: '28px', overflow: 'hidden',
        minHeight: '720px', display: 'flex', flexDirection: 'column',
        justifyContent: 'flex-end',
        boxShadow: '0 24px 60px rgba(30,30,30,0.18)',
        maxWidth: '1440px', margin: '0 auto',
      }}>
        {/* Background photo */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
          <Image src="/uploads/generated/worship-hero.png" alt="True Light Baptist Church worship service" fill style={{ objectFit: 'cover', objectPosition: 'center top' }} priority sizes="100vw" />
        </div>

        {/* Gradient overlay */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 2,
          background: 'linear-gradient(to bottom, rgba(30,15,12,0.10) 0%, rgba(30,15,12,0.85) 85%), linear-gradient(135deg, #A02319 0%, #7A1A16 20%, transparent 60%)',
        }} />

        {/* Content */}
        <div style={{
          position: 'relative', zIndex: 4,
          padding: '64px 64px 0',
          color: '#fff',
          maxWidth: '1100px',
        }}>
          <p style={{
            fontSize: '12px', fontWeight: 600, letterSpacing: '0.22em',
            textTransform: 'uppercase', color: 'rgba(244,241,236,0.55)',
            display: 'flex', alignItems: 'center', gap: '10px', margin: '0 0 28px',
          }}>
            <span style={{ display: 'inline-block', width: '24px', height: '2px', background: 'rgba(244,241,236,0.55)' }} />
            Sunday Worship · 10:00 a.m.
          </p>

          <h1 style={{
            fontFamily: 'var(--font-display)', fontWeight: 800,
            fontSize: 'clamp(56px, 7.8vw, 110px)',
            lineHeight: 0.95, letterSpacing: '-0.028em',
            margin: '0 0 28px', color: '#fff', textWrap: 'balance',
          }}>
            Worship in His <em style={{ fontStyle: 'italic', fontWeight: 600, color: '#B6D8E6' }}>light,</em><br/>
            every Sunday.
          </h1>

          <p style={{
            fontSize: '17px', lineHeight: 1.6, maxWidth: '540px',
            color: 'rgba(244,241,236,0.86)', margin: '0 0 36px',
          }}>
            For 85 years, True Light Baptist Church has gathered in Baton Rouge
            to seek God&apos;s guidance and deliverance through prayer, teaching,
            and community. You&apos;re welcome here.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap', marginBottom: '56px' }}>
            <Link href="/connect" className="btn btn--white btn--lg">
              <MapPin size={18} />Plan Your Visit
            </Link>
            <Link href="/watch" className="btn btn--ghost-light btn--lg">
              <PlayCircle size={18} />Watch Live
            </Link>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginLeft: '8px' }}>
              <div style={{
                fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '36px', color: '#fff',
              }}>1941</div>
              <div style={{ fontSize: '12px', lineHeight: 1.4, maxWidth: '130px', color: 'rgba(244,241,236,0.78)' }}>
                Rooted in Baton Rouge for over 80 years
              </div>
            </div>
          </div>
        </div>

        {/* Info bar */}
        <div style={{
          position: 'relative', zIndex: 4,
          background: '#F4F1EC',
          borderRadius: '28px 28px 0 0',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '18px 0',
          padding: '24px 64px',
        }} className="hero-bar">
          {[
            { label: 'Sunday Worship',      icon: <Sun size={16} />,       value: '10:00 a.m.' },
            { label: 'Bible Study',         icon: <BookOpen size={16} />,  value: 'Sun · 9:00 a.m.' },
            { label: 'Prayer & Teaching',   icon: <HandHeart size={16} />, value: 'Wed · 6:30 p.m.' },
            { label: 'Address',             icon: <MapPin size={16} />,    value: '3836 North St.' },
          ].map((item, i) => (
            <div key={i} className="hero-bar__stat" style={{
              display: 'flex', flexDirection: 'column', gap: '4px',
              flex: '1 1 150px', minWidth: 0,
              padding: '0 16px',
              borderRight: i < 3 ? '1px solid rgba(30,30,30,0.12)' : 'none',
            }}>
              <span style={{
                fontSize: '10px', fontWeight: 600, letterSpacing: '0.22em',
                textTransform: 'uppercase', color: '#6B6B6B',
              }}>{item.label}</span>
              <span style={{
                fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '18px',
                display: 'flex', alignItems: 'center', gap: '8px', color: '#1E1E1E',
                whiteSpace: 'nowrap',
              }}>
                {item.icon}{item.value}
              </span>
            </div>
          ))}
          <Link href="/connect" className="btn btn--red hero-bar__cta" style={{ marginLeft: '20px', whiteSpace: 'nowrap', flex: '0 0 auto' }}>
            Get Directions <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
