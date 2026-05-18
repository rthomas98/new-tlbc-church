'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronDown, Users, Heart, Flame, HandHeart, CheckCircle2 } from 'lucide-react';
import { MINISTRIES } from '@/lib/ministries';

/* ── Ministry photo cards (from shared data) ── */
const cards = MINISTRIES.map(m => ({ slug: m.slug, name: m.name, sub: m.sub, src: m.hero }));

/* ── 3-Step pathway ── */
const steps = [
  {
    n: '01', icon: <Users size={28} />, title: 'Show Up',
    desc: 'Join us any Sunday at 10 a.m. — no appointment needed. Coffee is ready from 9:30.',
  },
  {
    n: '02', icon: <Heart size={28} />, title: 'Find Your Group',
    desc: 'Explore the ministries above and pick one that fits your season. Try a meeting or event first.',
  },
  {
    n: '03', icon: <Flame size={28} />, title: 'Go Deeper',
    desc: "Ready to lead or serve? Let us know and we'll connect you with the right next step.",
  },
];

/* ── Impact numbers ── */
const stats = [
  { n: '9', label: 'Active ministries' },
  { n: '620+', label: 'Members involved' },
  { n: '3', label: 'Generations served' },
  { n: '12', label: 'Local outreach partners' },
];

/* ── Member spotlights ── */
const spotlights = [
  {
    quote: "The Men of True Light breakfast changed how I see my role as a husband and father. We just open the Word and hold each other accountable — nothing fancy, everything real.",
    name: 'Devin R.', role: "Men's Ministry · 4 years", initials: 'DR',
  },
  {
    quote: "I came to Women in the Word not knowing anyone. Six months later these women are family. We have laughed together, prayed through hard seasons, and grown in the Word.",
    name: 'Shanice M.', role: 'Women in the Word · 2 years', initials: 'SM',
  },
  {
    quote: "My daughter started in the youth group at 13. She is 17 now and leading worship. Watching that happen inside this church family has been one of the greatest gifts of our life.",
    name: 'Renée A.', role: 'Parent & Volunteer', initials: 'RA',
  },
];

/* ── FAQ ── */
const faqs = [
  { q: 'Do I have to be a member to join a ministry?', a: 'No — most ministries welcome anyone who attends True Light regularly. Membership is encouraged but not required to participate.' },
  { q: "What if I don't know which ministry is right for me?", a: 'Start by visiting a Sunday service and talking to someone at the Welcome Table. You can also fill out our Connect card and a pastor will reach out within 48 hours.' },
  { q: 'How much time does involvement require?', a: 'It varies. Most ministries meet once or twice a week. You can start by attending a single meeting with zero commitment to see if it is a good fit.' },
  { q: 'My kids want to get involved — where do they start?', a: 'Children (Birth–5th grade) are invited to our Sunday morning Children\'s Ministry. Youth (6th–12th) meet Wednesdays at 6:30 p.m. in the youth wing.' },
  { q: 'How do I volunteer or serve on a ministry team?', a: 'Fill out the Connect form or speak with any pastor on Sunday. We match volunteers based on your gifts and availability.' },
];

/* ── Serve areas ── */
const serveAreas = [
  'Children & Nursery', 'Hospitality & Greeters', 'Tech & Media', 'Choir & Music',
  'Community Outreach', 'Prayer Team', 'Ushers', 'Missions',
];

/* ── FAQ Accordion item ── */
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{
      borderBottom: '1px solid rgba(30,30,30,0.10)',
      overflow: 'hidden',
    }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%', display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', gap: '16px', padding: '22px 0',
          background: 'none', border: 0, cursor: 'pointer', textAlign: 'left',
        }}
      >
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '18px', color: '#1E1E1E' }}>{q}</span>
        <ChevronDown size={20} color="#A02319" style={{ flexShrink: 0, transition: 'transform 260ms', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }} />
      </button>
      {open && (
        <p style={{ fontSize: '15px', lineHeight: 1.65, color: '#3A3A3A', margin: '0 0 22px', maxWidth: '680px' }}>{a}</p>
      )}
    </div>
  );
}

export default function PageMinistries() {
  return (
    <>
      {/* ── Hero ── */}
      <section style={{ background: '#7A1A16', color: '#F4F1EC', overflow: 'hidden' }}>
        <div className="tl-container" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
          <p className="crumb"><Link href="/">Home</Link><span>›</span>Ministries</p>
          <p className="eyebrow eyebrow--cream" style={{ marginBottom: '16px' }}>Find your people</p>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontWeight: 800,
            fontSize: 'clamp(44px,5.4vw,72px)', lineHeight: 1.02,
            color: '#fff', margin: '0 0 20px', maxWidth: '640px',
          }}>
            A ministry for every<br/>
            <em style={{ color: '#B6D8E6' }}>season of life.</em>
          </h1>
          <p style={{ fontSize: '17px', maxWidth: '520px', color: 'rgba(244,241,236,0.86)', lineHeight: 1.6, margin: '0 0 32px' }}>
            From Sunday school to senior fellowship — there&apos;s a place at True Light for you, exactly where you are.
          </p>
          {/* Stats inline */}
          <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap' }}>
            {stats.map(s => (
              <div key={s.label}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '36px', color: '#fff', display: 'block', lineHeight: 1 }}>{s.n}</span>
                <span style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(244,241,236,0.60)', marginTop: '4px', display: 'block' }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ministry photo grid ── */}
      <section className="section section--cream" id="groups">
        <div className="tl-container">
          <div className="section-head section-head--center" style={{ marginBottom: '48px' }}>
            <p className="eyebrow">Our Ministries</p>
            <h2 className="h1" style={{ marginTop: '14px' }}>There&apos;s a place for you here.</h2>
            <hr className="divider-3" style={{ marginTop: '20px' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }} className="min-photo-grid">
            {cards.map(c => (
              <Link key={c.slug} href={`/ministries/${c.slug}`} style={{
                position: 'relative', aspectRatio: '4/5',
                borderRadius: '20px', overflow: 'hidden', display: 'block',
              }} className="min-photo-card">
                <Image src={c.src} alt={c.name} fill style={{ objectFit: 'cover' }} sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,33vw" />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to bottom, rgba(0,0,0,0.42) 0%, rgba(0,0,0,0.05) 45%, rgba(0,0,0,0.62) 100%)',
                }} />
                <div style={{
                  position: 'absolute', inset: 0, padding: '28px',
                  display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: '#fff',
                }}>
                  <div>
                    <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(22px,2.4vw,28px)', lineHeight: 1.1, margin: 0, textShadow: '0 1px 4px rgba(0,0,0,0.35)' }}>{c.name}</h2>
                    <p style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.72)', margin: '6px 0 0' }}>{c.sub}</p>
                  </div>
                  <span style={{
                    fontSize: '14px', fontWeight: 600, color: '#fff',
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                    borderBottom: '1px solid rgba(255,255,255,0.55)', paddingBottom: '2px',
                    alignSelf: 'flex-start', transition: 'border-color 200ms',
                  }}>
                    Learn More <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3-Step Next Steps ── */}
      <section className="section section--white">
        <div className="tl-container">
          <div className="section-head section-head--center" style={{ marginBottom: '56px' }}>
            <p className="eyebrow eyebrow--blue">Getting Involved</p>
            <h2 className="h1" style={{ marginTop: '14px' }}>Three steps to finding your place.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '40px', position: 'relative' }} className="steps-grid">
            {/* connecting line */}
            <div style={{
              position: 'absolute', top: '44px', left: '18%', right: '18%',
              height: '2px', background: 'rgba(160,35,25,0.15)', zIndex: 0,
            }} className="steps-line" />
            {steps.map((s, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative', zIndex: 1, gap: '16px' }}>
                <div style={{
                  width: '88px', height: '88px', borderRadius: '50%',
                  background: i === 1 ? '#A02319' : '#F4F1EC',
                  color: i === 1 ? '#fff' : '#A02319',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: i === 1 ? '0 8px 24px rgba(160,35,25,0.28)' : 'none',
                  border: i !== 1 ? '2px solid rgba(160,35,25,0.20)' : 'none',
                  flexShrink: 0,
                }}>
                  {s.icon}
                </div>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '13px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#A02319' }}>{s.n}</span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '24px', margin: 0 }}>{s.title}</h3>
                <p style={{ fontSize: '15px', color: '#3A3A3A', lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: '52px' }}>
            <Link href="/connect" className="btn btn--red btn--lg">
              Get Connected <ArrowRight size={18} />
            </Link>
          </p>
        </div>
      </section>

      {/* ── Member Spotlights ── */}
      <section className="section section--cream">
        <div className="tl-container">
          <div className="section-head section-head--center" style={{ marginBottom: '48px' }}>
            <p className="eyebrow">Voices From Our Family</p>
            <h2 className="h1" style={{ marginTop: '14px' }}>Changed by community.</h2>
            <hr className="divider-3" style={{ marginTop: '20px' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px' }} className="spots-grid">
            {spotlights.map((t, i) => (
              <article key={i} style={{
                background: '#fff', borderRadius: '20px', padding: '32px',
                border: '1px solid rgba(30,30,30,0.08)',
                display: 'flex', flexDirection: 'column', gap: '20px',
              }}>
                {/* Quote mark */}
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '64px', lineHeight: 0.8, color: '#A02319', opacity: 0.18, userSelect: 'none' }}>&ldquo;</span>
                <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 500, fontSize: '17px', lineHeight: 1.55, flex: 1, margin: '-24px 0 0' }}>
                  {t.quote}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', paddingTop: '16px', borderTop: '1px solid rgba(30,30,30,0.08)' }}>
                  <div style={{
                    width: '48px', height: '48px', borderRadius: '50%',
                    background: '#7A1A16', color: '#fff', flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '16px',
                  }}>{t.initials}</div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '16px' }}>{t.name}</div>
                    <div style={{ fontSize: '12px', color: '#4FA1C6', fontWeight: 600, marginTop: '2px' }}>{t.role}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Serve With Us ── */}
      <section className="section section--maroon">
        <div className="tl-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }} className="serve-grid">
            <div>
              <p className="eyebrow eyebrow--cream">Volunteer</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(36px,4vw,56px)', color: '#fff', margin: '14px 0 20px', lineHeight: 1.05 }}>
                Your gifts belong<br/><em style={{ color: '#B6D8E6' }}>in the work.</em>
              </h2>
              <p style={{ fontSize: '17px', color: 'rgba(244,241,236,0.85)', lineHeight: 1.6, maxWidth: '440px', margin: '0 0 32px' }}>
                Every ministry at True Light runs on willing hands and willing hearts.
                There&apos;s a role that fits your schedule, your gift, and your season.
              </p>
              <Link href="/connect" className="btn btn--white btn--lg">
                <HandHeart size={18} />Serve With Us
              </Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              {serveAreas.map(area => (
                <div key={area} style={{
                  display: 'flex', alignItems: 'center', gap: '10px',
                  background: 'rgba(244,241,236,0.10)', borderRadius: '12px', padding: '14px 18px',
                }}>
                  <CheckCircle2 size={16} color="#B6D8E6" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '14px', color: '#F4F1EC', fontWeight: 500 }}>{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section section--white">
        <div className="tl-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '80px', alignItems: 'start' }} className="faq-grid">
            <div style={{ position: 'sticky', top: '100px' }}>
              <p className="eyebrow">Common Questions</p>
              <h2 className="h1" style={{ marginTop: '14px', fontSize: '42px' }}>Questions about getting involved?</h2>
              <p className="prose" style={{ marginTop: '20px' }}>
                We want getting connected to be as simple as possible.
                If you don&apos;t see your question here, reach out to us directly.
              </p>
              <Link href="/connect" className="btn btn--ghost-dark" style={{ marginTop: '28px' }}>
                Ask a Pastor <ArrowRight size={16} />
              </Link>
            </div>
            <div style={{ borderTop: '1px solid rgba(30,30,30,0.10)' }}>
              {faqs.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}
            </div>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="section section--tight section--charcoal">
        <div className="tl-container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '40px', flexWrap: 'wrap' }}>
            <div>
              <p className="eyebrow eyebrow--cream">Ready to start?</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '40px', color: '#fff', margin: '8px 0 0' }}>
                We&apos;ll save you a seat.
              </h2>
            </div>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Link href="/connect" className="btn btn--red btn--lg">Plan Your Visit</Link>
              <Link href="/connect" className="btn btn--ghost-light btn--lg">Get Connected</Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .min-photo-grid  { grid-template-columns: repeat(2,1fr) !important; }
        .steps-grid      { grid-template-columns: 1fr !important; }
        .steps-line      { display: none; }
        .spots-grid      { grid-template-columns: 1fr !important; }
        .serve-grid      { grid-template-columns: 1fr !important; gap: 48px !important; }
        .faq-grid        { grid-template-columns: 1fr !important; gap: 40px !important; }

        @media (min-width: 640px) {
          .steps-grid  { grid-template-columns: repeat(3,1fr) !important; }
          .steps-line  { display: block; }
          .spots-grid  { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (min-width: 1024px) {
          .min-photo-grid { grid-template-columns: repeat(3,1fr) !important; }
          .spots-grid     { grid-template-columns: repeat(3,1fr) !important; }
          .serve-grid     { grid-template-columns: 1fr 1fr !important; gap: 80px !important; }
          .faq-grid       { grid-template-columns: 1fr 1.6fr !important; gap: 80px !important; }
        }
        @media (max-width: 640px) {
          .min-photo-grid { grid-template-columns: 1fr !important; }
        }

        .min-photo-card { transition: transform 280ms cubic-bezier(0.22,0.61,0.36,1), box-shadow 280ms; }
        .min-photo-card:hover { transform: translateY(-4px); box-shadow: 0 20px 48px rgba(30,30,30,0.22); }
      `}</style>
    </>
  );
}
