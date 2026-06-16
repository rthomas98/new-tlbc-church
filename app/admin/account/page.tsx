import { auth } from '@/auth';
import { changeOwnPassword } from '../actions';
import { FlashToast } from '@/components/admin/Toast';

export const dynamic = 'force-dynamic';

const ERRORS: Record<string, string> = {
  wrong: 'Your current password is incorrect.',
  short: 'New password must be at least 8 characters.',
  mismatch: 'The new passwords do not match.',
  notfound: 'Account not found.',
};

export default async function AccountPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; flash?: string }>;
}) {
  const session = await auth();
  const { error, flash } = await searchParams;

  return (
    <>
      <FlashToast flash={flash} />
      <div className="admin-head">
        <div>
          <p className="admin-eyebrow">Account</p>
          <h1 className="admin-h1">My Account</h1>
          <p className="admin-sub">{session?.user?.name} · {session?.user?.email}</p>
        </div>
      </div>
      <div className="admin-card" style={{ padding: 28, maxWidth: 560 }}>
        <h3 style={{ fontFamily: 'var(--a-display)', fontSize: 20, margin: '0 0 18px' }}>Change password</h3>
        {error && <div className="login-error" style={{ marginBottom: 20 }}>{ERRORS[error] ?? 'Something went wrong.'}</div>}
        <form action={changeOwnPassword} className="form-grid" style={{ gridTemplateColumns: '1fr' }}>
          <div className="field">
            <label htmlFor="current">Current password</label>
            <input id="current" name="current" type="password" required autoComplete="current-password" />
          </div>
          <div className="field">
            <label htmlFor="next">New password</label>
            <input id="next" name="next" type="password" required minLength={8} autoComplete="new-password" />
          </div>
          <div className="field">
            <label htmlFor="confirm">Confirm new password</label>
            <input id="confirm" name="confirm" type="password" required minLength={8} autoComplete="new-password" />
          </div>
          <div className="form-actions">
            <button type="submit" className="btn-admin btn-admin--primary">Update password</button>
          </div>
        </form>
      </div>
    </>
  );
}
