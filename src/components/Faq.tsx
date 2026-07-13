const faqs = [
  {
    q: "What types of electrical panels do you manufacture?",
    a: "We design and manufacture Power Control Centers (PCC), Motor Control Centers (MCC), and distribution panels — custom-built to your site's load requirements, with metering, protection relays, and busbar systems sized to spec.",
  },
  {
    q: "Which areas do you serve?",
    a: "We are based in Chengicherla, Medipally and serve Hyderabad, Secunderabad, and surrounding areas across Telangana for both residential and commercial projects.",
  },
  {
    q: "Do you handle installation or only manufacturing?",
    a: "End-to-end. We survey the site, design the system, manufacture in-house, then install, test under load, and commission — with support after handover.",
  },
  {
    q: "Can you automate an existing home, or only new construction?",
    a: "Both. Our home automation systems are retrofit-friendly — smart lighting, climate, and security can be added to existing homes without rewiring everything.",
  },
  {
    q: "Do you supply and install gensets?",
    a: "Yes — we handle genset sizing, installation, automatic transfer switching, and commissioning so backup power kicks in seamlessly when the grid fails.",
  },
  {
    q: "How do I get a quote?",
    a: "Call or WhatsApp +91 73965 07394, or use the enquiry form on this page. Describe the job and we'll respond with next steps — site visits in and around Hyderabad are easy to arrange.",
  },
];

export { faqs };

export default function Faq() {
  return (
    <section id="faq" className="bg-paper py-20 text-coal">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <div className="mb-10" data-aos="fade-up">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-amber-deep">Common questions</p>
          <h2 className="mt-2 font-display text-4xl uppercase tracking-wide sm:text-5xl">FAQ</h2>
        </div>
        <div className="divide-y-2 divide-coal/10 border-y-2 border-coal">
          {faqs.map((f, i) => (
            <details key={i} className="group py-5" data-aos="fade-up" data-aos-delay={i * 40}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg uppercase tracking-wide marker:content-none">
                {f.q}
                <span className="shrink-0 font-display text-2xl text-amber-deep transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 max-w-3xl leading-relaxed text-coal/70">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
