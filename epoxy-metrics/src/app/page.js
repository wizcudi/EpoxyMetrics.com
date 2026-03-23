import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GuaranteeStrip from "@/components/GuaranteeStrip";
import Obstacles from "@/components/Obstacles";
import Solution from "@/components/Solution";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full overflow-x-hidden bg-[#0B0E11]">
      <Navbar />
      <Hero />
      <GuaranteeStrip />
      <Obstacles />
      <Solution />
      <HowItWorks />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
