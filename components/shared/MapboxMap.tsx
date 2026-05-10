'use client';

import dynamic from 'next/dynamic';
import { MapPin } from 'lucide-react';

const TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN ?? '';

// Only import the mapbox bundle when a token is configured.
// This prevents mapbox-gl from throwing at module load time.
const LiveMap = TOKEN
  ? dynamic(() => import('./MapboxMapLive'), { ssr: false })
  : null;

function MapFallback() {
  return (
    <div style={{
      width: '100%', height: '100%', minHeight: '480px',
      background: '#E9E3D8',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      gap: '16px', position: 'relative', overflow: 'hidden',
    }}>
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.25 }} aria-hidden="true">
        <defs>
          <pattern id="map-grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#7A6948" strokeWidth="0.8"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#map-grid)"/>
      </svg>

      <div style={{
        width: '56px', height: '56px',
        borderRadius: '50% 50% 50% 0', transform: 'rotate(-45deg)',
        background: '#A02319', boxShadow: '0 6px 20px rgba(160,35,25,0.38)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        position: 'relative', zIndex: 1,
      }}>
        <div style={{ transform: 'rotate(45deg)' }}>
          <svg viewBox="0 0 20 20" fill="white" width="22" height="22">
            <rect x="8.5" y="2" width="3" height="16" rx="1.5"/>
            <rect x="3"   y="7" width="14" height="3" rx="1.5"/>
          </svg>
        </div>
      </div>

      <div style={{
        background: '#fff', borderRadius: '12px', padding: '14px 22px',
        boxShadow: '0 4px 16px rgba(30,30,30,0.12)',
        textAlign: 'center', position: 'relative', zIndex: 1,
      }}>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '16px', color: '#A02319' }}>
          True Light Baptist Church
        </div>
        <div style={{ fontSize: '13px', color: '#6B6B6B', marginTop: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
          <MapPin size={12} />3836 North Street · Baton Rouge, LA 70806
        </div>
        <a
          href="https://maps.google.com/?q=3836+North+Street+Baton+Rouge+LA+70806"
          target="_blank" rel="noopener noreferrer"
          style={{ display: 'inline-block', marginTop: '10px', fontSize: '12px', fontWeight: 600, color: '#4FA1C6' }}
        >
          Open in Google Maps →
        </a>
      </div>
    </div>
  );
}

export default function MapboxMap() {
  if (!TOKEN || !LiveMap) return <MapFallback />;
  return <LiveMap />;
}
