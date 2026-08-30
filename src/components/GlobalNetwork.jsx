import { useState } from 'react';

const regions = {
  london: { label: 'London', meta: 'Holding · International governance', x: 48, y: 29 },
  paris: { label: 'Paris', meta: 'Consulting · Technology delivery', x: 49, y: 34 },
  mexico: { label: 'Mexico', meta: 'Operations · Product development', x: 22, y: 57 },
  america: { label: 'North America', meta: 'Client delivery · Growth', x: 16, y: 39 },
  latam: { label: 'Latin America', meta: 'Regional expansion', x: 30, y: 72 }
};

export default function GlobalNetwork() {
  const [active, setActive] = useState('london');
  const current = regions[active];
  return (
    <div className="world-panel">
      <div className="world-map" role="img" aria-label="O7 Digital Group international footprint">
        <svg viewBox="0 0 100 58" preserveAspectRatio="none">
          <path className="map-land" d="M7 20l9-8 14-1 8 6 6-3 12 2 5 7 10 1 7-4 13 6-4 10-11 3-8 7-10-3-7-8-9 1-6 7-7-4-3-10z"/>
          <path className="map-line" d="M22 33 C35 27, 42 29, 49 20 M49 20 C38 34, 28 43, 22 33 M49 20 C35 36, 31 43, 30 42 M49 20 C34 26, 16 23, 16 23"/>
        </svg>
        {Object.entries(regions).map(([key, region]) => (
          <button
            key={key}
            className={`map-node ${active === key ? 'active' : ''}`}
            style={{ left: `${region.x}%`, top: `${region.y}%` }}
            onMouseEnter={() => setActive(key)}
            onFocus={() => setActive(key)}
            onClick={() => setActive(key)}
            aria-label={region.label}
          ><span /></button>
        ))}
      </div>
      <div className="world-caption">
        <small>ACTIVE NODE</small>
        <strong>{current.label}</strong>
        <span>{current.meta}</span>
      </div>
    </div>
  );
}
