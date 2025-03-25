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
    <section
      id="contact"
      className="bg-gradient-to-l from-[#F4A300] via-white to-[#fffdf5] py-20 px-4 md:px-20 text-black"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12 relative inline-block">
          <span className="relative z-10">Contact Us</span>
          <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-28 h-2 "></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="text-left space-y-6 text-lg" data-aos="fade-right">
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-3" />
              <span className="font-bold">Address:</span> 4-233, Chengicherla,
              Medipally, Telangana, 500092
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} className="mr-3" />
              <span className="font-bold">Phone:</span>{" "}
              <a
                href="tel:+917396507394"
                className="underline hover:text-white transition"
              >
                +91 7396507394
              </a>
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} className="mr-3" />
              <span className="font-bold">Email:</span>{" "}
              <a
                href="mailto:techhomehyd@gmail.com"
                className="underline hover:text-white transition"
              >
                techhomehyd@gmail.com
              </a>
            </p>

            <div className="pt-4">
              <a
                href="https://wa.me/917396507394"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-black text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-white hover:text-black transition-all duration-300"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-4"
            data-aos="fade-left"
          >
            <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 border-2 border-black rounded-md bg-white text-black placeholder-gray-600"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 border-2 border-black rounded-md bg-white text-black placeholder-gray-600"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              required
              className="w-full p-3 border-2 border-black rounded-md bg-white text-black placeholder-gray-600"
            />

            <textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              required
              className="w-full p-3 border-2 border-black rounded-md bg-white text-black placeholder-gray-600"
            />

            <button
              type="submit"
              className="bg-black text-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-black border-2 border-black transition-all shadow-md hover:shadow-xl"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
