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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo1.ico" />
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
