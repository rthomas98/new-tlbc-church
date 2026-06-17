'use client';

import { useActionState } from 'react';
import Link from 'next/link';
import { HandHeart, CheckCircle2, Church, Mail, ArrowRight } from 'lucide-react';
import ChurchPhoto from '@/components/shared/ChurchPhoto';
import { submitPrayer, type PrayerState } from '@/app/(site)/connect/actions';

const initialState: PrayerState = { status: 'idle' };

export default function PrayerGiveSection() {
  const [state, formAction, pending] = useActionState(submitPrayer, initialState);

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

        {state.status === 'success' ? (
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
            <h3 className="h3" style={{ marginBottom: '12px' }}>Your request has been received.</h3>
            <p className="prose">
              Our prayer team will lift it up this week. May God&apos;s peace be with you.
            </p>
          </div>
        ) : (
          <form action={formAction} style={{ marginTop: '28px', maxWidth: '480px' }}>
            {/* Honeypot — hidden from real users */}
            <input
              type="text" name="company" tabIndex={-1} autoComplete="off"
              aria-hidden="true"
              style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0 }}
            />
            <div className="form-field">
              <label className="form-label-text" htmlFor="prayer-name">Your name</label>
              <input id="prayer-name" name="name" className="form-input" placeholder="Sarah Johnson" required />
            </div>
            <div className="form-field">
              <label className="form-label-text" htmlFor="prayer-request">Prayer request</label>
              <textarea
                id="prayer-request" name="request" className="form-input" rows={4}
                placeholder="Share what's on your heart…" style={{ resize: 'vertical' }} required
              />
            </div>
            <label style={{
              display: 'flex', alignItems: 'flex-start', gap: '10px',
              fontSize: '14px', lineHeight: 1.5, color: '#3A3A3A', cursor: 'pointer', marginBottom: '20px',
            }}>
              <input
                type="checkbox" name="confidential" defaultChecked
                style={{ accentColor: '#A02319', width: '16px', height: '16px', marginTop: '2px', flexShrink: 0 }}
              />
              Keep my request confidential — share only with the prayer team.
            </label>
            {state.status === 'error' && state.message && (
              <p style={{ color: '#A02319', fontSize: '14px', fontWeight: 600, marginBottom: '16px' }}>{state.message}</p>
            )}
            <button type="submit" className="btn btn--red btn--lg" disabled={pending} style={{ width: '100%', justifyContent: 'center', opacity: pending ? 0.7 : 1 }}>
              <HandHeart size={18} />{pending ? 'Submitting…' : 'Submit Prayer Request'}
            </button>
          </form>
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

        <p className="eyebrow eyebrow--cream">Giving</p>
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

        {/* Two ways to give */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '28px', maxWidth: '520px' }}>
          {[
            { Icon: Church, title: 'In person', body: 'Place your tithe or offering in the plate during our 10 a.m. Sunday service.' },
            { Icon: Mail, title: 'By mail', body: 'Mail a check to True Light Baptist Church · 3836 North Street · Baton Rouge, LA 70806.' },
          ].map(({ Icon, title, body }) => (
            <div key={title} style={{
              display: 'flex', gap: '16px', alignItems: 'flex-start',
              background: 'rgba(244,241,236,0.10)', border: '1px solid rgba(244,241,236,0.18)',
              borderRadius: '14px', padding: '18px 20px',
            }}>
              <span style={{
                flexShrink: 0, width: '42px', height: '42px', borderRadius: '11px',
                background: 'rgba(244,241,236,0.14)', display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Icon size={20} color="#fff" />
              </span>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '18px', color: '#fff' }}>{title}</div>
                <p style={{ fontSize: '14px', lineHeight: 1.55, color: 'rgba(244,241,236,0.82)', margin: '4px 0 0' }}>{body}</p>
              </div>
            </div>
          ))}
        </div>

        <Link href="/give" className="btn btn--white btn--lg" style={{ marginTop: '24px' }}>
          See funds &amp; all ways to give <ArrowRight size={18} />
        </Link>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          [data-section="prayer-give"] { grid-template-columns: 1fr !important; }
          .split-col { padding: 64px 32px !important; }
        }
      `}</style>
    </section>
  );
}
