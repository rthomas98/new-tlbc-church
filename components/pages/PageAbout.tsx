'use client';
import Link from 'next/link';
import CtaBanner from '@/components/shared/CtaBanner';
import { Photo } from '@/components/photos/PhotoPlaceholders';
import { BookOpen, Cross, Heart, Users, Droplet, Flame } from 'lucide-react';

const beliefs = [
  { icon: <BookOpen size={24} />, title: 'Scripture',   desc: 'The Bible is the inspired, inerrant Word of God — our final authority for faith and practice.' },
  { icon: <Cross size={24} />,    title: 'Jesus Christ', desc: 'Fully God and fully man, crucified for our sins, raised on the third day, returning in glory.' },
  { icon: <Heart size={24} />,    title: 'Salvation',   desc: 'By grace alone, through faith alone, in Christ alone — a free gift, never earned.' },
  { icon: <Users size={24} />,    title: 'The Church',  desc: 'A covenant family of believers committed to worship, witness, and one another.' },
  { icon: <Droplet size={24} />,  title: 'Baptism',     desc: "Believer's baptism by immersion as a public confession of saving faith in Christ." },
  { icon: <Flame size={24} />,    title: 'The Spirit',  desc: 'God indwells every believer, empowering us for holiness, witness, and gospel work.' },
];

const leaders = [
  ['Pastor James Whitaker', 'Senior Pastor',          '27 years at TLBC'],
  ['Marcus Trent',          'Associate Pastor',       'Discipleship & Care'],
  ['Renée Adekunle',        'Worship Director',       'Choir & Music'],
  ['David Okafor',          'Youth Pastor',           'Students 6–12'],
  ['Joyce Hampton',         "Children's Director",    'Birth – 5th grade'],
  ['Henry Jackson',         'Deacon Chair',           'Member since 1979'],
];

export default function PageAbout() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: '#1E1E1E', color: '#F4F1EC', paddingBottom: 0 }}>
        {/* Band */}
        <div style={{
          background: '#1E1E1E', overflow: 'hidden', padding: '14px 0',
          borderBottom: '1px solid rgba(244,241,236,0.08)',
        }}>
          <div style={{
            display: 'flex', gap: '48px', whiteSpace: 'nowrap',
            animation: 'marqueeScroll 30s linear infinite',
            fontSize: '13px', fontWeight: 600, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: 'rgba(244,241,236,0.45)',
          }}>
            {[0,1].map(k => (
              <span key={k}>EST · 1941 — BAPTIST — BATON ROUGE — A CHURCH FAMILY — &nbsp;&nbsp;&nbsp;&nbsp;</span>
            ))}
          </div>
        </div>
        <div style={{ padding: '72px 0 0' }}>
          <div className="tl-container">
            <div style={{
              display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '80px', alignItems: 'flex-start',
            }} className="about-hero-grid">
              <div>
                <p className="crumb"><Link href="/">Home</Link><span>›</span>About</p>
                <p style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(244,241,236,0.55)', marginBottom: '16px' }}>
                  A True Light history
                </p>
                <h1 style={{
                  fontFamily: 'var(--font-display)', fontWeight: 800,
                  fontSize: 'clamp(44px,5.4vw,76px)', lineHeight: 1.02,
                  color: '#fff', margin: '0 0 24px', textWrap: 'balance',
                }}>
                  Since <em style={{ fontStyle: 'italic', color: '#B6D8E6' }}>1941.</em><br/>
                  The same gospel,<br/>told plainly.
                </h1>
                <p style={{ fontSize: '17px', maxWidth: '580px', color: 'rgba(244,241,236,0.86)', lineHeight: 1.6, margin: '0 0 40px' }}>
                  A Baptist church on Government Street — gathered around scripture,
                  devoted to one another, sent into Baton Rouge.
                </p>
                <ul style={{ display: 'flex', gap: '40px', listStyle: 'none', padding: 0, margin: '0 0 64px' }}>
                  {[['620+','members today'],['3','generations served'],['27 yrs','same senior pastor']].map(([n,l]) => (
                    <li key={l}>
                      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '36px', color: '#A02319', display: 'block' }}>{n}</span>
                      <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(244,241,236,0.55)' }}>{l}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <figure style={{ marginBottom: '-2px' }}>
                <div style={{
                  aspectRatio: '5/6', borderRadius: '18px 18px 0 0', overflow: 'hidden',
                  transform: 'rotate(-1.2deg)',
                  boxShadow: '0 24px 60px rgba(0,0,0,0.35)',
                }}>
                  <Photo theme="warm" w={520} h={680} />
                </div>
                <figcaption style={{
                  fontSize: '12px', fontStyle: 'italic', color: 'rgba(244,241,236,0.45)',
                  textAlign: 'center', marginTop: '12px',
                }}>
                  North Boulevard Chapel · ca. 1948 · From the church archives
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section section--cream">
        <div className="tl-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '64px', alignItems: 'start' }} className="about-story-grid">
            <div>
              <p className="eyebrow">Our Story</p>
              <h2 className="display" style={{ fontSize: '42px', marginTop: '10px' }}>Eighty-four years of faithful witness.</h2>
              <p className="prose" style={{ marginTop: '24px' }}>
                In 1941, fourteen families gathered in a borrowed schoolroom on North Boulevard with a folding
                table for an altar and a single hymnal. They asked God for a church that would preach His Word
                plainly and love this city well.
              </p>
              <p className="prose" style={{ marginTop: '16px' }}>
                Eighty-four years on, we still gather. The schoolroom became a wood-frame chapel, then the
                brick sanctuary on Government Street where we worship today. The mission hasn&apos;t changed.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '32px', marginTop: '40px' }}>
                {[['1941','Founded'],['3','Generations served'],['620+','Members today']].map(([n,l]) => (
                  <div key={l}>
                    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '36px', color: '#A02319', display: 'block' }}>{n}</span>
                    <small style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#6B6B6B' }}>{l}</small>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ position: 'relative' }}>
              <div style={{ borderRadius: '18px', overflow: 'hidden', boxShadow: '0 18px 40px rgba(30,30,30,0.14)' }}>
                <Photo theme="warm" w={520} h={620} />
              </div>
              <p className="caption" style={{ textAlign: 'center', fontStyle: 'italic', marginTop: '12px' }}>
                North Boulevard chapel, ca. 1948
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Beliefs */}
      <section className="section section--white">
        <div className="tl-container">
          <div className="section-head section-head--center" style={{ marginBottom: '56px' }}>
            <p className="eyebrow eyebrow--blue">What We Believe</p>
            <h2 className="display" style={{ fontSize: '48px', marginTop: '14px' }}>
              The faith once delivered to the saints.
            </h2>
            <p className="prose" style={{ maxWidth: '620px', marginTop: '20px' }}>
              We hold to the historic Baptist Faith and Message — the Bible as God&apos;s inspired Word,
              salvation by grace through faith in Jesus Christ alone, and the local church as a covenant
              family of believers.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '28px' }} className="beliefs-grid">
            {beliefs.map(b => (
              <div key={b.title} style={{
                padding: '28px', background: '#F4F1EC', borderRadius: '18px',
              }}>
                <div style={{ color: '#A02319', marginBottom: '16px' }}>{b.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '22px', margin: '0 0 10px' }}>{b.title}</h3>
                <p style={{ fontSize: '14px', color: '#6B6B6B', lineHeight: 1.6, margin: 0 }}>{b.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href="#" className="btn btn--ghost-dark">
              Read our full statement of faith
            </Link>
          </p>
        </div>
      </section>

      {/* Leadership */}
      <section className="section section--maroon">
        <div className="tl-container">
          <div className="section-head section-head--row" style={{ marginBottom: '48px' }}>
            <div className="section-head__copy">
              <p className="eyebrow eyebrow--cream">Our Leadership</p>
              <h2 className="display" style={{ fontSize: '48px', color: '#fff' }}>
                Pastors, deacons, and faithful servants.
              </h2>
            </div>
            <p style={{ maxWidth: '380px', color: 'rgba(244,241,236,0.78)', fontSize: '16px', lineHeight: 1.6 }}>
              Our team is small, accountable, and accessible. Every leader is committed to the
              spiritual care of our congregation.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '32px' }} className="leaders-grid">
            {leaders.map(([name, role, meta]) => (
              <div key={name}>
                <div style={{ borderRadius: '14px', overflow: 'hidden', aspectRatio: '5/6' }}>
                  <Photo theme="warm" w={300} h={360} />
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '22px', color: '#fff', marginTop: '16px' }}>{name}</div>
                <div style={{ fontSize: '14px', color: '#4FA1C6', marginTop: '2px' }}>{role}</div>
                <div style={{ fontSize: '12px', color: 'rgba(244,241,236,0.55)', marginTop: '4px' }}>{meta}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />

      <style jsx>{`
        .about-hero-grid, .about-story-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        .beliefs-grid { grid-template-columns: repeat(2,1fr) !important; }
        .leaders-grid { grid-template-columns: repeat(2,1fr) !important; }
        @media (min-width: 1024px) {
          .about-hero-grid  { grid-template-columns: 1.1fr 1fr !important; }
          .about-story-grid { grid-template-columns: 1.1fr 1fr !important; }
          .beliefs-grid     { grid-template-columns: repeat(3,1fr) !important; }
          .leaders-grid     { grid-template-columns: repeat(3,1fr) !important; }
        }
        @media (max-width: 640px) {
          .beliefs-grid { grid-template-columns: 1fr !important; }
          .leaders-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
