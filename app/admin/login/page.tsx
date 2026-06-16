import Image from 'next/image';
import { doSignIn } from '../actions';

export const dynamic = 'force-dynamic';

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <div className="login-wrap">
      <div className="login-card">
        <div className="login-brand">
          <span className="admin-brand__mark">
            <Image src="/assets/logo-icon-real.svg" alt="True Light Baptist Church" width={30} height={30} priority />
          </span>
          <b>True Light · Content Manager</b>
        </div>
        <h1>Welcome back</h1>
        <p>Sign in to manage True Light&apos;s website content.</p>
        {error && <div className="login-error">Invalid email or password.</div>}
        <form action={doSignIn} className="form-grid">
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required autoComplete="email" />
          </div>
          <div className="field">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" required autoComplete="current-password" />
          </div>
          <button type="submit" className="btn-admin btn-admin--primary" style={{ width: '100%', justifyContent: 'center' }}>
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}
