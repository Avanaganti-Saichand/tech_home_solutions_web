import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import toast from "react-hot-toast";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    const formData = new FormData(form.current);
    const name = formData.get("name")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const phone = formData.get("phone")?.toString().trim() || "";
    const message = formData.get("message")?.toString().trim() || "";

    // ✅ Validation: Empty Fields
    if (!name || !email || !phone || !message) {
      toast.error("All fields are required.");
      return;
    }

    // ✅ Validation: Email Format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    // ✅ Validation: Phone Format
    const phoneDigitsOnly = /^\d{10,15}$/;
    if (!phoneDigitsOnly.test(phone)) {
      toast.error("Enter a valid phone number (10–15 digits).");
      return;
    }

    // ✅ Validation: Max Lengths
    if (name.length > 50) {
      toast.error("Name can't exceed 50 characters.");
      return;
    }

    if (email.length > 100) {
      toast.error("Email can't exceed 100 characters.");
      return;
    }

    if (message.length > 1000) {
      toast.error("Message is too long (max 1000 characters).");
      return;
    }

    // ✅ Toast: Sending
    const toastId = toast.loading("Sending your message...");

    emailjs
      .sendForm(
        "service_uu08e1r",
        "template_xv09f9x",
        form.current,
        "ClT9UIjFG_brh4-7K"
      )
      .then(
        () => {
          toast.success("Message sent successfully!", {
            id: toastId,
            duration: 4000,
            style: {
              background: "#4BB543",
              color: "white",
              fontWeight: "bold",
            },
          });
          form.current?.reset();
        },
        () => {
          toast.error("Failed to send message. Please try again later.", {
            id: toastId,
          });
        }
      );
  };

  return (
    <section id="contact" className="bg-coal py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-12" data-aos="fade-up">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-amber">Get a quote</p>
          <h2 className="mt-2 font-display text-4xl uppercase tracking-wide text-paper sm:text-5xl">
            Contact us
          </h2>
          <p className="mt-3 max-w-lg text-paper/60">
            Describe the job — a panel, a genset, a full automation setup — and we&apos;ll get back to you with next steps.
          </p>
        </div>

        <div className="grid items-start gap-10 md:grid-cols-[0.9fr_1.1fr]">
          {/* info */}
          <div className="space-y-5" data-aos="fade-up">
            <div className="border border-line bg-coal-soft p-6">
              <p className="flex items-start gap-3 text-paper/80">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mt-1 h-4 w-4 text-amber" />
                <span>4-233, Chengicherla, Medipally,<br />Telangana 500092</span>
              </p>
              <p className="mt-4 flex items-center gap-3 text-paper/80">
                <FontAwesomeIcon icon={faPhone} className="h-4 w-4 text-amber" />
                <a href="tel:+917396507394" className="hover:text-amber">+91 73965 07394</a>
              </p>
              <p className="mt-4 flex items-center gap-3 text-paper/80">
                <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4 text-amber" />
                <a href="mailto:techhomehyd@gmail.com" className="hover:text-amber">techhomehyd@gmail.com</a>
              </p>
              <a
                href="https://wa.me/917396507394"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2.5 bg-[#25D366] px-5 py-3 font-display text-sm uppercase tracking-wide text-coal transition-opacity hover:opacity-85"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="h-4.5 w-4.5" />
                Chat on WhatsApp
              </a>
            </div>
            <iframe
              title="Tech Home Electric Solutions location"
              src="https://maps.google.com/maps?q=Chengicherla%2C%20Medipally%2C%20Telangana%20500092&z=14&output=embed"
              className="h-56 w-full border border-line grayscale invert-[0.9] contrast-[0.9]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="border border-line bg-coal-soft p-6 md:p-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-paper/50">Name</span>
                <input
                  type="text"
                  name="name"
                  required
                  maxLength={50}
                  placeholder="Your name"
                  className="w-full border border-line bg-coal px-4 py-3 text-paper placeholder:text-paper/30 focus:border-amber"
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-paper/50">Phone</span>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="10-digit number"
                  className="w-full border border-line bg-coal px-4 py-3 text-paper placeholder:text-paper/30 focus:border-amber"
                />
              </label>
            </div>
            <label className="mt-5 block">
              <span className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-paper/50">Email</span>
              <input
                type="email"
                name="email"
                required
                maxLength={100}
                placeholder="you@example.com"
                className="w-full border border-line bg-coal px-4 py-3 text-paper placeholder:text-paper/30 focus:border-amber"
              />
            </label>
            <label className="mt-5 block">
              <span className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-paper/50">What do you need?</span>
              <textarea
                name="message"
                required
                maxLength={1000}
                rows={5}
                placeholder="e.g. MCC panel for a 12-motor line, or automation for a 3BHK"
                className="w-full border border-line bg-coal px-4 py-3 text-paper placeholder:text-paper/30 focus:border-amber"
              />
            </label>
            <button
              type="submit"
              className="mt-6 w-full bg-amber px-6 py-4 font-display text-lg uppercase tracking-wide text-coal transition-colors hover:bg-amber-deep"
            >
              Send enquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
