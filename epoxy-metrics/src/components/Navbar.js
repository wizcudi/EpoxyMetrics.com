import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-light w-full px-6 py-3 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl flex justify-between mx-auto items-center">
        {/* Logo scales slightly on mobile vs desktop */}
        <div className="font-bold text-2xl sm:text-3xl tracking-tighter text-primary-dark">
          Epoxy Metrics
        </div>
        <Link 
          href="#contact" 
          className="flex text-center bg-primary-dark text-light px-5 py-2 rounded-lg font-medium hover:bg-primary-hover transition text-sm sm:text-base"
        >
          Start Your Build
        </Link>
      </div>
    </nav>
  );
}