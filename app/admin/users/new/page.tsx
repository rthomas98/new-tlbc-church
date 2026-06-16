import { redirect } from 'next/navigation';
import { auth } from '@/auth';
import { createUser } from '../../actions';

export const dynamic = 'force-dynamic';

const ERRORS: Record<string, string> = {
  invalid: 'Please provide a name, email, and a password of at least 8 characters.',
  exists: 'A user with that email already exists.',
};

export default async function NewUserPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const session = await auth();
  if (session?.user?.role !== 'admin') redirect('/admin');
  const { error } = await searchParams;

  return (
    <>
      <div className="admin-head">
        <div>
          <p className="admin-eyebrow">Team</p>
          <h1 className="admin-h1">Invite staff</h1>
          <p className="admin-sub">Create a sign-in for another church team member.</p>
        </div>
      </div>
      <div className="admin-card" style={{ padding: 28 }}>
        {error && <div className="login-error" style={{ marginBottom: 20 }}>{ERRORS[error] ?? 'Something went wrong.'}</div>}
        <form action={createUser} className="form-grid">
          <div className="field">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" required />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required />
          </div>
          <div className="field">
            <label htmlFor="role">Role</label>
            <select id="role" name="role" defaultValue="editor">
              <option value="editor">Editor — can manage content</option>
              <option value="admin">Admin — can also manage the team</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="password">Temporary password</label>
            <input id="password" name="password" type="password" required minLength={8} />
            <div className="help">At least 8 characters. They can change it after signing in.</div>
          </div>
          <div className="form-actions">
            <button type="submit" className="btn-admin btn-admin--primary">Create account</button>
            <a href="/admin/users" className="btn-admin btn-admin--ghost">Cancel</a>
          </div>
        </form>
      </div>
    </>
  );
}
