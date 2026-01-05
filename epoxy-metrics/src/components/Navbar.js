import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-light w-full max-w-6xl mx-auto p-6 flex justify-between items-center sticky top-0  z-50">
      <div className="font-bold text-2xl tracking-tighter text-primary-dark">
        Epoxy Metrics
      </div>
      <Link 
        href="#contact" 
        className=" bg-primary text-light px-5 py-2 rounded-lg font-medium hover:bg-primary-hover transition"
      >
        Book a Call
      </Link>
    </nav>
  );
}