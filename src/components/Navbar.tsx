import { useState, useEffect } from "react";
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
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarClass = scrolled
    ? "bg-black shadow-lg backdrop-blur-md scale-[1.01]"
    : "bg-black";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navbarClass}`}
      data-aos="fade-down"
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Brand */}
        <div className="text-white font-extrabold text-xl tracking-wide">
          Tech Home Electric Solutions
        </div>

        {/* Desktop Nav + Social Icons */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6 font-medium text-white">
            <li>
              <a href="#home" className="hover:text-[#F4A300] transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-[#F4A300] transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#products" className="hover:text-[#F4A300] transition">
                Products
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#F4A300] transition">
                Contact Us
              </a>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex space-x-4 text-white text-xl">
            <a
              href="https://wa.me/7396507394"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F4A300]"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a
              href="https://www.facebook.com/share/14q6z5N8mb/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F4A300]"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://www.instagram.com/techhomeelectric"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F4A300]"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.linkedin.com/company/tech-home-electric-solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F4A300]"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>

        {/* Hamburger Icon */}
        <button
          className={`md:hidden text-white focus:outline-none`}
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
        <div className="md:hidden bg-black text-white px-6 pb-6 space-y-4 shadow-md">
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About Us
          </a>
          <a href="#products" onClick={() => setMenuOpen(false)}>
            Products
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact Us
          </a>
          <div className="flex space-x-4 pt-2 text-xl">
            <a
              href="https://wa.me/7396507394"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F4A300]"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a
              href="https://www.facebook.com/share/14q6z5N8mb/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F4A300]"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://www.instagram.com/techhomeelectric"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F4A300]"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.linkedin.com/company/tech-home-electric-solutions"
              target="_blank"
              rel="noopener noreferrer"
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
