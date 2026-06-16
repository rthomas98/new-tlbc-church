'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { CalendarDays, ChevronDown, Menu, X } from 'lucide-react';
import type { MinistryPage } from '@/lib/db/schema';

type NavLink = { id: string; label: string; href: string; dropdown?: MinistryPage[] };

export default function Header({ ministries = [] }: { ministries?: MinistryPage[] }) {
  const pathname = usePathname();

  const NAV_ITEMS: NavLink[] = [
    { id: 'home',       label: 'Home',       href: '/' },
    { id: 'about',      label: 'About',      href: '/about' },
    { id: 'ministries', label: 'Ministries', href: '/ministries', dropdown: ministries },
    { id: 'watch',      label: 'Watch',      href: '/watch' },
    { id: 'events',     label: 'Events',     href: '/events' },
    { id: 'connect',    label: 'Connect',    href: '/connect' },
    { id: 'give',       label: 'Give',       href: '/give' },
    { id: 'members',    label: 'Members',    href: '/members' },
  ];
  const [openId, setOpenId] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function isActive(href: string) {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  }

  function openDropdown(id: string) {
    if (closeTimer.current) { clearTimeout(closeTimer.current); closeTimer.current = null; }
    setOpenId(id);
  }
  function scheduleClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenId(null), 140);
  }

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(244,241,236,0.92)',
      backdropFilter: 'blur(12px) saturate(1.4)',
      borderBottom: '1px solid rgba(30,30,30,0.08)',
    }}>
      <div className="header-bar" style={{
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
        <nav className="desktop-nav" style={{ display: 'flex', gap: '28px', flexWrap: 'wrap', alignItems: 'center' }}>
          {NAV_ITEMS.map(item => {
            const active = isActive(item.href);
            const hasDropdown = !!item.dropdown;
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                style={{ position: 'relative' }}
                onMouseEnter={() => hasDropdown && openDropdown(item.id)}
                onMouseLeave={() => hasDropdown && scheduleClose()}
              >
                <Link
                  href={item.href}
                  aria-haspopup={hasDropdown || undefined}
                  aria-expanded={hasDropdown ? isOpen : undefined}
                  style={{
                    fontSize: '14px', fontWeight: 500, position: 'relative',
                    color: active ? '#A02319' : '#1E1E1E',
                    transition: 'color 180ms',
                    paddingBottom: '2px',
                    display: 'inline-flex', alignItems: 'center', gap: '4px',
                  }}
                >
                  {item.label}
                  {hasDropdown && (
                    <ChevronDown
                      size={14}
                      style={{
                        transition: 'transform 200ms',
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
                        marginTop: '1px',
                      }}
                    />
                  )}
                  {active && (
                    <span style={{
                      position: 'absolute', bottom: '-2px', left: 0, right: 0,
                      height: '2px', background: '#A02319', borderRadius: '2px',
                    }} />
                  )}
                </Link>

                {hasDropdown && isOpen && (
                  <div
                    onMouseEnter={() => openDropdown(item.id)}
                    onMouseLeave={scheduleClose}
                    style={{
                      position: 'absolute', top: 'calc(100% + 14px)', left: '50%',
                      transform: 'translateX(-50%)',
                      background: '#fff',
                      border: '1px solid rgba(30,30,30,0.08)',
                      borderRadius: '16px',
                      boxShadow: '0 20px 48px rgba(30,30,30,0.18), 0 4px 12px rgba(30,30,30,0.06)',
                      padding: '12px',
                      minWidth: '300px',
                      zIndex: 60,
                    }}
                  >
                    {/* little caret */}
                    <span style={{
                      position: 'absolute', top: '-7px', left: '50%', transform: 'translateX(-50%) rotate(45deg)',
                      width: '12px', height: '12px', background: '#fff',
                      border: '1px solid rgba(30,30,30,0.08)',
                      borderRight: 'none', borderBottom: 'none',
                    }} />
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '2px', position: 'relative' }}>
                      {item.dropdown!.map(m => {
                        const itemActive = pathname === `/ministries/${m.slug}`;
                        return (
                          <li key={m.slug}>
                            <Link
                              href={`/ministries/${m.slug}`}
                              style={{
                                display: 'flex', alignItems: 'center', gap: '12px',
                                padding: '10px 12px', borderRadius: '10px',
                                background: itemActive ? 'rgba(160,35,25,0.06)' : 'transparent',
                                transition: 'background 160ms',
                              }}
                              className="nav-dd-link"
                            >
                              <span style={{ position: 'relative', width: '44px', height: '44px', borderRadius: '10px', overflow: 'hidden', flexShrink: 0, background: '#7A1A16' }}>
                                <Image src={m.hero} alt="" fill style={{ objectFit: 'cover' }} sizes="44px" />
                              </span>
                              <span style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
                                <span style={{
                                  fontFamily: 'var(--font-display)', fontWeight: 700,
                                  fontSize: '15px', color: itemActive ? '#A02319' : '#1E1E1E',
                                  lineHeight: 1.2,
                                }}>{m.name}</span>
                                <span style={{
                                  fontSize: '11px', fontWeight: 600, letterSpacing: '0.10em',
                                  textTransform: 'uppercase', color: '#6B6B6B', marginTop: '2px',
                                }}>{m.sub}</span>
                              </span>
                            </Link>
                          </li>
                        );
                      })}
                      <li style={{ marginTop: '4px', borderTop: '1px solid rgba(30,30,30,0.08)', paddingTop: '8px' }}>
                        <Link
                          href="/ministries"
                          style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                            padding: '10px 12px', borderRadius: '10px',
                            fontSize: '13px', fontWeight: 600, color: '#A02319',
                            transition: 'background 160ms',
                          }}
                          className="nav-dd-link"
                        >
                          View all ministries
                          <span aria-hidden="true">→</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* CTA (desktop) */}
        <Link href="/connect" className="btn btn--red header-cta" style={{ fontSize: '14px', flexShrink: 0 }}>
          <CalendarDays size={16} />Plan Your Visit
        </Link>

        {/* Hamburger (mobile) */}
        <button
          type="button"
          className="hamburger"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(o => !o)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`mobile-drawer${mobileOpen ? ' open' : ''}`}>
        <nav className="mobile-nav">
          {NAV_ITEMS.map(item => (
            <Link
              key={item.id}
              href={item.href}
              className={`mobile-nav__link${isActive(item.href) ? ' active' : ''}`}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          {ministries.length > 0 && (
            <div className="mobile-nav__group">
              <span className="mobile-nav__group-label">Ministries</span>
              {ministries.map(m => (
                <Link
                  key={m.id}
                  href={`/ministries/${m.slug}`}
                  className="mobile-nav__sublink"
                  onClick={() => setMobileOpen(false)}
                >
                  {m.name}
                </Link>
              ))}
            </div>
          )}
          <Link href="/connect" className="btn btn--red" style={{ marginTop: '8px', justifyContent: 'center' }} onClick={() => setMobileOpen(false)}>
            <CalendarDays size={16} />Plan Your Visit
          </Link>
        </nav>
      </div>

      <style jsx global>{`
        .nav-dd-link:hover { background: rgba(30,30,30,0.04) !important; }

        .hamburger {
          display: none;
          align-items: center; justify-content: center;
          width: 44px; height: 44px; flex-shrink: 0;
          background: transparent; border: none; cursor: pointer;
          color: #1E1E1E; border-radius: 10px; transition: background 150ms;
        }
        .hamburger:hover { background: rgba(30,30,30,0.06); }
        .mobile-drawer { display: none; }

        @media (max-width: 960px) {
          .desktop-nav { display: none !important; }
          .header-cta { display: none !important; }
          .hamburger { display: inline-flex; }
        }
        @media (max-width: 640px) {
          .header-bar { padding: 14px 18px !important; gap: 12px !important; }
          .mobile-drawer {
            display: block;
            overflow: hidden;
            max-height: 0;
            border-top: 1px solid rgba(30,30,30,0);
            transition: max-height 280ms cubic-bezier(0.22,0.61,0.36,1), border-color 280ms;
          }
          .mobile-drawer.open {
            max-height: calc(100vh - 78px);
            overflow-y: auto;
            border-top-color: rgba(30,30,30,0.08);
          }
          .mobile-nav {
            display: flex; flex-direction: column; gap: 2px;
            padding: 14px 24px 24px;
          }
          .mobile-nav__link {
            font-size: 17px; font-weight: 600; color: #1E1E1E;
            padding: 13px 8px; border-radius: 10px;
            border-bottom: 1px solid rgba(30,30,30,0.06);
            transition: color 150ms;
          }
          .mobile-nav__link.active { color: #A02319; }
          .mobile-nav__group { padding: 10px 8px 4px; }
          .mobile-nav__group-label {
            display: block; font-size: 11px; font-weight: 700;
            letter-spacing: 0.18em; text-transform: uppercase; color: #A02319;
            margin-bottom: 6px;
          }
          .mobile-nav__sublink {
            display: block; font-size: 15px; color: #4A4A4A;
            padding: 9px 12px; border-radius: 8px;
          }
          .mobile-nav__sublink:active { background: rgba(30,30,30,0.05); }
        }
      `}</style>
    </header>
  );
}
