import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white text-gray-900 font-sans">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Contact />
      <Footer />
    </main>
  );
}