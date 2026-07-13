import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const links = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Why Us", href: "#why" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* top strip */}
      <div className="hazard h-1.5 w-full" aria-hidden />
      <div className="bg-coal-soft border-b border-line">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-1.5 text-xs text-paper/60 md:px-6">
          <p className="truncate">Chengicherla · Medipally · Hyderabad, Telangana</p>
          <a href="mailto:techhomehyd@gmail.com" className="hidden hover:text-amber sm:block">
            techhomehyd@gmail.com
          </a>
        </div>
      </div>
      <nav className="sticky top-0 z-50 border-b border-line bg-coal/90 backdrop-blur-md" aria-label="Primary">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
          <a href="#home" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center bg-amber">
              {/* mini mark */}
              <svg viewBox="0 0 220 190" className="h-7 w-7" fill="none" aria-hidden>
                <polyline points="30,86 110,22 190,86" stroke="#0e0d0b" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
                <polyline points="38,92 38,162 92,162" stroke="#0e0d0b" strokeWidth="14" strokeLinecap="round" />
                <polyline points="182,92 182,162 128,162" stroke="#0e0d0b" strokeWidth="14" strokeLinecap="round" />
                <circle cx="110" cy="110" r="16" fill="#0e0d0b" />
              </svg>
            </span>
            <span className="font-display text-lg uppercase tracking-wide text-paper">
              Tech Home <span className="text-amber">Electric</span>
            </span>
          </a>
          <ul className="hidden items-center gap-7 text-sm text-paper/70 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="uppercase tracking-wider transition-colors hover:text-amber">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <a
              href="tel:+917396507394"
              className="hidden items-center gap-2 bg-amber px-4 py-2 font-display text-sm uppercase tracking-wide text-coal transition-colors hover:bg-amber-deep md:flex"
            >
              <FontAwesomeIcon icon={faPhone} className="h-3.5 w-3.5" />
              +91 73965 07394
            </a>
            <button
              className="p-2 text-paper md:hidden"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-label="Toggle menu"
            >
              <FontAwesomeIcon icon={open ? faXmark : faBars} className="h-5 w-5" />
            </button>
          </div>
        </div>
        {open && (
          <ul className="border-t border-line bg-coal px-6 py-4 md:hidden">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-sm uppercase tracking-wider text-paper/80 hover:text-amber"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </>
  );
}
