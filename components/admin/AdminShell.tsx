'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function AdminShell({
  sidebar,
  children,
}: {
  sidebar: React.ReactNode;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  // Prevent body scroll while the drawer is open on mobile.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <div className="admin-shell">
      {/* Mobile top bar */}
      <header className="admin-topbar">
        <button
          type="button"
          className="admin-topbar__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <span className="admin-topbar__title">True Light · Content Manager</span>
      </header>

      <aside
        className={`admin-sidebar${open ? ' open' : ''}`}
        onClick={(event) => {
          if ((event.target as HTMLElement).closest('a')) setOpen(false);
        }}
      >
        {sidebar}
      </aside>

      {open && <div className="admin-overlay" onClick={() => setOpen(false)} />}

      <div className="admin-content">{children}</div>
    </div>
  );
}
