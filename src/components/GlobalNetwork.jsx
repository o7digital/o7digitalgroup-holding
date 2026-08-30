import { useState } from 'react';

const positions = { london:[48,29], paris:[49,34], mexico:[22,57], america:[16,39], latam:[30,72] };

export default function GlobalNetwork({ labels }) {
  const [active, setActive] = useState('london');
  const current = labels[active];
  return (
    <div className="world-panel">
      <div className="world-map" role="img" aria-label={labels.aria}>
        <svg viewBox="0 0 100 58" preserveAspectRatio="none">
          <path className="map-land" d="M7 20l9-8 14-1 8 6 6-3 12 2 5 7 10 1 7-4 13 6-4 10-11 3-8 7-10-3-7-8-9 1-6 7-7-4-3-10z"/>
          <path className="map-line" d="M22 33 C35 27, 42 29, 49 20 M49 20 C38 34, 28 43, 22 33 M49 20 C35 36, 31 43, 30 42 M49 20 C34 26, 16 23, 16 23"/>
        </svg>
        {Object.entries(positions).map(([key, [x, y]]) => (
          <button
            key={key}
            className={`map-node ${active === key ? 'active' : ''}`}
            style={{ left: `${x}%`, top: `${y}%` }}
            onMouseEnter={() => setActive(key)}
            onFocus={() => setActive(key)}
            onClick={() => setActive(key)}
            aria-label={labels[key][0]}
          ><span /></button>
        ))}
      </div>
      <div className="world-caption">
        <small>{labels.active}</small>
        <strong>{current[0]}</strong>
        <span>{current[1]}</span>
      </div>
    </div>
  );
}
