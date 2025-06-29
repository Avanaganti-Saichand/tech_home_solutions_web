import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Products from "../components/Products";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tech Home Electric Solutions</title>
        <meta
          name="description"
          content="Powering Control, Automation and Smart Living"
        />
        <meta
          name="keywords"
          content="Tech Home Electric Solutions, electrical panels, home automation, MCC, PCC"
        />
        <link rel="canonical" href="https://techhomeelectric.in/" />
        <meta property="og:title" content="Tech Home Electric Solutions" />
        <meta
          property="og:description"
          content="Powering Control, Automation and Smart Living"
        />
        <meta property="og:image" content="/logo.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo1.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Tech Home Electric Solutions",
              url: "https://techhomeelectric.in",
              logo: "https://techhomeelectric.in/logo.jpg",
              address: {
                "@type": "PostalAddress",
                streetAddress: "4-233, Chengicherla, Medipally",
                addressLocality: "Telangana",
                postalCode: "500092",
                addressCountry: "IN",
              },
              telephone: "+91 7396507394",
            }),
          }}
        />
      </Head>

      <main className="min-h-screen overflow-x-hidden">
        <Navbar />
        <Hero />
        <About />
        <Products />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
