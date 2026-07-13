const items = [
  "PCC & MCC Panels",
  "Distribution Panels",
  "Gensets",
  "Home Automation",
  "Building Management Systems",
  "Custom Electrical Solutions",
  "Design · Manufacture · Install",
  "Hyderabad, Telangana",
];

export default function TrustBar() {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden bg-amber py-3" aria-hidden>
      <div className="animate-marquee flex w-max items-center gap-8">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-8 whitespace-nowrap font-display text-sm uppercase tracking-widest text-coal">
            {t}
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-coal"><path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" /></svg>
          </span>
        ))}
      </div>
    </div>
  );
}
