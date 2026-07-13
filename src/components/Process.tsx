const steps = [
  {
    n: "1",
    title: "Consult",
    desc: "Tell us what you're powering. We survey the site, understand the load, and scope the job honestly.",
  },
  {
    n: "2",
    title: "Design",
    desc: "Panel schedules, layouts, and specs engineered for your exact requirement — nothing off-the-shelf that doesn't fit.",
  },
  {
    n: "3",
    title: "Manufacture",
    desc: "Built in-house: enclosures, busbars, wiring, and testing under one roof for full quality control.",
  },
  {
    n: "4",
    title: "Install & Commission",
    desc: "We deliver, install, test under load, and hand over running systems — with support after the handover.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative bg-coal py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-12" data-aos="fade-up">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-amber">How we work</p>
          <h2 className="mt-2 font-display text-4xl uppercase tracking-wide text-paper sm:text-5xl">
            From site visit to switch-on
          </h2>
        </div>
        <ol className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.n} className="bg-coal p-7" data-aos="fade-up" data-aos-delay={i * 80}>
              <span className="font-display text-6xl text-amber">{s.n}</span>
              <h3 className="mt-4 font-display text-xl uppercase tracking-wide text-paper">{s.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-paper/60">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
