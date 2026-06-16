import Link from 'next/link';

export const metadata = {
  title: 'Privacy · True Light Baptist Church',
  description: 'How True Light Baptist Church handles contact, prayer, giving, and member information.',
};

export default function PrivacyPage() {
  return (
    <section className="section section--cream">
      <div className="tl-container" style={{ maxWidth: '860px' }}>
        <p className="crumb" style={{ color: '#6B6B6B' }}>
          <Link href="/" style={{ color: '#6B6B6B' }}>Home</Link><span>›</span>Privacy
        </p>
        <p className="eyebrow" style={{ marginBottom: '16px' }}>Privacy</p>
        <h1 className="display" style={{ fontSize: 'clamp(42px,5vw,68px)', marginBottom: '24px' }}>
          We handle your information with care.
        </h1>
        <p className="prose">
          True Light Baptist Church uses contact, prayer, giving, and member information only for church
          ministry, pastoral care, event follow-up, and necessary administrative records.
        </p>
        <div style={{ display: 'grid', gap: '24px', marginTop: '40px' }}>
          {[
            ['Contact forms', 'We use submitted contact details to reply, help you plan a visit, and connect you with the right ministry leader.'],
            ['Prayer requests', 'Prayer requests are handled by pastors and prayer team leaders. Confidential requests are not shared publicly.'],
            ['Giving records', 'Giving information is used for receipts, annual statements, and financial administration.'],
            ['Member portal', 'Member account information is used to support directory access, event RSVPs, giving history, and church communication.'],
          ].map(([title, body]) => (
            <article key={title} style={{ background: '#fff', borderRadius: '18px', padding: '28px', border: '1px solid rgba(30,30,30,0.08)' }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', margin: '0 0 10px' }}>{title}</h2>
              <p style={{ color: '#3A3A3A', lineHeight: 1.65, margin: 0 }}>{body}</p>
            </article>
          ))}
        </div>
        <p style={{ marginTop: '36px' }}>
          <Link href="/connect" className="btn btn--red">Contact the church office</Link>
        </p>
      </div>
    </section>
  );
}
