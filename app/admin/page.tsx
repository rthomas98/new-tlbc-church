import Link from 'next/link';
import { CalendarDays, Clock, HeartHandshake, Quote, Settings, ArrowUpRight } from 'lucide-react';
import {
  getEvents,
  getServices,
  getMinistries,
  getTestimonials,
} from '@/lib/db/queries';

export const dynamic = 'force-dynamic';

export default async function AdminDashboard() {
  const [events, services, ministries, testimonials] = await Promise.all([
    getEvents(),
    getServices(),
    getMinistries(),
    getTestimonials(),
  ]);

  const tiles = [
    { key: 'events', label: 'Events', count: events.length, Icon: CalendarDays },
    { key: 'services', label: 'Service Times', count: services.length, Icon: Clock },
    { key: 'ministries', label: 'Ministries', count: ministries.length, Icon: HeartHandshake },
    { key: 'testimonials', label: 'Testimonials', count: testimonials.length, Icon: Quote },
  ];

  return (
    <>
      <div className="admin-head">
        <div>
          <p className="admin-eyebrow">True Light Baptist Church</p>
          <h1 className="admin-h1">Dashboard</h1>
          <p className="admin-sub">Manage everything that appears on the public website.</p>
        </div>
        <Link href="/" target="_blank" className="btn-admin btn-admin--ghost">
          View live site <ArrowUpRight size={16} />
        </Link>
      </div>

      <div className="dash-grid">
        {tiles.map(({ key, label, count, Icon }) => (
          <Link key={key} href={`/admin/${key}`} className="dash-tile">
            <div className="dash-tile__icon">
              <Icon size={22} strokeWidth={2} />
            </div>
            <div className="count">{count}</div>
            <div className="label">
              <strong>{label}</strong>
              {count === 1 ? '1 item' : `${count} items`}
            </div>
          </Link>
        ))}
        <Link href="/admin/settings" className="dash-tile">
          <div className="dash-tile__icon">
            <Settings size={22} strokeWidth={2} />
          </div>
          <div className="count" style={{ fontSize: 30 }}>Site</div>
          <div className="label">
            <strong>Settings</strong>
            Contact &amp; social
          </div>
        </Link>
      </div>
    </>
  );
}
