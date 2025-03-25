// src/components/Hero.tsx
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-r from-[#F4A300] via-white to-[#fffdf5] py-20 px-4 md:px-20 flex flex-col md:flex-row items-center justify-between"
    >
      {/* Logo */}
      <div className="mb-10 md:mb-0 animate-circuit" data-aos="zoom-in">
        <Image
          src="/logo.jpg"
          alt="Tech Home Electric Logo"
          width={280}
          height={280}
          className="rounded-xl shadow-2xl"
        />
      </div>

      {/* Text */}
      <div className="max-w-xl text-center md:text-left" data-aos="fade-left">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2rem] font-extrabold text-black mb-4 leading-snug relative inline-block">
          <span className="relative z-10">Tech Home Electric Solutions</span>
          <span className="absolute left-0 bottom-0 w-full h-1.5 bg-[#F4A300] z-0 rounded-full animate-pulse"></span>
        </h1>

        <p className="text-base sm:text-lg text-gray-800 font-medium tracking-wide leading-snug">
          Powering Control, Automation and Smart Living.
        </p>
      </div>
    </section>
  );
}
