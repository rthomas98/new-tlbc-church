'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { CalendarDays } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'home',       label: 'Home',       href: '/' },
  { id: 'about',      label: 'About',      href: '/about' },
  { id: 'ministries', label: 'Ministries', href: '/ministries' },
  { id: 'watch',      label: 'Watch',      href: '/watch' },
  { id: 'events',     label: 'Events',     href: '/events' },
  { id: 'connect',    label: 'Connect',    href: '/connect' },
  { id: 'give',       label: 'Give',       href: '/give' },
  { id: 'members',    label: 'Members',    href: '/members' },
];

export default function Header() {
  const pathname = usePathname();

  function isActive(href: string) {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  }

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(244,241,236,0.92)',
      backdropFilter: 'blur(12px) saturate(1.4)',
      borderBottom: '1px solid rgba(30,30,30,0.08)',
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '16px 32px', gap: '32px',
      }}>
        {/* Brand */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '14px', textDecoration: 'none', flexShrink: 0 }}>
          <span style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: '44px', height: '44px', borderRadius: '50%', background: '#A02319',
            flexShrink: 0,
          }}>
            <Image
              src="/assets/logo-icon-real.svg"
              alt="True Light Baptist Church seal"
              width={30}
              height={30}
              priority
            />
          </span>
          <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
            <span style={{
              fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '17px',
              color: '#A02319', textTransform: 'uppercase', letterSpacing: '0.04em',
            }}>True Light</span>
            <span style={{
              fontSize: '10px', fontWeight: 600, letterSpacing: '0.24em',
              textTransform: 'uppercase', color: '#6B6B6B',
            }}>Baptist · Est. 1941</span>
          </span>
        </Link>

        {/* Nav */}
        <nav style={{ display: 'flex', gap: '28px', flexWrap: 'wrap' }}>
          {NAV_ITEMS.map(item => (
            <Link
              key={item.id}
              href={item.href}
              style={{
                fontSize: '14px', fontWeight: 500, position: 'relative',
                color: isActive(item.href) ? '#A02319' : '#1E1E1E',
                transition: 'color 180ms',
                paddingBottom: '2px',
              }}
            >
              {item.label}
              {isActive(item.href) && (
                <span style={{
                  position: 'absolute', bottom: '-2px', left: 0, right: 0,
                  height: '2px', background: '#A02319', borderRadius: '2px',
                }} />
              )}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link href="/connect" className="btn btn--red" style={{ fontSize: '14px', flexShrink: 0 }}>
          <CalendarDays size={16} />Plan Your Visit
        </Link>
      </div>
    </header>
  );
}
