export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[rgba(11,14,17,0.85)] backdrop-blur-[20px] border-b border-[#252B36] py-4">
      <div className="max-w-[1140px] mx-auto px-6 flex items-center justify-between">

        <div className="font-body font-bold text-[1.1rem] tracking-[-0.02em] text-[#E8EAF0]">
          Epoxy<span className="text-[#F59E0B]">Metrics</span>
        </div>

        <div className="flex gap-8 items-center">
          <a
            href="#problem"
            className="hidden md:block text-[0.85rem] font-medium text-[#8B92A0] hover:text-[#E8EAF0] transition-colors"
          >
            The Problem
          </a>
          <a
            href="#solution"
            className="hidden md:block text-[0.85rem] font-medium text-[#8B92A0] hover:text-[#E8EAF0] transition-colors"
          >
            What&apos;s Included
          </a>
          <a
            href="#pricing"
            className="hidden md:block text-[0.85rem] font-medium text-[#8B92A0] hover:text-[#E8EAF0] transition-colors"
          >
            Pricing
          </a>
          <a
            href="#contact"
            className="bg-[#F59E0B] text-[#0B0E11] font-semibold text-[0.85rem] px-[22px] py-[10px] rounded-full hover:-translate-y-px hover:shadow-[0_4px_20px_rgba(245,158,11,0.25)] transition-all"
          >
            Get Started →
          </a>
        </div>

      </div>
    </nav>
  );
}
