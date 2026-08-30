import { useEffect, useRef } from 'react';

const nodes = [
  [50,50,5], [22,26,2.4], [76,24,2.7], [82,65,2.2], [28,75,2.3],
  [48,17,1.8], [63,80,1.6], [13,53,1.5], [91,43,1.4]
];
const links = [[0,1],[0,2],[0,3],[0,4],[1,5],[2,5],[2,8],[3,8],[3,6],[4,6],[4,7],[1,7]];

export default function HeroVisual() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - .5;
      const y = (e.clientY - r.top) / r.height - .5;
      el.style.setProperty('--rx', `${y * -8}deg`);
      el.style.setProperty('--ry', `${x * 10}deg`);
    };
    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerleave', () => {
      el.style.setProperty('--rx', '0deg');
      el.style.setProperty('--ry', '0deg');
    });
    return () => el.removeEventListener('pointermove', onMove);
  }, []);

  return (
    <div className="hero-visual" ref={ref} aria-hidden="true">
      <div className="orbit orbit-a" />
      <div className="orbit orbit-b" />
      <div className="sphere-shell">
        <svg viewBox="0 0 100 100" className="network-svg">
          <defs>
            <radialGradient id="nodeGlow">
              <stop offset="0" stopColor="#efffc0" />
              <stop offset="1" stopColor="#a5d838" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="35" className="globe-ring"/>
          <ellipse cx="50" cy="50" rx="35" ry="14" className="globe-ring faint"/>
          <ellipse cx="50" cy="50" rx="15" ry="35" className="globe-ring faint"/>
          {links.map(([a,b], i) => (
            <line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} className="network-line" />
          ))}
          {nodes.map(([x,y,r], i) => (
            <g key={i}>
              <circle cx={x} cy={y} r={r*2.2} className="node-halo" />
              <circle cx={x} cy={y} r={r} fill="url(#nodeGlow)" className="node-dot" />
            </g>
          ))}
        </svg>
        <div className="core-label"><span>O7</span><small>GROUP CORE</small></div>
      </div>
      <div className="signal-card signal-one"><small>EUROPE</small><strong>FR · UK</strong><span>Operational network</span></div>
      <div className="signal-card signal-two"><small>AMERICAS</small><strong>MX · NA · LATAM</strong><span>Growth markets</span></div>
      <div className="visual-index">07 / GLOBAL</div>
    </div>
  );
}
