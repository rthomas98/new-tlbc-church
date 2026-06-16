'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  CalendarDays,
  Clock,
  HeartHandshake,
  Quote,
  Settings,
  ExternalLink,
  Radio,
  Users,
  BookOpen,
  PiggyBank,
  Gift,
  Sparkles,
  Image as ImageIcon,
  UsersRound,
  UserCircle,
  type LucideIcon,
} from 'lucide-react';
import type { ResourceKey } from '@/lib/admin/fields';

const ICONS: Record<string, LucideIcon> = {
  events: CalendarDays,
  services: Clock,
  ministries: HeartHandshake,
  testimonials: Quote,
  sermons: Radio,
  leaders: Users,
  beliefs: BookOpen,
  givingFunds: PiggyBank,
  givingMethods: Gift,
  ministryPages: Sparkles,
};

type NavItem = { href: string; label: string; key?: ResourceKey };

export default function AdminNav({
  resources,
  isAdmin,
}: {
  resources: { key: ResourceKey; label: string }[];
  isAdmin: boolean;
}) {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === '/admin' ? pathname === '/admin' : pathname.startsWith(href);

  const renderLink = (item: NavItem, Icon: LucideIcon) => {
    const active = isActive(item.href);
    return (
      <Link key={item.href} href={item.href} className={`anav-link${active ? ' active' : ''}`}>
        <Icon size={17} strokeWidth={2} />
        <span>{item.label}</span>
      </Link>
    );
  };

  return (
    <nav className="anav">
      {renderLink({ href: '/admin', label: 'Dashboard' }, LayoutDashboard)}

      <div className="anav-group">Content</div>
      {resources.map((r) => renderLink({ href: `/admin/${r.key}`, label: r.label }, ICONS[r.key] ?? LayoutDashboard))}

      <div className="anav-group">Site</div>
      {renderLink({ href: '/admin/media', label: 'Media Library' }, ImageIcon)}
      {isAdmin && renderLink({ href: '/admin/users', label: 'Team' }, UsersRound)}
      {renderLink({ href: '/admin/settings', label: 'Settings' }, Settings)}

      <div className="anav-group">Account</div>
      {renderLink({ href: '/admin/account', label: 'My Account' }, UserCircle)}
      <a href="/" target="_blank" rel="noreferrer" className="anav-link">
        <ExternalLink size={17} strokeWidth={2} />
        <span>View live site</span>
      </a>
    </nav>
  );
}
