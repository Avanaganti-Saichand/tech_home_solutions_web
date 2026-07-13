import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTableCells,
  faGears,
  faBolt,
  faPlugCircleBolt,
  faHouseSignal,
  faBuildingShield,
} from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    n: "01",
    icon: faTableCells,
    title: "Distribution Panels",
    desc: "Safe, organized power distribution for residential and commercial loads.",
    points: ["Custom-built enclosures", "Load balancing & protection", "Clean cable management"],
  },
  {
    n: "02",
    icon: faGears,
    title: "Motor Control Centers (MCC)",
    desc: "Centralized motor control engineered for industrial reliability.",
    points: ["Starter & VFD integration", "Interlocks & safety logic", "Serviceable modular sections"],
  },
  {
    n: "03",
    icon: faBolt,
    title: "Power Control Centers (PCC)",
    desc: "Heavy-duty switchboards that take utility power in and send it everywhere it needs to go.",
    points: ["Incomer & outgoing feeders", "Metering & protection relays", "Busbar systems sized to spec"],
  },
  {
    n: "04",
    icon: faPlugCircleBolt,
    title: "Gensets",
    desc: "Backup power that kicks in when the grid doesn't.",
    points: ["Sizing & installation", "Auto transfer switching", "Commissioning & support"],
  },
  {
    n: "05",
    icon: faHouseSignal,
    title: "Home Automation",
    desc: "Lighting, climate, and security that answer to you.",
    points: ["Smart lighting & scenes", "Remote monitoring", "Retrofit-friendly systems"],
  },
  {
    n: "06",
    icon: faBuildingShield,
    title: "Building Management Systems",
    desc: "One dashboard for a building's power, safety, and comfort.",
    points: ["HVAC & energy monitoring", "Alarms & access integration", "Scalable for commercial sites"],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-paper py-20 text-coal">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4" data-aos="fade-up">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-amber-deep">What we build</p>
            <h2 className="mt-2 font-display text-4xl uppercase tracking-wide sm:text-5xl">
              Services & Products
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-coal/60">
            End-to-end: we design it, we build it, we install it, we stand behind it.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <article
              key={s.n}
              data-aos="fade-up"
              data-aos-delay={i * 60}
              className="group relative border-2 border-coal bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0_#f4a300]"
            >
              <div className="flex items-start justify-between">
                <FontAwesomeIcon icon={s.icon} className="h-7 w-7 text-amber-deep" />
                <span className="font-display text-3xl text-coal/10 transition-colors group-hover:text-amber">
                  {s.n}
                </span>
              </div>
              <h3 className="mt-4 font-display text-xl uppercase tracking-wide">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-coal/65">{s.desc}</p>
              <ul className="mt-4 space-y-1.5 border-t border-coal/10 pt-4">
                {s.points.map((p) => (
                  <li key={p} className="flex gap-2.5 text-sm text-coal/75">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 bg-amber" aria-hidden />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
