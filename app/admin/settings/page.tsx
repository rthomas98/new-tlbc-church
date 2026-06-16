import { getSiteSettings } from '@/lib/db/queries';
import { saveSettings } from '../actions';

export const dynamic = 'force-dynamic';

const FIELDS: { name: string; label: string; help?: string }[] = [
  { name: 'address', label: 'Address' },
  { name: 'phone', label: 'Phone' },
  { name: 'email', label: 'Email' },
  { name: 'livestreamUrl', label: 'Livestream URL', help: 'Facebook/YouTube live link' },
  { name: 'facebookUrl', label: 'Facebook URL' },
  { name: 'instagramUrl', label: 'Instagram URL' },
  { name: 'youtubeUrl', label: 'YouTube URL' },
  { name: 'marqueeText', label: 'Marquee / banner text' },
];

export default async function SettingsPage() {
  const settings = await getSiteSettings();
  const v = (settings ?? {}) as Record<string, unknown>;

  return (
    <>
      <div className="admin-head">
        <div>
          <h1 className="admin-h1">Site Settings</h1>
          <p className="admin-sub">Contact info, social links, and the homepage banner.</p>
        </div>
      </div>
      <div className="admin-card" style={{ padding: 28 }}>
        <form action={saveSettings} className="form-grid">
          {FIELDS.map((f) => (
            <div className="field" key={f.name}>
              <label htmlFor={f.name}>{f.label}</label>
              <input id={f.name} name={f.name} type="text" defaultValue={String(v[f.name] ?? '')} />
              {f.help && <div className="help">{f.help}</div>}
            </div>
          ))}
          <div className="form-actions">
            <button type="submit" className="btn-admin btn-admin--primary">Save settings</button>
          </div>
        </form>
      </div>
    </>
  );
}
