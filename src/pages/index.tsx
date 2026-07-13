import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrustBar from "../components/TrustBar";
import Services from "../components/Services";
import Process from "../components/Process";
import WhyUs from "../components/WhyUs";
import Faq, { faqs } from "../components/Faq";
import StickyCall from "../components/StickyCall";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const TITLE =
  "Electrical Panel Manufacturers in Hyderabad | PCC, MCC, Home Automation — Tech Home Electric Solutions";
const DESCRIPTION =
  "Custom PCC, MCC & distribution panels, gensets, home automation and BMS in Hyderabad, Telangana. Design, manufacture & installation under one roof. Call +91 73965 07394 for a free consultation.";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Electrician",
      "@id": "https://techhomeelectric.in/#business",
      name: "Tech Home Electric Solutions",
      description: DESCRIPTION,
      url: "https://techhomeelectric.in",
      logo: "https://techhomeelectric.in/logo.jpg",
      image: "https://techhomeelectric.in/logo.jpg",
      telephone: "+91 7396507394",
      email: "techhomehyd@gmail.com",
      priceRange: "₹₹",
      address: {
        "@type": "PostalAddress",
        streetAddress: "4-233, Chengicherla, Medipally",
        addressLocality: "Hyderabad",
        addressRegion: "Telangana",
        postalCode: "500092",
        addressCountry: "IN",
      },
      geo: { "@type": "GeoCoordinates", latitude: 17.4432, longitude: 78.6222 },
      areaServed: [
        { "@type": "City", name: "Hyderabad" },
        { "@type": "City", name: "Secunderabad" },
        { "@type": "State", name: "Telangana" },
      ],
      sameAs: [
        "https://www.instagram.com/techhomeelectric",
        "https://www.facebook.com/share/14q6z5N8mb/",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Electrical Services & Products",
        itemListElement: [
          "Distribution Panels",
          "Motor Control Centers (MCC)",
          "Power Control Centers (PCC)",
          "Gensets",
          "Home Automation",
          "Building Management Systems (BMS)",
        ].map((name) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://techhomeelectric.in/#website",
      url: "https://techhomeelectric.in",
      name: "Tech Home Electric Solutions",
      publisher: { "@id": "https://techhomeelectric.in/#business" },
    },
    {
      "@type": "FAQPage",
      "@id": "https://techhomeelectric.in/#faq",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta
          name="keywords"
          content="electrical panel manufacturers Hyderabad, PCC panel, MCC panel, distribution panel, home automation Hyderabad, building management system, genset installation, Tech Home Electric Solutions"
        />
        <link rel="canonical" href="https://techhomeelectric.in/" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo1.ico" />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content="https://techhomeelectric.in/" />
        <meta property="og:image" content="https://techhomeelectric.in/logo.jpg" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="Tech Home Electric Solutions" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content="https://techhomeelectric.in/logo.jpg" />
        {/* Geo */}
        <meta name="geo.region" content="IN-TG" />
        <meta name="geo.placename" content="Hyderabad" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>

      <main className="min-h-screen overflow-x-hidden">
        <Navbar />
        <Hero />
        <TrustBar />
        <Services />
        <Process />
        <WhyUs />
        <Faq />
        <Contact />
        <Footer />
        <StickyCall />
      </main>
    </>
  );
}
