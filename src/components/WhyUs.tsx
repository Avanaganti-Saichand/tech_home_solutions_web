import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIndustry,
  faRulerCombined,
  faArrowsSpin,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";

const reasons = [
  {
    icon: faIndustry,
    title: "Everything in-house",
    desc: "Design, manufacturing, and installation under one roof — no subcontractor roulette, no finger-pointing.",
  },
  {
    icon: faRulerCombined,
    title: "Built to your spec",
    desc: "Panels and systems engineered for your site and load, not generic units forced to fit.",
  },
  {
    icon: faArrowsSpin,
    title: "Future-proof by design",
    desc: "Scalable, adaptable systems that grow with your building — from a single panel to full BMS.",
  },
  {
    icon: faHandshake,
    title: "One point of contact",
    desc: "From first call to commissioning and after — you deal with the people who built it.",
  },
];

export default function WhyUs() {
  return (
    <section id="why" className="bg-paper py-20 text-coal">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-12" data-aos="fade-up">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-amber-deep">Why Tech Home</p>
          <h2 className="mt-2 max-w-2xl font-display text-4xl uppercase tracking-wide sm:text-5xl">
            The team that builds it, installs it
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              data-aos="fade-up"
              data-aos-delay={i * 70}
              className="flex gap-5 border-2 border-coal bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0_#f4a300]"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-coal">
                <FontAwesomeIcon icon={r.icon} className="h-5 w-5 text-amber" />
              </span>
              <div>
                <h3 className="font-display text-lg uppercase tracking-wide">{r.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-coal/65">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* call band */}
      <div className="mx-auto mt-16 max-w-6xl px-4 md:px-6" data-aos="fade-up">
        <div className="relative overflow-hidden bg-coal p-8 md:p-12">
          <div className="hazard absolute inset-y-0 left-0 w-3" aria-hidden />
          <div className="hazard absolute inset-y-0 right-0 w-3" aria-hidden />
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
            <div>
              <p className="font-display text-2xl uppercase tracking-wide text-paper md:text-3xl">
                Planning a panel, genset, or smart building?
              </p>
              <p className="mt-1.5 text-paper/60">Talk to us before you wire a single thing — advice is free.</p>
            </div>
            <a
              href="tel:+917396507394"
              className="shrink-0 bg-amber px-7 py-4 font-display text-lg uppercase tracking-wide text-coal transition-colors hover:bg-amber-deep"
            >
              +91 73965 07394
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
