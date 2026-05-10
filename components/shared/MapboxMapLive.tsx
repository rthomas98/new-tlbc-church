'use client';

import { useRef } from 'react';
import Map, { Marker, NavigationControl } from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';

const TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN!;
const CHURCH_LNG = -91.1098;
const CHURCH_LAT =  30.4441;

export default function MapboxMapLive() {
  const mapRef = useRef(null);

  return (
    <div style={{ width: '100%', height: '100%', minHeight: '480px', position: 'relative' }}>
      <Map
        ref={mapRef}
        mapboxAccessToken={TOKEN}
        initialViewState={{ longitude: CHURCH_LNG, latitude: CHURCH_LAT, zoom: 15 }}
        style={{ width: '100%', height: '100%' }}
        mapStyle="mapbox://styles/mapbox/light-v11"
        attributionControl={false}
      >
        <NavigationControl position="top-right" showCompass={false} />
        <Marker longitude={CHURCH_LNG} latitude={CHURCH_LAT} anchor="bottom">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}>
            <div style={{
              width: '44px', height: '44px', borderRadius: '50% 50% 50% 0',
              transform: 'rotate(-45deg)', background: '#A02319',
              boxShadow: '0 4px 16px rgba(160,35,25,0.40)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <div style={{ transform: 'rotate(45deg)' }}>
                <svg viewBox="0 0 20 20" fill="white" width="20" height="20">
                  <rect x="8.5" y="2" width="3" height="16" rx="1.5"/>
                  <rect x="3"   y="7" width="14" height="3" rx="1.5"/>
                </svg>
              </div>
            </div>
            <div style={{
              marginTop: '6px', background: '#fff', borderRadius: '8px',
              padding: '4px 10px', boxShadow: '0 2px 8px rgba(30,30,30,0.16)', whiteSpace: 'nowrap',
            }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '12px', color: '#A02319' }}>
                True Light Baptist
              </span>
            </div>
          </div>
        </Marker>
      </Map>
    </div>
  );
}
