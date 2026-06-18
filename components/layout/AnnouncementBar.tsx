'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';
import type { Announcement } from '@/lib/db/schema';

const VARIANTS: Record<string, { bg: string; fg: string }> = {
  info: { bg: '#4FA1C6', fg: '#ffffff' },
  alert: { bg: '#A02319', fg: '#ffffff' },
  success: { bg: '#1d7a45', fg: '#ffffff' },
};

const STORAGE_KEY = 'tlbc-dismissed-announcements';

export default function AnnouncementBar({ announcements }: { announcements: Announcement[] }) {
  const [dismissed, setDismissed] = useState<string[]>([]);
  const [ready, setReady] = useState(false);

  // Read dismissals after mount so server and client markup match.
  useEffect(() => {
    queueMicrotask(() => {
      try {
        setDismissed(JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'));
      } catch {
        setDismissed([]);
      }
      setReady(true);
    });
  }, []);

  function dismiss(key: string) {
    const next = [...dismissed, key];
    setDismissed(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      /* ignore */
    }
  }

  if (!ready) return null;

  // Key dismissals by id + updatedAt so an edited announcement reappears.
  const visible = announcements.filter(
    (a) => !dismissed.includes(`${a.id}:${new Date(a.updatedAt).getTime()}`),
  );
  if (visible.length === 0) return null;

  return (
    <div>
      {visible.map((a) => {
        const v = VARIANTS[a.variant] ?? VARIANTS.info;
        const key = `${a.id}:${new Date(a.updatedAt).getTime()}`;
        return (
          <div
            key={a.id}
            style={{
              background: v.bg,
              color: v.fg,
              fontFamily: 'var(--font-body)',
              fontSize: '14px',
              fontWeight: 500,
            }}
          >
            <div
              style={{
                maxWidth: '1280px',
                margin: '0 auto',
                padding: '10px 48px 10px 20px',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '14px',
                flexWrap: 'wrap',
                textAlign: 'center',
                lineHeight: 1.4,
              }}
            >
              <span>{a.message}</span>
              {a.linkUrl && (
                <Link
                  href={a.linkUrl}
                  style={{
                    color: v.fg,
                    fontWeight: 700,
                    textDecoration: 'underline',
                    textUnderlineOffset: '3px',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {a.linkLabel || 'Learn more'} →
                </Link>
              )}
              {a.dismissible && (
                <button
                  type="button"
                  onClick={() => dismiss(key)}
                  aria-label="Dismiss announcement"
                  style={{
                    position: 'absolute',
                    right: '14px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(255,255,255,0.18)',
                    border: 'none',
                    borderRadius: '6px',
                    width: '26px',
                    height: '26px',
                    display: 'grid',
                    placeItems: 'center',
                    cursor: 'pointer',
                    color: v.fg,
                  }}
                >
                  <X size={15} />
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
