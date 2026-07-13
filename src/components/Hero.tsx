import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import CircuitHouse from "./CircuitHouse";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-coal">
      {/* faint grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#f4a300 1px, transparent 1px), linear-gradient(90deg, #f4a300 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 pb-20 pt-14 md:grid-cols-[1.1fr_0.9fr] md:px-6 md:pt-20">
        <div>
          <p className="mb-5 inline-block border border-amber/40 bg-amber/10 px-3 py-1 font-mono text-xs uppercase tracking-[0.2em] text-amber">
            Design · Manufacture · Install
          </p>
          <h1 className="font-display text-5xl uppercase leading-[0.95] tracking-wide text-paper sm:text-6xl md:text-7xl">
            Power.
            <br />
            Control.
            <br />
            <span className="text-amber">Automation.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-paper/70">
            Custom electrical panels, gensets, and smart building systems —
            engineered in Hyderabad for homes and industry.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="tel:+917396507394"
              className="flex items-center gap-2.5 bg-amber px-6 py-3.5 font-display text-base uppercase tracking-wide text-coal transition-colors hover:bg-amber-deep"
            >
              <FontAwesomeIcon icon={faPhone} className="h-4 w-4" />
              Call +91 73965 07394
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2.5 border border-paper/25 px-6 py-3.5 font-display text-base uppercase tracking-wide text-paper transition-colors hover:border-amber hover:text-amber"
            >
              Get a quote
              <FontAwesomeIcon icon={faArrowRight} className="h-3.5 w-3.5" />
            </a>
          </div>
          <p className="mt-6 text-sm text-paper/50">
            Residential & commercial · Panels to full building management
          </p>
        </div>
        <div className="mx-auto w-full max-w-md" data-aos="zoom-in">
          <CircuitHouse className="w-full" />
          <p className="mt-3 text-center font-mono text-xs uppercase tracking-[0.3em] text-paper/40">
            Every line is a live circuit
          </p>
        </div>
      </div>
      <div className="hazard h-3 w-full" aria-hidden />
    </section>
  );
}
