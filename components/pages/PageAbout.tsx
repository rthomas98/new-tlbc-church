'use client';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import ChurchPhoto, { type ChurchPhotoKey } from '@/components/shared/ChurchPhoto';
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
  ['Pastor Dennis R. Hebert Sr.', 'Senior Pastor',    'True Light Baptist Church', 'pastor'],
  ['Associate Ministry Team', 'Discipleship & Care',  'Pastoral support', 'leadership'],
  ['Worship Ministry Team',   'Worship & Music',      'Choir and praise', 'worship'],
  ['Youth Ministry Team',     'Youth Ministry',       'Students 6-12', 'youth'],
  ["Children's Ministry Team", "Children's Ministry", 'Birth-5th grade', 'kids'],
  ['Deacon Ministry',         'Service & Care',       'Member care', 'leadership'],
];

export default function PageAbout() {
  const beliefsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = beliefsRef.current?.querySelectorAll<HTMLElement>('.belief-card');
    if (!cards) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          el.classList.add('visible');
          const delay = parseInt(el.style.getPropertyValue('--delay') || '0');
          setTimeout(() => el.style.removeProperty('--delay'), 520 + delay);
          observer.unobserve(el);
        });
      },
      { threshold: 0.12 }
    );
    cards.forEach(card => observer.observe(card));
    return () => observer.disconnect();
  }, []);

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
                  A Baptist church on North Street — gathered around scripture,
                  devoted to one another, sent into Baton Rouge.
                </p>
                <ul style={{ display: 'flex', gap: '40px', listStyle: 'none', padding: 0, margin: '0 0 64px' }}>
                  {[['620+','members today'],['3','generations served'],['1','senior pastor']].map(([n,l]) => (
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
                  position: 'relative',
                }}>
                  <ChurchPhoto photo="worship" priority sizes="(max-width: 1024px) 100vw, 45vw" />
                </div>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section section--cream">
        <div className="tl-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '64px', alignItems: 'start' }} className="about-story-grid">
            <div style={{ position: 'relative' }}>
              <div style={{ borderRadius: '18px', overflow: 'hidden', boxShadow: '0 18px 40px rgba(30,30,30,0.14)', position: 'relative', aspectRatio: '5/4' }}>
                <ChurchPhoto photo="outreach" sizes="(max-width: 1024px) 100vw, 45vw" />
              </div>
              <p className="caption" style={{ textAlign: 'center', fontStyle: 'italic', marginTop: '12px' }}>
                Serving neighbors through community outreach
              </p>
            </div>
            <div>
              <p className="eyebrow">Our Story</p>
              <h2 className="display" style={{ fontSize: '42px', marginTop: '10px' }}>Eighty-five years of faithful witness.</h2>
              <p className="prose" style={{ marginTop: '24px' }}>
                In 1941, fourteen families gathered in a borrowed schoolroom on North Boulevard with a folding
                table for an altar and a single hymnal. They asked God for a church that would preach His Word
                plainly and love this city well.
              </p>
              <p className="prose" style={{ marginTop: '16px' }}>
                Eighty-five years on, we still gather. The schoolroom became a wood-frame chapel, then the
                brick sanctuary on North Street where we worship today. The mission hasn&apos;t changed.
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
          </div>
        </div>
      </section>

      {/* Beliefs */}
      <section id="beliefs" className="section section--white">
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '28px' }} className="beliefs-grid" ref={beliefsRef}>
            {beliefs.map((b, i) => (
              <div key={b.title} className="belief-card" style={{ '--delay': `${i * 90}ms` } as React.CSSProperties}>
                <div style={{ color: '#A02319', marginBottom: '16px' }}>{b.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '22px', margin: '0 0 10px' }}>{b.title}</h3>
                <p style={{ fontSize: '14px', color: '#6B6B6B', lineHeight: 1.6, margin: 0 }}>{b.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href="/about#beliefs" className="btn btn--ghost-dark">
              Read our full statement of faith
            </Link>
          </p>
        </div>
      </section>

      {/* Leadership */}
      <section className="section section--blue">
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
            {leaders.map(([name, role, meta, photo]) => (
              <div key={name}>
                <div style={{ borderRadius: '14px', overflow: 'hidden', aspectRatio: '5/6' }}>
                  <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                    <ChurchPhoto photo={photo as ChurchPhotoKey} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                  </div>
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '22px', color: '#fff', marginTop: '16px' }}>{name}</div>
                <div style={{ fontSize: '14px', color: '#4FA1C6', marginTop: '2px' }}>{role}</div>
                <div style={{ fontSize: '12px', color: 'rgba(244,241,236,0.55)', marginTop: '4px' }}>{meta}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

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

        /* Belief cards — scroll entrance + hover */
        .belief-card {
          padding: 28px;
          background: #F4F1EC;
          border-radius: 18px;
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 480ms ease, transform 480ms ease, box-shadow 220ms ease;
          transition-delay: var(--delay, 0ms);
          cursor: default;
        }
        .belief-card.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .belief-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 40px rgba(30,30,30,0.11);
          transition-delay: 0ms;
        }
      `}</style>
    </>
  );
}
