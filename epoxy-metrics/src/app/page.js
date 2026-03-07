import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Obstacles from "@/components/Obstacles";
import Solution from "@/components/Solution";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col text-darkColor w-full">
      <Navbar />
      <Hero />
      <Obstacles />
      <Solution />
      <Contact />
      <Footer />
    </main>
  );
}