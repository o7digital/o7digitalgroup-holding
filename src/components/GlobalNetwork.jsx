import { useState } from 'react';

const positions = { usa:[18,35], canada:[21,24], mexico:[24,54], europe:[51,31] };

export default function GlobalNetwork({ labels }) {
  const [active, setActive] = useState('usa');
  const current = labels[active];
  return (
    <div className="world-panel">
      <div className="world-map" role="img" aria-label={labels.aria}>
        <svg viewBox="0 0 100 58" preserveAspectRatio="none">
          <path className="map-land" d="M7 20l9-8 14-1 8 6 6-3 12 2 5 7 10 1 7-4 13 6-4 10-11 3-8 7-10-3-7-8-9 1-6 7-7-4-3-10z"/>
          <path className="map-line" d="M18 35 C30 24, 40 25, 51 31 M21 24 C34 20, 43 25, 51 31 M24 54 C35 42, 42 37, 51 31 M18 35 C20 31, 21 28, 21 24 M18 35 C19 43, 21 49, 24 54"/>
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
