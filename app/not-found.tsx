import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Page not found · True Light Baptist Church',
};

export default function NotFound() {
  return (
    <main style={{
      minHeight: '100vh', background: '#F4F1EC',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '32px', textAlign: 'center',
    }}>
      <div style={{ maxWidth: '540px' }}>
        <span style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          width: '64px', height: '64px', borderRadius: '50%', background: '#A02319',
          marginBottom: '28px',
          boxShadow: '0 8px 20px -4px rgba(160,35,25,0.45), inset 0 1px 0 rgba(255,255,255,0.22)',
        }}>
          <Image src="/assets/logo-icon-real.svg" alt="True Light Baptist Church" width={40} height={40} priority />
        </span>
        <p style={{
          fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 700,
          letterSpacing: '0.22em', textTransform: 'uppercase', color: '#A02319', margin: '0 0 12px',
        }}>
          Page not found
        </p>
        <h1 style={{
          fontFamily: 'var(--font-display)', fontWeight: 800,
          fontSize: 'clamp(40px, 7vw, 64px)', lineHeight: 1.05, color: '#1E1E1E', margin: '0 0 16px',
        }}>
          We couldn&apos;t find that page.
        </h1>
        <p style={{
          fontFamily: 'var(--font-body)', fontSize: '17px', lineHeight: 1.6,
          color: '#3A3A3A', margin: '0 0 32px',
        }}>
          The page you&apos;re looking for may have moved or no longer exists —
          but you&apos;re always welcome here.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" className="btn btn--red btn--lg">Back to home</Link>
          <Link href="/connect" className="btn btn--ghost-dark btn--lg">Plan a visit</Link>
        </div>
      </div>
    </main>
  );
}
