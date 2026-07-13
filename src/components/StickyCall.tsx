import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function StickyCall() {
  return (
    <>
      {/* mobile bottom bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 md:hidden">
        <a
          href="tel:+917396507394"
          className="flex items-center justify-center gap-2 bg-amber py-4 font-display text-sm uppercase tracking-wide text-coal"
        >
          <FontAwesomeIcon icon={faPhone} className="h-4 w-4" />
          Call now
        </a>
        <a
          href="https://wa.me/917396507394"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#25D366] py-4 font-display text-sm uppercase tracking-wide text-coal"
        >
          <FontAwesomeIcon icon={faWhatsapp} className="h-5 w-5" />
          WhatsApp
        </a>
      </div>
      {/* desktop floating whatsapp */}
      <a
        href="https://wa.me/917396507394"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-xl transition-transform hover:scale-110 md:flex"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="h-7 w-7 text-coal" />
      </a>
    </>
  );
}
