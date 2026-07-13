// Animated recreation of the Tech Home logo — a circuit-traced house.
export default function CircuitHouse({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 190"
      className={`draw ${className}`}
      fill="none"
      role="img"
      aria-label="Tech Home circuit house logo"
    >
      {/* roof */}
      <polyline points="30,86 110,22 190,86" stroke="#f4a300" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      {/* window */}
      <g fill="#f4a300">
        <rect x="98" y="44" width="9" height="9" />
        <rect x="112" y="44" width="9" height="9" />
        <rect x="98" y="58" width="9" height="9" />
        <rect x="112" y="58" width="9" height="9" />
      </g>
      {/* outer walls */}
      <polyline points="38,92 38,162 92,162" stroke="#f4a300" strokeWidth="4" strokeLinecap="round" />
      <polyline points="182,92 182,162 128,162" stroke="#f4a300" strokeWidth="4" strokeLinecap="round" />
      {/* inner pins */}
      <line x1="62" y1="104" x2="62" y2="162" stroke="#f4a300" strokeWidth="4" strokeLinecap="round" />
      <line x1="158" y1="104" x2="158" y2="162" stroke="#f4a300" strokeWidth="4" strokeLinecap="round" />
      {/* central trace with elbow, like the logo */}
      <polyline points="96,112 118,118 118,146 110,162" stroke="#f4a300" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      {/* flowing current along roof + central trace */}
      <polyline points="30,86 110,22 190,86" className="flow" stroke="#fffdf5" strokeWidth="2" strokeLinecap="round" />
      <polyline points="96,112 118,118 118,146 110,162" className="flow" stroke="#fffdf5" strokeWidth="2" strokeLinecap="round" />
      {/* nodes */}
      <circle className="pulse" cx="110" cy="22" r="7" fill="#f4a300" style={{ animationDelay: "0.4s, 1.2s" }} />
      <circle className="pulse" cx="30" cy="86" r="7" fill="#f4a300" style={{ animationDelay: "0.7s, 1.6s" }} />
      <circle className="pulse" cx="190" cy="86" r="7" fill="#f4a300" style={{ animationDelay: "0.7s, 2s" }} />
      <circle cx="62" cy="104" r="6" fill="#f4a300" style={{ animationDelay: "1s" }} />
      <circle cx="158" cy="104" r="6" fill="#f4a300" style={{ animationDelay: "1s" }} />
      <circle className="pulse" cx="96" cy="112" r="6" fill="#f4a300" style={{ animationDelay: "1.2s, 2.4s" }} />
      <circle cx="118" cy="118" r="5" fill="#f4a300" style={{ animationDelay: "1.3s" }} />
      <circle className="pulse" cx="110" cy="162" r="7" fill="#f4a300" style={{ animationDelay: "1.5s, 2.8s" }} />
    </svg>
  );
}
