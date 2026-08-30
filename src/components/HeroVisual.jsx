import { useEffect, useRef } from 'react';

const hubs = [
  { code:'US', x:20, y:30, className:'hub-us' },
  { code:'CA', x:34, y:18, className:'hub-ca' },
  { code:'MX', x:24, y:72, className:'hub-mx' },
  { code:'EU', x:78, y:32, className:'hub-eu' }
];

export default function HeroVisual({ labels }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (event) => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty('--rx', `${((event.clientY-rect.top)/rect.height-.5)*-8}deg`);
      el.style.setProperty('--ry', `${((event.clientX-rect.left)/rect.width-.5)*10}deg`);
    };
    const onLeave = () => { el.style.setProperty('--rx','0deg'); el.style.setProperty('--ry','0deg'); };
    el.addEventListener('pointermove', onMove); el.addEventListener('pointerleave', onLeave);
    return () => { el.removeEventListener('pointermove', onMove); el.removeEventListener('pointerleave', onLeave); };
  }, []);

  return <div className="hero-visual hub-visual" ref={ref} aria-label={labels.aria}>
    <div className="orbit orbit-a"/><div className="orbit orbit-b"/>
    <div className="sphere-shell">
      <svg viewBox="0 0 100 100" className="network-svg" role="img" aria-hidden="true">
        <defs><radialGradient id="nodeGlow"><stop offset="0" stopColor="#efffc0"/><stop offset="1" stopColor="#a5d838"/></radialGradient></defs>
        <circle cx="50" cy="50" r="39" className="globe-ring"/><ellipse cx="50" cy="50" rx="39" ry="15" className="globe-ring faint"/><ellipse cx="50" cy="50" rx="17" ry="39" className="globe-ring faint"/>
        {hubs.map((hub) => <line key={`line-${hub.code}`} x1="50" y1="50" x2={hub.x} y2={hub.y} className="network-line hub-line"/>)}
        {hubs.map((hub) => <g key={hub.code} className="hub-node"><circle cx={hub.x} cy={hub.y} r="6" className="node-halo"/><circle cx={hub.x} cy={hub.y} r="2.6" fill="url(#nodeGlow)" className="node-dot"/><text x={hub.x} y={hub.y-5} textAnchor="middle">{hub.code}</text></g>)}
      </svg>
      <div className="core-label"><span>O7</span><small>{labels.core}</small></div>
    </div>
    {labels.hubs.map((hub, index) => <div key={hub.code} className={`signal-card hub-card hub-card-${index+1}`}><small>{hub.code}</small><strong>{hub.name}</strong><span>{hub.meta}</span></div>)}
    <div className="visual-index">07 / O7 NETWORK</div>
  </div>;
}
