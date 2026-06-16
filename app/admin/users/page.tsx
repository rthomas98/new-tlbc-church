import Link from 'next/link';
import { redirect } from 'next/navigation';
import { Plus } from 'lucide-react';
import { auth } from '@/auth';
import { getUsers } from '@/lib/db/queries';
import DeleteUserButton from '@/components/admin/DeleteUserButton';
import { FlashToast } from '@/components/admin/Toast';

export const dynamic = 'force-dynamic';

export default async function UsersPage({
  searchParams,
}: {
  searchParams: Promise<{ flash?: string }>;
}) {
  const session = await auth();
  if (session?.user?.role !== 'admin') redirect('/admin');
  const { flash } = await searchParams;
  const users = await getUsers();
  const meId = session.user.id;

  return (
    <>
      <FlashToast flash={flash} />
      <div className="admin-head">
        <div>
          <p className="admin-eyebrow">Site</p>
          <h1 className="admin-h1">Team</h1>
          <p className="admin-sub">Staff who can sign in and manage website content.</p>
        </div>
        <Link href="/admin/users/new" className="btn-admin btn-admin--primary">
          <Plus size={16} /> Invite staff
        </Link>
      </div>

      <div className="admin-card">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th style={{ textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td className="cell-title">{u.name}</td>
                <td>{u.email}</td>
                <td>
                  <span className={`badge ${u.role === 'admin' ? 'badge--on' : 'badge--off'}`}>
                    {u.role}
                  </span>
                </td>
                <td style={{ textAlign: 'right', whiteSpace: 'nowrap' }}>
                  <span className="row-actions">
                    <Link href={`/admin/users/${u.id}`} className="link-edit">Edit</Link>
                    <DeleteUserButton id={u.id} name={u.name} self={String(u.id) === String(meId)} />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
