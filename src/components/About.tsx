// src/components/About.tsx

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 md:px-20 bg-gradient-to-l from-[#F4A300] via-white to-[#fffdf5] text-gray-800"
      data-aos="fade-up"
    >
      <div className="max-w-5xl mx-auto text-left">
        {/* Animated Section Title */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-black mb-8 relative inline-block">
          <span className="relative z-10">About Us</span>
          <span className="absolute left-0 bottom-0 w-24 h-2 "></span>
        </h2>

        {/* Description */}
        <p className="text-lg sm:text-xl leading-relaxed tracking-wide">
          At{" "}
          <span className="font-semibold text-[#F4A300]">
            Tech Home Electric Solutions
          </span>
          , we are committed to delivering innovative, reliable, and
          high-quality electrical solutions that empower businesses and
          households across industries.
          <br />
          <br />
          Our company specializes in the design, manufacturing, and installation
          of <strong>PCC</strong>, <strong>MCC</strong>,{" "}
          <strong>Gensets</strong>, and customized electrical solutions.
          <br />
          <br />
          Additionally, we’ve expanded into <strong>
            Home Automation
          </strong> and <strong>Building Management Systems (BMS)</strong>,
          offering end-to-end smart solutions for both residential and
          commercial buildings.
          <br />
          <br />
          We understand the evolving demands of modern infrastructure — that’s
          why we provide scalable, adaptable, and future-proof electrical
          products and services that exceed expectations.
        </p>
      </div>
    </section>
  );
}
