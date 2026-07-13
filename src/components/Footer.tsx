import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-coal">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-4 py-10 md:flex-row md:px-6">
        <div className="text-center md:text-left">
          <p className="font-display text-lg uppercase tracking-wide text-paper">
            Tech Home <span className="text-amber">Electric</span> Solutions
          </p>
          <p className="mt-1 text-sm text-paper/50">
            Powering control, automation and smart living · Hyderabad
          </p>
        </div>
        <div className="flex items-center gap-5 text-xl text-paper/60">
          <a href="https://www.instagram.com/techhomeelectric" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-amber">
            <FontAwesomeIcon icon={faInstagram} className="h-5 w-5" />
          </a>
          <a href="https://www.facebook.com/share/14q6z5N8mb/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-amber">
            <FontAwesomeIcon icon={faFacebook} className="h-5 w-5" />
          </a>
          <a href="https://wa.me/917396507394" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-amber">
            <FontAwesomeIcon icon={faWhatsapp} className="h-5 w-5" />
          </a>
        </div>
      </div>
      <div className="hazard h-2 w-full" aria-hidden />
      <p className="bg-coal py-3 text-center text-xs text-paper/40">
        © {new Date().getFullYear()} Tech Home Electric Solutions. All rights reserved.
      </p>
    </footer>
  );
}
