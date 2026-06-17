'use client';

import { useState } from 'react';
import { HandHeart, CheckCircle2, HandCoins, Building2, ShieldCheck, MessageSquare } from 'lucide-react';
import ChurchPhoto from '@/components/shared/ChurchPhoto';

export default function PrayerGiveSection() {
  const [name, setName] = useState('');
  const [request, setRequest] = useState('');
  const [confidential, setConfidential] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const amounts = [25, 50, 100, 250];
  const [amount, setAmount] = useState(50);
  const [custom, setCustom] = useState('');
  const [freq, setFreq] = useState<'one-time' | 'weekly' | 'monthly'>('one-time');

  const handlePrayer = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  return (
    <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }} className="split-section" data-section="prayer-give">
      {/* Prayer */}
      <div style={{ padding: '96px 64px', background: '#F4F1EC' }} className="split-col">
        <p className="eyebrow">Prayer Requests</p>
        <h2 className="h2" style={{ marginTop: '14px', fontSize: '44px' }}>
          However the week finds you, we&apos;ll lift you up.
        </h2>
        <p className="lead" style={{ marginTop: '20px' }}>
          Our pastors and prayer team pray over every request submitted —
          in confidence, with care, and in the name of Christ.
        </p>
        <div style={{
          position: 'relative',
          aspectRatio: '16/9',
          borderRadius: '18px',
          overflow: 'hidden',
          marginTop: '28px',
          maxWidth: '520px',
          boxShadow: '0 14px 34px rgba(30,30,30,0.12)',
        }}>
          <ChurchPhoto photo="homePrayerCare" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>

        {!submitted ? (
          <form onSubmit={handlePrayer} style={{ marginTop: '28px', maxWidth: '480px' }}>
            <div className="form-field">
              <label className="form-label-text">Your name</label>
              <input
                className="form-input"
                value={name} onChange={e => setName(e.target.value)}
                placeholder="Sarah Johnson"
              />
            </div>
            <div className="form-field">
              <label className="form-label-text">Prayer request</label>
              <textarea
                className="form-input" rows={4}
                value={request} onChange={e => setRequest(e.target.value)}
                placeholder="Share what's on your heart…"
                style={{ resize: 'vertical' }}
              />
            </div>
            <label style={{
              display: 'flex', alignItems: 'flex-start', gap: '10px',
              fontSize: '14px', lineHeight: 1.5, color: '#3A3A3A', cursor: 'pointer', marginBottom: '20px',
            }}>
              <input
                type="checkbox" checked={confidential}
                onChange={e => setConfidential(e.target.checked)}
                style={{ accentColor: '#A02319', width: '16px', height: '16px', marginTop: '2px', flexShrink: 0 }}
              />
              Keep my request confidential — share only with the prayer team.
            </label>
            <button type="submit" className="btn btn--red btn--lg" style={{ width: '100%', justifyContent: 'center' }}>
              <HandHeart size={18} />Submit Prayer Request
            </button>
          </form>
        ) : (
          <div style={{
            marginTop: '28px', maxWidth: '480px',
            background: '#fff', borderRadius: '18px', padding: '40px 32px',
            textAlign: 'center', border: '1px solid rgba(160,35,25,0.08)',
            boxShadow: '0 1px 2px rgba(30,30,30,0.04), 0 18px 40px rgba(30,30,30,0.10)',
          }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              width: '64px', height: '64px', borderRadius: '50%',
              background: 'rgba(160,35,25,0.07)', margin: '0 auto 18px',
            }}>
              <CheckCircle2 size={32} color="#A02319" strokeWidth={1.75} />
            </span>
            <h3 className="h3" style={{ marginBottom: '12px' }}>Thank you, {name || 'friend'}.</h3>
            <p className="prose" style={{ marginBottom: '20px' }}>
              Your request has been received. Our prayer team will lift it up this week.
              May God&apos;s peace be with you.
            </p>
            <button
              className="btn btn--ghost-dark"
              onClick={() => { setSubmitted(false); setName(''); setRequest(''); }}
            >
              Submit another request
            </button>
          </div>
        )}
      </div>

      {/* Give */}
      <div style={{
        padding: '96px 64px', background: '#A02319', color: '#fff', position: 'relative', overflow: 'hidden',
      }} className="split-col">
        <div style={{
          position: 'absolute', top: '-80px', right: '-80px',
          width: '380px', height: '380px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(244,241,236,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <p className="eyebrow eyebrow--cream">Give Online</p>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '44px',
          lineHeight: 1.08, color: '#fff', marginTop: '14px', textWrap: 'balance',
        }}>
          Sow generously into the work God is doing.
        </h2>
        <p style={{ fontSize: '19px', lineHeight: 1.6, color: 'rgba(244,241,236,0.85)', maxWidth: '460px', marginTop: '20px' }}>
          Your tithes and offerings keep the lights on, the doors open, and the
          Gospel going out — to Baton Rouge and beyond. Every gift matters.
        </p>
        <div style={{
          position: 'relative',
          aspectRatio: '16/9',
          borderRadius: '18px',
          overflow: 'hidden',
          marginTop: '28px',
          maxWidth: '520px',
          boxShadow: '0 18px 40px rgba(30,15,12,0.24)',
        }}>
          <ChurchPhoto photo="homeGiving" sizes="(max-width: 1024px) 100vw, 50vw" />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.02), rgba(30,15,12,0.28))',
          }} />
        </div>

        {/* Frequency */}
        <div style={{
          display: 'flex', gap: '8px', marginTop: '24px', maxWidth: '460px',
          background: 'rgba(244,241,236,0.18)', borderRadius: '999px', padding: '4px',
        }}>
          {(['one-time', 'weekly', 'monthly'] as const).map(f => (
            <button key={f} onClick={() => setFreq(f)} className={`freq-pill${freq === f ? ' freq-pill--active' : ''}`} style={{
              flex: 1, padding: '10px', borderRadius: '999px', border: 0, cursor: 'pointer',
              background: freq === f ? '#fff' : 'transparent',
              color: freq === f ? '#A02319' : 'rgba(244,241,236,0.78)',
              fontWeight: 600, fontSize: '14px',
              transition: 'background 220ms cubic-bezier(0.22,0.61,0.36,1), color 220ms cubic-bezier(0.22,0.61,0.36,1)',
              boxShadow: freq === f ? '0 2px 8px rgba(30,15,12,0.18)' : 'none',
              textTransform: 'capitalize',
            }}>
              {f === 'one-time' ? 'One-Time' : f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        {/* Amount buttons */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '12px', marginTop: '20px', maxWidth: '460px' }}>
          {amounts.map(a => {
            const active = amount === a && !custom;
            return (
            <button key={a} onClick={() => { setAmount(a); setCustom(''); }} className={`amount-btn${active ? ' amount-btn--active' : ''}`} style={{
              background: active ? '#fff' : 'rgba(244,241,236,0.10)',
              color: active ? '#A02319' : '#fff',
              border: '1px solid',
              borderColor: active ? '#fff' : 'rgba(244,241,236,0.30)',
              borderRadius: '12px', padding: '14px 0',
              fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '22px',
              cursor: 'pointer',
              transition: 'background 220ms cubic-bezier(0.22,0.61,0.36,1), color 220ms cubic-bezier(0.22,0.61,0.36,1), border-color 220ms cubic-bezier(0.22,0.61,0.36,1), transform 220ms cubic-bezier(0.22,0.61,0.36,1)',
              boxShadow: active ? '0 4px 14px rgba(30,15,12,0.20)' : 'none',
            }}>
              ${a}
            </button>
          );
          })}
        </div>

        {/* Custom amount */}
        <div style={{ position: 'relative', marginTop: '14px', maxWidth: '460px' }}>
          <span style={{
            position: 'absolute', left: '18px', top: '50%', transform: 'translateY(-50%)',
            color: 'rgba(244,241,236,0.78)', fontSize: '16px', fontWeight: 600,
          }}>$</span>
          <input
            type="text"
            placeholder="Other amount"
            value={custom}
            onChange={e => { setCustom(e.target.value.replace(/[^0-9]/g, '')); setAmount(0); }}
            className="custom-amount"
            style={{
              width: '100%', padding: '16px 20px 16px 42px',
              background: 'rgba(244,241,236,0.12)',
              border: '1px solid rgba(244,241,236,0.30)',
              borderRadius: '12px', color: '#fff', fontSize: '16px',
              outline: 'none', fontFamily: 'var(--font-body)',
              transition: 'border-color 220ms cubic-bezier(0.22,0.61,0.36,1), background 220ms cubic-bezier(0.22,0.61,0.36,1)',
            }}
          />
        </div>

        {/* CTA buttons */}
        <div style={{ display: 'flex', gap: '12px', marginTop: '24px', flexWrap: 'wrap' }}>
          <button className="btn btn--white btn--lg">
            <HandCoins size={18} />
            Give ${custom || amount}{freq !== 'one-time' ? ` · ${freq}` : ''}
          </button>
          <button className="btn btn--ghost-light btn--lg">
            <Building2 size={18} />Other Ways To Give
          </button>
        </div>

        {/* Methods */}
        <div style={{ display: 'flex', gap: '20px', marginTop: '20px', flexWrap: 'wrap' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'rgba(244,241,236,0.78)' }}>
            <ShieldCheck size={14} />Secure · Stripe
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'rgba(244,241,236,0.78)' }}>
            <MessageSquare size={14} />Text &ldquo;GIVE&rdquo; to 84321
          </span>
        </div>
      </div>

      <style jsx>{`
        .freq-pill:not(.freq-pill--active):hover { color: #fff !important; }
        .amount-btn:not(.amount-btn--active):hover {
          background: rgba(244,241,236,0.18) !important;
          border-color: rgba(244,241,236,0.55) !important;
          transform: translateY(-2px);
        }
        .custom-amount::placeholder { color: rgba(244,241,236,0.55); }
        .custom-amount:focus {
          border-color: rgba(244,241,236,0.65);
          background: rgba(244,241,236,0.18);
        }
        @media (max-width: 1024px) {
          [data-section="prayer-give"] { grid-template-columns: 1fr !important; }
          .split-col { padding: 64px 32px !important; }
        }
      `}</style>
    </section>
  );
}
