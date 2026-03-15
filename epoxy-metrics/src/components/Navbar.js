export default function Navbar() {
  return (
    <nav className="w-full px-[5%] sticky top-0 z-50 bg-navy border-b border-gold/30 h-16 flex items-center justify-between font-brand">
      <div className="text-lg font-bold text-white font-serif tracking-wide">
        Epoxy<span className="text-gold">Metrics</span>
      </div>
      <div className="hidden md:flex gap-7 items-center">
        <a
          href="#pain"
          className="text-[11px] font-medium text-white/65 uppercase tracking-[0.05em] hover:text-goldLight transition-colors"
        >
          The Problem
        </a>
        <a
          href="#offer"
          className="text-[11px] font-medium text-white/65 uppercase tracking-[0.05em] hover:text-goldLight transition-colors"
        >
          The Solution
        </a>
        <a
          href="#contact"
          className="bg-gold text-navy text-[13px] font-bold px-5 py-2 rounded hover:bg-goldLight transition-colors"
        >
          Start Your Engine
        </a>
      </div>
    </nav>
  );
}
