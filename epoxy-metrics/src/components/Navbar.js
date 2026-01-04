import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full max-w-6xl mx-auto p-6 flex justify-between items-center sticky top-0 bg-white/80 backdrop-blur-md z-50">
      <div className="font-bold text-2xl tracking-tighter text-blue-900">
        Epoxy Metrics
      </div>
      <Link 
        href="#contact" 
        className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
      >
        Book a Call
      </Link>
    </nav>
  );
}