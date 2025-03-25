import { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarClass = scrolled
    ? "bg-black shadow-md backdrop-blur-sm"
    : "bg-black";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navbarClass}`}
      data-aos="fade-down"
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image
            src="/logo.jpg"
            alt="Logo"
            width={40}
            height={40}
            style={{ height: "auto" }}
            className="rounded-md"
          />
          <span className="text-white font-semibold text-sm md:text-base">
            Tech Home Electric Solutions
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6 font-medium text-white">
            <li>
              <a href="#home" className="hover:text-[#F4A300]">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-[#F4A300]">
                About Us
              </a>
            </li>
            <li>
              <a href="#products" className="hover:text-[#F4A300]">
                Products
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#F4A300]">
                Contact Us
              </a>
            </li>
          </ul>

          {/* Socials */}
          <div className="flex space-x-4 text-white text-xl">
            <a
              href="https://wa.me/7396507394"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#F4A300]"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a
              href="https://www.facebook.com/share/14q6z5N8mb/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#F4A300]"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://www.instagram.com/techhomeelectric"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#F4A300]"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.linkedin.com/company/tech-home-electric-solutions"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#F4A300]"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black text-white px-6 pb-6 space-y-6 shadow-md">
          <ul className="space-y-4 text-base font-medium">
            <li>
              <a
                href="#home"
                onClick={() => setMenuOpen(false)}
                className="block hover:text-[#F4A300]"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="block hover:text-[#F4A300]"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#products"
                onClick={() => setMenuOpen(false)}
                className="block hover:text-[#F4A300]"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="block hover:text-[#F4A300]"
              >
                Contact Us
              </a>
            </li>
          </ul>

          <div className="flex justify-center space-x-6 text-xl pt-2">
            <a
              href="https://wa.me/7396507394"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#F4A300]"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a
              href="https://www.facebook.com/share/14q6z5N8mb/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#F4A300]"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://www.instagram.com/techhomeelectric"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#F4A300]"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.linkedin.com/company/tech-home-electric-solutions"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#F4A300]"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
