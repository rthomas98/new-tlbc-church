import './admin.css';
import Image from 'next/image';
import { auth } from '@/auth';
import { RESOURCE_KEYS, RESOURCES } from '@/lib/admin/fields';
import AdminNav from '@/components/admin/AdminNav';
import AdminShell from '@/components/admin/AdminShell';
import { ToastProvider } from '@/components/admin/Toast';
import { doSignOut } from './actions';

export const dynamic = 'force-dynamic';

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();

  // Login page renders bare (proxy lets it through unauthenticated).
  if (!session?.user) return <div className="admin-root">{children}</div>;

  const name = session.user.name ?? session.user.email ?? 'Admin';
  const initials = name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  const resources = RESOURCE_KEYS.map((key) => ({ key, label: RESOURCES[key].label }));

  const sidebar = (
    <>
      <div className="admin-brand">
        <span className="admin-brand__mark">
          <Image src="/assets/logo-icon-real.svg" alt="True Light Baptist Church" width={30} height={30} priority />
        </span>
        <span className="admin-brand__text">
          True Light
          <small>Content Manager</small>
        </span>
      </div>

      <AdminNav resources={resources} isAdmin={session.user.role === 'admin'} />

      <div className="admin-user">
        <div className="admin-user__avatar">{initials}</div>
        <div className="admin-user__meta">
          <strong>{name}</strong>
          <small>{session.user.email}</small>
        </div>
        <form action={doSignOut}>
          <button className="admin-user__signout" title="Sign out" aria-label="Sign out">
            ⏻
          </button>
        </form>
      </div>
    </>
  );

  return (
    <div className="admin-root">
      <ToastProvider>
        <AdminShell sidebar={sidebar}>{children}</AdminShell>
      </ToastProvider>
    </div>
  );
}
