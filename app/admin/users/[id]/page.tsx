import { notFound, redirect } from 'next/navigation';
import { auth } from '@/auth';
import { getUserById } from '@/lib/db/queries';
import { updateUser } from '../../actions';

export const dynamic = 'force-dynamic';

export default async function EditUserPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ error?: string }>;
}) {
  const session = await auth();
  if (session?.user?.role !== 'admin') redirect('/admin');
  const { id } = await params;
  const { error } = await searchParams;

  const userId = Number(id);
  if (Number.isNaN(userId)) notFound();
  const user = await getUserById(userId);
  if (!user) notFound();

  return (
    <>
      <div className="admin-head">
        <div>
          <p className="admin-eyebrow">Team</p>
          <h1 className="admin-h1">Edit {user.name}</h1>
          <p className="admin-sub">{user.email}</p>
        </div>
      </div>
      <div className="admin-card" style={{ padding: 28 }}>
        {error === 'short' && <div className="login-error" style={{ marginBottom: 20 }}>New password must be at least 8 characters.</div>}
        <form action={updateUser} className="form-grid">
          <input type="hidden" name="id" value={user.id} />
          <div className="field">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" defaultValue={user.name} required />
          </div>
          <div className="field">
            <label htmlFor="role">Role</label>
            <select id="role" name="role" defaultValue={user.role}>
              <option value="editor">Editor</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div className="field field--full">
            <label htmlFor="password">Reset password (optional)</label>
            <input id="password" name="password" type="password" minLength={8} placeholder="Leave blank to keep current password" />
            <div className="help">Enter a new password only if you want to reset it for this person.</div>
          </div>
          <div className="form-actions">
            <button type="submit" className="btn-admin btn-admin--primary">Save</button>
            <a href="/admin/users" className="btn-admin btn-admin--ghost">Cancel</a>
          </div>
        </form>
      </div>
    </>
  );
}
