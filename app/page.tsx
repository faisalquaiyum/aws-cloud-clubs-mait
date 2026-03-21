import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Modules from "@/components/Modules";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <Hero />
        <Modules />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
